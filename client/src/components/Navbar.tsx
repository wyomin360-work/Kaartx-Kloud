import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import logoImage from '@assets/kloud_plain_blue_1770616738294.png';
import { Link } from 'wouter';
import * as Portal from '@radix-ui/react-portal';
import FullScreenMenuOverlay, { type NavItem } from './FullScreenMenuOverlay';

export interface NavbarProps {
  onOpenSignup?: () => void;
}

// Mobile menu scroll lock - simple overflow: hidden approach
// Content stays visible at current scroll position
export function lockScrollForMobileMenu() {
  document.documentElement.classList.add('mobile-menu-open');
  document.body.classList.add('mobile-menu-open');
}

export function unlockScrollForMobileMenu() {
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

  // Handle menu scroll lock (applied to all screen sizes now)
  useEffect(() => {
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
        className={`absolute top-0 left-0 right-0 z-[105] transition-[background-color,backdrop-filter,border-color] duration-300 py-3 `}
        style={{ transform: 'translate3d(0,0,0)' }}
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="flex h-12 items-center justify-between">
            <div className="flex-shrink-0 flex items-center">
              <button
                onClick={navigateToHome}
                className="hover-elevate rounded-md transition-all"
              // data-testid="link-logo"
              >
                <img
                  src={logoImage}
                  alt="Kloud"
                  className="h-4 md:h-6 w-auto object-contain"
                />
              </button>
            </div>

            <div className="flex items-center justify-end">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="hover:bg-primary/10 transition-colors p-2 rounded-full relative h-11 w-11 flex items-center justify-center"
                data-testid="button-mobile-menu"
              >
                <Menu
                  className="h-7 w-7 stroke-[1.5] absolute transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                    transform: isMobileMenuOpen ? 'rotate(90deg) scale(0.5)' : 'rotate(0deg) scale(1)',
                  }}
                />
                <X
                  className="h-7 w-7 stroke-[1.5] absolute transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    opacity: isMobileMenuOpen ? 1 : 0,
                    transform: isMobileMenuOpen ? 'rotate(0deg) scale(1)' : 'rotate(-90deg) scale(0.5)',
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <FullScreenMenuOverlay
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
        mobileOnlyNavItems={mobileOnlyNavItems}
        onNavClick={handleNavClick}
      />
    </Portal.Root>
  );
}
