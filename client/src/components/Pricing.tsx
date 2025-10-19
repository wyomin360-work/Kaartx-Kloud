import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Pricing() {
  const titleAnimation = useScrollAnimation<HTMLDivElement>(0.2);
  const cardsAnimation = useScrollAnimation<HTMLDivElement>(0.1);

  const plans = [
    {
      name: 'Starter',
      price: 'Contact',
      period: '',
      description: 'Perfect for new marketplaces',
      features: [
        'Up to 100 sellers',
        'Product listing management',
        'Basic analytics',
        'Email support',
        '12-day payout cycles',
      ],
      cta: 'Get Started',
      highlighted: false,
    },
    {
      name: 'Growth',
      price: 'Contact',
      period: '',
      description: 'For scaling marketplaces',
      features: [
        'Unlimited sellers',
        'Advanced analytics',
        'TAP & Asyad integrations',
        'Priority support',
        'White-label options',
        'Custom workflows',
      ],
      cta: 'Talk to Sales',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large-scale operations',
      features: [
        'Everything in Growth',
        'Dedicated infrastructure',
        'Custom integrations',
        'SLA guarantee',
        'Dedicated account manager',
        'Multi-marketplace support',
      ],
      cta: 'Contact Us',
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 sm:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div 
          ref={titleAnimation.ref}
          className={`text-center mb-16 animate-on-scroll ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4" data-testid="text-pricing-title">
            Flexible <span className="gradient-text">pricing</span> for every stage
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium" data-testid="text-pricing-subtitle">
            Start small and scale as your marketplace grows
          </p>
        </div>

        <div 
          ref={cardsAnimation.ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {plans.map((plan, index) => {
            const stagger = ['', 'stagger-1', 'stagger-2'];
            return (
              <Card
                key={index}
                className={`p-8 !rounded-3xl !border-2 ${
                  plan.highlighted
                    ? 'gradient-border shadow-playful scale-105 gradient-bg-blue'
                    : 'hover-elevate !border-border'
                } animate-on-scroll ${stagger[index]} ${cardsAnimation.isVisible ? 'visible' : ''}`}
                data-testid={`pricing-card-${index}`}
              >
              <div className="mb-6">
                <h3 className="text-2xl font-black text-foreground mb-2" data-testid={`text-plan-name-${index}`}>
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm font-medium" data-testid={`text-plan-description-${index}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <span className="text-5xl font-black gradient-text" data-testid={`text-plan-price-${index}`}>
                  {plan.price}
                </span>
                <span className="text-muted-foreground font-medium">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
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
                className={`w-full rounded-2xl font-bold text-base py-6 hover:scale-[1.02] transition-transform ${plan.highlighted ? 'shadow-playful' : ''}`}
                variant={plan.highlighted ? 'default' : 'outline'}
                data-testid={`button-plan-${index}`}
              >
                {plan.cta}
              </Button>
            </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
