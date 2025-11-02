import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function StatsBar() {
  const stats = [
    { value: '12-day', label: 'Payout Cycles' },
    { value: 'GCC', label: 'Ready' },
    { value: '99.9%', label: 'Uptime' },
    { value: 'White-label', label: 'Ready' },
  ];

  const sectionAnimation = useScrollAnimation<HTMLDivElement>(0.2);

  return (
    <section className="py-20 sm:py-24 md:py-32 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div 
          ref={sectionAnimation.ref}
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 animate-fade-in ${sectionAnimation.isVisible ? 'visible' : ''}`}
        >
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group relative bg-card/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-border/40 hover-elevate active-elevate-2 transition-all" 
              data-testid={`stat-${index}`}
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black gradient-text mb-3 group-hover:scale-105 transition-transform" data-testid={`text-stat-value-${index}`}>
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-muted-foreground uppercase tracking-wider" data-testid={`text-stat-label-${index}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
