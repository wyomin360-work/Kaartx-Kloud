import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import {
  BadgeCheck,
  CircleDollarSign,
  CloudCog,
  Gauge,
  type LucideIcon,
} from "lucide-react";

export default function StatsBar() {
  const stats: {
    value: string;
    label: string;
    accent: string;
    icon: LucideIcon;
  }[] = [
    {
      value: "Automated",
      label: "Payouts & Settlements",
      accent: "bg-emerald-500",
      icon: CircleDollarSign,
    },
    {
      value: "GCC",
      label: "Market Ready",
      accent: "bg-sky-500",
      icon: BadgeCheck,
    },
    {
      value: "99.9%",
      label: "Platform Uptime",
      accent: "bg-violet-500",
      icon: Gauge,
    },
    {
      value: "White-label",
      label: "Brand Ready",
      accent: "bg-amber-500",
      icon: CloudCog,
    },
  ];

  const sectionAnimation = useScrollAnimation<HTMLDivElement>(0.2);

  const allStats = [...stats, ...stats];

  const StatCard = ({
    stat,
    index,
    isMobile = false,
  }: {
    stat: (typeof stats)[0];
    index: number;
    isMobile?: boolean;
  }) => {
    const Icon = stat.icon;

    return (
      <div
        className={cn(
          "group relative overflow-visible",
          isMobile ? "w-[15.5rem] flex-shrink-0" : "",
        )}
        data-testid={`stat-${index % 4}`}
      >
        <div
          className={cn(
            "relative flex h-32 flex-col justify-between overflow-hidden rounded-lg border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300",
            !isMobile &&
              "hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg",
          )}
        >
          <div
            className={cn(
              "absolute inset-x-0 top-0 h-1 opacity-90 transition-opacity duration-300 group-hover:opacity-100",
              stat.accent,
            )}
            aria-hidden
          />

          <div className="flex items-center justify-between">
            <div className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-slate-50 text-slate-700 transition-colors duration-300 group-hover:border-slate-300 group-hover:bg-white">
              <Icon className="h-4 w-4" strokeWidth={1.8} />
            </div>
            <span className="text-[10px] font-semibold uppercase leading-none tracking-[0.16em] text-slate-400">
              0{(index % 4) + 1}
            </span>
          </div>

          <div>
            <div
              className={cn(
                "mb-2 font-display text-3xl font-bold leading-none tracking-normal text-slate-950",
                !isMobile && "lg:text-[2rem]",
              )}
            >
              {stat.value}
            </div>
            <div className="text-xs font-semibold uppercase leading-relaxed tracking-[0.14em] text-slate-500">
              {stat.label}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/80 to-white py-12 md:py-20"
      data-testid="stats-section"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div
          ref={sectionAnimation.ref}
          className={cn(
            "animate-fade-in hidden grid-cols-4 items-stretch gap-4 md:grid lg:gap-5",
            sectionAnimation.isVisible ? "visible" : "",
          )}
          data-testid="stats-grid-desktop"
        >
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>

        <div
          className="relative -mx-5 overflow-hidden px-5 md:hidden"
          data-testid="stats-marquee-wrapper"
        >
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-slate-50 to-transparent"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-slate-50 to-transparent"
            aria-hidden
          />

          <div
            className="flex w-max gap-4 py-1 [animation:stats-marquee_24s_linear_infinite]"
            data-testid="stats-marquee-track"
          >
            {allStats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} isMobile={true} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
