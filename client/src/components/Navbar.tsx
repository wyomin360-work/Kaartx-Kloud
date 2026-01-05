import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import logoImage from '@assets/Asset 4@4x_1762100909160.png';
import { Link } from 'wouter';

interface NavbarProps {
  onOpenSignup?: () => void;
}

type NavItem = {
  label: string;
  target: string;
  type: 'scroll' | 'link';
  testId: string;
};

export default function Navbar({ onOpenSignup }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems: NavItem[] = [
    { label: 'Features', target: 'features', type: 'scroll', testId: 'link-features' },
    { label: 'Integrations', target: 'integrations', type: 'scroll', testId: 'link-integrations' },
    { label: 'Pricing', target: 'pricing', type: 'scroll', testId: 'link-pricing' },
    { label: 'FAQs', target: 'faq', type: 'scroll', testId: 'link-faq' },
    { label: 'Contact', target: 'booking', type: 'scroll', testId: 'link-contact' },
    { label: 'About', target: 'about', type: 'scroll', testId: 'link-about' },
  ];

  // Mobile-only additional nav items (placed after About)
  const mobileOnlyNavItems: NavItem[] = [
    { label: 'Blog', target: '/blog', type: 'link', testId: 'link-blog' },
    { label: 'Careers', target: '/careers', type: 'link', testId: 'link-careers' },
  ];

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

  const handleNavClick = (item: NavItem, e?: React.MouseEvent) => {
    setIsMobileMenuOpen(false);
    if (item.type === 'scroll') {
      e?.preventDefault();
      navigateToSection(item.target);
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
            {navItems.map((item) => (
              item.type === 'link' ? (
                <Link
                  key={item.testId}
                  href={item.target}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid={item.testId}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.testId}
                  onClick={(e) => handleNavClick(item, e)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid={item.testId}
                >
                  {item.label}
                </button>
              )
            ))}
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
        <div className="md:hidden bg-card/95 backdrop-blur-sm border-t border-border shadow-md">
          <div className="px-5 py-4 space-y-1">
            {navItems.map((item) => (
              item.type === 'link' ? (
                <Link
                  key={item.testId}
                  href={item.target}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-left px-4 py-2.5 text-base text-muted-foreground hover:text-foreground hover-elevate rounded-lg transition-colors"
                  data-testid={`mobile-${item.testId}`}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.testId}
                  onClick={(e) => handleNavClick(item, e)}
                  className="block w-full text-left px-4 py-2.5 text-base text-muted-foreground hover:text-foreground hover-elevate rounded-lg transition-colors"
                  data-testid={`mobile-${item.testId}`}
                >
                  {item.label}
                </button>
              )
            ))}
            {/* Mobile-only: Blog and Careers links */}
            {mobileOnlyNavItems.map((item) => (
              <Link
                key={item.testId}
                href={item.target}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left px-4 py-2.5 text-base text-muted-foreground hover:text-foreground hover-elevate rounded-lg transition-colors"
                data-testid={`mobile-${item.testId}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
