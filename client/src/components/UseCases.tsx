import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';

export default function UseCases() {
  const [activeTab, setActiveTab] = useState('sellers');

  const useCases = {
    sellers: {
      title: 'For Sellers',
      description: 'Expand your reach and manage multiple sales channels from one platform',
      benefits: [
        'Multi-channel inventory sync',
        'Automated order processing',
        'Real-time analytics dashboard',
        'Integrated payment solutions',
      ],
    },
    brands: {
      title: 'For Brands',
      description: 'Launch your own branded marketplace and control the customer experience',
      benefits: [
        'White-label marketplace',
        'Brand protection controls',
        'Custom seller onboarding',
        'Full data ownership',
      ],
    },
    enterprises: {
      title: 'For Enterprises',
      description: 'Scale your marketplace operations with enterprise-grade infrastructure',
      benefits: [
        'Dedicated infrastructure',
        'Advanced API access',
        'Priority support',
        'Custom integrations',
      ],
    },
    agencies: {
      title: 'For Agencies',
      description: 'Build and manage marketplaces for your clients with ease',
      benefits: [
        'Multi-tenant management',
        'White-label solutions',
        'Revenue sharing models',
        'Agency dashboard',
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
            Whether you're a seller, brand, enterprise, or agency — we've got you covered
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 mb-8" data-testid="tabs-use-cases">
            <TabsTrigger value="sellers" data-testid="tab-sellers">Sellers</TabsTrigger>
            <TabsTrigger value="brands" data-testid="tab-brands">Brands</TabsTrigger>
            <TabsTrigger value="enterprises" data-testid="tab-enterprises">Enterprises</TabsTrigger>
            <TabsTrigger value="agencies" data-testid="tab-agencies">Agencies</TabsTrigger>
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
