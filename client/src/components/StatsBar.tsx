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
        className="group relative flex w-[18rem] shrink-0 items-center gap-4"
        data-testid={`stat-${index % 4}`}
      >
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200/60 bg-white text-slate-600 transition-colors duration-300 group-hover:border-slate-300 group-hover:text-slate-900 shadow-sm">
          <Icon className="h-5 w-5" strokeWidth={2} />
        </div>

        <div className="flex flex-col text-left">
          <div className="font-display text-xl font-bold leading-none tracking-tight text-slate-900">
            {stat.value}
          </div>
          <div className="mt-1 text-[11px] font-bold uppercase leading-none tracking-[0.12em] text-slate-500">
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
        "relative overflow-hidden bg-white/80 backdrop-blur-xl py-4 md:py-6 border-slate-200/60 transition-all duration-700 ease-in-out w-full",
        isUnstuck 
          ? "my-8 border-y shadow-sm" 
          : "border-t my-0"
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
