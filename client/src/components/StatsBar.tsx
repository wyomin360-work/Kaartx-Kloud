import { useState, useEffect, useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import {
  BadgeCheck,
  CircleDollarSign,
  CloudCog,
  Gauge,
  ShieldCheck,
  BarChart3,
  Activity,
  Zap,
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
      {
        value: "Bank-Grade",
        label: "Data Security",
        accent: "bg-blue-500",
        icon: ShieldCheck,
      },
      {
        value: "Real-time",
        label: "Live Analytics",
        accent: "bg-rose-500",
        icon: BarChart3,
      },
      {
        value: "Scalable",
        label: "Global API",
        accent: "bg-indigo-500",
        icon: Activity,
      },
      {
        value: "Zero-lag",
        label: "Fast Performance",
        accent: "bg-orange-500",
        icon: Zap,
      },
    ];

  const sectionAnimation = useScrollAnimation<HTMLDivElement>(0.2);
  const [isUnstuck, setIsUnstuck] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const barRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!barRef.current) return;
      const rect = barRef.current.getBoundingClientRect();
      // If the bottom of the element is higher than the viewport bottom by at least 2px, it's unstuck.
      if (rect.bottom < window.innerHeight - 2) {
        setIsUnstuck(true);
      } else {
        setIsUnstuck(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Check initially
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isUnstuck) {
      const timer = setTimeout(() => setIsPlaying(true), 700);
      return () => clearTimeout(timer);
    } else {
      setIsPlaying(false);
    }
  }, [isUnstuck]);

  const allStats = [...stats, ...stats];

  const StatCard = ({
    stat,
    index,
  }: {
    stat: (typeof stats)[0];
    index: number;
  }) => {
    const Icon = stat.icon;

    return (
      <div
        className="group relative flex w-[18rem] shrink-0 items-center gap-4 hover:scale-102 transition-all duration-300 ease-out cursor-default"
        data-testid={`stat-${index % 4}`}
      >
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200/60 text-slate-600 transition-all duration-300 group-hover:border-slate-400/80 group-hover:text-slate-950 shadow-sm group-hover:shadow group-hover:scale-105 bg-background/50 backdrop-blur-xs">
          <Icon className="h-5 w-5 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-12 group-hover:scale-110" strokeWidth={2} stroke="black" />
        </div>

        <div className="flex flex-col text-left">
          <div className="font-display text-xl font-medium leading-none tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-primary">
            {stat.value}
          </div>
          <div className="mt-1 text-[10px] sm:text-[11px] uppercase tracking-[0.06em] text-neutral-400 transition-colors duration-300 group-hover:text-slate-600">
            {stat.label}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      ref={barRef}
      className={cn(
        "relative overflow-hidden bg-transparent  py-4 md:py-6 transition-all duration-700 ease-in-out w-full",
      )}
      data-testid="stats-section"
    >
      <div className="relative w-full">
        <div
          className="relative overflow-hidden"
          data-testid="stats-marquee-wrapper"
        >
          <div
            className={cn(
              "flex w-max gap-12 py-1 [animation:stats-marquee_90s_linear_infinite]",
              !isPlaying && "[animation-play-state:paused]"
            )}
            data-testid="stats-marquee-track"
          >
            {allStats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
