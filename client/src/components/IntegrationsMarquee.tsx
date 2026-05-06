import { SiShopify, SiFirebase, SiStripe } from "react-icons/si";
import { CreditCard, Package, Boxes, Plug } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function IntegrationsMarquee({ compact = false }: { compact?: boolean }) {
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

  const displayIntegrations = integrations;

  return (
    <section
      id="integrations"
      className={compact ? "w-full" : "scroll-mt-20 bg-background py-12 sm:py-20 md:py-32"}
    >
      <div className={compact ? "w-full" : "mx-auto max-w-7xl px-4 sm:px-5 md:px-6"}>
        <div
          ref={titleAnimation.ref}
          className={`animate-on-scroll flex ${compact ? "mb-6 flex-col items-start gap-4" : "mb-12 flex-col items-start justify-between gap-6 md:flex-row md:items-center sm:mb-16"} ${titleAnimation.isVisible ? "visible" : ""}`}
        >
          <div className={compact ? "w-full" : "w-full md:w-[55%]"}>
            <h2
              className={`${compact ? "text-2xl font-bold tracking-tight text-foreground sm:text-3xl" : "text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl"}`}
            >
              <span className="gradient-text">GCC-ready</span> integrations
            </h2>
          </div>
          <div className={`flex w-full flex-col items-start ${compact ? "" : "pt-2 md:w-[40%]"}`}>
            <div className={`${compact ? "mb-3" : "mb-5"} inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/50 px-3 py-1.5 shadow-sm`}>
              <Plug className="h-[14px] w-[14px] text-muted-foreground dark:text-slate-400" />
              <span className="text-[11px] font-semibold uppercase tracking-wide text-foreground dark:text-slate-200 sm:text-xs">
                Integrations
              </span>
            </div>
            <p
              className={`${compact ? "text-sm leading-relaxed" : "text-base leading-relaxed sm:text-lg"} font-medium text-muted-foreground`}
            >
              Payments and logistics integrations built for GCC commerce — ready
              out of the box
            </p>
          </div>
        </div>

        <div
          ref={cardsAnimation.ref}
          className={`animate-on-scroll relative w-full overflow-hidden ${compact ? "py-2" : "py-4"} ${cardsAnimation.isVisible ? "visible" : ""}`}
        >
          {/* Gradient masks for fading edges */}
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-20 w-8 sm:w-20 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-20 w-8 sm:w-20 bg-gradient-to-l from-background to-transparent" />

          <div className="pause-marquee group flex w-max" style={{ gap: compact ? "16px" : "24px" }}>
            <div className="animate-marquee flex shrink-0 items-start" style={{ gap: compact ? "16px" : "24px" }}>
              {displayIntegrations.map((integration, index) => {
                const Icon = integration.icon;
                return (
                  <Card
                    key={index}
                    className={`group relative overflow-hidden rounded-[20px] border border-slate-200/60 bg-white ${compact ? "p-4 sm:p-5" : "p-6 sm:p-7"} shadow-sm transition-all duration-300 hover:shadow-md dark:border-slate-800 dark:bg-card w-[260px] sm:w-[320px] shrink-0`}
                  >
                    {/* MUI-like hover ripple effect background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-50/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:to-slate-800/20" />
                    
                    <div className="relative z-10 flex flex-col justify-center">
                      <div className="flex items-center gap-4 transition-all duration-300">
                        <div
                          className={`rounded-2xl ${compact ? "p-2.5" : "p-3"} shadow-sm transition-transform duration-300 group-hover:scale-105 ${integration.featured ? "bg-primary/10" : "bg-slate-100 dark:bg-slate-800"}`}
                        >
                          <Icon
                            className={`${compact ? "h-5 w-5" : "h-6 w-6"} ${integration.featured ? "text-primary" : "text-slate-600 dark:text-slate-300"}`}
                          />
                        </div>
                        <div className="flex-1">
                          <h3
                            className={`${compact ? "text-[15px] sm:text-base" : "text-lg sm:text-xl"} font-bold tracking-tight text-slate-900 dark:text-slate-100`}
                          >
                            {integration.name}
                          </h3>
                        </div>
                      </div>

                      <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                        <div className="overflow-hidden">
                          <div className="pt-4 sm:pt-5">
                            <p
                              className={`${compact ? "mb-3 text-[12px] sm:text-[13px]" : "mb-4 text-[14px] sm:text-[15px]"} font-medium leading-relaxed text-slate-500 dark:text-slate-400`}
                            >
                              {integration.description}
                            </p>

                            <div className={`flex items-center justify-between border-t border-slate-100 ${compact ? "pt-2.5" : "pt-3.5"} dark:border-slate-800`}>
                              <div className="flex items-center gap-2">
                                <Boxes className="h-3.5 w-3.5 text-slate-400" />
                                <span
                                  className="text-[12px] font-semibold text-slate-500 dark:text-slate-400"
                                >
                                  {integration.category}
                                </span>
                              </div>
                              
                              <div className="flex items-center gap-1.5">
                                {integration.featured && (
                                  <Badge
                                    variant="default"
                                    className={`rounded-full px-2 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider shadow-sm`}
                                  >
                                    Featured
                                  </Badge>
                                )}
                                {integration.comingSoon && (
                                  <Badge
                                    variant="secondary"
                                    className={`rounded-full bg-slate-100 px-2 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:bg-slate-800 dark:text-slate-300`}
                                  >
                                    Soon
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
            
            <div className="animate-marquee flex shrink-0 items-start" aria-hidden="true" style={{ gap: compact ? "16px" : "24px" }}>
              {displayIntegrations.map((integration, index) => {
                const Icon = integration.icon;
                return (
                  <Card
                    key={index}
                    className={`group relative overflow-hidden rounded-[20px] border border-slate-200/60 bg-white ${compact ? "p-4 sm:p-5" : "p-6 sm:p-7"} shadow-sm transition-all duration-300 hover:shadow-md dark:border-slate-800 dark:bg-card w-[260px] sm:w-[320px] shrink-0`}
                  >
                    {/* MUI-like hover ripple effect background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-50/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:to-slate-800/20" />
                    
                    <div className="relative z-10 flex flex-col justify-center">
                      <div className="flex items-center gap-4 transition-all duration-300">
                        <div
                          className={`rounded-2xl ${compact ? "p-2.5" : "p-3"} shadow-sm transition-transform duration-300 group-hover:scale-105 ${integration.featured ? "bg-primary/10" : "bg-slate-100 dark:bg-slate-800"}`}
                        >
                          <Icon
                            className={`${compact ? "h-5 w-5" : "h-6 w-6"} ${integration.featured ? "text-primary" : "text-slate-600 dark:text-slate-300"}`}
                          />
                        </div>
                        <div className="flex-1">
                          <h3
                            className={`${compact ? "text-[15px] sm:text-base" : "text-lg sm:text-xl"} font-bold tracking-tight text-slate-900 dark:text-slate-100`}
                          >
                            {integration.name}
                          </h3>
                        </div>
                      </div>

                      <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                        <div className="overflow-hidden">
                          <div className="pt-4 sm:pt-5">
                            <p
                              className={`${compact ? "mb-3 text-[12px] sm:text-[13px]" : "mb-4 text-[14px] sm:text-[15px]"} font-medium leading-relaxed text-slate-500 dark:text-slate-400`}
                            >
                              {integration.description}
                            </p>

                            <div className={`flex items-center justify-between border-t border-slate-100 ${compact ? "pt-2.5" : "pt-3.5"} dark:border-slate-800`}>
                              <div className="flex items-center gap-2">
                                <Boxes className="h-3.5 w-3.5 text-slate-400" />
                                <span
                                  className="text-[12px] font-semibold text-slate-500 dark:text-slate-400"
                                >
                                  {integration.category}
                                </span>
                              </div>
                              
                              <div className="flex items-center gap-1.5">
                                {integration.featured && (
                                  <Badge
                                    variant="default"
                                    className={`rounded-full px-2 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider shadow-sm`}
                                  >
                                    Featured
                                  </Badge>
                                )}
                                {integration.comingSoon && (
                                  <Badge
                                    variant="secondary"
                                    className={`rounded-full bg-slate-100 px-2 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:bg-slate-800 dark:text-slate-300`}
                                  >
                                    Soon
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes integrationsMarquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(calc(-100% - ${compact ? "16px" : "24px"})); }
        }
        .animate-marquee {
          animation: integrationsMarquee 25s linear infinite;
        }
        .pause-marquee:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}
