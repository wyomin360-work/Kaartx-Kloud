import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function StatsBar() {
  const stats = [
    { value: '12-day', label: 'Payout Cycles' },
    { value: 'GCC', label: 'Ready' },
    { value: '99.9%', label: 'Uptime' },
    { value: 'White-label', label: 'Ready' },
  ];

  const sectionAnimation = useScrollAnimation(0.2);

  return (
    <section className="py-16 gradient-bg-purple">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={sectionAnimation.ref}
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in ${sectionAnimation.isVisible ? 'visible' : ''}`}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center group" data-testid={`stat-${index}`}>
              <div className="text-4xl md:text-5xl font-black gradient-text mb-2 group-hover:scale-110 transition-transform" data-testid={`text-stat-value-${index}`}>
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide" data-testid={`text-stat-label-${index}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
