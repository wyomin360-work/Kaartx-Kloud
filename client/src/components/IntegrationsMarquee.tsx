import { SiShopify, SiFirebase, SiStripe } from 'react-icons/si';
import { CreditCard, Package, ShoppingBag, Truck } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function IntegrationsMarquee() {
  const titleAnimation = useScrollAnimation<HTMLDivElement>(0.2);
  const marqueeAnimation = useScrollAnimation<HTMLDivElement>(0.2);

  const integrations = [
    { name: 'TAP Payments', icon: CreditCard, featured: true },
    { name: 'Asyad Shipping', icon: Package, featured: true },
    { name: 'Shopify', icon: SiShopify },
    { name: 'Stripe', icon: SiStripe },
    { name: 'Firebase', icon: SiFirebase },
    { name: 'Custom APIs', icon: Truck },
  ];

  const doubledIntegrations = [...integrations, ...integrations];

  return (
    <section id="integrations" className="py-20 sm:py-32 border-y border-border/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 mb-12">
        <div 
          ref={titleAnimation.ref}
          className={`text-center animate-on-scroll ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-integrations-title">
            GCC-ready integrations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-integrations-subtitle">
            TAP & Asyad integrated out of the box — plus easy connections to your existing tools
          </p>
        </div>
      </div>

      <div 
        ref={marqueeAnimation.ref}
        className={`relative animate-fade-in ${marqueeAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="flex animate-marquee" style={{ animation: 'marquee 30s linear infinite' }}>
          {doubledIntegrations.map((integration, index) => {
            const Icon = integration.icon;
            return (
              <div
                key={index}
                className="flex items-center justify-center min-w-[200px] mx-8"
                data-testid={`integration-${index}`}
              >
                <div className={`flex items-center gap-3 ${integration.featured ? 'text-primary' : 'text-muted-foreground'} hover:text-primary transition-colors`}>
                  <Icon className="h-8 w-8" />
                  <span className="text-lg font-medium">{integration.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
