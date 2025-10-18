import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function FinalCTA() {
  const ctaAnimation = useScrollAnimation<HTMLDivElement>(0.2);

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-br from-primary/10 via-background to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50" />
      
      <div 
        ref={ctaAnimation.ref}
        className={`relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll ${ctaAnimation.isVisible ? 'visible' : ''}`}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-final-cta-title">
          Ready to launch your marketplace?
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto" data-testid="text-final-cta-subtitle">
          Join GCC businesses building the future of commerce with Kaartx Cloud
        </p>
        <Button size="lg" className="shadow-glow group" data-testid="button-final-cta">
          Start Building Today
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
}
