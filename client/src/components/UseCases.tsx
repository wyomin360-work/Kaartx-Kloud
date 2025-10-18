import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';

export default function UseCases() {
  const [activeTab, setActiveTab] = useState('brands');

  const useCases = {
    brands: {
      title: 'For Brands',
      description: 'Launch your own branded marketplace and sell alongside vetted partners',
      benefits: [
        'Full white-label control',
        'Maintain brand standards with approval workflows',
        'Earn commissions from partner sellers',
        'Own your customer relationships',
      ],
    },
    startups: {
      title: 'For Startups',
      description: 'Build your marketplace idea without massive upfront development costs',
      benefits: [
        'Launch in days, not months',
        'Subscription-based pricing',
        'Scale as you grow',
        'GCC payment integrations ready',
      ],
    },
    retail: {
      title: 'For Retailers',
      description: 'Transform your retail business into a multi-vendor marketplace',
      benefits: [
        'Expand product range without inventory',
        'Automated seller payouts',
        'Tap & Asyad integrations included',
        'Mobile-ready storefronts',
      ],
    },
    agencies: {
      title: 'For Agencies',
      description: 'Build and manage marketplaces for multiple clients with ease',
      benefits: [
        'Multi-tenant architecture',
        'White-label for each client',
        'Revenue sharing models built-in',
        'Centralized client management',
      ],
    },
    enterprises: {
      title: 'For Enterprises',
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
    <section className="py-20 sm:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-use-cases-title">
            Built for everyone
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-use-cases-subtitle">
            Whether you're a brand, startup, retailer, agency, or enterprise
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-5 mb-8" data-testid="tabs-use-cases">
            <TabsTrigger value="brands" data-testid="tab-brands">Brands</TabsTrigger>
            <TabsTrigger value="startups" data-testid="tab-startups">Startups</TabsTrigger>
            <TabsTrigger value="retail" data-testid="tab-retail">Retail</TabsTrigger>
            <TabsTrigger value="agencies" data-testid="tab-agencies">Agencies</TabsTrigger>
            <TabsTrigger value="enterprises" data-testid="tab-enterprises">Enterprise</TabsTrigger>
          </TabsList>

          {Object.entries(useCases).map(([key, useCase]) => (
            <TabsContent key={key} value={key} data-testid={`tab-content-${key}`}>
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-3">{useCase.title}</h3>
                <p className="text-muted-foreground mb-6">{useCase.description}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {useCase.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mr-3" />
                      {benefit}
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
