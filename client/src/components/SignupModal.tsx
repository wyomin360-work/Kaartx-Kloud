import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CustomModal } from '@/components/ui/custom-modal';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { insertTenantSchema, type InsertTenant, type PublicTenant } from '@shared/schema';
import { apiRequest } from '@/lib/queryClient';

export interface PlanSelection {
  planId: string;
  planName: 'Starter' | 'Growth';
  billingCycle: 'monthly' | 'yearly';
  price: number;
  currency: string;
}

interface SignupModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedPlan?: PlanSelection;
}

type ModalState = 'form' | 'payment' | 'payment-resume' | 'success' | 'payment-error' | 'plan-error';

interface TenantResponse extends PublicTenant {
  resumePayment?: boolean;
}

const defaultPlan: PlanSelection = {
  planId: 'starter-monthly',
  planName: 'Starter',
  billingCycle: 'monthly',
  price: 35,
  currency: 'OMR',
};

// Single source of truth for modal container styling
// Used by all modal states: form, payment, resume-payment, success, payment-error
const MODAL_CONTAINER_CLASSES = "w-full max-w-[720px] max-h-[90vh] overflow-y-auto p-6 shadow-xl";

export default function SignupModal({ open, onOpenChange, selectedPlan }: SignupModalProps) {
  const { toast } = useToast();
  const [createdTenant, setCreatedTenant] = useState<PublicTenant | null>(null);
  const [modalState, setModalState] = useState<ModalState>('form');
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [isResumingPayment, setIsResumingPayment] = useState(false);
  
  // Card input states
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  
  // Format card number with spaces (XXXX XXXX XXXX XXXX)
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 16);
    const formatted = value.replace(/(\d{4})(?=\d)/g, '$1 ');
    setCardNumber(formatted);
  };
  
  // Format expiry as MM / YY with validation
  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '').slice(0, 4);
    
    // Validate month (01-12)
    if (value.length >= 2) {
      let month = parseInt(value.slice(0, 2), 10);
      if (month > 12) month = 12;
      if (month < 1 && value.slice(0, 2) !== '0' && value.slice(0, 2) !== '00') month = 1;
      value = month.toString().padStart(2, '0') + value.slice(2);
    }
    
    // Format with " / " separator
    if (value.length > 2) {
      setCardExpiry(`${value.slice(0, 2)} / ${value.slice(2)}`);
    } else {
      setCardExpiry(value);
    }
  };
  
  // CVV - numbers only, max 4 digits
  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 4);
    setCardCvv(value);
  };
  
  // Use provided plan or default to Starter monthly
  const plan = selectedPlan || defaultPlan;
  const isGrowthPlan = plan.planName === 'Growth';
  const isYearly = plan.billingCycle === 'yearly';
  
  // Dynamic pricing labels
  const priceLabel = `${plan.currency} ${plan.price} / ${isYearly ? 'year' : 'month'}`;
  const billingText = isYearly ? 'Billed yearly via TAP Payments' : 'Billed monthly via TAP Payments';
  const renewalText = isYearly ? 'Renews yearly. Cancel anytime to stop renewal.' : 'Renews monthly. Cancel anytime to stop renewal.';
  const billingPeriodDisplay = isYearly ? 'Yearly' : 'Monthly';

  // Scroll to top when modal opens or when state changes
  useEffect(() => {
    if (open || modalState !== 'form') {
      const modalContent = document.querySelector('[role="dialog"]');
      if (modalContent) {
        modalContent.scrollTop = 0;
      }
    }
  }, [open, modalState]);

  // Reset state when modal closes or plan changes
  useEffect(() => {
    if (!open) {
      setModalState('form');
      setPaymentError(null);
      setCreatedTenant(null);
      setCardNumber('');
      setCardExpiry('');
      setCardCvv('');
    }
  }, [open]);

  const form = useForm<InsertTenant>({
    resolver: zodResolver(insertTenantSchema),
    defaultValues: {
      marketplaceName: '',
      ownerEmail: '',
      password: '',
    },
  });

  const createTenantMutation = useMutation({
    mutationFn: async (data: InsertTenant) => {
      const payload = { ...data, plan: plan.planName, billingCycle: plan.billingCycle };
      const response = await apiRequest('POST', '/api/tenants', payload);
      return await response.json() as TenantResponse;
    },
    onSuccess: (data) => {
      const { resumePayment, ...tenantData } = data;
      setCreatedTenant(tenantData);
      
      if (isGrowthPlan) {
        if (resumePayment) {
          // Existing pending signup found - show resume payment message
          setIsResumingPayment(true);
          setModalState('payment-resume');
        } else {
          // New signup - go to payment step
          setIsResumingPayment(false);
          setModalState('payment');
        }
      } else {
        // For Starter plan, show success immediately
        setModalState('success');
        toast({
          title: 'Marketplace Created!',
          description: 'Your 14-day free trial has started.',
        });
      }
    },
    onError: (error: Error) => {
      const match = error.message.match(/^\d+:\s*(.+)$/);
      if (match) {
        try {
          const errorData = JSON.parse(match[1]);
          if (errorData?.errors && Array.isArray(errorData.errors)) {
            errorData.errors.forEach((err: { field: string; message: string }) => {
              form.setError(err.field as 'marketplaceName' | 'ownerEmail' | 'password', {
                type: 'server',
                message: err.message,
              });
            });
            return;
          }
          if (errorData?.field && errorData?.message) {
            form.setError(errorData.field as 'marketplaceName' | 'ownerEmail' | 'password', {
              type: 'server',
              message: errorData.message,
            });
            return;
          }
        } catch {
          // Not valid JSON, fall through to toast
        }
      }
      toast({
        title: 'Error',
        description: error.message || 'Failed to create marketplace',
        variant: 'destructive',
      });
    },
  });

  const handlePayment = async () => {
    setIsProcessingPayment(true);
    setPaymentError(null);
    
    try {
      // Simulate TAP Payments checkout - in production this would redirect to TAP
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Update tenant plan to Growth active
      if (createdTenant) {
        await apiRequest('PATCH', `/api/tenants/${createdTenant.id}/activate-growth`, {});
      }
      setModalState('success');
      toast({
        title: 'Payment Successful!',
        description: 'Your Growth plan is now active.',
      });
    } catch (error) {
      setPaymentError(error instanceof Error ? error.message : 'Payment failed. Please try again.');
      setModalState('payment-error');
    } finally {
      setIsProcessingPayment(false);
    }
  };

  const handleRetryPayment = () => {
    setPaymentError(null);
    setModalState('payment');
  };

  const onSubmit = (data: InsertTenant) => {
    createTenantMutation.mutate(data);
  };

  const handleClose = () => {
    setCreatedTenant(null);
    setModalState('form');
    setPaymentError(null);
    form.reset();
    onOpenChange(false);
  };

  return (
    <CustomModal 
      open={open} 
      onOpenChange={handleClose}
      className={MODAL_CONTAINER_CLASSES}
      preventOutsideClick={true}
    >
      <div data-testid="dialog-signup">
        {/* Success State */}
        {modalState === 'success' && createdTenant && (
          <div className="py-2">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-foreground tracking-tight mb-1.5">Welcome to Kaartx Kloud!</h2>
              <p className="text-sm text-muted-foreground">
                Your marketplace is ready to launch. Start building your multi-vendor platform today.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="border border-border/60 rounded-md px-4 py-3">
                <p className="text-xs text-muted-foreground mb-0.5">Marketplace Name</p>
                <p className="text-sm font-semibold text-foreground">{createdTenant.marketplaceName}</p>
              </div>
              <div className="border border-border/60 rounded-md px-4 py-3">
                <p className="text-xs text-muted-foreground mb-0.5">Your Subdomain</p>
                <p className="text-sm font-semibold text-primary break-all">{createdTenant.subdomain}.kloud.kaartx.com</p>
              </div>
              <div className="border border-border/60 rounded-md px-4 py-3">
                <p className="text-xs text-muted-foreground mb-0.5">Plan</p>
                <p className="text-sm font-semibold text-foreground">{createdTenant.plan}</p>
              </div>
              <div className="border border-border/60 rounded-md px-4 py-3">
                <p className="text-xs text-muted-foreground mb-0.5">{isGrowthPlan ? 'Billing Period' : 'Trial Period Ends'}</p>
                <p className="text-sm font-semibold text-foreground">
                  {isGrowthPlan ? billingPeriodDisplay : new Date(createdTenant.trialEndsAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-semibold text-foreground mb-3">Next Steps</h3>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Check Your Email</p>
                    <p className="text-xs text-muted-foreground">We've sent login credentials and setup instructions to {createdTenant.ownerEmail}</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Access Your Dashboard</p>
                    <p className="text-xs text-muted-foreground">Log in at {createdTenant.subdomain}.kloud.kaartx.com to configure your marketplace</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Start Onboarding Sellers</p>
                    <p className="text-xs text-muted-foreground">Invite vendors to join your marketplace and begin listing products</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="flex gap-3 pt-2">
              <Button
                onClick={handleClose}
                variant="outline"
                className="flex-1"
                data-testid="button-close-success"
              >
                Close
              </Button>
              <Button
                className="flex-1"
                data-testid="button-go-dashboard"
              >
                Go to Dashboard
              </Button>
            </div>
          </div>
        )}

        {/* Resume Payment State - for users resuming pending checkout */}
        {modalState === 'payment-resume' && createdTenant && (
          <div className="py-2">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-foreground tracking-tight mb-1.5">Resume Your Payment</h2>
              <p className="text-sm text-muted-foreground">
                Looks like you started checkout earlier. Continue payment to activate your Growth plan.
              </p>
            </div>

            <div className="border border-border/60 rounded-md p-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-muted-foreground">Marketplace</span>
                <span className="text-sm font-medium text-foreground">{createdTenant.marketplaceName}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-muted-foreground">Subdomain</span>
                <span className="text-sm font-medium text-primary">{createdTenant.subdomain}.kloud.kaartx.com</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">Plan</span>
                <span className="text-sm font-semibold text-foreground">{plan.planName} — {priceLabel}</span>
              </div>
            </div>

            <Button
              onClick={() => setModalState('payment')}
              className="w-full"
              data-testid="button-resume-payment"
            >
              Resume Payment
            </Button>

            <p className="text-xs text-center text-muted-foreground mt-4">
              Your marketplace is reserved. Complete payment to activate.
            </p>
          </div>
        )}

        {/* Payment State */}
        {modalState === 'payment' && createdTenant && (
          <div className="py-2">
            <div className="text-center mb-6 pt-2">
              <h2 className="text-2xl font-bold text-foreground tracking-tight mb-1.5">
                Complete Your Payment
              </h2>
              <p className="text-sm text-muted-foreground">
                Activate your Growth plan for {createdTenant.marketplaceName}
              </p>
            </div>

            <div className="border border-border/60 rounded-md p-4 mb-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium text-foreground">{plan.planName} Plan</span>
                <span className="text-sm font-semibold text-foreground">{priceLabel}</span>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">{billingText}</p>
                <p className="text-xs text-muted-foreground/70">{renewalText}</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Card Number</label>
                <Input 
                  placeholder="1234 5678 9012 3456"
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                  className="h-10 border-border/60 rounded-md font-mono tracking-wider"
                  data-testid="input-card-number"
                  inputMode="numeric"
                  autoComplete="cc-number"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Expiry Date</label>
                  <Input 
                    placeholder="MM / YY"
                    value={cardExpiry}
                    onChange={handleExpiryChange}
                    className="h-10 border-border/60 rounded-md font-mono tracking-wider"
                    data-testid="input-card-expiry"
                    inputMode="numeric"
                    autoComplete="cc-exp"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Security Code</label>
                  <Input 
                    placeholder="CVV"
                    value={cardCvv}
                    onChange={handleCvvChange}
                    className="h-10 border-border/60 rounded-md font-mono tracking-wider"
                    data-testid="input-card-cvv"
                    inputMode="numeric"
                    autoComplete="cc-csc"
                    type="password"
                  />
                </div>
              </div>
            </div>

            <Button
              onClick={handlePayment}
              className="w-full"
              disabled={isProcessingPayment}
              data-testid="button-pay-now"
            >
              {isProcessingPayment ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                `Pay ${plan.currency} ${plan.price}`
              )}
            </Button>

            <p className="text-xs text-center text-muted-foreground mt-4">
              Secured by TAP Payments. Your card details are encrypted.
            </p>
          </div>
        )}

        {/* Payment Error State */}
        {modalState === 'payment-error' && (
          <div className="py-2">
            <div className="text-center mb-6">
              <div className="mx-auto mb-4 w-14 h-14 bg-red-50 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                <AlertCircle className="w-7 h-7 text-red-600 dark:text-red-400" />
              </div>
              <h2 className="text-2xl font-bold text-foreground tracking-tight mb-1.5">Payment Failed</h2>
              <p className="text-sm text-muted-foreground">
                {paymentError || 'There was an issue processing your payment.'}
              </p>
            </div>

            <div className="flex gap-3 pt-2">
              <Button
                onClick={handleRetryPayment}
                className="flex-1"
                data-testid="button-retry-payment"
              >
                Try Again
              </Button>
            </div>
            
            <p className="text-xs text-center text-muted-foreground mt-4">
              Your marketplace has been created. You can retry the payment or{' '}
              <button 
                onClick={handleClose} 
                className="text-foreground hover:underline"
                data-testid="button-close-payment-error"
              >
                close and try later
              </button>
            </p>
          </div>
        )}

        {/* Form State */}
        {modalState === 'form' && (
          <div className="py-2">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-foreground tracking-tight mb-1.5">Create Your Marketplace</h2>
              <p className="text-sm text-muted-foreground">
                {isGrowthPlan 
                  ? 'Set up your Growth plan marketplace. Payment on next step.'
                  : 'Start your 14-day free trial. No credit card required.'
                }
              </p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="marketplaceName"
                  render={({ field }) => (
                    <FormItem className="space-y-1.5">
                      <FormLabel className="text-xs font-medium text-muted-foreground">Marketplace Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g., Shine Boutique"
                          className="h-10 border-border/60 rounded-md"
                          {...field}
                          data-testid="input-marketplace-name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="ownerEmail"
                  render={({ field }) => (
                    <FormItem className="space-y-1.5">
                      <FormLabel className="text-xs font-medium text-muted-foreground">Email Address</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="you@company.com"
                          className="h-10 border-border/60 rounded-md"
                          {...field}
                          data-testid="input-owner-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="space-y-1.5">
                      <FormLabel className="text-xs font-medium text-muted-foreground">Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Min. 8 characters"
                          className="h-10 border-border/60 rounded-md"
                          {...field}
                          data-testid="input-password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* What's included - Light and minimal, matching Next Steps */}
                <div className="pt-2 mb-6">
                  <h3 className="text-sm font-semibold text-foreground mb-3">
                    {isGrowthPlan ? 'Growth plan highlights' : "What's included"}
                  </h3>
                  <ul className="space-y-2.5">
                    {isGrowthPlan ? (
                      <>
                        <li className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground">Up to 3 marketplaces</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground">Up to 500 sellers and 10,000 orders/month</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground">Advanced analytics & priority support</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground">Configurable payout cycles</span>
                        </li>
                      </>
                    ) : (
                      <>
                        <li className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground">14-day free trial on Starter plan</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground">Custom subdomain (yourname.kloud.kaartx.com)</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground">Up to 10 sellers and unlimited products</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground">TAP Payments & Asyad Express integration</span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={createTenantMutation.isPending}
                  data-testid="button-create-marketplace"
                >
                  {createTenantMutation.isPending 
                    ? 'Creating Your Marketplace...' 
                    : isGrowthPlan 
                      ? 'Continue to Payment'
                      : 'Create My Marketplace'
                  }
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  By creating an account, you agree to our{' '}
                  <a href="/terms" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">Terms of Service</a>
                  {' '}and{' '}
                  <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">Privacy Policy</a>
                </p>
              </form>
            </Form>
          </div>
        )}
      </div>
    </CustomModal>
  );
}
