import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Testimonials() {
  const titleAnimation = useScrollAnimation<HTMLDivElement>(0.2);
  const cardAnimation = useScrollAnimation<HTMLDivElement>(0.2);

  return (
    <section className="bg-background py-12 sm:py-20 md:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-5 md:px-6">
        <div
          ref={titleAnimation.ref}
          className={`animate-on-scroll mb-8 text-center sm:mb-12 ${titleAnimation.isVisible ? "visible" : ""}`}
        >
          <h2
            className="section-title mb-3 text-foreground sm:mb-4"
            data-testid="text-testimonials-title"
          >
            Designed for modern commerce builders
          </h2>
          <p
            className="mx-auto max-w-3xl text-base text-muted-foreground sm:text-lg"
            data-testid="text-testimonials-subtitle"
          >
            From single-brand stores to multi-vendor platforms — Kaartx Kloud
            provides the infrastructure to run, control, and scale commerce
            without complexity.
          </p>
        </div>

        <div
          ref={cardAnimation.ref}
          className={`animate-on-scroll ${cardAnimation.isVisible ? "visible" : ""}`}
        >
          <Card
            className="rounded-xl p-8 shadow-lg sm:p-10 md:p-12"
            data-testid="card-builder-quote"
          >
            <div className="space-y-6 text-center">
              <p
                className="text-base leading-relaxed text-foreground sm:text-lg md:text-xl"
                data-testid="text-builder-quote"
              >
                "Kaartx Kloud is built as flexible commerce infrastructure —
                supporting single stores, multi-vendor marketplaces, and hybrid
                models, all managed from one unified system."
              </p>
              <p
                className="text-sm text-muted-foreground"
                data-testid="text-coming-soon"
              >
                Coming soon: verified customer stories and success showcases
                from across the GCC.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
