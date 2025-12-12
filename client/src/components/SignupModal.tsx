import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CustomModal } from '@/components/ui/custom-modal';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { insertTenantSchema, type InsertTenant, type PublicTenant } from '@shared/schema';
import { apiRequest } from '@/lib/queryClient';

interface SignupModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function SignupModal({ open, onOpenChange }: SignupModalProps) {
  const { toast } = useToast();
  const [createdTenant, setCreatedTenant] = useState<PublicTenant | null>(null);
  // Scroll to top when modal opens or when success state is shown
  useEffect(() => {
    if (open || createdTenant) {
      // Find the modal content element and scroll to top
      const modalContent = document.querySelector('[role="dialog"]');
      if (modalContent) {
        modalContent.scrollTop = 0;
      }
    }
  }, [open, createdTenant]);

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
      const response = await apiRequest('POST', '/api/tenants', data);
      return await response.json() as PublicTenant;
    },
    onSuccess: (data) => {
      setCreatedTenant(data);
      toast({
        title: 'Marketplace Created!',
        description: 'Your 14-day free trial has started.',
      });
    },
    onError: (error: Error) => {
      // Try to parse field-specific errors from the error message (format: "400: {json}")
      const match = error.message.match(/^\d+:\s*(.+)$/);
      if (match) {
        try {
          const errorData = JSON.parse(match[1]);
          // Handle array of errors (new format)
          if (errorData?.errors && Array.isArray(errorData.errors)) {
            errorData.errors.forEach((err: { field: string; message: string }) => {
              form.setError(err.field as 'marketplaceName' | 'ownerEmail' | 'password', {
                type: 'server',
                message: err.message,
              });
            });
            return;
          }
          // Handle single error (legacy format)
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
    form.reset();
    onOpenChange(false);
  };

  return (
    <CustomModal 
      open={open} 
      onOpenChange={handleClose}
      className="w-full max-w-[720px] max-h-[90vh] overflow-y-auto p-6 shadow-xl"
      preventOutsideClick={true}
    >
      <div data-testid="dialog-signup">
        {createdTenant ? (
          // Success State - Premium redesign
          <div className="py-2">
            {/* Header - Compact and centered */}
            <div className="text-center mb-6">
              <div className="mx-auto mb-4 w-14 h-14 bg-green-50 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-2xl font-bold text-foreground tracking-tight mb-1.5">Welcome to Kaartx Kloud!</h2>
              <p className="text-sm text-muted-foreground">
                Your marketplace is ready to launch. Start building your multi-vendor platform today.
              </p>
            </div>

            {/* Details Grid - Compact cards with subtle borders */}
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
                <p className="text-xs text-muted-foreground mb-0.5">Trial Period Ends</p>
                <p className="text-sm font-semibold text-foreground">
                  {new Date(createdTenant.trialEndsAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>

            {/* Next Steps - Light and minimal */}
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

            {/* Buttons */}
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
        ) : (
          // Signup Form - Premium redesign matching success modal
          <div className="py-2">
            {/* Header - Matching success modal style */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-foreground tracking-tight mb-1.5">Create Your Marketplace</h2>
              <p className="text-sm text-muted-foreground">
                Start your 14-day free trial. No credit card required.
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
                <div className="pt-2 mb-2">
                  <h3 className="text-sm font-semibold text-foreground mb-3">What's included</h3>
                  <ul className="space-y-2.5">
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
                  </ul>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={createTenantMutation.isPending}
                  data-testid="button-create-marketplace"
                >
                  {createTenantMutation.isPending ? 'Creating Your Marketplace...' : 'Create My Marketplace'}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  By creating an account, you agree to our{' '}
                  <a href="#" className="text-foreground hover:underline">Terms of Service</a>
                  {' '}and{' '}
                  <a href="#" className="text-foreground hover:underline">Privacy Policy</a>
                </p>
              </form>
            </Form>
          </div>
        )}
      </div>
    </CustomModal>
  );
}
