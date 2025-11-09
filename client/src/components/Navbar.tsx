import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, MessageCircle } from 'lucide-react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import logoImage from '@assets/Asset 4@4x_1762100909160.png';

interface NavbarProps {
  onOpenSignup?: () => void;
}

export default function Navbar({ onOpenSignup }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    
    if (location !== '/') {
      window.location.href = `/#${id}`;
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.pushState(null, '', `#${id}`);
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : 'bg-transparent border-b border-transparent'
      }`}
      style={{ transform: 'translateZ(0)', willChange: 'transform' }}
    >
      <div className="px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => navigateToSection('hero')}
              className="hover-elevate rounded-md transition-all"
              data-testid="link-logo"
            >
              <img 
                src={logoImage} 
                alt="Kloud" 
                className="h-8 w-auto"
              />
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => navigateToSection('features')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-features"
            >
              Features
            </button>
            <button
              onClick={() => navigateToSection('pricing')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-pricing"
            >
              Pricing
            </button>
            <button
              onClick={() => navigateToSection('integrations')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-integrations"
            >
              Integrations
            </button>
            <button
              onClick={() => navigateToSection('booking')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-booking"
            >
              Book a Call
            </button>
            <button
              onClick={() => navigateToSection('contact')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-contact"
            >
              Contact
            </button>
            <Button
              onClick={onOpenSignup}
              className="shadow-glow hover:scale-[1.02] transition-transform"
              data-testid="button-get-started"
            >
              Get Started
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border shadow-lg">
          <div className="px-5 py-6 space-y-2">
            <button
              onClick={() => navigateToSection('features')}
              className="block w-full text-left px-4 py-3 text-base text-muted-foreground hover:text-foreground hover-elevate rounded-lg transition-colors"
              data-testid="link-mobile-features"
            >
              Features
            </button>
            <button
              onClick={() => navigateToSection('pricing')}
              className="block w-full text-left px-4 py-3 text-base text-muted-foreground hover:text-foreground hover-elevate rounded-lg transition-colors"
              data-testid="link-mobile-pricing"
            >
              Pricing
            </button>
            <button
              onClick={() => navigateToSection('integrations')}
              className="block w-full text-left px-4 py-3 text-base text-muted-foreground hover:text-foreground hover-elevate rounded-lg transition-colors"
              data-testid="link-mobile-integrations"
            >
              Integrations
            </button>
            <button
              onClick={() => navigateToSection('booking')}
              className="block w-full text-left px-4 py-3 text-base text-muted-foreground hover:text-foreground hover-elevate rounded-lg transition-colors"
              data-testid="link-mobile-booking"
            >
              Book a Call
            </button>
            <button
              onClick={() => navigateToSection('contact')}
              className="block w-full text-left px-4 py-3 text-base text-muted-foreground hover:text-foreground hover-elevate rounded-lg transition-colors"
              data-testid="link-mobile-contact"
            >
              Contact
            </button>
            
            <div className="pt-6 space-y-3">
              <Button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenSignup?.();
                }}
                className="w-full h-12 text-base hover:scale-[1.02] transition-transform" 
                data-testid="button-mobile-get-started"
              >
                Get Started
              </Button>
              <Button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenSignup?.();
                }}
                className="w-full h-12 text-base hover:scale-[1.02] transition-transform" 
                data-testid="button-mobile-start-building"
              >
                Start Building
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                onClick={() => navigateToSection('booking')}
                variant="outline"
                className="w-full h-12 text-base hover:scale-[1.02] transition-transform" 
                data-testid="button-mobile-talk-sales"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Talk to Sales
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
