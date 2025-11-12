import { Card } from '@/components/ui/card';
import { TrendingUp, Clock, Users } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function CaseStudy() {
  const titleAnimation = useScrollAnimation<HTMLDivElement>(0.2);
  const cardsAnimation = useScrollAnimation<HTMLDivElement>(0.2);

  const metrics = [
    {
      icon: TrendingUp,
      value: 'Faster',
      label: 'Seller Growth',
      description: 'Streamlined onboarding and automated subscriptions reduce friction.',
    },
    {
      icon: Clock,
      value: 'Weeks',
      label: 'Not Months',
      description: 'Pre-built marketplace modules ready to deploy with minimal setup.',
    },
    {
      icon: Users,
      value: 'Scale',
      label: 'Ready',
      description: 'Robust infrastructure designed to support growing seller networks.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 md:py-36 bg-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6">
        <div 
          ref={titleAnimation.ref}
          className={`text-center mb-12 sm:mb-20 animate-on-scroll ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          <h2 className="section-title text-foreground mb-4 sm:mb-5" data-testid="text-case-study-title">
            Scalable results — built for growth
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-case-study-subtitle">
            Kaartx Kloud automates everything from seller onboarding to payouts, helping marketplaces across the GCC launch faster and grow smarter.
          </p>
        </div>

        <div 
          ref={cardsAnimation.ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto animate-on-scroll ${cardsAnimation.isVisible ? 'visible' : ''}`}
        >
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            const stagger = ['', 'stagger-1', 'stagger-2'];
            
            return (
              <Card
                key={index}
                className={`p-8 sm:p-10 bg-background border-border/60 !rounded-2xl transition-all duration-300 ${stagger[index]}`}
                data-testid={`metric-card-${index}`}
              >
                <div className="text-center space-y-5">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-muted/50 border border-border/40">
                    <Icon className="h-8 w-8 text-foreground/80" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl sm:text-4xl font-black text-foreground tracking-tight" data-testid={`text-metric-value-${index}`}>
                      {metric.value}
                    </div>
                    <div className="text-lg font-bold text-foreground/90" data-testid={`text-metric-label-${index}`}>
                      {metric.label}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed pt-1" data-testid={`text-metric-description-${index}`}>
                    {metric.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
