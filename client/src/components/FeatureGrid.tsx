import { Package } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import InteractiveMockup from "./hero/v2/InteractiveMockup";

export default function FeatureGrid() {
  const titleAnimation = useScrollAnimation<HTMLDivElement>(0.2);
  const cardsAnimation = useScrollAnimation<HTMLDivElement>(0.1);

  return (
    <section id="feature-grid" className="relative overflow-hidden sm:pb-10">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-5 md:px-6">
        
        {/* Centered Typography Header block */}
        <div
          ref={titleAnimation.ref}
          className={`animate-on-scroll flex flex-col items-center text-center max-w-3xl mx-auto mb-10 pt-8 ${titleAnimation.isVisible ? "visible" : ""}`}
        >
          <div className="mb-4.5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 backdrop-blur-md px-3 py-1.5 shadow-xs">
            <Package className="h-[14px] w-[14px] text-slate-500" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 sm:text-xs">
              Key features
            </span>
          </div>

          <h2
            className="text-balance text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-[2.5rem] lg:leading-[1.2] mb-4"
            data-testid="text-features-title"
          >
            Everything to run your <span className="gradient-text">commerce business</span>
          </h2>

          <p
            className="text-sm font-light leading-relaxed text-slate-500 max-w-2xl"
            data-testid="text-features-subtitle"
          >
            From product management to payouts, all the tools you need in one
            powerful platform to scale your entire marketplace flawlessly.
          </p>
        </div>

        {/* Mockup Dashboard Container with Glowing Gradient Backdrop (Clay style) */}
        <div className="relative w-full max-w-5xl mx-auto">
          {/* Backdrop Glow wings */}
          <div className="absolute left-[-8%] top-[15%] h-[350px] w-[350px] rounded-full bg-sky-350/25 blur-[100px] pointer-events-none z-0" />
          <div className="absolute right-[-8%] bottom-[15%] h-[350px] w-[350px] rounded-full bg-purple-300/18 blur-[100px] pointer-events-none z-0" />

          <div className="relative z-10" ref={cardsAnimation.ref}>
            <InteractiveMockup />
          </div>
        </div>

      </div>
    </section>
  );
}
