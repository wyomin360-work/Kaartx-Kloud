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
    <section className="py-12 sm:py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6">
        <div 
          ref={titleAnimation.ref}
          className={`text-center mb-10 sm:mb-16 animate-on-scroll ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4" data-testid="text-case-study-title">
            Scalable results — built for growth
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-case-study-subtitle">
            Kaartx Cloud automates everything from seller onboarding to payouts, helping marketplaces across the GCC launch faster and grow smarter.
          </p>
        </div>

        <div 
          ref={cardsAnimation.ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 animate-on-scroll ${cardsAnimation.isVisible ? 'visible' : ''}`}
        >
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            const stagger = ['', 'stagger-1', 'stagger-2'];
            
            return (
              <Card
                key={index}
                className={`p-6 sm:p-8 hover-elevate transition-all duration-300 ${stagger[index]}`}
                data-testid={`metric-card-${index}`}
              >
                <div className="text-center space-y-4">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-primary" data-testid={`text-metric-value-${index}`}>
                    {metric.value}
                  </div>
                  <div className="text-lg font-semibold text-foreground" data-testid={`text-metric-label-${index}`}>
                    {metric.label}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-metric-description-${index}`}>
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
