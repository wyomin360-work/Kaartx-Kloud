import { Settings, Users, Rocket, ArrowDown, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function HowItWorks() {
  const steps = [
    {
      icon: Settings,
      title: "Configure",
      description:
        "Set up branding, products, categories, and pricing instantly.",
      badgeGradient: "bg-gradient-to-br from-cyan-400 to-blue-500",
      iconGradient: "bg-gradient-to-br from-cyan-500/10 to-blue-500/10",
      iconColor: "text-blue-500",
    },
    {
      icon: Users,
      title: "Onboard Sellers",
      description:
        "Add products or onboard sellers, approve instantly and start listing.",
      badgeGradient: "bg-gradient-to-br from-violet-400 to-purple-500",
      iconGradient: "bg-gradient-to-br from-violet-500/10 to-purple-500/10",
      iconColor: "text-purple-500",
    },
    {
      icon: Rocket,
      title: "Launch & Earn",
      description:
        "Go live, start selling, and manage payouts completely seamlessly.",
      badgeGradient: "bg-gradient-to-br from-emerald-400 to-teal-500",
      iconGradient: "bg-gradient-to-br from-emerald-500/10 to-teal-500/10",
      iconColor: "text-teal-500",
    },
  ];

  const titleAnimation = useScrollAnimation<HTMLDivElement>(0.2);
  const cardsAnimation = useScrollAnimation<HTMLDivElement>(0.1);

  return (
    <section className="relative overflow-hidden bg-background pb-3">
      {/* Background ambient light */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />

      <div className="relative z-10 mx-auto max-w-7xl border-x border-border/10 px-6 lg:px-8">
        <div
          ref={titleAnimation.ref}
          className={`animate-on-scroll mb-20 pt-8 ${titleAnimation.isVisible ? "visible" : ""}`}
        >
          {/* Centered Pill element with Animating Arrow */}
          <div className="relative mb-10 flex w-full flex-col items-center justify-center sm:mb-16">
            <div className="pt-4inline-flex z-10 items-center gap-2 rounded-full border border-border/80 bg-background/50 px-3 py-1.5 shadow-sm">
              <Rocket className="h-[14px] w-[14px] text-muted-foreground" />
              <span className="text-[11px] font-semibold uppercase tracking-wide text-foreground sm:text-xs">
                Simple Process
              </span>
            </div>

            {/* Connecting line to Bouncing Arrow */}
            <div className="absolute top-full mt-2 flex flex-col items-center">
              <div className="h-6 w-[1px] bg-gradient-to-b from-border/80 to-transparent sm:h-8" />
              <ArrowDown
                className="-mt-1 h-5 w-5 animate-bounce text-muted-foreground/60"
                strokeWidth={1.5}
              />
            </div>
          </div>

          {/* Two-column layout matching FeatureGrid */}
          <div className="mt-4 flex flex-col items-start justify-between gap-8 md:flex-row md:gap-16">
            {/* Left Column: Prominent Title */}
            <div className="w-full md:w-[55%]">
              <h2 className="text-4xl font-extrabold leading-[1.15] tracking-tight text-foreground sm:text-5xl lg:text-5xl">
                Launch in
                <span className="gradient-text"> 3 simple steps</span>
              </h2>
            </div>

            {/* Right Column: Description Text */}
            <div className="flex w-full flex-col items-start pt-2 md:w-[40%]">
              <p className="text-base font-medium leading-relaxed text-muted-foreground sm:text-sm md:text-base">
                From idea to live store faster than you think. No technical
                skills required. We handle the complexity so you can focus on
                building your brand and driving sales securely.
              </p>
            </div>
          </div>
        </div>

        <div
          ref={cardsAnimation.ref}
          className="relative mx-auto max-w-5xl pb-10"
        >
          {/* Desktop connecting horizontal line - Aligned to intersect the top badges (top padding 2.5rem + half badge 1.5rem = 4rem top) */}
          <div className="absolute left-[16%] right-[16%] top-[4rem] z-0 hidden h-[2px] bg-gradient-to-r from-blue-500/0 via-border/60 to-teal-500/0 md:block" />

          <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-8 lg:gap-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const stagger = ["", "stagger-1", "stagger-2"];

              return (
                <div
                  key={index}
                  className="relative flex h-full flex-col items-stretch"
                >
                  <div
                    className={`animate-on-scroll group relative flex h-full w-full flex-col rounded-[2.5rem] border border-border/60 bg-card/50 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] sm:p-10 ${stagger[index]} ${cardsAnimation.isVisible ? "visible" : ""}`}
                  >
                    {/* Top Row: Number Badge and Icon arranged inside the card */}
                    <div className="relative z-10 mb-8 flex w-full items-center justify-between">
                      {/* Integrated Number Badge */}
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl ${step.badgeGradient} transform text-xl font-black text-white shadow-md ring-4 ring-background/50 transition-transform duration-300 group-hover:scale-110`}
                      >
                        0{index + 1}
                      </div>

                      {/* Integrated Icon */}
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl ${step.iconGradient} shadow-inner ring-1 ring-white/10 transition-transform duration-500 group-hover:rotate-12`}
                      >
                        <Icon
                          className={`h-6 w-6 ${step.iconColor}`}
                          strokeWidth={2}
                        />
                      </div>
                    </div>

                    <div className="flex flex-grow flex-col text-left">
                      {/* Title */}
                      <h3 className="mb-4 text-2xl font-bold tracking-tight text-foreground">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-base font-medium leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Mobile Connecting Arrow */}
                  {index < steps.length - 1 && (
                    <div className="relative z-0 flex justify-center py-6 md:hidden">
                      <ArrowDown
                        className="h-8 w-8 animate-bounce text-border"
                        strokeWidth={1.5}
                      />
                    </div>
                  )}

                  {/* Desktop Connecting Chevron - Positioned on the connecting line */}
                  {index < steps.length - 1 && (
                    <div className="absolute -right-4 top-[3rem] z-20 hidden items-center justify-center rounded-full border border-border/80 bg-background p-2 text-muted-foreground/50 shadow-sm md:flex lg:-right-5">
                      <ChevronRight className="h-4 w-4" strokeWidth={3} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
