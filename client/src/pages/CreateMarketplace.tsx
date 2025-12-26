import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { CheckCircle2, Circle } from 'lucide-react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { insertMarketplaceRequestSchema, type InsertMarketplaceRequest, type PublicMarketplaceRequest } from '@shared/schema';
import { apiRequest } from '@/lib/queryClient';
import Navbar from '@/components/Navbar';

export default function CreateMarketplace() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [createdRequest, setCreatedRequest] = useState<PublicMarketplaceRequest | null>(null);

  const form = useForm<InsertMarketplaceRequest>({
    resolver: zodResolver(insertMarketplaceRequestSchema),
    defaultValues: {
      marketplaceName: '',
      email: '',
      password: '',
    },
  });

  const createRequestMutation = useMutation({
    mutationFn: async (data: InsertMarketplaceRequest) => {
      const response = await apiRequest('POST', '/api/marketplace-requests', data);
      return await response.json() as PublicMarketplaceRequest;
    },
    onSuccess: (data) => {
      setCreatedRequest(data);
      toast({
        title: 'Request Submitted!',
        description: 'Your marketplace request has been received.',
      });
    },
    onError: (error: Error) => {
      const match = error.message.match(/^\d+:\s*(.+)$/);
      if (match) {
        try {
          const errorData = JSON.parse(match[1]);
          if (errorData?.errors && Array.isArray(errorData.errors)) {
            errorData.errors.forEach((err: { field: string; message: string }) => {
              form.setError(err.field as 'marketplaceName' | 'email' | 'password', {
                type: 'server',
                message: err.message,
              });
            });
            return;
          }
          if (errorData?.field && errorData?.message) {
            form.setError(errorData.field as 'marketplaceName' | 'email' | 'password', {
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
        description: error.message || 'Failed to submit request',
        variant: 'destructive',
      });
    },
  });

  const onSubmit = (data: InsertMarketplaceRequest) => {
    createRequestMutation.mutate(data);
  };

  if (createdRequest) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12 pt-24">
          <Card className="max-w-3xl w-full">
          <CardHeader className="text-center pb-8">
            <div className="mx-auto mb-6 w-20 h-20 bg-green-50 dark:bg-green-950 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-400" />
            </div>
            <CardTitle className="text-3xl sm:text-4xl mb-3">Request Received!</CardTitle>
            <CardDescription className="text-base">
              Your marketplace request has been submitted. Our team will review and activate your marketplace shortly.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-muted/30 rounded-lg p-5">
                <p className="text-sm text-muted-foreground mb-1">Marketplace Name</p>
                <p className="text-lg font-semibold text-foreground">{createdRequest.marketplaceName}</p>
              </div>
              <div className="bg-muted/30 rounded-lg p-5">
                <p className="text-sm text-muted-foreground mb-1">Plan</p>
                <p className="text-lg font-semibold text-foreground">{createdRequest.plan}</p>
              </div>
              <div className="sm:col-span-2 bg-muted/30 rounded-lg p-5">
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <p className="text-lg font-semibold text-foreground">{createdRequest.email}</p>
              </div>
            </div>

            <div className="bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-4 text-lg">What Happens Next</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Our team will review your marketplace request</span>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">You'll receive a confirmation email once activated</span>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Start configuring your marketplace and onboarding sellers</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => setLocation('/')} 
                variant="outline" 
                className="flex-1"
                data-testid="button-back-home"
              >
                Back to Home
              </Button>
            </div>
          </CardContent>
        </Card>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12 pt-24">
        <Card className="max-w-md w-full">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl sm:text-3xl">Request Your Marketplace</CardTitle>
            <CardDescription>
              Submit your request and our team will activate your marketplace.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="you@company.com"
                          {...field}
                          data-testid="input-email"
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

                <Button
                  type="submit"
                  className="w-full"
                  disabled={createRequestMutation.isPending}
                  data-testid="button-submit-request"
                >
                  {createRequestMutation.isPending ? 'Submitting...' : 'Submit Request'}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
