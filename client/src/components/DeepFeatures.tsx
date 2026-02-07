import { useState } from 'react';
import { ShoppingCart, FileText, Truck, Wallet, Tag, BarChart3, Check, ChevronDown } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function DeepFeatures() {
  const [isExpanded, setIsExpanded] = useState(false);

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
      description: 'A complete system to manage every order from purchase to delivery, with clear controls that improve accuracy, visibility, and smooth operations.',
      features: ['Centralized dashboard for order tracking', 'Integrated refund & return handling', 'Partial/full refunds via payment gateway', 'Order data linked with invoice & shipping'],
      checkGradient: 'text-cyan-600',
    },
    {
      icon: Wallet,
      title: 'Payments & Payouts',
      description: 'Automated payout cycle with full visibility for sellers, connected directly to TAP Payments for seamless and secure operations.',
      features: ['Configurable payout cycles', 'Auto ledger updates', 'View payout history & balances', 'Manual payout control'],
      checkGradient: 'text-purple-600',
    },
    {
      icon: Tag,
      title: 'Brand & Category Control',
      description: 'Approval workflows that maintain marketplace quality, with structured controls for managing brands, categories, and seller access efficiently.',
      features: ['Support for all brand types', 'Manual approval for new brands', 'File upload for verification', 'Category-based permissions'],
      checkGradient: 'text-cyan-600',
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Real-time performance analytics for sellers and marketplaces, delivering accurate insights on sales, revenue, and operational metrics.',
      features: ['Sales, orders & revenue tracking', 'Seller-wise performance reports', 'Product insights & trends', 'Refund & cancellation summaries'],
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
            Powerful tools to manage<br />your entire ecosystem
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto font-normal" data-testid="text-deep-features-subtitle">
            From subscriptions to shipping automation — everything you need, built-in.
          </p>
        </div>
        
        <div 
          ref={cardsAnimation.ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 lg:gap-8"
          data-expanded={isExpanded}
          data-testid="deep-features-container"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const stagger = ['', 'stagger-1', 'stagger-2', 'stagger-3', 'stagger-4', 'stagger-5'];

            // First card is clickable on mobile to toggle expansion
            const isFirstCard = index === 0;
            const handleCardClick = () => {
              if (isFirstCard && window.matchMedia('(max-width: 768px)').matches) {
                setIsExpanded(!isExpanded);
              }
            };

            return (
              <Card
                key={index}
                data-testid={`deep-feature-${index}`}
                className={`group hover-elevate transition-all duration-300 rounded-2xl border-2 border-primary/20 overflow-visible deep-feature-card animate-on-scroll ${stagger[index]} ${cardsAnimation.isVisible ? 'visible' : ''}`}
                tabIndex={0}
                onClick={handleCardClick}
                role={isFirstCard ? 'button' : undefined}
                aria-expanded={isFirstCard ? isExpanded : undefined}
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
                      <li key={i} className="flex items-center text-sm text-muted-foreground leading-relaxed">
                        <Check className={`h-4 w-4 ${feature.checkGradient} mr-3 flex-shrink-0`} strokeWidth={3} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Mobile expand indicator on first card */}
                  {isFirstCard && (
                    <div className="deep-features-expand-indicator absolute bottom-3 left-1/2 -translate-x-1/2 hidden">
                      <ChevronDown 
                        className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                      />
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
