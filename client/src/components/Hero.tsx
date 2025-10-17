import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle } from 'lucide-react';
import heroDashboard from '@assets/generated_images/Hero_dashboard_mockup_46c4a7c8.png';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight" data-testid="text-hero-title">
            Build, run, and scale your marketplace — with{' '}
            <span className="text-primary">Kaartx Cloud</span>.
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto" data-testid="text-hero-subtitle">
            A premium, API-first commerce platform to launch branded marketplaces, onboard sellers, automate operations, and manage payouts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="shadow-glow group" data-testid="button-hero-get-started">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="backdrop-blur-sm" data-testid="button-hero-whatsapp">
              <MessageCircle className="mr-2 h-4 w-4" />
              Talk to Sales (WhatsApp)
            </Button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-border/50">
            <img
              src={heroDashboard}
              alt="Kaartx Cloud Dashboard"
              className="w-full h-auto"
              data-testid="img-hero-dashboard"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
