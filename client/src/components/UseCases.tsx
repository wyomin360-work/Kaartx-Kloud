import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Building2, Rocket, ShoppingBag, Users, Building } from 'lucide-react';

export default function UseCases() {
  const [activeTab, setActiveTab] = useState('brands');

  const useCases = {
    brands: {
      title: 'Brands',
      icon: Building2,
      description: 'Launch your own branded store or marketplace and scale with full control',
      benefits: [
        'Full white-label control',
        'Maintain brand standards with approval workflows',
        'Earn commissions from partner sellers',
        'Own your customer relationships',
      ],
    },
    startups: {
      title: 'Startups',
      icon: Rocket,
      description: 'Build your marketplace idea without massive upfront development costs',
      benefits: [
        'Launch in days, not months',
        'Subscription-based pricing',
        'Scale as you grow',
        'GCC payment integrations ready',
      ],
    },
    retail: {
      title: 'Retailers',
      icon: ShoppingBag,
      description: 'Transform your retail business into a multi-vendor marketplace',
      benefits: [
        'Expand product range without inventory',
        'Automated seller payouts',
        'Tap & Asyad integrations included',
        'Mobile-ready storefronts',
      ],
    },
    agencies: {
      title: 'Agencies',
      icon: Users,
      description: 'Build and manage marketplaces for multiple clients with ease',
      benefits: [
        'Multi-tenant architecture',
        'White-label for each client',
        'Revenue sharing ready architecture',
        'Centralized client management',
      ],
    },
    enterprises: {
      title: 'Enterprise',
      icon: Building,
      description: 'Enterprise-grade marketplace infrastructure with full customization',
      benefits: [
        'Dedicated infrastructure (on request)',
        'Custom integrations & workflows',
        'Priority support & SLA',
        'Advanced analytics & reporting',
      ],
    },
  };

  return (
    <section className="py-12 sm:py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="section-title text-foreground mb-3 sm:mb-4" data-testid="text-use-cases-title">
            Built for everyone
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto font-normal" data-testid="text-use-cases-subtitle">
            Whether you're a brand, startup, retailer, agency, or enterprise
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
          <TabsList className="flex flex-col md:grid md:grid-cols-5 w-full gap-2 mb-0 h-auto p-3 sm:p-4 bg-card/30 border-2 border-b-0 rounded-b-none" data-testid="tabs-use-cases">
            {/* 2x2 grid for first 4 items on mobile, part of 5-col grid on desktop */}
            <div className="grid grid-cols-2 md:contents gap-2 w-full">
              {Object.entries(useCases).slice(0, 4).map(([key, useCase]) => {
                const Icon = useCase.icon;
                return (
                  <TabsTrigger 
                    key={key}
                    value={key} 
                    data-testid={`tab-${key}`}
                    className="flex flex-col items-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 px-2 border-2 border-transparent data-[state=active]:bg-background data-[state=active]:shadow-sm data-[state=active]:border-muted-foreground/40 min-h-[60px] sm:min-h-0"
                  >
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="text-xs sm:text-sm font-semibold leading-tight text-center">{useCase.title}</span>
                  </TabsTrigger>
                );
              })}
            </div>
            {/* Enterprise: full-width centered on mobile, part of grid on desktop */}
            {(() => {
              const enterpriseEntry = Object.entries(useCases).find(([key]) => key === 'enterprises');
              if (!enterpriseEntry) return null;
              const [key, useCase] = enterpriseEntry;
              const Icon = useCase.icon;
              return (
                <TabsTrigger 
                  key={key}
                  value={key} 
                  data-testid={`tab-${key}`}
                  className="flex flex-col items-center justify-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 px-2 border-2 border-transparent data-[state=active]:bg-background data-[state=active]:shadow-sm data-[state=active]:border-muted-foreground/40 min-h-[60px] sm:min-h-0 w-full md:w-auto"
                >
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-xs sm:text-sm font-semibold leading-tight text-center">{useCase.title}</span>
                </TabsTrigger>
              );
            })()}
          </TabsList>

          {Object.entries(useCases).map(([key, useCase]) => (
            <TabsContent key={key} value={key} data-testid={`tab-content-${key}`}>
              <Card className="p-5 sm:p-6 md:p-8 border-2 border-t-0 rounded-t-none bg-card/30">
                <div className="mb-5 sm:mb-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2">For {useCase.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">{useCase.description}</p>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                  {useCase.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-baseline gap-2.5">
                      <div className="flex-shrink-0">
                        <div className="h-1.5 w-1.5 rounded-full bg-black" />
                      </div>
                      <span className="text-sm text-foreground leading-snug">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
