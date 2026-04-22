import { Users, ListChecks, CreditCard, Settings, Package } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function FeatureGrid() {
  const features = [
    {
      icon: Users,
      title: "Store & Seller Control",
      description:
        "Manage your store or onboard sellers with built-in approvals, subscriptions, and performance tracking.",
    },
    {
      icon: ListChecks,
      title: "Product Listing Flow",
      description:
        "Streamlined product listing system with variants, SKUs, and bulk uploads — ready for any category.",
    },
    {
      icon: CreditCard,
      title: "Auto Payouts",
      description:
        "Built-in payout engine with customizable cycles and full TAP integration.",
    },
    {
      icon: Settings,
      title: "Smart Workflows",
      description:
        "Automate orders, returns, and tracking with real-time updates and smart notifications.",
    },
  ];

  const titleAnimation = useScrollAnimation<HTMLDivElement>(0.2);
  const cardsAnimation = useScrollAnimation<HTMLDivElement>(0.1);

  return (
    <section id="feature-grid" className="relative overflow-hidden sm:pb-8">
      <div className="bg-grid-subtle mask-radial-fade pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative z-10 mx-auto max-w-7xl border-x border-border/10 px-4 sm:px-5 md:px-6">
        <div
          ref={titleAnimation.ref}
          className={`animate-on-scroll mb-12 flex flex-col items-start justify-between gap-8 pt-8 sm:mb-20 md:flex-row md:gap-16 ${titleAnimation.isVisible ? "visible" : ""}`}
        >
          {/* Left Column: Prominent Title */}
          <div className="w-full md:w-[55%]">
            <h2
              className="text-4xl font-extrabold leading-[1.15] tracking-tight text-foreground sm:text-5xl lg:text-5xl"
              data-testid="text-features-title"
            >
              Everything to run your
              <br className="hidden md:block" />
              <span className="gradient-text"> commerce business</span>
            </h2>
          </div>

          {/* Right Column: Pill & Subtitle */}
          <div className="flex w-full flex-col items-start pt-2 md:w-[40%]">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/50 px-3 py-1.5 shadow-sm">
              <Package className="h-[14px] w-[14px] text-muted-foreground" />
              <span className="text-[11px] font-semibold uppercase tracking-wide text-foreground sm:text-xs">
                Key features
              </span>
            </div>
            <p
              className="text-base font-medium leading-relaxed text-muted-foreground sm:text-sm md:text-base"
              data-testid="text-features-subtitle"
            >
              From product management to payouts, all the tools you need in one
              powerful platform to scale your entire marketplace flawlessly.
            </p>
          </div>
        </div>

        <div
          ref={cardsAnimation.ref}
          className="feature-carousel scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:pb-0 lg:grid-cols-4"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const gradients = [
              "gradient-bg-purple",
              "gradient-bg-blue",
              "gradient-bg-purple",
              "gradient-bg-blue",
            ];
            const stagger = ["", "stagger-1", "stagger-2", "stagger-3"];
            return (
              <Card
                key={index}
                className={`hover-elevate w-[80vw] flex-shrink-0 snap-center rounded-2xl border-2 transition-all duration-300 hover:scale-105 md:w-auto md:flex-shrink ${gradients[index]} animate-on-scroll ${stagger[index]} ${cardsAnimation.isVisible ? "visible" : ""}`}
                data-testid={`card-feature-${index}`}
              >
                <CardHeader>
                  <div className="shadow-playful mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="mb-2 text-xl font-bold">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="font-medium">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
