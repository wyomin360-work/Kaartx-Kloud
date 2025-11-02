import { Settings, Users, Rocket } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function HowItWorks() {
  const steps = [
    {
      icon: Settings,
      title: 'Configure',
      description: 'Set up your marketplace branding, categories, and seller subscription plans',
    },
    {
      icon: Users,
      title: 'Onboard Sellers',
      description: 'Invite sellers, approve applications, and they start listing products',
    },
    {
      icon: Rocket,
      title: 'Launch & Earn',
      description: 'Go live and earn commissions while sellers manage their own stores',
    },
  ];

  return (
    <section className="py-12 sm:py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6">
        <div className="text-center mb-10 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-3 sm:mb-4" data-testid="text-how-it-works-title">
            Launch in 3 simple steps
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-medium" data-testid="text-how-it-works-subtitle">
            From zero to live marketplace faster than you think
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 relative max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative" data-testid={`step-${index}`}>
                <Card className="h-full p-8 hover-elevate transition-all duration-200 relative overflow-visible">
                  <div className="text-center">
                    <div className="relative inline-flex mb-6">
                      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-card border">
                        <Icon className="h-7 w-7 text-primary" strokeWidth={2} />
                      </div>
                      <div className="absolute -top-3 -right-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold shadow-lg text-base">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/30 via-primary/20 to-primary/10 z-0" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
