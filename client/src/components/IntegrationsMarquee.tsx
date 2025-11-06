import { SiShopify, SiFirebase, SiStripe } from 'react-icons/si';
import { CreditCard, Package, Boxes, Plug } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function IntegrationsMarquee() {
  const titleAnimation = useScrollAnimation<HTMLDivElement>(0.2);
  const cardsAnimation = useScrollAnimation<HTMLDivElement>(0.2);

  const integrations = [
    { 
      name: 'Asyad Express', 
      icon: Package, 
      featured: true,
      description: 'Complete GCC shipping solution',
      category: 'Logistics'
    },
    { 
      name: 'TAP Payments', 
      icon: CreditCard, 
      featured: true,
      description: 'MENA payment gateway',
      category: 'Payments'
    },
    { 
      name: 'Shopify', 
      icon: SiShopify,
      comingSoon: true,
      description: 'E-commerce platform integration',
      category: 'Platform'
    },
    { 
      name: 'Stripe', 
      icon: SiStripe,
      comingSoon: true,
      description: 'Global payment processing',
      category: 'Payments'
    },
    { 
      name: 'Firebase', 
      icon: SiFirebase,
      comingSoon: true,
      description: 'Backend & authentication',
      category: 'Infrastructure'
    },
    { 
      name: 'Custom APIs', 
      icon: Plug,
      comingSoon: true,
      description: 'Connect your existing tools',
      category: 'Custom'
    },
  ];

  return (
    <section id="integrations" className="py-12 sm:py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6">
        <div 
          ref={titleAnimation.ref}
          className={`text-center mb-10 sm:mb-16 animate-on-scroll ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4" data-testid="text-integrations-title">
            GCC-ready integrations
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-integrations-subtitle">
            TAP & Asyad integrated out of the box — plus easy connections to your existing tools
          </p>
        </div>

        <div 
          ref={cardsAnimation.ref}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-on-scroll ${cardsAnimation.isVisible ? 'visible' : ''}`}
        >
          {integrations.map((integration, index) => {
            const Icon = integration.icon;
            return (
              <Card
                key={index}
                className="p-6 hover-elevate transition-all duration-300 border-border/50"
                data-testid={`integration-card-${index}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-md ${integration.featured ? 'bg-primary/10' : 'bg-muted'}`}>
                    <Icon className={`h-6 w-6 ${integration.featured ? 'text-primary' : 'text-foreground'}`} />
                  </div>
                  {integration.featured && (
                    <Badge variant="default" className="text-xs" data-testid={`badge-featured-${index}`}>
                      Featured
                    </Badge>
                  )}
                  {integration.comingSoon && (
                    <Badge variant="secondary" className="text-xs" data-testid={`badge-coming-soon-${index}`}>
                      Coming Soon
                    </Badge>
                  )}
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2" data-testid={`text-integration-name-${index}`}>
                  {integration.name}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-3" data-testid={`text-integration-description-${index}`}>
                  {integration.description}
                </p>
                
                <div className="flex items-center gap-2">
                  <Boxes className="h-3.5 w-3.5 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground" data-testid={`text-integration-category-${index}`}>
                    {integration.category}
                  </span>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
