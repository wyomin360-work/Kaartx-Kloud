import { SiShopify, SiFirebase, SiStripe } from "react-icons/si";
import { CreditCard, Package, Boxes, Plug } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function IntegrationsMarquee() {
  const titleAnimation = useScrollAnimation<HTMLDivElement>(0.2);
  const cardsAnimation = useScrollAnimation<HTMLDivElement>(0.2);

  const integrations = [
    {
      name: "TAP Payments",
      icon: CreditCard,
      featured: true,
      description: "MENA payment gateway",
      category: "Payments",
    },
    {
      name: "Asyad Express",
      icon: Package,
      featured: true,
      description: "Complete GCC shipping solution",
      category: "Logistics",
    },
    {
      name: "Shopify",
      icon: SiShopify,
      comingSoon: true,
      description: "Single-brand & catalog sync integration",
      category: "Platform",
    },
    {
      name: "Stripe",
      icon: SiStripe,
      comingSoon: true,
      description: "Global payment processing",
      category: "Payments",
    },
    {
      name: "Firebase",
      icon: SiFirebase,
      comingSoon: true,
      description: "Backend & authentication",
      category: "Infrastructure",
    },
    {
      name: "Custom APIs",
      icon: Plug,
      comingSoon: true,
      description: "Connect ERPs, CRMs, and internal systems",
      category: "Custom",
    },
  ];

  return (
    <section
      id="integrations"
      className="scroll-mt-20 bg-background py-12 sm:py-20 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-6">
        <div
          ref={titleAnimation.ref}
          className={`animate-on-scroll mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center sm:mb-16 ${titleAnimation.isVisible ? "visible" : ""}`}
        >
          <div className="w-full md:w-[55%]">
            <h2
              className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl"
              data-testid="text-integrations-title"
            >
              <span className="gradient-text">GCC-ready</span> integrations
            </h2>
          </div>
          <div className="flex w-full flex-col items-start pt-2 md:w-[40%]">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/50 px-3 py-1.5 shadow-sm">
              <Plug className="h-[14px] w-[14px] text-muted-foreground dark:text-slate-400" />
              <span className="text-[11px] font-semibold uppercase tracking-wide text-foreground dark:text-slate-200 sm:text-xs">
                Integrations
              </span>
            </div>
            <p
              className="text-base font-medium leading-relaxed text-muted-foreground sm:text-lg"
              data-testid="text-integrations-subtitle"
            >
              Payments and logistics integrations built for GCC commerce — ready
              out of the box
            </p>
          </div>
        </div>

        <div
          ref={cardsAnimation.ref}
          className={`animate-on-scroll grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ${cardsAnimation.isVisible ? "visible" : ""}`}
        >
          {integrations.map((integration, index) => {
            const Icon = integration.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden rounded-[24px] border border-slate-200/60 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-card"
                data-testid={`integration-card-${index}`}
              >
                {/* MUI-like hover ripple effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-50/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:to-slate-800/20" />
                
                <div className="relative z-10 mb-6 flex items-start justify-between">
                  <div
                    className={`rounded-2xl p-3.5 shadow-sm transition-transform duration-300 group-hover:scale-105 ${integration.featured ? "bg-primary/10" : "bg-slate-100 dark:bg-slate-800"}`}
                  >
                    <Icon
                      className={`h-7 w-7 ${integration.featured ? "text-primary" : "text-slate-600 dark:text-slate-300"}`}
                    />
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    {integration.featured && (
                      <Badge
                        variant="default"
                        className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider shadow-sm"
                        data-testid={`badge-featured-${index}`}
                      >
                        Featured
                      </Badge>
                    )}
                    {integration.comingSoon && (
                      <Badge
                        variant="secondary"
                        className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                        data-testid={`badge-coming-soon-${index}`}
                      >
                        Coming Soon
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="relative z-10">
                  <h3
                    className="mb-2.5 text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100"
                    data-testid={`text-integration-name-${index}`}
                  >
                    {integration.name}
                  </h3>

                  <p
                    className="mb-5 text-[15px] font-medium leading-relaxed text-slate-500 dark:text-slate-400"
                    data-testid={`text-integration-description-${index}`}
                  >
                    {integration.description}
                  </p>

                  <div className="flex items-center gap-2 border-t border-slate-100 pt-4 dark:border-slate-800">
                    <Boxes className="h-4 w-4 text-slate-400" />
                    <span
                      className="text-[13px] font-semibold text-slate-500 dark:text-slate-400"
                      data-testid={`text-integration-category-${index}`}
                    >
                      {integration.category}
                    </span>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
