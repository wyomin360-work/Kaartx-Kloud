import { Users, Package, Truck, CreditCard } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function FeatureGrid() {
  const features = [
    {
      icon: Users,
      title: 'Seller Onboarding',
      description: 'Seamlessly onboard and manage sellers with automated workflows.',
    },
    {
      icon: Package,
      title: 'Catalog & Variants',
      description: 'Powerful product management with unlimited variants and attributes.',
    },
    {
      icon: Truck,
      title: 'Orders & Logistics',
      description: 'End-to-end order management with integrated shipping solutions.',
    },
    {
      icon: CreditCard,
      title: 'Payments & Payouts',
      description: 'Automated payment processing with flexible payout schedules.',
    },
  ];

  return (
    <section id="features" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-features-title">
            Everything you need to run a marketplace
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-features-subtitle">
            Built-in tools and integrations to power your entire commerce operation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="hover-elevate transition-all duration-300 hover:scale-105"
                data-testid={`card-feature-${index}`}
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
