import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoImage from '@assets/Logo_A_1760799119283.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="hover-elevate p-2 rounded-md transition-all"
              data-testid="link-logo"
            >
              <img 
                src={logoImage} 
                alt="Kaartx" 
                className="h-8 w-auto"
              />
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-features"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-pricing"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('integrations')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-integrations"
            >
              Integrations
            </button>
            <button
              onClick={() => scrollToSection('api')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-docs"
            >
              Docs
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-contact"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection('hero')}
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
        <div className="md:hidden bg-card border-t border-border">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('features')}
              className="block w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover-elevate rounded-md transition-colors"
              data-testid="link-mobile-features"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover-elevate rounded-md transition-colors"
              data-testid="link-mobile-pricing"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('integrations')}
              className="block w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover-elevate rounded-md transition-colors"
              data-testid="link-mobile-integrations"
            >
              Integrations
            </button>
            <button
              onClick={() => scrollToSection('api')}
              className="block w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover-elevate rounded-md transition-colors"
              data-testid="link-mobile-docs"
            >
              Docs
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover-elevate rounded-md transition-colors"
              data-testid="link-mobile-contact"
            >
              Contact
            </button>
            <Button className="w-full hover:scale-[1.02] transition-transform" data-testid="button-mobile-get-started">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
