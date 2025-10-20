import { Card } from '@/components/ui/card';
import { TrendingUp, Users, Clock } from 'lucide-react';

export default function CaseStudy() {
  const metrics = [
    { icon: TrendingUp, label: 'Revenue Growth', value: '+180%' },
    { icon: Clock, label: 'Time to Launch', value: '3 weeks' },
    { icon: Users, label: 'Active Sellers', value: '450+' },
  ];

  return (
    <section className="py-12 sm:py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6">
        <Card className="p-8 sm:p-12 bg-gradient-to-br from-primary/5 to-card">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-case-study-title">
                How Oman Fashion Hub scaled to 450+ sellers
              </h2>
              <p className="text-lg text-muted-foreground" data-testid="text-case-study-description">
                Using Kaartx Cloud's automated seller onboarding and subscription management, they launched in 3 weeks and grew revenue by 180% in 6 months.
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
