import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Users } from "lucide-react";

export default function Testimonials() {
  const titleAnimation = useScrollAnimation<HTMLDivElement>(0.2);
  const cardAnimation = useScrollAnimation<HTMLDivElement>(0.2);

  return (
    <section className="bg-background ">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-6">
        <div
          ref={titleAnimation.ref}
          className={`animate-on-scroll mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center sm:mb-16 ${titleAnimation.isVisible ? "visible" : ""}`}
        >
          <div className="w-full md:w-[55%]">
            <h2
              className="text-balance text-2xl font-bold leading-tight tracking-tight text-[#1A1A1A] sm:text-3xl md:text-4xl lg:text-[2.5rem] lg:leading-[1.2]"
              data-testid="text-testimonials-title"
            >
              <span className="gradient-text">Designed for</span> modern commerce builders
            </h2>
          </div>
          <div className="flex w-full flex-col items-start pt-2 md:w-[40%]">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/50 px-3 py-1.5 shadow-sm">
              <Users className="h-[14px] w-[14px] text-muted-foreground" />
              <span className="text-[11px] font-semibold uppercase tracking-wide text-foreground sm:text-xs">
                Community
              </span>
            </div>
            <p
              className="text-base font-medium leading-relaxed text-muted-foreground sm:text-lg"
              data-testid="text-testimonials-subtitle"
            >
              From single-brand stores to multi-vendor platforms — Kaartx Kloud
              provides the infrastructure to run, control, and scale commerce
              without complexity.
            </p>
          </div>
        </div>

        <div
          ref={cardAnimation.ref}
          className={`animate-on-scroll mx-auto max-w-5xl ${cardAnimation.isVisible ? "visible" : ""}`}
        >
          <Card
            className="group relative overflow-hidden rounded-[24px] border border-slate-200/60 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-10 md:p-12 dark:border-slate-800 dark:bg-card"
            data-testid="card-builder-quote"
          >
            {/* MUI-like hover ripple effect background */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-50/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:to-slate-800/20" />
            
            <div className="relative z-10 space-y-6 text-center">
              <p
                className="text-lg font-medium leading-relaxed text-slate-900 sm:text-xl md:text-2xl dark:text-slate-100"
                data-testid="text-builder-quote"
              >
                "Kaartx Kloud is built as flexible commerce infrastructure —
                supporting single stores, multi-vendor marketplaces, and hybrid
                models, all managed from one unified system."
              </p>
              <p
                className="text-sm font-medium text-slate-500 dark:text-slate-400"
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
