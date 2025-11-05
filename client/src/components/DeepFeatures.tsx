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
      description: 'End-to-end listing workflow with variants, SKUs, and bulk uploads.',
      features: ['One / two-variant support', 'Auto SKU generation', 'Image quality standards', 'Bulk editing tools'],
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
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-5 tracking-tight" data-testid="text-deep-features-title">
            Powerful tools to manage your entire marketplace
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto font-normal" data-testid="text-deep-features-subtitle">
            From seller subscriptions to shipping automation — everything your marketplace needs, already built in.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <Card key={index} className="p-8" data-testid={`deep-feature-${index}`}>
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
