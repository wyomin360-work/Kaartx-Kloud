import {
  Shield,
  Lock,
  FileCheck,
  Database,
  UserCheck,
  Server,
  ShieldCheck,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Security() {
  const titleAnimation = useScrollAnimation<HTMLDivElement>(0.2);
  const cardsAnimation = useScrollAnimation<HTMLDivElement>(0.2);
  const features = [
    { icon: UserCheck, text: "Role-based access control" },
    { icon: FileCheck, text: "Seller approval workflows" },
    { icon: Lock, text: "Secure payment processing" },
    { icon: Shield, text: "Data encryption at rest" },
    { icon: Database, text: "Automated daily backups" },
    { icon: Server, text: "High availability architecture" },
  ];

  return (
    <section
      id="security"
      className={` transition-all duration-700 `}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-6">
        <div
          ref={titleAnimation.ref}
          className={`animate-on-scroll mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center sm:mb-16 ${titleAnimation.isVisible ? "visible" : ""}`}
        >
          <div className="w-full md:w-[55%]">
            <h2
              className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl"
              data-testid="text-security-title"
            >
              Enterprise-grade <span className="gradient-text">security</span>
            </h2>
          </div>
          
          <div className="flex w-full flex-col items-start pt-2 md:w-[40%]">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/50 px-3 py-1.5 shadow-sm">
              <ShieldCheck className="h-[14px] w-[14px] text-muted-foreground dark:text-slate-400" />
              <span className="text-[11px] font-semibold uppercase tracking-wide text-foreground dark:text-slate-200 sm:text-xs">
                Compliance
              </span>
            </div>
            <p
              className="text-base font-medium leading-relaxed text-muted-foreground sm:text-lg"
              data-testid="text-security-subtitle"
            >
              Built with hardened infrastructure, access controls, and
              compliance-ready architecture
            </p>
          </div>
        </div>

        <div
          ref={cardsAnimation.ref}
          className={`animate-on-scroll grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-6xl ${cardsAnimation.isVisible ? "visible" : ""}`}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden rounded-[24px] border border-slate-200/60 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-card"
                data-testid={`security-feature-${index}`}
              >
                {/* MUI-like hover ripple effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-50/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:to-slate-800/20" />
                
                <div className="relative z-10 flex items-center gap-5">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl shadow-sm transition-transform duration-300 group-hover:scale-105 bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" strokeWidth={2.5} />
                  </div>
                  <p className="text-base font-semibold leading-tight text-slate-900 dark:text-slate-100">
                    {feature.text}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
