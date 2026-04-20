import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface HeroProps {
  onOpenSignup?: () => void;
}

export default function Hero({ onOpenSignup }: HeroProps) {
  const titleAnimation = useScrollAnimation<HTMLHeadingElement>(0.1);
  const subtitleAnimation = useScrollAnimation<HTMLParagraphElement>(0.1);
  const buttonsAnimation = useScrollAnimation<HTMLDivElement>(0.1);

  const [scrollY, setScrollY] = useState(0);
  const [vh, setVh] = useState(1000); // Default fallback

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => setVh(window.innerHeight);
    
    // Init state
    handleScroll();
    handleResize();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Calculate fade out and parallax effect based on screen height (vh)
  // This ensures the hero doesn't fully hide until the StatsBar right below it 
  // actually reaches the top of the screen where the navbar is.
  const fadeStart = vh * 0.15; // Start fading a bit after starting to scroll
  const fadeDistance = vh * 0.85; // Finish fading right when the next section arrives
  const heroOpacity = scrollY < fadeStart 
    ? 1 
    : Math.max(1 - (scrollY - fadeStart) / fadeDistance, 0);
    
  // Subtler parallax that scales with resolution
  const heroTranslateY = scrollY * 0.35;

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 scroll-mt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background opacity-50" />
      
      <div 
        className="relative max-w-7xl mx-auto px-4 sm:px-5 md:px-6 py-12 sm:py-20 md:py-32 w-full z-10"
        style={{
          opacity: heroOpacity,
          transform: `translateY(${heroTranslateY}px)`,
          pointerEvents: heroOpacity < 0.1 ? 'none' : 'auto'
        }}
      >
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-16">
          <h1 
            ref={titleAnimation.ref}
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-foreground mb-4 sm:mb-6 leading-[1.15] sm:leading-[1.1] animate-on-scroll ${titleAnimation.isVisible ? 'visible' : ''}`} 
            data-testid="text-hero-title"
          >
            Launch your own <span className="gradient-text">marketplace or branded store</span> in days, not months
          </h1>
          <p 
            ref={subtitleAnimation.ref}
            className={`text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-10 max-w-3xl mx-auto font-medium animate-on-scroll stagger-1 ${subtitleAnimation.isVisible ? 'visible' : ''}`} 
            data-testid="text-hero-subtitle"
          >
            Complete GCC-ready commerce platform for brands and marketplaces — with product management, subscriptions, automated payouts, and scalable workflows.
          </p>
          <div 
            ref={buttonsAnimation.ref}
            className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center animate-on-scroll stagger-2 ${buttonsAnimation.isVisible ? 'visible' : ''}`}
          >
            <Button 
              onClick={onOpenSignup}
              size="lg" 
              className="shadow-playful group text-base sm:text-lg px-6 sm:px-8 py-6 rounded-2xl font-bold hover:scale-[1.02] transition-transform w-full sm:w-auto" 
              data-testid="button-hero-get-started"
            >
              <span className="hidden sm:inline">Start Building Your Marketplace</span>
              <span className="sm:hidden">Start Building</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={scrollToBooking}
              className="backdrop-blur-sm text-base sm:text-lg px-6 sm:px-8 py-6 rounded-2xl font-semibold border-2 hover:scale-[1.02] transition-transform w-full sm:w-auto" 
              data-testid="button-hero-whatsapp"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Talk to Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
