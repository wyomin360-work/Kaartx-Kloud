import type { ReactNode } from "react";
import { useId } from "react";
import {
  Play,
  Settings,
  Users,
  Rocket,
  Package,
  LayoutGrid,
  Tags,
  CreditCard,
  Store,
  Truck,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

/** Thick ribbon with three tangled regions; fades at both ends. */
function ContextRibbon() {
  const uid = useId().replace(/:/g, "");
  const tubeId = `howit-tube-${uid}`;
  const fadeId = `howit-fade-${uid}`;
  const shadowId = `howit-shadow-${uid}`;
  const maskId = `howit-mask-${uid}`;

  return (
    <svg
      className="h-[min(12rem,28vw)] w-full max-w-6xl select-none"
      viewBox="0 0 1000 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id={tubeId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f3f3f3" />
          <stop offset="45%" stopColor="#e8e8e8" />
          <stop offset="100%" stopColor="#d6d6d6" />
        </linearGradient>
        <linearGradient id={fadeId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="8%" stopColor="white" stopOpacity="1" />
          <stop offset="92%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <filter
          id={shadowId}
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
        >
          <feDropShadow
            dx="0"
            dy="3"
            stdDeviation="5"
            floodColor="#000000"
            floodOpacity="0.12"
          />
        </filter>
        <mask id={maskId}>
          <rect width="1000" height="160" fill={`url(#${fadeId})`} />
        </mask>
      </defs>
      <g mask={`url(#${maskId})`} filter={`url(#${shadowId})`}>
        <path
          d="M -40 88 C 60 88 85 52 160 72 C 235 92 255 48 330 68 C 405 88 430 42 500 62 C 570 82 595 38 670 58 C 745 78 770 44 840 60 C 910 76 940 58 1040 68"
          stroke="#c8c8c8"
          strokeWidth="38"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M -40 88 C 60 88 85 52 160 72 C 235 92 255 48 330 68 C 405 88 430 42 500 62 C 570 82 595 38 670 58 C 745 78 770 44 840 60 C 910 76 940 58 1040 68"
          stroke={`url(#${tubeId})`}
          strokeWidth="30"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

function FloatingIconCard({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-[0_4px_14px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.06] sm:h-12 sm:w-12 ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

const STEPS = [
  {
    title: "Configure",
    description:
      "Set up branding, products, categories, and pricing instantly.",
  },
  {
    title: "Onboard Sellers",
    description:
      "Add products or onboard sellers, approve instantly and start listing.",
  },
  {
    title: "Launch & Earn",
    description:
      "Go live, start selling, and manage payouts completely seamlessly.",
  },
] as const;

export default function HowItWorks() {
  const headerAnim = useScrollAnimation<HTMLDivElement>(0.15);
  const visualAnim = useScrollAnimation<HTMLDivElement>(0.1);
  const pillarsAnim = useScrollAnimation<HTMLDivElement>(0.08);

  return (
    <section className="relative overflow-hidden bg-white pb-16 pt-12 sm:pb-24 sm:pt-16 pb-8">
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <div
          ref={headerAnim.ref}
          className={`animate-on-scroll mx-auto mb-12 max-w-4xl text-center sm:mb-16 ${headerAnim.isVisible ? "visible" : ""}`}
        >
          <div className="mb-5 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white/80 px-3 py-1.5 shadow-sm backdrop-blur-sm">
              <Rocket className="h-[14px] w-[14px] text-[#666666]" />
              <span className="text-[11px] font-semibold uppercase tracking-wide text-[#1A1A1A] sm:text-xs">
                Simple process
              </span>
            </div>
          </div>
          <h2
            className="text-balance text-2xl font-bold leading-tight tracking-tight text-[#1A1A1A] sm:text-3xl md:text-4xl lg:text-[2.5rem] lg:leading-[1.2]"
            data-testid="text-how-it-works-title"
          >
            Launch in <span className="gradient-text">3 simple steps</span>
          </h2>
          <p
            className="mx-auto mt-4 max-w-2xl text-pretty text-base text-[#666666] sm:text-lg"
            data-testid="text-how-it-works-lead"
          >
            From idea to live store faster than you think. No technical skills
            required. We handle the complexity so you can focus on building your
            brand and driving sales securely.
          </p>
        </div>

        <div
          ref={visualAnim.ref}
          className={`animate-on-scroll relative mx-auto mb-10 max-w-5xl sm:mb-14 ${visualAnim.isVisible ? "visible" : ""}`}
        >
          <div className="relative flex justify-center px-2">
            <ContextRibbon />
          </div>

          {/* Icon clusters aligned to three ribbon knots */}
          <div className="pointer-events-none absolute inset-0 grid grid-cols-3 items-start pt-[8%] sm:pt-[6%]">
            <div className="relative h-32 sm:h-40">
              <FloatingIconCard className="absolute left-[8%] top-[12%] animate-[float_5s_ease-in-out_infinite] text-blue-600">
                <Package className="h-5 w-5" strokeWidth={2} />
              </FloatingIconCard>
              <FloatingIconCard className="absolute left-[38%] top-0 animate-[float_6s_ease-in-out_infinite_0.3s] bg-blue-600 text-white">
                <Settings className="h-5 w-5" strokeWidth={2} />
              </FloatingIconCard>
              <FloatingIconCard className="absolute right-[12%] top-[18%] animate-[float_5.5s_ease-in-out_infinite_0.5s]">
                <Tags className="h-5 w-5 text-[#E01E5A]" strokeWidth={2} />
              </FloatingIconCard>
              <FloatingIconCard className="absolute bottom-[8%] left-[22%] animate-[float_6.5s_ease-in-out_infinite_0.2s]">
                <LayoutGrid
                  className="h-5 w-5 text-orange-500"
                  strokeWidth={2}
                />
              </FloatingIconCard>
              <FloatingIconCard className="absolute bottom-[4%] right-[18%] animate-[float_5s_ease-in-out_infinite_0.7s] bg-[#6264A7] text-white">
                <Store className="h-4 w-4" strokeWidth={2} />
              </FloatingIconCard>
            </div>

            <div className="relative h-32 sm:h-40">
              <FloatingIconCard className="absolute left-[6%] top-[8%] animate-[float_5.5s_ease-in-out_infinite] bg-gradient-to-br from-violet-500 to-indigo-600 text-white">
                <Rocket className="h-5 w-5" strokeWidth={2} />
              </FloatingIconCard>
              <FloatingIconCard className="absolute left-[40%] top-0 animate-[float_6s_ease-in-out_infinite_0.4s]">
                <span className="text-xs font-semibold text-[#1A1A1A]">
                  B2B
                </span>
              </FloatingIconCard>
              <FloatingIconCard className="absolute right-[8%] top-[14%] animate-[float_5s_ease-in-out_infinite_0.6s] bg-[#1A1A1A] text-white">
                <CreditCard className="h-4 w-4" strokeWidth={2} />
              </FloatingIconCard>
              <FloatingIconCard className="absolute bottom-[6%] left-[18%] animate-[float_6.5s_ease-in-out_infinite_0.1s] text-violet-600">
                <Users className="h-5 w-5" strokeWidth={2} />
              </FloatingIconCard>
              <FloatingIconCard className="absolute bottom-[2%] right-[22%] animate-[float_5.5s_ease-in-out_infinite_0.5s] bg-white">
                <Truck className="h-5 w-5 text-[#1A1A1A]" strokeWidth={2} />
              </FloatingIconCard>
            </div>

            <div className="relative h-32 sm:h-40">
              <div className="absolute left-[4%] top-0 animate-[float_5.5s_ease-in-out_infinite] rounded-2xl bg-white px-3 py-2 text-[11px] font-medium leading-snug text-[#1A1A1A] shadow-[0_4px_14px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.06] sm:text-xs">
                Where&apos;s my order?
              </div>
              <div className="absolute right-[6%] top-[26%] animate-[float_6s_ease-in-out_infinite_0.35s] rounded-2xl bg-white px-3 py-2 text-[11px] font-medium leading-snug text-[#1A1A1A] shadow-[0_4px_14px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.06] sm:text-xs">
                Payout status?
              </div>
              <div className="absolute bottom-[4%] left-[20%] animate-[float_5s_ease-in-out_infinite_0.6s] rounded-2xl bg-white px-3 py-2 text-[11px] font-medium leading-snug text-[#1A1A1A] shadow-[0_4px_14px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.06] sm:text-xs">
                Stock synced?
              </div>
            </div>
          </div>


        </div>

        <div
          ref={pillarsAnim.ref}
          className={`animate-on-scroll grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6 lg:gap-10 ${pillarsAnim.isVisible ? "visible" : ""}`}
        >
          {STEPS.map((step, index) => (
            <div
              key={step.title}
              className="flex flex-col items-center text-center md:items-center"
              data-testid={`step-${index}`}
            >
              <div
                className={cn(
                  "mb-5 hidden h-10 w-px origin-bottom bg-[#E5E5E5] md:block",
                  index === 0 && "md:-rotate-[12deg]",
                  index === 2 && "md:rotate-[12deg]",
                )}
                aria-hidden
              />
              <div
                className="mb-5 h-8 w-px bg-[#E5E5E5] md:hidden"
                aria-hidden
              />
              <h3 className="text-lg font-bold text-[#1A1A1A] sm:text-xl">
                {step.title}
              </h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-[#666666] sm:text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </section>
  );
}
