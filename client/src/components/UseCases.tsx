import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Check, Building2, Rocket, ShoppingBag, Users, Building } from 'lucide-react';

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
        'Revenue sharing models built-in',
        'Centralized client management',
      ],
    },
    enterprises: {
      title: 'Enterprise',
      icon: Building,
      description: 'Enterprise-grade marketplace infrastructure with full customization',
      benefits: [
        'Dedicated infrastructure',
        'Custom integrations & workflows',
        'Priority support & SLA',
        'Advanced analytics & reporting',
      ],
    },
  };

  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground mb-4" data-testid="text-use-cases-title">
            Built for everyone
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium" data-testid="text-use-cases-subtitle">
            Whether you're a brand, startup, retailer, agency, or enterprise
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-5 mb-10 h-auto p-1 bg-muted/50" data-testid="tabs-use-cases">
            {Object.entries(useCases).map(([key, useCase]) => {
              const Icon = useCase.icon;
              return (
                <TabsTrigger 
                  key={key}
                  value={key} 
                  data-testid={`tab-${key}`}
                  className="flex flex-col items-center gap-2 py-3 data-[state=active]:bg-background data-[state=active]:shadow-sm"
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-sm font-semibold">{useCase.title}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {Object.entries(useCases).map(([key, useCase]) => (
            <TabsContent key={key} value={key} data-testid={`tab-content-${key}`}>
              <Card className="p-10 border-2">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-foreground mb-4">For {useCase.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{useCase.description}</p>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {useCase.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        <Check className="h-5 w-5 text-primary" strokeWidth={3} />
                      </div>
                      <span className="text-base text-foreground font-medium">{benefit}</span>
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
