import { Package } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SellerMachine from "./SellerMachine";

export default function FeatureGrid() {
  const titleAnimation = useScrollAnimation<HTMLDivElement>(0.2);
  const cardsAnimation = useScrollAnimation<HTMLDivElement>(0.1);

  return (
    <section id="feature-grid" className="relative overflow-hidden pt-20 pb-16 sm:pt-28 sm:pb-24 md:pt-36 md:pb-32">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-5 md:px-6">
        
        {/* Centered Typography Header block */}
        <div
          ref={titleAnimation.ref}
          className={`animate-on-scroll flex flex-col items-center text-center max-w-3xl mx-auto mb-14 ${titleAnimation.isVisible ? "visible" : ""}`}
        >
          <div className="mb-4 flex items-center gap-2.5 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-slate-500 font-bold">
            <Package className="h-4 w-4 text-[#28deb4]" />
            <span>Key Features</span>
          </div>
 
          <h2
            className="text-balance text-3xl font-semibold leading-[1.15] tracking-tight bg-gradient-to-r from-slate-950 via-slate-900 to-[#28deb4] bg-clip-text text-transparent sm:text-4xl md:text-[2.65rem] mb-5 pb-1"
            data-testid="text-features-title"
          >
            Everything to run your commerce business
          </h2>
 
          <p
            className="text-sm sm:text-base font-normal leading-relaxed text-slate-500 max-w-2xl"
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

          <div className="relative z-10 " ref={cardsAnimation.ref}>
            <SellerMachine />
          </div>
        </div>

      </div>
    </section>
  );
}
