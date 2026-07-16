import { Settings, Users, Rocket, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    title: "Configure",
    description:
      "Set up branding, products, categories, and pricing instantly.",
    icon: Settings,
    gradient: "from-blue-500 to-cyan-400",
    bgLight: "bg-blue-50",
    iconColor: "text-blue-600",
    delay: "0ms",
  },
  {
    title: "Onboard Sellers",
    description:
      "Add products or onboard sellers, approve instantly and start listing.",
    icon: Users,
    gradient: "from-violet-500 to-purple-500",
    bgLight: "bg-violet-50",
    iconColor: "text-violet-600",
    delay: "100ms",
  },
  {
    title: "Launch & Earn",
    description:
      "Go live, start selling, and manage payouts completely seamlessly.",
    icon: Rocket,
    gradient: "from-orange-400 to-rose-400",
    bgLight: "bg-orange-50",
    iconColor: "text-orange-500",
    delay: "200ms",
  },
];

export default function HowItWorks() {
  const headerAnim = useScrollAnimation<HTMLDivElement>(0.15);
  const pillarsAnim = useScrollAnimation<HTMLDivElement>(0.08);

  return (
    <section className="relative overflow-hidden bg-transparent pb-20 pt-16 sm:pb-32 sm:pt-24">
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <div
          ref={headerAnim.ref}
          className={`animate-on-scroll mx-auto mb-16 max-w-3xl text-center sm:mb-20 ${headerAnim.isVisible ? "visible" : ""}`}
        >
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-3 py-1.5 shadow-sm">
              <Rocket className="h-[14px] w-[14px] text-[#666666]" />
              <span className="text-[11px] font-semibold uppercase tracking-wide text-[#1A1A1A] sm:text-xs">
                Simple process
              </span>
            </div>
          </div>
          <h2
            className="text-balance text-3xl font-bold leading-tight tracking-tight text-[#1A1A1A] sm:text-4xl md:text-5xl lg:leading-[1.1]"
            data-testid="text-how-it-works-title"
          >
            Launch in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">3 simple steps</span>
          </h2>
          <p
            className="mx-auto mt-5 max-w-2xl text-pretty text-base text-[#666666] sm:text-lg"
            data-testid="text-how-it-works-lead"
          >
            From idea to live store faster than you think. No technical skills
            required. We handle the complexity so you can focus on building your
            brand and driving sales securely.
          </p>
        </div>

        <div
          ref={pillarsAnim.ref}
          className={`animate-on-scroll relative grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12 ${pillarsAnim.isVisible ? "visible" : ""}`}
        >
          {/* Connecting Line for Desktop */}
          <div className="absolute left-[16.66%] right-[16.66%] top-[3rem] hidden h-[2px] -translate-y-1/2 bg-gradient-to-r from-blue-100 via-violet-100 to-orange-100 md:block" />

          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="group relative flex flex-col items-center text-center"
                style={{ transitionDelay: step.delay }}
                data-testid={`step-${index}`}
              >
                {/* Icon Container */}
                <div className="relative z-10 mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04] transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
                  {/* Number Badge inside Icon Container top right */}
                  <div className="absolute -right-2 -top-2 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-[#1A1A1A] text-xs font-bold text-white shadow-md ring-2 ring-white transition-transform group-hover:scale-110">
                    {index + 1}
                  </div>
                  
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${step.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-10`} />
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${step.bgLight} transition-colors duration-300`}>
                    <Icon className={`h-7 w-7 ${step.iconColor}`} />
                  </div>
                </div>

                {/* Content Card */}
                <div className="relative w-full flex-1 rounded-3xl bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] ring-1 ring-black/[0.03] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                  <h3 className="mb-3 text-xl font-bold text-[#1A1A1A]">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#666666] sm:text-base">
                    {step.description}
                  </p>
                </div>

                {/* Mobile Connector */}
                {index < STEPS.length - 1 && (
                  <div className="my-6 flex justify-center md:hidden">
                    <ArrowRight className="h-6 w-6 text-gray-300" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
