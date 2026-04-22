import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Separator } from "@radix-ui/react-context-menu";
import { Divide } from "lucide-react";

export default function StatsBar() {
  const stats = [
    { value: "Automated", label: "Payouts & Settlements" },
    { value: "GCC", label: "Ready" },
    { value: "99.9%", label: "Uptime" },
    { value: "White-label", label: "Ready" },
  ];

  const sectionAnimation = useScrollAnimation<HTMLDivElement>(0.2);

  // Duplicate stats for seamless looping on mobile
  const allStats = [...stats, ...stats];

  const StatCard = ({
    stat,
    index,
    isMobile = false,
  }: {
    stat: (typeof stats)[0];
    index: number;
    isMobile?: boolean;
  }) => (
    <div
      className={`group relative overflow-visible text-center ${isMobile ? "w-64 flex-shrink-0" : ""}`}
      data-testid={`stat-${index % 4}`}
    >
      <div
        className={`relative flex h-32 flex-col justify-center rounded-3xl border border-slate-100 bg-white p-6 ${!isMobile ? "hover:-translate-y-1 hover:shadow-xl" : ""} overflow-visible transition-all duration-500`}
      >
        <div className="relative flex h-full flex-col justify-center overflow-visible">
          <div
            className={`${isMobile ? "text-3xl" : "text-3xl lg:text-4xl"} mb-2 font-display font-bold leading-none tracking-tight text-slate-900`}
          >
            {stat.value}
          </div>
          <div className="text-[10px] font-bold uppercase leading-relaxed tracking-[0.2em] text-slate-400">
            {stat.label}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section
      className="relative overflow-hidden bg-white py-12 md:py-24"
      data-testid="stats-section"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        {/* Desktop: 4-column grid */}
        <div
          ref={sectionAnimation.ref}
          className={`animate-fade-in hidden grid-cols-4 items-stretch gap-6 sm:gap-8 md:grid lg:gap-10 ${sectionAnimation.isVisible ? "visible" : ""}`}
          data-testid="stats-grid-desktop"
        >
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>

        {/* Mobile: auto-scroll marquee with ALL cards in ONE track */}
        <div
          className="auto-scroll-wrapper md:hidden"
          data-testid="stats-marquee-wrapper"
        >
          <div className="auto-scroll-track" data-testid="stats-marquee-track">
            {allStats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} isMobile={true} />
            ))}
          </div>
        </div>
        <Separator />
      </div>
    </section>
  );
}
