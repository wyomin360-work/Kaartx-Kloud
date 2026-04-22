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
    <section className=" relative overflow-hidden bg-background pb-3">
      {/* Background ambient light */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 border-x border-border/10">
        <div 
          ref={titleAnimation.ref}
          className={`mb-20 pt-8 animate-on-scroll ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          {/* Centered Pill element with Animating Arrow */}
          <div className="w-full flex flex-col items-center justify-center mb-10 sm:mb-16 relative">
            <div className="pt-4inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/80 bg-background/50 shadow-sm z-10">
              <Rocket className="w-[14px] h-[14px] text-muted-foreground" />
              <span className="text-[11px] sm:text-xs font-semibold text-foreground tracking-wide uppercase">Simple Process</span>
            </div>
            
            {/* Connecting line to Bouncing Arrow */}
            <div className="absolute top-full mt-2 flex flex-col items-center">
              <div className="w-[1px] h-6 sm:h-8 bg-gradient-to-b from-border/80 to-transparent" />
              <ArrowDown className="w-5 h-5 text-muted-foreground/60 animate-bounce -mt-1" strokeWidth={1.5} />
            </div>
          </div>

          {/* Two-column layout matching FeatureGrid */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-16 mt-4">
            {/* Left Column: Prominent Title */}
            <div className="w-full md:w-[55%]">
              <h2 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15]">
                Launch in 
                <span className="gradient-text"> 3 simple steps</span>
              </h2>
            </div>
            
            {/* Right Column: Description Text */}
            <div className="w-full md:w-[40%] flex flex-col items-start pt-2">
              <p className="text-base sm:text-sm md:text-base text-muted-foreground font-medium leading-relaxed">
                From idea to live store faster than you think. No technical skills required. We handle the complexity so you can focus on building your brand and driving sales securely.
              </p>
            </div>
          </div>
        </div>

        <div 
          ref={cardsAnimation.ref}
          className="relative max-w-5xl mx-auto pb-10"
        >
          {/* Desktop connecting horizontal line - Aligned to intersect the top badges (top padding 2.5rem + half badge 1.5rem = 4rem top) */}
          <div className="hidden md:block absolute top-[4rem] left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-blue-500/0 via-border/60 to-teal-500/0 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 lg:gap-10 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const stagger = ['', 'stagger-1', 'stagger-2'];
              
              return (
                <div key={index} className="relative flex flex-col items-stretch h-full">
                  <div className={`w-full relative flex flex-col h-full rounded-[2.5rem] p-8 sm:p-10 border border-border/60 bg-card/50 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 group animate-on-scroll ${stagger[index]} ${cardsAnimation.isVisible ? 'visible' : ''}`}>
                    
                    {/* Top Row: Number Badge and Icon arranged inside the card */}
                    <div className="flex justify-between items-center mb-8 relative z-10 w-full">
                      {/* Integrated Number Badge */}
                      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${step.badgeGradient} text-white font-black shadow-md text-xl transform group-hover:scale-110 transition-transform duration-300 ring-4 ring-background/50`}>
                        0{index + 1}
                      </div>

                      {/* Integrated Icon */}
                      <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${step.iconGradient} shadow-inner ring-1 ring-white/10 group-hover:rotate-12 transition-transform duration-500`}>
                        <Icon className={`h-6 w-6 ${step.iconColor}`} strokeWidth={2} />
                      </div>
                    </div>

                    <div className="text-left flex-grow flex flex-col">
                      {/* Title */}
                      <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">{step.title}</h3>
                      
                      {/* Description */}
                      <p className="text-base text-muted-foreground font-medium leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Mobile Connecting Arrow */}
                  {index < steps.length - 1 && (
                    <div className="flex md:hidden justify-center py-6 relative z-0">
                      <ArrowDown className="h-8 w-8 text-border animate-bounce" strokeWidth={1.5} />
                    </div>
                  )}

                  {/* Desktop Connecting Chevron - Positioned on the connecting line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:flex absolute top-[3rem] -right-4 lg:-right-5 items-center justify-center bg-background border border-border/80 rounded-full p-2 z-20 shadow-sm text-muted-foreground/50">
                      <ChevronRight className="h-4 w-4" strokeWidth={3} />
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
