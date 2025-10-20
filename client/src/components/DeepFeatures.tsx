import { ShoppingCart, FileText, Truck, Wallet } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function DeepFeatures() {
  const features = [
    {
      icon: ShoppingCart,
      title: 'Seller Subscriptions',
      description: 'Flexible subscription plans with automated billing via TAP. Track active, expired, and suspended sellers with full payment history.',
      features: ['Monthly/yearly billing cycles', 'Auto-renewal with saved cards', 'Suspend/reactivate sellers', 'Payment retry logic'],
    },
    {
      icon: FileText,
      title: 'Product Management',
      description: 'Complete product listing workflow with variants, SKU generation, MPN support, and bulk uploads. Admin approval system included.',
      features: ['None/One/Two variant support', 'Auto SKU generation', 'Image quality standards', 'Bulk upload via Excel'],
    },
    {
      icon: Truck,
      title: 'Order & Fulfillment',
      description: 'End-to-end order management with status tracking, shipping label generation, and automated alerts for delayed orders.',
      features: ['Real-time order tracking', 'Asyad shipping integration', 'Return & refund handling', 'Auto-delay notifications'],
    },
    {
      icon: Wallet,
      title: '12-Day Payouts',
      description: 'Automated seller payouts every 12 days with commission deduction, TAP integration, and complete invoice management.',
      features: ['12-day payout cycles', 'Commission auto-deduction', 'Invoice generation', 'Export payout reports'],
    },
  ];

  return (
    <section className="py-12 sm:py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6">
        <div className="space-y-12 sm:space-y-16 md:space-y-24">
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
