import { Card } from '@/components/ui/card';
import { TrendingUp, Users, Clock } from 'lucide-react';

export default function CaseStudy() {
  const metrics = [
    { icon: TrendingUp, label: 'Seller Growth', value: '+40%' },
    { icon: Clock, label: 'Faster Onboarding', value: '2x' },
    { icon: Users, label: 'Active Sellers', value: '1,250' },
  ];

  return (
    <section className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="p-8 sm:p-12 bg-gradient-to-br from-primary/5 to-card">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-case-study-title">
                How MarketHub scaled to 1,250 sellers
              </h2>
              <p className="text-lg text-muted-foreground" data-testid="text-case-study-description">
                By leveraging Kaartx Cloud's automation and API-first approach, MarketHub achieved unprecedented growth while reducing operational overhead.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <div key={index} className="text-center" data-testid={`metric-${index}`}>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2" data-testid={`text-metric-value-${index}`}>
                      {metric.value}
                    </div>
                    <div className="text-sm text-muted-foreground" data-testid={`text-metric-label-${index}`}>
                      {metric.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
