import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function StatsBar() {
  const stats = [
    { value: 'Automated', label: 'Adjustable payout cycles' },
    { value: 'GCC', label: 'Ready' },
    { value: '99.9%', label: 'Uptime' },
    { value: 'White-label', label: 'Ready' },
  ];

  const sectionAnimation = useScrollAnimation<HTMLDivElement>(0.2);

  // Duplicate stats for seamless looping on mobile
  const allStats = [...stats, ...stats];

  return (
    <section className="relative py-24 sm:py-32 md:py-40 overflow-hidden" data-testid="stats-section">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/10 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent opacity-60" />
      
      <div className="relative max-w-7xl mx-auto px-5 sm:px-6">
        <div 
          ref={sectionAnimation.ref}
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 items-stretch animate-fade-in ${sectionAnimation.isVisible ? 'visible' : ''}`}
          data-testid="stats-grid"
        >
          {/* Desktop: show first 4 cards only */}
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group relative overflow-visible md:block hidden" 
              data-testid={`stat-desktop-${index}`}
            >
              <div className="relative h-40 flex flex-col justify-center bg-card/60 backdrop-blur-md rounded-3xl p-6 sm:p-7 lg:p-8 border-2 border-primary/20 shadow-lg hover:shadow-2xl hover:border-primary/30 transition-all duration-300 overflow-visible">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-3xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent rounded-3xl" />
                
                <div className="relative h-full flex flex-col justify-center overflow-visible">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black gradient-text mb-3 leading-none tracking-tight whitespace-nowrap overflow-visible">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold text-foreground/70 uppercase tracking-[0.15em] leading-relaxed">
                    {stat.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: marquee with duplicated cards */}
        <div className="md:hidden overflow-visible" data-testid="stats-marquee-wrapper">
          <div 
            className="flex gap-3 stats-marquee"
            data-testid="stats-marquee"
          >
            {allStats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group relative overflow-visible flex-shrink-0" 
                style={{ width: '75%' }}
                data-testid={`stat-${index % 4}`}
              >
                <div className="relative h-40 flex flex-col justify-center bg-card/60 rounded-3xl p-6 border-2 border-primary/20 shadow-lg overflow-visible">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-3xl" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent rounded-3xl" />
                  
                  <div className="relative h-full flex flex-col justify-center overflow-visible">
                    <div className="text-2xl font-black gradient-text mb-3 leading-none tracking-tight whitespace-nowrap overflow-visible">
                      {stat.value}
                    </div>
                    <div className="text-xs font-extrabold text-foreground/70 uppercase tracking-[0.15em] leading-relaxed">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
