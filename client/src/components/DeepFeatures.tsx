import { ShoppingCart, FileText, Truck, Wallet, Tag, BarChart3 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';

export default function DeepFeatures() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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
      title: 'Order Management',
      description: 'Complete system for tracking and handling every order from purchase to delivery.',
      features: ['Centralized dashboard for order status, shipment tracking, and cancellations', 'Integrated refund and return request handling with admin control', 'Supports partial or full refunds via the payment gateway', 'Order data linked with invoice and shipping modules for accuracy'],
    },
    {
      icon: Wallet,
      title: 'Payout Management',
      description: 'Automated and transparent payout cycle for all sellers — directly connected to TAP Payments.',
      features: ['Default 12-day payout cycle after order completion', 'Auto ledger update with every transaction and commission', 'View seller payout history, pending payouts, and balances', 'Admin control to hold, release, or adjust payouts manually when needed'],
    },
    {
      icon: Tag,
      title: 'Brand & Category Control',
      description: 'Structured approval system to maintain marketplace quality.',
      features: ['Global, Regional and Private brands', 'Manual approval for new brands and categories', 'File upload for brand verification', 'Category-based access for sellers'],
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Monitor all seller and marketplace performance metrics in real time.',
      features: ['Total sales, orders, and revenue tracking', 'Seller-wise sales and commission reports', 'Product performance with quantity and value sold', 'Refund and cancellation summaries'],
    },
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setVisibleCards(features.map((_, i) => i));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setTimeout(() => {
              setVisibleCards((prev) => {
                if (!prev.includes(index)) {
                  return [...prev, index];
                }
                return prev;
              });
            }, index * 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-5 tracking-tight" data-testid="text-deep-features-title">
            Powerful tools to manage your entire marketplace
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto font-normal" data-testid="text-deep-features-subtitle">
            From seller subscriptions to shipping automation — everything your marketplace needs, already built in.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isVisible = visibleCards.includes(index);

            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                data-index={index}
                className={`transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 80}ms` : '0ms',
                }}
              >
                <Card
                  data-testid={`deep-feature-${index}`}
                  className="group relative h-full p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 overflow-visible"
                  tabIndex={0}
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  <div className="relative">
                    <div className="h-14 w-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-7 w-7 text-primary" aria-hidden="true" strokeWidth={1.75} />
                    </div>
                    
                    <h3 className="text-2xl font-semibold text-foreground mb-4 tracking-tight">
                      {feature.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <ul className="space-y-3">
                      {feature.features.map((item, i) => (
                        <li key={i} className="flex items-start text-sm text-muted-foreground leading-relaxed">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
