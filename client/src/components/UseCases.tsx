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
      description: 'Launch your own branded marketplace and sell alongside vetted partners',
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
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 mb-0 h-auto p-3 sm:p-4 bg-card/30 border-2 border-b-0 rounded-b-none" data-testid="tabs-use-cases">
            {Object.entries(useCases).map(([key, useCase]) => {
              const Icon = useCase.icon;
              return (
                <TabsTrigger 
                  key={key}
                  value={key} 
                  data-testid={`tab-${key}`}
                  className="flex flex-col items-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 px-2 data-[state=active]:bg-background data-[state=active]:shadow-sm min-h-[60px] sm:min-h-0"
                >
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-xs sm:text-sm font-semibold leading-tight text-center">{useCase.title}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {Object.entries(useCases).map(([key, useCase]) => (
            <TabsContent key={key} value={key} data-testid={`tab-content-${key}`}>
              <Card className="p-6 sm:p-8 md:p-10 border-2 border-t-0 rounded-t-none bg-card/30">
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 sm:mb-4">For {useCase.title}</h3>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{useCase.description}</p>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  {useCase.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1.5">
                        <div className="h-2 w-2 rounded-full bg-black" />
                      </div>
                      <span className="text-sm sm:text-base text-foreground font-medium">{benefit}</span>
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
