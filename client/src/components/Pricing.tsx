import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Info } from 'lucide-react';
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

  const openWhatsApp = () => {
    const message = 'Hi%20I%20want%20to%20know%20more%20about%20Kaartx%20Kloud';
    const phone = '96898209353';
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const url = isMobile 
      ? `https://wa.me/${phone}?text=${message}`
      : `https://web.whatsapp.com/send?phone=${phone}&text=${message}`;
    window.open(url, '_blank');
  };

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
        '1 store or marketplace (subdomain)',
        'Up to 200 sellers',
        'Up to 1,000 orders / month',
        'Basic analytics dashboards',
        'Basic branding (logo + colors)',
        'Standard payout cycle',
        'Email & WhatsApp support',
        'Seller subscriptions logic',
      ],
      cta: 'Request Setup',
      highlighted: false,
    },
    {
      name: 'Growth',
      yearlyPrice: 990,
      monthlyPrice: 115,
      description: 'For agencies & fast-growing brands',
      features: [
        'Up to 3 stores or marketplaces',
        'Up to 600 sellers',
        'Up to 10,000 orders / month',
        'Advanced analytics dashboards',
        'White-label (Domain + SSL)',
        'Configurable payout cycles',
        'Priority email & WhatsApp support',
        'Bulk product + automations',
      ],
      cta: 'Get Growth',
      highlighted: true,
      mostPopular: true,
    },
    {
      name: 'Pro (Enterprise)',
      yearlyPrice: 2990,
      monthlyPrice: 349,
      description: 'For large brands & franchises',
      features: [
        'Unlimited stores & marketplaces',
        'Unlimited sellers',
        'Unlimited orders',
        'Advanced + enterprise analytics',
        'Full white-label included',
        'Custom payout workflows',
        'Dedicated account manager',
        'Custom integrations API',
      ],
      cta: 'Talk to Sales',
      highlighted: false,
    },
  ];

  const addons = [
    { name: 'Custom domain & SSL', price: 10, availability: 'Starter, Growth — Included in Pro' },
    { name: 'Extra marketplace instance', price: 20, availability: 'Growth, Pro' },
    { name: 'Extra admin user (per seat)', price: 5, availability: 'All plans' },
    { name: 'Extra sellers (per 100 sellers)', price: 5, availability: 'Available on request' },
  ];

  const upcomingAddons = [
    { name: 'AI Insights Suite', price: 15, availability: 'All plans' },
  ];

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-background scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div 
          ref={titleAnimation.ref}
          className={`text-center max-w-3xl mx-auto mb-16 animate-on-scroll ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-6">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Whether you're testing the waters or scaling an empire, we have a plan designed to fit your unique needs. No hidden fees.
          </p>
        </div>

        <div 
          ref={toggleAnimation.ref}
          className={`flex justify-center items-center mb-16 animate-on-scroll ${toggleAnimation.isVisible ? 'visible' : ''}`}
        >
          <div className="inline-flex items-center p-1.5 bg-muted/60 backdrop-blur-md rounded-full border border-border shadow-inner">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`relative px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${billingPeriod === 'monthly' ? 'bg-background text-foreground shadow-sm ring-1 ring-border shadow-black/5' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`relative px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${billingPeriod === 'yearly' ? 'bg-background text-foreground shadow-sm ring-1 ring-border shadow-black/5' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Annually <span className={billingPeriod === 'yearly' ? 'text-primary ml-1' : 'opacity-70 ml-1'}>-20%</span>
            </button>
          </div>
        </div>

        <div 
          ref={cardsAnimation.ref}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16"
        >
          {plans.map((plan, index) => {
            const stagger = ['', 'stagger-1', 'stagger-2'];
            const price = billingPeriod === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice;
            const monthlyEquivalent = billingPeriod === 'yearly' ? (plan.yearlyPrice / 12).toFixed(0) : null;
            const isHighlighted = plan.highlighted;
            
            return (
              <div
                key={index}
                className={`relative flex flex-col p-6 sm:p-7 rounded-[2rem] bg-card transition-all duration-500 animate-on-scroll ${stagger[index]} ${cardsAnimation.isVisible ? 'visible' : ''} ${
                  isHighlighted 
                    ? 'border-2 border-primary shadow-2xl lg:-translate-y-2 ring-4 ring-primary/5 z-10' 
                    : 'border border-border/80 shadow-lg hover:shadow-xl'
                }`}
              >
                {isHighlighted && (
                  <div className="absolute -top-3.5 left-0 right-0 flex justify-center">
                    <span className="bg-primary text-primary-foreground text-[10px] font-bold tracking-widest uppercase py-1 px-4 rounded-full shadow-md">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-5">
                  <h3 className="text-xl font-bold tracking-tight text-foreground mb-1.5">
                    {plan.name}
                  </h3>
                  <p className="text-[13px] text-muted-foreground leading-snug">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex items-end gap-1.5 flex-nowrap">
                    <span className="text-4xl font-extrabold tracking-tighter text-foreground leading-none">
                      <span className="text-xl font-bold align-top mr-1">OMR</span>{price}
                    </span>
                    <span className="text-sm text-muted-foreground font-medium pb-0.5 whitespace-nowrap">
                      / {billingPeriod === 'yearly' ? 'year' : 'mo'}
                    </span>
                  </div>
                  {monthlyEquivalent && (
                    <p className="text-xs text-primary font-semibold tracking-tight mt-2">
                      Works out to OMR {monthlyEquivalent} / month
                    </p>
                  )}
                </div>

                <Button
                  onClick={
                    plan.name === 'Starter' || plan.name === 'Growth'
                      ? () => onOpenSignup?.({
                          planId: `${plan.name.split(' ')[0].toLowerCase()}-${billingPeriod}`,
                          planName: plan.name.split(' ')[0] as 'Starter' | 'Growth',
                          billingCycle: billingPeriod,
                          price: price,
                          currency: 'OMR',
                        })
                      : scrollToBooking
                  }
                  className={`w-full rounded-xl font-bold text-sm py-5 transition-all ${
                    isHighlighted 
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg hover:-translate-y-0.5' 
                      : 'bg-secondary/40 text-foreground hover:bg-secondary border border-border/50 hover:-translate-y-0.5'
                  }`}
                  variant={isHighlighted ? 'default' : 'secondary'}
                >
                  {plan.cta}
                </Button>

                <div className="mt-6 pt-5 border-t border-border/50 flex-1">
                  <p className="text-xs font-bold text-foreground mb-4 uppercase tracking-wider">What's included</p>
                  <ul className="space-y-2.5">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className={`h-4 w-4 mt-0.5 shrink-0 ${isHighlighted ? 'text-primary' : 'text-foreground/40'}`} strokeWidth={3} />
                        <span className="text-[13px] leading-snug text-muted-foreground font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Add-ons Section */}
        <div className="max-w-4xl mx-auto bg-card rounded-[2rem] border border-border/80 p-8 sm:p-10 shadow-xl">
          <div className="flex items-center gap-2 mb-8">
            <h3 className="text-xl font-bold tracking-tight text-foreground">
              Optional Add-ons
            </h3>
            <Info className="h-4 w-4 text-muted-foreground" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {addons.map((addon, index) => (
              <div key={index} className="flex flex-col p-5 rounded-2xl bg-secondary/30 border border-border/40 hover:bg-secondary/60 transition-colors group">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-sm text-foreground">{addon.name}</span>
                  <span className="font-extrabold text-sm text-primary group-hover:scale-105 transition-transform">OMR {addon.price} <span className="text-xs text-muted-foreground font-medium">/mo</span></span>
                </div>
                <span className="text-xs text-muted-foreground font-medium leading-relaxed">{addon.availability}</span>
              </div>
            ))}
          </div>

          {upcomingAddons.length > 0 && (
            <div className="mt-8 pt-6 border-t border-border/50">
              {upcomingAddons.map((addon, index) => (
                <div key={index} className="flex items-center justify-between p-5 rounded-2xl border border-dashed border-border/80 bg-background/50">
                  <span className="font-semibold text-sm text-muted-foreground">{addon.name}</span>
                  <Badge variant="outline" className="text-xs font-bold uppercase tracking-widest text-muted-foreground shadow-sm">Coming Soon</Badge>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="text-center mt-16">
          <p className="text-sm font-medium text-muted-foreground mb-6">Prices exclude VAT where applicable. Secure billing via TAP Payments.</p>
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 bg-secondary/20 px-6 py-4 rounded-full border border-border/30">
            <span className="text-sm text-foreground font-bold">Looking for a custom enterprise deployment?</span>
            <button 
              onClick={openWhatsApp}
              className="text-sm text-primary font-bold hover:text-primary/80 transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-primary/30 hover:after:bg-primary"
            >
              Talk to sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
