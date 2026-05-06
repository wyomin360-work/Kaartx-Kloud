import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import logoImage from '@assets/kloud_plain_blue_1770616738294.png';
import { Link } from 'wouter';
import * as Portal from '@radix-ui/react-portal';

interface NavbarProps {
  onOpenSignup?: () => void;
}

type NavItem = {
  label: string;
  target: string;
  type: 'scroll' | 'link';
  testId: string;
};

// Mobile menu scroll lock - simple overflow: hidden approach
// Content stays visible at current scroll position
function lockScrollForMobileMenu() {
  document.documentElement.classList.add('mobile-menu-open');
  document.body.classList.add('mobile-menu-open');
}

function unlockScrollForMobileMenu() {
  document.documentElement.classList.remove('mobile-menu-open');
  document.body.classList.remove('mobile-menu-open');
}

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
      // Don't update state during modal transitions to prevent visual jitter
      if (document.body.classList.contains('modal-open-mobile')) {
        return;
      }
      setIsScrolled(window.scrollY > 20);
    };

    // Check initial state
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mobile menu scroll lock
  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (!isMobile) return;

    if (isMobileMenuOpen) {
      lockScrollForMobileMenu();
    } else {
      unlockScrollForMobileMenu();
    }
  }, [isMobileMenuOpen]);

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

  // Force scroll to top when clicking logo - always goes to homepage top
  const navigateToHome = () => {
    setIsMobileMenuOpen(false);
    
    if (location !== '/') {
      // Navigate to homepage and scroll to top
      window.location.href = '/';
    } else {
      // Already on homepage - force scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
      history.pushState(null, '', '/');
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
    <Portal.Root>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-300 ${
          isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : 'bg-transparent border-b border-transparent'
        }`}
        style={{ transform: 'translate3d(0,0,0)' }}
      >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex-shrink-0">
            <button
              onClick={navigateToHome}
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

          <div className="hidden items-center gap-6 lg:gap-8 md:flex">
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

      <MobileMenuOverlay
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
        mobileOnlyNavItems={mobileOnlyNavItems}
        onNavClick={handleNavClick}
      />
      </nav>
    </Portal.Root>
  );
}

// Mobile menu rendered via Portal for proper z-index stacking
function MobileMenuOverlay({
  isOpen,
  onClose,
  navItems,
  mobileOnlyNavItems,
  onNavClick,
}: {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  mobileOnlyNavItems: NavItem[];
  onNavClick: (item: NavItem, e?: React.MouseEvent) => void;
}) {
  if (!isOpen) return null;

  return (
    <Portal.Root>
      {/* Backdrop - click to close */}
      <div 
        className="md:hidden fixed inset-0 top-16 bg-black/50 z-[100]"
        onClick={onClose}
        data-testid="mobile-menu-backdrop"
        aria-hidden="true"
      />
      {/* Menu panel */}
      <div 
        className="md:hidden fixed left-0 right-0 top-16 bg-background border-t border-border shadow-md z-[101]"
        data-testid="mobile-menu-overlay"
      >
        <div className="mx-auto max-w-7xl space-y-1 px-4 py-4 sm:px-6 lg:px-8">
          {navItems.map((item) => (
            item.type === 'link' ? (
              <Link
                key={item.testId}
                href={item.target}
                onClick={onClose}
                className="block w-full text-left px-4 py-2.5 text-base text-muted-foreground hover:text-foreground hover-elevate rounded-lg transition-colors"
                data-testid={`mobile-${item.testId}`}
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.testId}
                onClick={(e) => onNavClick(item, e)}
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
              onClick={onClose}
              className="block w-full text-left px-4 py-2.5 text-base text-muted-foreground hover:text-foreground hover-elevate rounded-lg transition-colors"
              data-testid={`mobile-${item.testId}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </Portal.Root>
  );
}
