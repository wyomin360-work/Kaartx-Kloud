import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface FinalCTAProps {
  onOpenSignup?: () => void;
}

export default function FinalCTA({ onOpenSignup }: FinalCTAProps) {
  return (
    <section className="py-12 sm:py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-5 md:px-6 text-center">
        <h2 className="section-title text-foreground mb-4 sm:mb-6 gradient-text" data-testid="text-final-cta-title">
          Ready to launch your marketplace?
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto font-normal leading-relaxed" data-testid="text-final-cta-subtitle">
          Join GCC businesses building the future of eCommerce with Kaartx Kloud.
        </p>
        <Button 
          onClick={onOpenSignup}
          size="lg" 
          className="shadow-playful group hover:scale-[1.02] transition-transform text-base sm:text-lg px-6 sm:px-8 py-6 rounded-2xl font-bold w-full sm:w-auto" 
          data-testid="button-final-cta"
        >
          Start Building Today
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
}
