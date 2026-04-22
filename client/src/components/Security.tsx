import {
  Shield,
  Lock,
  FileCheck,
  Database,
  UserCheck,
  Server,
} from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Security() {
  const features = [
    { icon: UserCheck, text: "Role-based access control" },
    { icon: FileCheck, text: "Seller approval workflows" },
    { icon: Lock, text: "Secure payment processing" },
    { icon: Shield, text: "Data encryption at rest" },
    { icon: Database, text: "Automated daily backups" },
    { icon: Server, text: "High availability architecture" },
  ];

  return (
    <section className="bg-background py-12 sm:py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-6">
        <div className="mb-10 text-center sm:mb-16 md:mb-20">
          <h2
            className="section-title mb-3 text-foreground sm:mb-4"
            data-testid="text-security-title"
          >
            Enterprise-grade security
          </h2>
          <p
            className="mx-auto max-w-3xl text-base font-normal text-muted-foreground sm:text-lg"
            data-testid="text-security-subtitle"
          >
            Built with hardened infrastructure, access controls, and
            compliance-ready architecture
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="hover-elevate flex items-center gap-5 p-8 transition-all"
                data-testid={`security-feature-${index}`}
              >
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border-2 border-primary/20 bg-primary/10">
                  <Icon className="h-7 w-7 text-primary" strokeWidth={2.5} />
                </div>
                <p className="whitespace-nowrap text-base font-semibold text-foreground">
                  {feature.text}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
