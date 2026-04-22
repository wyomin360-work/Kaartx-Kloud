import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FinalCTAProps {
  onOpenSignup?: () => void;
}

export default function FinalCTA({ onOpenSignup }: FinalCTAProps) {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-20 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-5 md:px-6">
        <h2
          className="section-title gradient-text mb-4 text-foreground sm:mb-6"
          data-testid="text-final-cta-title"
        >
          Ready to launch your eCommerce platform?
        </h2>
        <p
          className="mx-auto mb-8 max-w-2xl text-base font-normal leading-relaxed text-muted-foreground sm:mb-10 sm:text-lg"
          data-testid="text-final-cta-subtitle"
        >
          Join GCC businesses building the future of eCommerce with Kaartx
          Kloud.
        </p>
        <Button
          onClick={onOpenSignup}
          size="lg"
          className="shadow-playful group w-full rounded-2xl px-6 py-6 text-base font-bold transition-transform hover:scale-[1.02] sm:w-auto sm:px-8 sm:text-lg"
          data-testid="button-final-cta"
        >
          Start Building Today
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </section>
  );
}
