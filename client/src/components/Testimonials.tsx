import { Card } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Testimonials() {
  const titleAnimation = useScrollAnimation<HTMLDivElement>(0.2);
  const cardAnimation = useScrollAnimation<HTMLDivElement>(0.2);

  return (
    <section className="py-12 sm:py-20 md:py-32 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-5 md:px-6">
        <div 
          ref={titleAnimation.ref}
          className={`text-center mb-8 sm:mb-12 animate-on-scroll ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          <h2 className="section-title text-foreground mb-3 sm:mb-4" data-testid="text-testimonials-title">
            Designed for modern commerce builders
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-testimonials-subtitle">
            From single-brand stores to multi-vendor platforms — Kaartx Kloud provides the infrastructure to run, control, and scale commerce without complexity.
          </p>
        </div>

        <div 
          ref={cardAnimation.ref}
          className={`animate-on-scroll ${cardAnimation.isVisible ? 'visible' : ''}`}
        >
          <Card className="p-8 sm:p-10 md:p-12 shadow-lg rounded-xl" data-testid="card-builder-quote">
            <div className="text-center space-y-6">
              <p className="text-base sm:text-lg md:text-xl text-foreground leading-relaxed" data-testid="text-builder-quote">
                "Kaartx Kloud is built as flexible commerce infrastructure — supporting single stores, multi-vendor marketplaces, and hybrid models, all managed from one unified system."
              </p>
              <p className="text-sm text-muted-foreground" data-testid="text-coming-soon">
                Coming soon: verified customer stories and success showcases from across the GCC.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
