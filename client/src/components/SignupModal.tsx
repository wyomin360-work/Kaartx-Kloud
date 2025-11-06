import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { CheckCircle2, Circle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CustomModal, CustomModalHeader, CustomModalTitle, CustomModalDescription } from '@/components/ui/custom-modal';
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
      className="max-w-2xl max-h-[90vh] overflow-y-auto p-6"
      preventOutsideClick={true}
    >
      <div data-testid="dialog-signup">
        {createdTenant ? (
          // Success State
          <div className="py-6">
            <div className="text-center mb-8">
              <div className="mx-auto mb-6 w-20 h-20 bg-green-50 dark:bg-green-950 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-400" />
              </div>
              <CustomModalTitle className="text-3xl mb-3">Welcome to Kaartx Cloud!</CustomModalTitle>
              <CustomModalDescription className="text-base">
                Your marketplace is ready to launch. Start building your multi-vendor platform today.
              </CustomModalDescription>
            </div>

            <div className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-muted/30 rounded-lg p-5">
                  <p className="text-sm text-muted-foreground mb-1">Marketplace Name</p>
                  <p className="text-lg font-semibold text-foreground">{createdTenant.marketplaceName}</p>
                </div>
                <div className="bg-muted/30 rounded-lg p-5">
                  <p className="text-sm text-muted-foreground mb-1">Your Subdomain</p>
                  <p className="text-lg font-semibold text-primary break-all">{createdTenant.subdomain}.kaartx.com</p>
                </div>
                <div className="bg-muted/30 rounded-lg p-5">
                  <p className="text-sm text-muted-foreground mb-1">Plan</p>
                  <p className="text-lg font-semibold text-foreground">{createdTenant.plan}</p>
                </div>
                <div className="bg-muted/30 rounded-lg p-5">
                  <p className="text-sm text-muted-foreground mb-1">Trial Period Ends</p>
                  <p className="text-lg font-semibold text-foreground">
                    {new Date(createdTenant.trialEndsAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              </div>

              <div className="bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-4 text-lg">Next Steps</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Check Your Email</p>
                      <p className="text-sm text-muted-foreground">We've sent login credentials and setup instructions to {createdTenant.ownerEmail}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Access Your Dashboard</p>
                      <p className="text-sm text-muted-foreground">Log in at {createdTenant.subdomain}.kaartx.com to configure your marketplace</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Start Onboarding Sellers</p>
                      <p className="text-sm text-muted-foreground">Invite vendors to join your marketplace and begin listing products</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={handleClose}
                  variant="outline"
                  className="flex-1"
                  size="lg"
                  data-testid="button-close-success"
                >
                  Close
                </Button>
                <Button
                  className="flex-1"
                  size="lg"
                  data-testid="button-go-dashboard"
                >
                  Go to Dashboard
                </Button>
              </div>
            </div>
          </div>
        ) : (
          // Signup Form
          <>
            <CustomModalHeader>
              <CustomModalTitle className="text-2xl">Create Your Marketplace</CustomModalTitle>
              <CustomModalDescription>
                Start your 14-day free trial. No credit card required.
              </CustomModalDescription>
            </CustomModalHeader>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pt-4">
                <FormField
                  control={form.control}
                  name="marketplaceName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Marketplace Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g., Shine Boutique"
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
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="you@company.com"
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
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Min. 8 characters"
                          {...field}
                          data-testid="input-password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="bg-muted/30 rounded-lg p-5 space-y-3">
                  <h4 className="font-semibold text-foreground">What's included:</h4>
                  <ul className="space-y-2.5 text-sm text-foreground">
                    <li className="flex items-start gap-3">
                      <div className="relative flex-shrink-0 mt-0.5">
                        <Circle className="w-5 h-5 text-muted-foreground" />
                        <CheckCircle2 className="w-3.5 h-3.5 text-foreground absolute top-[3px] left-[3px]" />
                      </div>
                      <span>14-day free trial on Starter plan</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="relative flex-shrink-0 mt-0.5">
                        <Circle className="w-5 h-5 text-muted-foreground" />
                        <CheckCircle2 className="w-3.5 h-3.5 text-foreground absolute top-[3px] left-[3px]" />
                      </div>
                      <span>Custom subdomain (yourname.kaartx.com)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="relative flex-shrink-0 mt-0.5">
                        <Circle className="w-5 h-5 text-muted-foreground" />
                        <CheckCircle2 className="w-3.5 h-3.5 text-foreground absolute top-[3px] left-[3px]" />
                      </div>
                      <span>Up to 10 sellers and unlimited products</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="relative flex-shrink-0 mt-0.5">
                        <Circle className="w-5 h-5 text-muted-foreground" />
                        <CheckCircle2 className="w-3.5 h-3.5 text-foreground absolute top-[3px] left-[3px]" />
                      </div>
                      <span>TAP Payments & Asyad Express integration</span>
                    </li>
                  </ul>
                </div>

                <Button
                  type="submit"
                  className="w-full h-11"
                  size="lg"
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
          </>
        )}
      </div>
    </CustomModal>
  );
}
