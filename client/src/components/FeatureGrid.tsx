import { Users, ListChecks, CreditCard, Settings, Package } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function FeatureGrid() {
  const features = [
    {
      icon: Users,
      title: 'Store & Seller Control',
      description: 'Manage your store or onboard sellers with built-in approvals, subscriptions, and performance tracking.',
    },
    {
      icon: ListChecks,
      title: 'Product Listing Flow',
      description: 'Streamlined product listing system with variants, SKUs, and bulk uploads — ready for any category.',
    },
    {
      icon: CreditCard,
      title: 'Auto Payouts',
      description: 'Built-in payout engine with customizable cycles and full TAP integration.',
    },
    {
      icon: Settings,
      title: 'Smart Workflows',
      description: 'Automate orders, returns, and tracking with real-time updates and smart notifications.',
    },
  ];

  const titleAnimation = useScrollAnimation<HTMLDivElement>(0.2);
  const cardsAnimation = useScrollAnimation<HTMLDivElement>(0.1);

  return (
    <section id="feature-grid" className="relative sm:pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-grid-subtle mask-radial-fade opacity-60 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-5 md:px-6 z-10 border-x border-border/10">
        <div 
          ref={titleAnimation.ref}
          className={`flex flex-col md:flex-row justify-between items-start gap-8 md:gap-16 mb-12 sm:mb-20 pt-8 animate-on-scroll ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          {/* Left Column: Prominent Title */}
          <div className="w-full md:w-[55%]">
            <h2 
              className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15]" 
              data-testid="text-features-title"
            >
              Everything to run your<br className="hidden md:block" />
              <span className="gradient-text"> commerce business</span>
            </h2>
          </div>

          {/* Right Column: Pill & Subtitle */}
          <div className="w-full md:w-[40%] flex flex-col items-start pt-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/80 bg-background/50 shadow-sm mb-5">
              <Package className="w-[14px] h-[14px] text-muted-foreground" />
              <span className="text-[11px] sm:text-xs font-semibold text-foreground tracking-wide uppercase">Key features</span>
            </div>
            <p 
              className="text-base sm:text-sm md:text-base text-muted-foreground font-medium leading-relaxed" 
              data-testid="text-features-subtitle"
            >
              From product management to payouts, all the tools you need in one powerful platform to scale your entire marketplace flawlessly.
            </p>
          </div>
        </div>

        <div 
          ref={cardsAnimation.ref}
          className="feature-carousel flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:pb-0 md:overflow-visible scrollbar-hide"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const gradients = ['gradient-bg-purple', 'gradient-bg-blue', 'gradient-bg-purple', 'gradient-bg-blue'];
            const stagger = ['', 'stagger-1', 'stagger-2', 'stagger-3'];
            return (
              <Card
                key={index}
                className={`flex-shrink-0 w-[80vw] snap-center md:w-auto md:flex-shrink hover-elevate transition-all duration-300 hover:scale-105 rounded-2xl border-2 ${gradients[index]} animate-on-scroll ${stagger[index]} ${cardsAnimation.isVisible ? 'visible' : ''}`}
                data-testid={`card-feature-${index}`}
              >
                <CardHeader>
                  <div className="h-14 w-14 rounded-2xl bg-white shadow-playful flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2 font-bold">{feature.title}</CardTitle>
                  <CardDescription className="font-medium">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
