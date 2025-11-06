import { Settings, Users, Rocket } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function HowItWorks() {
  const steps = [
    {
      icon: Settings,
      title: 'Configure',
      description: 'Set up your marketplace branding, categories, and pricing in minutes.',
    },
    {
      icon: Users,
      title: 'Onboard Sellers',
      description: 'Invite sellers, approve them instantly, and start listing products.',
    },
    {
      icon: Rocket,
      title: 'Launch & Earn',
      description: 'Go live, earn commissions, and let sellers run their stores.',
    },
  ];

  const titleAnimation = useScrollAnimation<HTMLDivElement>(0.2);
  const cardsAnimation = useScrollAnimation<HTMLDivElement>(0.1);

  return (
    <section className="py-20 sm:py-28 md:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div 
          ref={titleAnimation.ref}
          className={`text-center mb-20 sm:mb-24 md:mb-28 animate-on-scroll ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-5 tracking-tight" data-testid="text-how-it-works-title">
            Launch in 3 simple steps
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto font-normal" data-testid="text-how-it-works-subtitle">
            From zero to live marketplace faster than you think
          </p>
        </div>

        <div 
          ref={cardsAnimation.ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 relative max-w-6xl mx-auto items-stretch"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            const gradients = ['gradient-bg-purple', 'gradient-bg-blue', 'gradient-bg-purple'];
            const stagger = ['', 'stagger-1', 'stagger-2'];
            return (
              <div key={index} className="relative h-full" data-testid={`step-${index}`}>
                <div className={`relative h-full rounded-2xl p-10 pt-20 border-2 shadow-sm transition-all duration-300 hover-elevate ${gradients[index]} animate-on-scroll ${stagger[index]} ${cardsAnimation.isVisible ? 'visible' : ''}`}>
                  {/* Numbered Badge - Top Left */}
                  <div className="absolute -top-5 -left-2 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold shadow-lg text-xl">
                    {index + 1}
                  </div>

                  <div className="text-center">
                    {/* Icon Container */}
                    <div className="inline-flex mb-7">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-playful">
                        <Icon className="h-8 w-8 text-primary" strokeWidth={1.75} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-semibold text-foreground mb-4 tracking-tight">{step.title}</h3>
                    
                    {/* Description */}
                    <p className="text-base text-muted-foreground leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
