import { Settings, Users, Rocket } from 'lucide-react';

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
    <section className="py-16 sm:py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground mb-4" data-testid="text-how-it-works-title">
            Launch in 3 simple steps
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-how-it-works-subtitle">
            From zero to live marketplace faster than you think
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative" data-testid={`step-${index}`}>
                <div className="relative bg-card/30 rounded-2xl p-8 pt-16 border border-border/40 transition-all duration-300 hover:border-border hover:shadow-sm">
                  {/* Numbered Badge - Top Left */}
                  <div className="absolute -top-4 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold shadow-md text-lg">
                    {index + 1}
                  </div>

                  <div className="text-center">
                    {/* Icon Container */}
                    <div className="inline-flex mb-6">
                      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-background/80 border border-border/50">
                        <Icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">{step.title}</h3>
                    
                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-4 left-[60%] w-[80%] h-px bg-border/50" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
