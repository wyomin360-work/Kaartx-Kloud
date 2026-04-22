import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Separator } from '@radix-ui/react-context-menu';
import { Divide } from 'lucide-react';

export default function StatsBar() {
  const stats = [
    { value: 'Automated', label: 'Payouts & Settlements' },
    { value: 'GCC', label: 'Ready' },
    { value: '99.9%', label: 'Uptime' },
    { value: 'White-label', label: 'Ready' },
  ];

  const sectionAnimation = useScrollAnimation<HTMLDivElement>(0.2);

  // Duplicate stats for seamless looping on mobile
  const allStats = [...stats, ...stats];

  const StatCard = ({ stat, index, isMobile = false }: { stat: typeof stats[0], index: number, isMobile?: boolean }) => (
    <div 
      className={`text-center group relative overflow-visible ${isMobile ? 'flex-shrink-0 stat-card-mobile' : ''}`}
      data-testid={`stat-${index % 4}`}
    >
      <div className={`relative h-40 flex flex-col justify-center bg-card/60 ${!isMobile ? 'backdrop-blur-md' : ''} rounded-3xl p-6 ${!isMobile ? 'sm:p-7 lg:p-8' : ''} border-2 border-primary/20  ${!isMobile ? 'hover:border-primary/30' : ''} transition-all duration-300 overflow-visible`}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-3xl" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent rounded-3xl" />
        
        <div className="relative h-full flex flex-col justify-center overflow-visible">
          <div className={`${isMobile ? 'text-2xl' : 'text-2xl sm:text-3xl lg:text-4xl'} font-black gradient-text mb-3 leading-none tracking-tight whitespace-nowrap overflow-visible`}>
            {stat.value}
          </div>
          <div className={`${isMobile ? 'text-xs' : 'text-xs sm:text-sm'} font-extrabold text-foreground/70 uppercase tracking-[0.15em] leading-relaxed`}>
            {stat.label}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative pt-27 md:pt-32 pb-7 md:pb-24 overflow-hidden" data-testid="stats-section">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/10 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent opacity-60" />
      
      <div className="relative max-w-7xl mx-auto px-5 sm:px-6">
        {/* Desktop: 4-column grid */}
        <div 
          ref={sectionAnimation.ref}
          className={`hidden md:grid grid-cols-4 gap-6 sm:gap-8 lg:gap-10 items-stretch animate-fade-in ${sectionAnimation.isVisible ? 'visible' : ''}`}
          data-testid="stats-grid-desktop"
        >
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>

        {/* Mobile: auto-scroll marquee with ALL cards in ONE track */}
        <div className="md:hidden auto-scroll-wrapper" data-testid="stats-marquee-wrapper">
          <div className="auto-scroll-track" data-testid="stats-marquee-track">
            {allStats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} isMobile={true} />
            ))}
          </div>
        </div>
      <Separator/>
      </div>
    </section>
  );
}
