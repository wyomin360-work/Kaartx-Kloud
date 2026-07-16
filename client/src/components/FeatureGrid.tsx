import { Package } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BentoMiniCell } from "./features/BentoMiniCell";
import { BentoFeatureBlock } from "./features/BentoFeatureBlock";
import { FEATURE_GRADIENTS, MAIN_FEATURES, MINI_SURROUND } from "./features/featureData";
import BackgroundOverlay from "./hero/v2/HeroBackground";

export default function FeatureGrid() {
  const titleAnimation = useScrollAnimation<HTMLDivElement>(0.2);
  const cardsAnimation = useScrollAnimation<HTMLDivElement>(0.1);
  const visible = cardsAnimation.isVisible;
  const stagger = ["", "stagger-1", "stagger-2", "stagger-3"];

  return (
    <section id="feature-grid" className="relative overflow-hidden sm:pb-10 ">
      {/* Background blobs + dot texture similar to HeroBackground */}
    {/* <BackgroundOverlay/> */}

      <style>{`
        @keyframes glassShimmer {
            0%   { transform: translateX(-60%) translateY(0); }
            50%  { transform: translateX(60%) translateY(-10%); }
            100% { transform: translateX(-60%) translateY(0); }
        }
      `}</style>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-5 md:px-6">
        <div
          ref={titleAnimation.ref}
          className={`animate-on-scroll mb-12 flex flex-col items-start justify-between gap-8 pt-8 sm:mb-16 md:flex-row md:gap-16 ${titleAnimation.isVisible ? "visible" : ""}`}
        >
          <div className="w-full md:w-[55%]">
            <h2
              className="text-balance text-2xl font-bold leading-tight tracking-tight text-[#1A1A1A] sm:text-3xl md:text-4xl lg:text-[2.5rem] lg:leading-[1.2]"
              data-testid="text-features-title"
            >
              Everything to run your
              <br className="hidden md:block" />
              <span className="gradient-text"> commerce business</span>
            </h2>
          </div>

          <div className="flex w-full flex-col items-start pt-2 md:w-[40%]">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/60 backdrop-blur-md px-3 py-1.5 shadow-sm">
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

        <div ref={cardsAnimation.ref}>
          {/* Mobile: featured cards + dense clickable mini grid */}
          <div
            className={`mx-auto max-w-lg space-y-5 md:hidden ${visible ? "visible" : ""}`}
          >
            <div className="feature-carousel scrollbar-hide flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2">
              {MAIN_FEATURES.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className={cn(
                      "hover-elevate w-[82vw] max-w-sm flex-shrink-0 snap-center flex flex-col items-center text-center rounded-[2rem] border border-white/60 p-6 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.04)]",
                      "bg-[rgba(255,255,255,0.5)]",
                      FEATURE_GRADIENTS[index],
                      "animate-on-scroll",
                      stagger[index],
                    )}
                    style={{
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                    }}
                    data-testid={`card-feature-${index}`}
                  >
                    <div 
                      className="shadow-[0_4px_20px_rgba(0,0,0,0.06)] mb-4 mx-auto flex h-12 w-12 items-center justify-center bg-white/95"
                      style={{ borderRadius: "43% 57% 68% 32% / 46% 38% 62% 54%" }}
                    >
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold">{feature.title}</h3>
                    <p className="text-sm font-medium text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
            <div 
              className="rounded-[2rem] border border-white/60 p-[1px] shadow-[0_8px_32px_rgba(0,0,0,0.04)]"
              style={{
                  backdropFilter: 'blur(12px) saturate(1.4)',
                  WebkitBackdropFilter: 'blur(12px) saturate(1.4)',
                  background: 'linear-gradient(152deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.1) 48%, rgba(255,255,255,0.3) 100%)',
              }}
            >
              <div className="grid grid-cols-4 gap-[1px] bg-white/20 rounded-[calc(2rem-1px)] overflow-hidden">
                {MINI_SURROUND.map((cell, i) => (
                  <BentoMiniCell key={i} icon={cell.icon} label={cell.label} />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop: Liquid Glass Bento */}
          <div
            className={cn(
              "animate-on-scroll mx-auto hidden max-w-5xl md:block relative",
              visible ? "visible" : "",
            )}
            aria-label="Feature map"
          >
            <div 
              className="overflow-hidden rounded-[2.5rem] border border-white/60 p-[1px] shadow-[0_8px_32px_rgba(0,0,0,0.06)]"
              style={{
                  backdropFilter: 'blur(16px) saturate(1.4) brightness(1.05)',
                  WebkitBackdropFilter: 'blur(16px) saturate(1.4) brightness(1.05)',
                  background: 'linear-gradient(152deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.1) 48%, rgba(255,255,255,0.4) 100%)',
              }}
            >
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[2.5rem] z-0">
                <div 
                  className="absolute inset-[-50%]" 
                  style={{ 
                      background: 'linear-gradient(108deg, transparent 35%, rgba(255,255,255,0.2) 48%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.2) 52%, transparent 65%)',
                      animation: 'glassShimmer 8s ease-in-out infinite',
                      willChange: 'transform'
                  }} 
                />
              </div>

              <div className="flex flex-col gap-[1px] bg-white/20 relative z-10 rounded-[calc(2.5rem-1px)] overflow-hidden">
                <div className="grid grid-cols-8 gap-[1px] bg-white/20">
                  {MINI_SURROUND.slice(0, 8).map((cell, i) => (
                    <BentoMiniCell key={`r1-${i}`} icon={cell.icon} label={cell.label} />
                  ))}
                </div>
                <div className="grid grid-cols-8 gap-[1px] bg-white/20">
                  {MINI_SURROUND.slice(8, 10).map((cell, i) => (
                    <BentoMiniCell key={`r2-l-${i}`} icon={cell.icon} label={cell.label} />
                  ))}
                  <div className="col-span-2">
                    <BentoFeatureBlock
                      {...MAIN_FEATURES[0]}
                      icon={MAIN_FEATURES[0].icon}
                      gradientClass={FEATURE_GRADIENTS[0]}
                      index={0}
                      visible={visible}
                      stagger={stagger[0]}
                    />
                  </div>
                  <div className="col-span-2">
                    <BentoFeatureBlock
                      {...MAIN_FEATURES[1]}
                      icon={MAIN_FEATURES[1].icon}
                      gradientClass={FEATURE_GRADIENTS[1]}
                      index={1}
                      visible={visible}
                      stagger={stagger[1]}
                    />
                  </div>
                  {MINI_SURROUND.slice(10, 12).map((cell, i) => (
                    <BentoMiniCell key={`r2-r-${i}`} icon={cell.icon} label={cell.label} />
                  ))}
                </div>
                <div className="grid grid-cols-8 gap-[1px] bg-white/20">
                  {MINI_SURROUND.slice(12, 14).map((cell, i) => (
                    <BentoMiniCell key={`r3-l-${i}`} icon={cell.icon} label={cell.label} />
                  ))}
                  <div className="col-span-2">
                    <BentoFeatureBlock
                      {...MAIN_FEATURES[2]}
                      icon={MAIN_FEATURES[2].icon}
                      gradientClass={FEATURE_GRADIENTS[2]}
                      index={2}
                      visible={visible}
                      stagger={stagger[2]}
                    />
                  </div>
                  <div className="col-span-2">
                    <BentoFeatureBlock
                      {...MAIN_FEATURES[3]}
                      icon={MAIN_FEATURES[3].icon}
                      gradientClass={FEATURE_GRADIENTS[3]}
                      index={3}
                      visible={visible}
                      stagger={stagger[3]}
                    />
                  </div>
                  {MINI_SURROUND.slice(14, 16).map((cell, i) => (
                    <BentoMiniCell key={`r3-r-${i}`} icon={cell.icon} label={cell.label} />
                  ))}
                </div>
                <div className="grid grid-cols-8 gap-[1px] bg-white/20">
                  {MINI_SURROUND.slice(16, 24).map((cell, i) => (
                    <BentoMiniCell key={`r4-${i}`} icon={cell.icon} label={cell.label} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
