import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import type { PlanSelection } from '@/components/SignupModal';

interface PricingProps {
  onOpenSignup?: (plan: PlanSelection) => void;
}

export default function Pricing({ onOpenSignup }: PricingProps) {
  const [billingPeriod, setBillingPeriod] = useState<'yearly' | 'monthly'>('yearly');
  const titleAnimation = useScrollAnimation<HTMLDivElement>(0.2);
  const toggleAnimation = useScrollAnimation<HTMLDivElement>(0.1);
  const cardsAnimation = useScrollAnimation<HTMLDivElement>(0.1);

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const plans = [
    {
      name: 'Starter',
      yearlyPrice: 290,
      monthlyPrice: 35,
      description: 'Best for solo founders & small boutiques',
      features: [
        '1 marketplace (subdomain)',
        'Up to 100 sellers',
        'Up to 1,000 orders / month',
        'Basic analytics dashboards',
        'Basic branding (logo + colors)',
        'Default 12-day payout cycle',
        'Email & WhatsApp support',
        'Seller subscriptions (monthly/yearly)',
      ],
      cta: 'Request Starter Setup',
      highlighted: false,
      savingsPercent: '~20%',
    },
    {
      name: 'Growth',
      yearlyPrice: 990,
      monthlyPrice: 115,
      description: 'For agencies & fast-growing brands',
      features: [
        'Up to 3 marketplaces',
        'Up to 500 sellers',
        'Up to 10,000 orders / month',
        'Advanced analytics dashboards',
        'White-label via Custom Domain + SSL (add-on)',
        'Configurable payout cycles',
        'Priority email & WhatsApp support',
        'Bulk product uploads + workflow automations',
      ],
      cta: 'Request Growth Setup',
      highlighted: true,
      mostPopular: true,
      savingsPercent: '~25%',
    },
    {
      name: 'Pro (Enterprise)',
      yearlyPrice: 2990,
      monthlyPrice: 349,
      description: 'For large brands & franchises',
      features: [
        'Unlimited marketplaces',
        'Unlimited sellers',
        'Unlimited orders',
        'Advanced + enterprise analytics',
        'Full white-label included',
        'Custom payout workflows',
        'Dedicated account manager',
        'Custom integrations & enterprise support',
      ],
      cta: 'Talk to Sales',
      highlighted: false,
      savingsPercent: '~15%',
    },
  ];

  const addons = [
    { name: 'Custom domain & SSL', price: 10, availability: 'Starter, Growth — Included in Pro', comingSoon: false },
    { name: 'Extra marketplace instance', price: 20, availability: 'Growth, Pro', comingSoon: false },
    { name: 'Extra admin user (per seat)', price: 5, availability: 'All plans', comingSoon: false },
    { name: 'Extra sellers (per 100 sellers)', price: 5, availability: 'Growth, Pro — Available on request for Starter', comingSoon: false },
  ];

  const upcomingAddons = [
    { name: 'AI Insights Suite', price: 15, availability: 'All plans', comingSoon: true },
  ];

  return (
    <section id="pricing" className="py-12 sm:py-20 md:py-32 bg-background scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6">
        <div 
          ref={titleAnimation.ref}
          className={`text-center mb-8 sm:mb-12 animate-on-scroll ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          <h2 className="section-title text-foreground mb-3 sm:mb-4" data-testid="text-pricing-title">
            Plans & <span className="gradient-text">pricing</span> for GCC
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-normal" data-testid="text-pricing-subtitle">
            Choose a plan that fits your needs. Upgrade anytime.
          </p>
        </div>

        <div 
          ref={toggleAnimation.ref}
          className={`flex justify-center items-center gap-3 mb-10 sm:mb-16 animate-on-scroll ${toggleAnimation.isVisible ? 'visible' : ''}`}
        >
          <Button
            onClick={() => setBillingPeriod('yearly')}
            variant={billingPeriod === 'yearly' ? 'default' : 'outline'}
            className="rounded-2xl font-bold text-sm sm:text-base"
            data-testid="button-billing-yearly"
          >
            Yearly {billingPeriod === 'yearly' && <span className="ml-2 text-xs">(Save up to 25%)</span>}
          </Button>
          <Button
            onClick={() => setBillingPeriod('monthly')}
            variant={billingPeriod === 'monthly' ? 'default' : 'outline'}
            className="rounded-2xl font-bold text-sm sm:text-base"
            data-testid="button-billing-monthly"
          >
            Monthly
          </Button>
        </div>

        <div 
          ref={cardsAnimation.ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-10 sm:mb-12"
        >
          {plans.map((plan, index) => {
            const stagger = ['', 'stagger-1', 'stagger-2'];
            const price = billingPeriod === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice;
            const monthlyEquivalent = billingPeriod === 'yearly' ? (plan.yearlyPrice / 12).toFixed(2) : null;
            
            return (
              <Card
                key={index}
                className={`relative p-6 sm:p-8 !rounded-3xl !border-2 flex flex-col ${
                  plan.highlighted
                    ? 'gradient-border shadow-playful md:scale-105 gradient-bg-blue'
                    : 'hover-elevate !border-border'
                } animate-on-scroll ${stagger[index]} ${cardsAnimation.isVisible ? 'visible' : ''}`}
                data-testid={`pricing-card-${index}`}
              >
                {billingPeriod === 'yearly' && (
                  <Badge 
                    className="absolute top-4 right-4 bg-card text-primary border-primary/20 font-bold no-default-hover-elevate"
                    data-testid={`badge-savings-${index}`}
                  >
                    Save {plan.savingsPercent}
                  </Badge>
                )}
                
                {plan.mostPopular && (
                  <Badge 
                    className="absolute top-4 left-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0 font-bold shadow-playful no-default-hover-elevate"
                    data-testid="badge-most-popular"
                  >
                    Most Popular
                  </Badge>
                )}

                <div className="mb-3 sm:mb-4 mt-4">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2" data-testid={`text-plan-name-${index}`}>
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground text-sm font-medium" data-testid={`text-plan-description-${index}`}>
                    {plan.description}
                  </p>
                </div>

                <div className="mb-5 sm:mb-6">
                  <div className="flex items-baseline gap-1 flex-nowrap">
                    <span className="text-4xl sm:text-5xl font-black gradient-text leading-none whitespace-nowrap" data-testid={`text-plan-price-${index}`}>
                      OMR {price}
                    </span>
                    <span className="text-muted-foreground font-medium text-sm whitespace-nowrap">
                      / {billingPeriod === 'yearly' ? 'year' : 'month'}
                    </span>
                  </div>
                  {monthlyEquivalent && (
                    <p className="text-xs text-muted-foreground mt-1.5" data-testid={`text-monthly-equiv-${index}`}>
                      (≈ OMR {monthlyEquivalent} / mo)
                    </p>
                  )}
                </div>

                <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8 flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3" data-testid={`feature-${index}-${featureIndex}`}>
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={
                    plan.name === 'Starter' || plan.name === 'Growth'
                      ? () => onOpenSignup?.({
                          planId: `${plan.name.toLowerCase()}-${billingPeriod}`,
                          planName: plan.name as 'Starter' | 'Growth',
                          billingCycle: billingPeriod,
                          price: price,
                          currency: 'OMR',
                        })
                      : scrollToBooking
                  }
                  className={`w-full rounded-2xl font-bold text-sm sm:text-base py-5 sm:py-6 hover:scale-[1.02] transition-transform ${plan.highlighted ? 'shadow-playful' : ''}`}
                  variant={plan.highlighted ? 'default' : 'outline'}
                  data-testid={`button-plan-${index}`}
                >
                  {plan.cta}
                </Button>
              </Card>
            );
          })}
        </div>

        <div className="max-w-5xl mx-auto mt-16 sm:mt-20 mb-10 sm:mb-12">
          <h3 className="text-center text-lg sm:text-xl font-semibold text-foreground mb-6 sm:mb-8" data-testid="text-addons-title">
            Add-ons
          </h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5 addon-container">
            {addons.map((addon, index) => (
              <div
                key={index}
                className="flex items-center gap-4 md:gap-2 px-5 py-2.5 rounded-full border border-border bg-background hover-elevate"
                data-testid={`badge-addon-${index}`}
              >
                <span className="addon-title text-sm font-medium text-foreground">
                  {addon.name}
                </span>
                <div className="addon-price-slot flex items-center justify-center">
                  <span className="text-sm font-medium text-foreground whitespace-nowrap">
                    OMR {addon.price} / month
                  </span>
                </div>
                <span className="addon-availability text-xs text-muted-foreground font-normal">({addon.availability})</span>
              </div>
            ))}
          </div>

          {/* Upcoming add-ons */}
          <div className="flex justify-center mt-4 sm:mt-5">
            {upcomingAddons.map((addon, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-background"
                data-testid={`badge-addon-upcoming-${index}`}
              >
                <span className="text-sm font-medium text-foreground">
                  {addon.name}
                </span>
                <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0 font-bold shadow-sm no-default-hover-elevate">
                  Coming Soon
                </Badge>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground max-w-2xl mx-auto mt-8" data-testid="text-pricing-footnote">
          Prices exclude VAT where applicable. Billing via TAP Payments.
        </p>

        <div className="text-center text-xs text-muted-foreground max-w-2xl mx-auto mt-6 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-0" data-testid="text-pricing-bridge-cta">
          <span>Looking for a fully branded, dedicated deployment?</span>
          <a 
            href="https://wa.me/96898209353" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary font-medium cursor-pointer hover:underline transition-colors sm:ml-1 py-2 sm:py-0 px-4 sm:px-0"
            data-testid="link-talk-to-us"
          >
            Talk to us
          </a>
        </div>
      </div>
    </section>
  );
}
