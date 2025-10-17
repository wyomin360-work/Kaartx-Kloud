import { Shield, FileText, Settings, DollarSign } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function DeepFeatures() {
  const features = [
    {
      icon: Shield,
      title: 'Marketplace OS',
      description: 'Complete control over brand rules, category gating, and seller approvals. Build your marketplace exactly how you want it.',
      features: ['Custom brand rules', 'Category management', 'Automated approvals', 'Seller verification'],
    },
    {
      icon: FileText,
      title: 'Product Listing Flow',
      description: 'Comprehensive product management with SKU, MPN, multi-language titles, rich media support, and automated tax calculations.',
      features: ['SKU & MPN management', 'Multi-language support', 'Rich media galleries', 'Automated tax handling'],
    },
    {
      icon: Settings,
      title: 'Operations',
      description: 'Streamline fulfillment with automated labels, real-time tracking, SLA monitoring, and Asyad-ready returns management.',
      features: ['Shipping labels', 'Real-time tracking', 'SLA monitoring', 'Returns management'],
    },
    {
      icon: DollarSign,
      title: 'Finance',
      description: 'Flexible subscription models, fee management, automated invoicing, and TAP-integrated 12-day payout cycles.',
      features: ['Subscription billing', 'Fee management', 'Auto invoicing', '12-day payouts'],
    },
  ];

  return (
    <section className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
                data-testid={`deep-feature-${index}`}
              >
                <div className="flex-1">
                  <Card className="p-8">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground mb-6">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.features.map((item, i) => (
                        <li key={i} className="flex items-center text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mr-3" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
                <div className="flex-1">
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/10 to-card border border-border" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
