import { Users, ListChecks, CreditCard, Settings } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function FeatureGrid() {
  const features = [
    {
      icon: Users,
      title: 'Seller Management',
      description: 'Complete seller onboarding with subscription plans, approval workflows, and performance tracking.',
    },
    {
      icon: ListChecks,
      title: 'Product Listing Flow',
      description: 'Advanced product management with SKU generation, variants, MPN support, and bulk uploads.',
    },
    {
      icon: CreditCard,
      title: '12-Day Payouts',
      description: 'Automated seller payouts every 12 days with TAP payment integration and invoice management.',
    },
    {
      icon: Settings,
      title: 'Full Automation',
      description: 'Order tracking, shipping labels, returns management, and real-time notifications built-in.',
    },
  ];

  return (
    <section id="features" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4" data-testid="text-features-title">
            Everything to run a <span className="gradient-text">marketplace</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium" data-testid="text-features-subtitle">
            From seller onboarding to payouts — all the tools you need in one platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const gradients = ['gradient-bg-purple', 'gradient-bg-blue', 'gradient-bg-purple', 'gradient-bg-blue'];
            return (
              <Card
                key={index}
                className={`hover-elevate transition-all duration-300 hover:scale-105 rounded-2xl border-2 ${gradients[index]}`}
                data-testid={`card-feature-${index}`}
              >
                <CardHeader>
                  <div className="h-14 w-14 rounded-2xl bg-white shadow-playful flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2 font-bold">{feature.title}</CardTitle>
                  <CardDescription className="font-medium">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
