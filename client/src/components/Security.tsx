import { Shield, Lock, FileCheck, Database, UserCheck } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function Security() {
  const features = [
    { icon: UserCheck, text: 'Role-based access control' },
    { icon: FileCheck, text: 'Seller approval workflows' },
    { icon: Lock, text: 'Secure payment processing' },
    { icon: Shield, text: 'Data encryption at rest' },
    { icon: Database, text: 'Automated daily backups' },
  ];

  return (
    <section className="py-12 sm:py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6">
        <div className="text-center mb-10 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-3 sm:mb-4" data-testid="text-security-title">
            Enterprise-grade security
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-medium" data-testid="text-security-subtitle">
            Your marketplace and seller data protected with bank-level security
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="flex items-center gap-5 p-8 hover-elevate transition-all"
                data-testid={`security-feature-${index}`}
              >
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 border-2 border-primary/20">
                  <Icon className="h-7 w-7 text-primary" strokeWidth={2.5} />
                </div>
                <p className="text-base font-semibold text-foreground">{feature.text}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
