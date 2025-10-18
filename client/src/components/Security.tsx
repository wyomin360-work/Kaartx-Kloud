import { Shield, Lock, FileCheck, Database, UserCheck } from 'lucide-react';

export default function Security() {
  const features = [
    { icon: UserCheck, text: 'Role-based access control' },
    { icon: FileCheck, text: 'Seller approval workflows' },
    { icon: Lock, text: 'Secure payment processing' },
    { icon: Shield, text: 'Data encryption at rest' },
    { icon: Database, text: 'Automated daily backups' },
  ];

  return (
    <section className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-security-title">
            Enterprise-grade security
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-security-subtitle">
            Your marketplace and seller data protected with bank-level security
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-4 p-6 rounded-lg bg-card hover-elevate transition-all"
                data-testid={`security-feature-${index}`}
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-foreground">{feature.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
