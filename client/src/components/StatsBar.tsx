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
    <section className="relative py-24 sm:py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/10 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent opacity-60" />
      
      <div className="relative max-w-7xl mx-auto px-5 sm:px-6">
        <div 
          ref={sectionAnimation.ref}
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 animate-fade-in ${sectionAnimation.isVisible ? 'visible' : ''}`}
        >
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group relative overflow-visible" 
              data-testid={`stat-${index}`}
            >
              <div className="relative bg-card/60 backdrop-blur-md rounded-3xl p-8 sm:p-10 lg:p-12 border-2 border-primary/20 shadow-lg hover:shadow-2xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-3xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent rounded-3xl" />
                
                <div className="relative">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-black gradient-text mb-4 leading-none tracking-tight whitespace-nowrap" data-testid={`text-stat-value-${index}`}>
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold text-foreground/70 uppercase tracking-[0.2em] leading-relaxed" data-testid={`text-stat-label-${index}`}>
                    {stat.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
