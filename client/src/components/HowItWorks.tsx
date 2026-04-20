import { Settings, Users, Rocket, ArrowDown, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function HowItWorks() {
  const steps = [
    {
      icon: Settings,
      title: 'Configure',
      description: 'Set up branding, products, categories, and pricing instantly.',
      badgeGradient: 'bg-gradient-to-br from-cyan-400 to-blue-500',
      iconGradient: 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10',
      iconColor: 'text-blue-500',
    },
    {
      icon: Users,
      title: 'Onboard Sellers',
      description: 'Add products or onboard sellers, approve instantly and start listing.',
      badgeGradient: 'bg-gradient-to-br from-violet-400 to-purple-500',
      iconGradient: 'bg-gradient-to-br from-violet-500/10 to-purple-500/10',
      iconColor: 'text-purple-500',
    },
    {
      icon: Rocket,
      title: 'Launch & Earn',
      description: 'Go live, start selling, and manage payouts completely seamlessly.',
      badgeGradient: 'bg-gradient-to-br from-emerald-400 to-teal-500',
      iconGradient: 'bg-gradient-to-br from-emerald-500/10 to-teal-500/10',
      iconColor: 'text-teal-500',
    },
  ];

  const titleAnimation = useScrollAnimation<HTMLDivElement>(0.2);
  const cardsAnimation = useScrollAnimation<HTMLDivElement>(0.1);

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-background">
      {/* Background ambient light */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div 
          ref={titleAnimation.ref}
          className={`text-center mb-20 animate-on-scroll ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary mb-6 shadow-sm">
            <Rocket className="mr-2 h-4 w-4" />
            Simple Process
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-6 tracking-tight">
            Launch in <span className="gradient-text">3 simple steps</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            From idea to live store faster than you think. No technical skills required.
          </p>
        </div>

        <div 
          ref={cardsAnimation.ref}
          className="relative max-w-5xl mx-auto"
        >
          {/* Desktop connecting horizontal line */}
          <div className="hidden md:block absolute top-[4.5rem] left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-blue-500/0 via-border to-teal-500/0 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const stagger = ['', 'stagger-1', 'stagger-2'];
              
              return (
                <div key={index} className="relative flex flex-col items-center">
                  <div className={`w-full relative flex flex-col h-full rounded-[2rem] p-8 border border-border/60 bg-card/40 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group animate-on-scroll ${stagger[index]} ${cardsAnimation.isVisible ? 'visible' : ''}`}>
                    
                    {/* Numbered Badge (Rotated) */}
                    <div className={`absolute -top-5 -left-5 sm:-top-6 sm:-left-6 flex h-14 w-14 items-center justify-center rounded-2xl ${step.badgeGradient} text-white font-bold shadow-lg text-2xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-300 ring-4 ring-background`}>
                      {index + 1}
                    </div>

                    <div className="text-center mt-4">
                      {/* Icon */}
                      <div className="inline-flex mb-8">
                        <div className={`flex h-20 w-20 items-center justify-center rounded-2xl ${step.iconGradient} shadow-inner ring-1 ring-white/5 group-hover:scale-110 transition-transform duration-500`}>
                          <Icon className={`h-10 w-10 ${step.iconColor}`} strokeWidth={1.5} />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">{step.title}</h3>
                      
                      {/* Description */}
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Mobile Connecting Arrow */}
                  {index < steps.length - 1 && (
                    <div className="flex md:hidden justify-center py-6">
                      <ArrowDown className="h-8 w-8 text-border animate-bounce" strokeWidth={1.5} />
                    </div>
                  )}

                  {/* Desktop Connecting Chevron */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:flex absolute top-[3.5rem] -right-4 lg:-right-6 items-center justify-center bg-background border border-border rounded-full p-2 z-20 shadow-sm text-muted-foreground">
                      <ChevronRight className="h-5 w-5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
