import { ShoppingCart, FileText, Truck, Wallet, Tag, BarChart3, Check } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function DeepFeatures() {
  const features = [
    {
      icon: ShoppingCart,
      title: 'Seller Subscriptions',
      description: 'Flexible subscription plans with automated billing via TAP. Track active, expired, and suspended sellers with full payment history.',
      features: ['Monthly/yearly billing cycles', 'Auto-renewal with saved cards', 'Suspend/reactivate sellers', 'Payment retry logic'],
      checkGradient: 'text-cyan-600',
    },
    {
      icon: FileText,
      title: 'Product Management',
      description: 'End-to-end listing workflow with variants, SKUs, and bulk uploads—designed to maintain consistency, accuracy, and operational efficiency at scale.',
      features: ['One / two-variant support', 'Auto SKU generation', 'Image quality standards', 'Bulk editing tools'],
      checkGradient: 'text-purple-600',
    },
    {
      icon: Truck,
      title: 'Order Management',
      description: 'Complete system for tracking and handling every order from purchase to delivery, with centralized controls for accuracy, visibility, and smooth operations.',
      features: ['Centralized dashboard for order status, shipment tracking, and cancellations', 'Integrated refund and return request handling with admin control', 'Supports partial or full refunds via the payment gateway', 'Order data linked with invoice and shipping modules for accuracy'],
      checkGradient: 'text-cyan-600',
    },
    {
      icon: Wallet,
      title: 'Payout Management',
      description: 'Automated and transparent payout cycle for all sellers — directly connected to TAP Payments.',
      features: ['Default 12-day payout cycle after order completion', 'Auto ledger update with every transaction and commission', 'View seller payout history, pending payouts, and balances', 'Admin control to hold, release, or adjust payouts manually when needed'],
      checkGradient: 'text-purple-600',
    },
    {
      icon: Tag,
      title: 'Brand & Category Control',
      description: 'Structured approval system to maintain marketplace quality.',
      features: ['Global, Regional and Private brands', 'Manual approval for new brands and categories', 'File upload for brand verification', 'Category-based access for sellers'],
      checkGradient: 'text-cyan-600',
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Monitor all seller and marketplace performance metrics in real time.',
      features: ['Total sales, orders, and revenue tracking', 'Seller-wise sales and commission reports', 'Product performance with quantity and value sold', 'Refund and cancellation summaries'],
      checkGradient: 'text-purple-600',
    },
  ];

  const titleAnimation = useScrollAnimation<HTMLDivElement>(0.2);
  const cardsAnimation = useScrollAnimation<HTMLDivElement>(0.1);

  return (
    <section id="features" className="py-12 sm:py-20 md:py-32 bg-background scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleAnimation.ref}
          className={`text-center mb-12 sm:mb-16 md:mb-20 animate-on-scroll ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          <h2 className="section-title text-foreground mb-5 tracking-tight" data-testid="text-deep-features-title">
            Powerful tools to manage<br />your entire marketplace
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto font-normal" data-testid="text-deep-features-subtitle">
            From seller subscriptions to shipping automation — everything your marketplace needs, already built in.
          </p>
        </div>
        
        <div 
          ref={cardsAnimation.ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 lg:gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const gradients = ['gradient-bg-blue', 'gradient-bg-purple', 'gradient-bg-blue', 'gradient-bg-purple', 'gradient-bg-blue', 'gradient-bg-purple'];
            const stagger = ['', 'stagger-1', 'stagger-2', 'stagger-3', 'stagger-4', 'stagger-5'];

            return (
              <Card
                key={index}
                data-testid={`deep-feature-${index}`}
                className={`group hover-elevate transition-all duration-300 rounded-2xl border-2 overflow-visible ${gradients[index]} animate-on-scroll ${stagger[index]} ${cardsAnimation.isVisible ? 'visible' : ''}`}
                tabIndex={0}
              >
                <div className="relative p-8">
                  {/* Icon with Hover Animation */}
                  <div className="h-14 w-14 rounded-2xl bg-white shadow-playful flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                    <Icon className="h-7 w-7 text-primary" aria-hidden="true" strokeWidth={1.75} />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-4 tracking-tight">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Feature List with Checkmarks */}
                  <ul className="space-y-3">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-muted-foreground leading-relaxed">
                        <Check className={`h-4 w-4 ${feature.checkGradient} mt-0.5 mr-3 flex-shrink-0`} strokeWidth={3} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
