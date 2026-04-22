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
          className={`animate-on-scroll mb-10 text-center sm:mb-16 ${titleAnimation.isVisible ? "visible" : ""}`}
        >
          <h2
            className="section-title mb-3 text-foreground sm:mb-4"
            data-testid="text-integrations-title"
          >
            GCC-ready integrations
          </h2>
          <p
            className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg"
            data-testid="text-integrations-subtitle"
          >
            Payments and logistics integrations built for GCC commerce — ready
            out of the box
          </p>
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
                className="hover-elevate border-border/50 p-6 transition-all duration-300"
                data-testid={`integration-card-${index}`}
              >
                <div className="mb-4 flex items-start justify-between">
                  <div
                    className={`rounded-md p-3 ${integration.featured ? "bg-primary/10" : "bg-muted"}`}
                  >
                    <Icon
                      className={`h-6 w-6 ${integration.featured ? "text-primary" : "text-foreground"}`}
                    />
                  </div>
                  {integration.featured && (
                    <Badge
                      variant="default"
                      className="text-xs"
                      data-testid={`badge-featured-${index}`}
                    >
                      Featured
                    </Badge>
                  )}
                  {integration.comingSoon && (
                    <Badge
                      variant="secondary"
                      className="text-xs"
                      data-testid={`badge-coming-soon-${index}`}
                    >
                      Coming Soon
                    </Badge>
                  )}
                </div>

                <h3
                  className="mb-2 text-lg font-semibold text-foreground"
                  data-testid={`text-integration-name-${index}`}
                >
                  {integration.name}
                </h3>

                <p
                  className="mb-3 text-sm text-muted-foreground"
                  data-testid={`text-integration-description-${index}`}
                >
                  {integration.description}
                </p>

                <div className="flex items-center gap-2">
                  <Boxes className="h-3.5 w-3.5 text-muted-foreground" />
                  <span
                    className="text-xs text-muted-foreground"
                    data-testid={`text-integration-category-${index}`}
                  >
                    {integration.category}
                  </span>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
