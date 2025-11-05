import { Users, Package, CreditCard, Settings } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function FeatureGrid() {
  const features = [
    {
      icon: Users,
      title: 'Seller Management',
      description: 'Onboard, verify, and manage sellers with built-in approvals, subscriptions, and performance tracking.',
    },
    {
      icon: Package,
      title: 'Product Management',
      description: 'End-to-end listing workflow with variants, SKUs, and bulk uploads.',
      features: [
        'One / two-variant support',
        'Auto SKU generation',
        'Image quality standards',
        'Bulk editing tools'
      ]
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
    <section id="features" className="py-12 sm:py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6">
        <div 
          ref={titleAnimation.ref}
          className={`text-center mb-10 sm:mb-16 animate-on-scroll ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-3 sm:mb-4" data-testid="text-features-title">
            Everything to run a <span className="gradient-text">marketplace</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium" data-testid="text-features-subtitle">
            From seller onboarding to payouts — all the tools you need in one platform
          </p>
        </div>

        <div 
          ref={cardsAnimation.ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const gradients = ['gradient-bg-purple', 'gradient-bg-blue', 'gradient-bg-purple', 'gradient-bg-blue'];
            const stagger = ['', 'stagger-1', 'stagger-2', 'stagger-3'];
            return (
              <Card
                key={index}
                className={`hover-elevate transition-all duration-300 hover:scale-105 rounded-2xl border-2 ${gradients[index]} animate-on-scroll ${stagger[index]} ${cardsAnimation.isVisible ? 'visible' : ''}`}
                data-testid={`card-feature-${index}`}
              >
                <CardHeader>
                  <div className="h-14 w-14 rounded-2xl bg-white shadow-playful flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2 font-bold">{feature.title}</CardTitle>
                  <CardDescription className="font-medium mb-4">{feature.description}</CardDescription>
                  
                  {feature.features && (
                    <ul className="space-y-2 mt-3">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
