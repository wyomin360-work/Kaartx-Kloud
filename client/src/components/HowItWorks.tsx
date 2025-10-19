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
    <section className="py-20 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground mb-4" data-testid="text-how-it-works-title">
            Launch in 3 simple steps
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium" data-testid="text-how-it-works-subtitle">
            From zero to live marketplace faster than you think
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 relative max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative" data-testid={`step-${index}`}>
                <div className="text-center">
                  <div className="relative inline-flex mb-8">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 border-2 border-primary/20">
                      <Icon className="h-9 w-9 text-primary" strokeWidth={2.5} />
                    </div>
                    <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{step.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed font-medium">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/30 via-primary/20 to-primary/10" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
