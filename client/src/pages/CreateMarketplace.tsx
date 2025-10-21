import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { ArrowLeft, Rocket, CheckCircle2 } from 'lucide-react';
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
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <Card className="max-w-2xl w-full">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-3xl">Welcome to Kaartx Cloud!</CardTitle>
            <CardDescription className="text-base mt-2">
              Your marketplace has been created successfully
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6 space-y-3">
              <div>
                <p className="text-sm text-muted-foreground">Marketplace Name</p>
                <p className="text-lg font-semibold">{createdTenant.marketplaceName}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Subdomain</p>
                <p className="text-lg font-semibold text-primary">{createdTenant.subdomain}.kaartx.com</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Plan</p>
                <p className="text-lg font-semibold">{createdTenant.plan} (14-day trial)</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Trial Ends</p>
                <p className="text-lg font-semibold">
                  {new Date(createdTenant.trialEndsAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <h3 className="font-semibold text-foreground mb-2">What's Next?</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Check your email for login credentials and setup instructions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Access your dashboard at {createdTenant.subdomain}.kaartx.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Start adding sellers and products to your marketplace</span>
                </li>
              </ul>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={() => setLocation('/')}
                variant="outline"
                className="flex-1"
                data-testid="button-back-home"
              >
                Back to Home
              </Button>
              <Button
                className="flex-1"
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
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Rocket className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
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

                <div className="bg-muted/50 border border-border rounded-lg p-4 space-y-2">
                  <h4 className="font-semibold text-sm text-foreground">What's included:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      14-day free trial on Starter plan
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Custom subdomain (yourname.kaartx.com)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Up to 10 sellers and unlimited products
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      TAP Payments & Asyad Shipping integration
                    </li>
                  </ul>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={createTenantMutation.isPending}
                  data-testid="button-create-marketplace"
                >
                  {createTenantMutation.isPending ? 'Creating...' : 'Create Marketplace'}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  By creating an account, you agree to our Terms of Service and Privacy Policy
                </p>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
