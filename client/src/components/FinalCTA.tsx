import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50" />
      
      <div className="relative max-w-4xl mx-auto px-5 sm:px-6 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground mb-6 gradient-text" data-testid="text-final-cta-title">
          Ready to launch your marketplace?
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-medium leading-relaxed" data-testid="text-final-cta-subtitle">
          Join GCC businesses building the future of commerce with Kaartx Cloud
        </p>
        <Button 
          size="lg" 
          className="shadow-playful group hover:scale-[1.02] transition-transform text-lg px-8 py-6 rounded-2xl font-bold" 
          data-testid="button-final-cta"
        >
          Start Building Today
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
}
