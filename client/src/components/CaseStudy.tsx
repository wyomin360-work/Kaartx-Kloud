import { Card } from "@/components/ui/card";
import { TrendingUp, Clock, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function CaseStudy() {
  const titleAnimation = useScrollAnimation<HTMLDivElement>(0.2);
  const cardsAnimation = useScrollAnimation<HTMLDivElement>(0.2);

  const metrics = [
    {
      icon: TrendingUp,
      value: "Faster",
      label: "Seller Growth",
      description:
        "Streamlined onboarding and automated subscriptions reduce friction.",
    },
    {
      icon: Clock,
      value: "Weeks",
      label: "Not Months",
      description:
        "Pre-built marketplace modules ready to deploy with minimal setup.",
    },
    {
      icon: Users,
      value: "Scale",
      label: "Ready",
      description:
        "Robust infrastructure designed to support growing seller networks.",
    },
  ];

  return (
    <section className="bg-card/20 py-12 sm:py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-6">
        <div
          ref={titleAnimation.ref}
          className={`animate-on-scroll mb-12 text-center sm:mb-20 ${titleAnimation.isVisible ? "visible" : ""}`}
        >
          <h2
            className="section-title mb-4 text-foreground sm:mb-5"
            data-testid="text-case-study-title"
          >
            Scalable results — optimized for growth
          </h2>
          <p
            className="mx-auto max-w-3xl text-base font-normal leading-relaxed text-muted-foreground sm:text-lg"
            data-testid="text-case-study-subtitle"
          >
            Kaartx Kloud automates everything from seller onboarding to payouts,
            helping marketplaces across the GCC launch faster and grow smarter.
          </p>
        </div>

        <div
          ref={cardsAnimation.ref}
          className={`animate-on-scroll mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3 md:gap-10 ${cardsAnimation.isVisible ? "visible" : ""}`}
        >
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            const stagger = ["", "stagger-1", "stagger-2"];

            return (
              <Card
                key={index}
                className={`!rounded-2xl border-border/60 bg-background p-8 transition-all duration-300 sm:p-10 ${stagger[index]}`}
                data-testid={`metric-card-${index}`}
              >
                <div className="space-y-5 text-center">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-border/40 bg-white">
                    <Icon className="h-8 w-8 text-foreground/80" />
                  </div>
                  <div className="space-y-2">
                    <div
                      className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
                      data-testid={`text-metric-value-${index}`}
                    >
                      {metric.value}
                    </div>
                    <div
                      className="text-base font-semibold text-foreground/90"
                      data-testid={`text-metric-label-${index}`}
                    >
                      {metric.label}
                    </div>
                  </div>
                  <p
                    className="pt-1 text-sm leading-relaxed text-muted-foreground"
                    data-testid={`text-metric-description-${index}`}
                  >
                    {metric.description}
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
