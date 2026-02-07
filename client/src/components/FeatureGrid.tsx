import { Users, ListChecks, CreditCard, Settings } from 'lucide-react';
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
    <section id="feature-grid" className="py-12 sm:py-20 md:py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6">
        <div 
          ref={titleAnimation.ref}
          className={`text-center mb-10 sm:mb-16 animate-on-scroll ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          <h2 className="section-title text-foreground mb-3 sm:mb-4" data-testid="text-features-title">
            Powerful tools to manage your entire <span className="gradient-text">ecosystem</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-normal" data-testid="text-features-subtitle">
            From subscriptions to shipping automation — everything you need, already built in.
          </p>
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
