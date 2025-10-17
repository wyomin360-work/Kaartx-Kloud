import { SiShopify, SiFirebase, SiVercel, SiGoogleanalytics } from 'react-icons/si';
import { CreditCard, Package } from 'lucide-react';

export default function IntegrationsMarquee() {
  const integrations = [
    { name: 'Shopify', icon: SiShopify },
    { name: 'TAP', icon: CreditCard },
    { name: 'Firebase', icon: SiFirebase },
    { name: 'Asyad', icon: Package },
    { name: 'Vercel', icon: SiVercel },
    { name: 'Analytics', icon: SiGoogleanalytics },
  ];

  const doubledIntegrations = [...integrations, ...integrations];

  return (
    <section id="integrations" className="py-20 sm:py-32 border-y border-border/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-integrations-title">
            Integrations you need
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-integrations-subtitle">
            Connect with the tools and services you already use
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="flex animate-marquee" style={{ animation: 'marquee 30s linear infinite' }}>
          {doubledIntegrations.map((integration, index) => {
            const Icon = integration.icon;
            return (
              <div
                key={index}
                className="flex items-center justify-center min-w-[200px] mx-8"
                data-testid={`integration-${index}`}
              >
                <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
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
