import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { CheckCircle2, Loader2 } from 'lucide-react';
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

type ModalState = 'form' | 'success';

interface TenantResponse extends PublicTenant {}

const defaultPlan: PlanSelection = {
  planId: 'starter-monthly',
  planName: 'Starter',
  billingCycle: 'monthly',
  price: 35,
  currency: 'OMR',
};

/**
 * MODAL_CONTAINER_CLASSES - Single source of truth for ALL modal container styling
 * 
 * Used by: SignupModal (form + success states), and any future modals
 * 
 * Standardized properties:
 * - max-width: 720px (fixed)
 * - max-height: 90vh (fixed)
 * - padding: p-6 (1.5rem / 24px)
 * - overflow: overflow-y-auto for content scrolling
 * - shadow: shadow-xl for elevation
 * - border-radius: rounded-lg (inherited from CustomModal base)
 * 
 * DO NOT create custom modal wrappers - reuse this constant for consistency.
 */
export const MODAL_CONTAINER_CLASSES = "w-full max-w-[720px] max-h-[90vh] overflow-y-auto p-6 shadow-xl";

export default function SignupModal({ open, onOpenChange, selectedPlan }: SignupModalProps) {
  const { toast } = useToast();
  const [createdTenant, setCreatedTenant] = useState<PublicTenant | null>(null);
  const [modalState, setModalState] = useState<ModalState>('form');
  
  // Use provided plan or default to Starter monthly
  const plan = selectedPlan || defaultPlan;
  const isGrowthPlan = plan.planName === 'Growth';

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
      setCreatedTenant(null);
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
      setCreatedTenant(data);
      setModalState('success');
      toast({
        title: 'Request Submitted!',
        description: `Your ${plan.planName} marketplace request has been received.`,
      });
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

  const onSubmit = (data: InsertTenant) => {
    createTenantMutation.mutate(data);
  };

  const handleClose = () => {
    setCreatedTenant(null);
    setModalState('form');
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
        {/* Success State - Request Received */}
        {modalState === 'success' && createdTenant && (
          <div className="py-2">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-foreground tracking-tight mb-1.5">Request received</h2>
              <p className="text-sm text-muted-foreground">
                Your {createdTenant.plan} marketplace request has been submitted. Our team will review and contact you shortly to proceed with activation.
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
                <p className="text-xs text-muted-foreground mb-0.5">Email</p>
                <p className="text-sm font-semibold text-foreground break-all">{createdTenant.ownerEmail}</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-semibold text-foreground mb-3">What happens next</h3>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">We'll review your request</p>
                    <p className="text-xs text-muted-foreground">Our team will review your marketplace setup requirements</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">You'll receive a confirmation email</p>
                    <p className="text-xs text-muted-foreground">We'll send details to {createdTenant.ownerEmail} once approved</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Your marketplace will be activated</p>
                    <p className="text-xs text-muted-foreground">You can then start configuring and onboarding sellers</p>
                  </div>
                </li>
              </ul>
            </div>

            <p className="text-xs text-center text-muted-foreground mb-4">
              Activation timelines vary based on configuration.
            </p>

            <Button
              onClick={handleClose}
              className="w-full"
              data-testid="button-close-success"
            >
              Close
            </Button>
          </div>
        )}

        {/* Form State */}
        {modalState === 'form' && (
          <div className="py-2">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-foreground tracking-tight mb-1.5">Create Your Marketplace</h2>
              <p className="text-sm text-muted-foreground">
                {isGrowthPlan 
                  ? "Set up your Growth plan marketplace. We'll review requirements and proceed with activation."
                  : "Set up your Starter plan marketplace. We'll review and activate it after confirmation."
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

                {/* Key highlights - Light and minimal */}
                <div className="pt-2 mb-6">
                  <h3 className="text-sm font-semibold text-foreground mb-3">
                    Key highlights
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
                          <span className="text-sm text-foreground">Custom subdomain (yourname.kloud.kaartx.com)</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground">Up to 100 sellers</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground">Up to 1,000 orders per month</span>
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
                    ? 'Submitting...' 
                    : 'Submit Request'
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
