import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { ArrowLeft, Rocket, CheckCircle2, Circle } from 'lucide-react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { insertTenantSchema, type InsertTenant, type PublicTenant } from '@shared/schema';
import { apiRequest } from '@/lib/queryClient';
import logoImage from '@assets/Logo_A_1760799119283.png';

export default function CreateMarketplace() {
  const [, setLocation] = useLocation();
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

  if (createdTenant) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
        <Card className="max-w-3xl w-full">
          <CardHeader className="text-center pb-8">
            <div className="mx-auto mb-6 w-20 h-20 bg-green-50 dark:bg-green-950 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-400" />
            </div>
            <CardTitle className="text-3xl sm:text-4xl mb-3">Welcome to Kaartx Cloud!</CardTitle>
            <CardDescription className="text-base">
              Your marketplace is ready to launch. Start building your multi-vendor platform today.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
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

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                onClick={() => setLocation('/')}
                variant="outline"
                className="flex-1"
                size="lg"
                data-testid="button-back-home"
              >
                Back to Home
              </Button>
              <Button
                className="flex-1"
                size="lg"
                data-testid="button-go-dashboard"
              >
                Go to Dashboard
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <button className="hover-elevate p-2 rounded-md transition-all" data-testid="link-logo">
                <img src={logoImage} alt="Kaartx" className="h-8 w-auto" />
              </button>
            </Link>
            <Link href="/">
              <Button variant="ghost" data-testid="button-back">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-4 py-12 sm:py-20">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-muted rounded-full mb-6">
            <Rocket className="w-9 h-9 text-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-3">
            Create Your Marketplace
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Start your 14-day free trial. No credit card required.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Get Started in Minutes</CardTitle>
            <CardDescription>
              Fill in your details below to launch your multi-vendor marketplace
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                      <span>TAP Payments & Asyad Shipping integration</span>
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

                <p className="text-xs text-center text-muted-foreground mt-4">
                  By creating an account, you agree to our{' '}
                  <a href="#" className="text-foreground hover:underline">Terms of Service</a>
                  {' '}and{' '}
                  <a href="#" className="text-foreground hover:underline">Privacy Policy</a>
                </p>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
