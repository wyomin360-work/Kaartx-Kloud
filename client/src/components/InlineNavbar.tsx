import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import logoImage from '@assets/kloud_plain_blue_1770616738294.png';
import { Link } from 'wouter';
import * as Portal from '@radix-ui/react-portal';
import FullScreenMenuOverlay, { type NavItem } from './FullScreenMenuOverlay';
import { lockScrollForMobileMenu, unlockScrollForMobileMenu } from './Navbar';

interface InlineNavbarProps {
  onOpenSignup?: () => void;
}

export default function InlineNavbar({ onOpenSignup }: InlineNavbarProps) {
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

  // Mobile-only additional nav items (placed after About in full screen menu overlay)
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

  // Handle menu scroll lock
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

  const navigateToHome = () => {
    setIsMobileMenuOpen(false);

    if (location !== '/') {
      window.location.href = '/';
    } else {
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
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-6xl z-[105] transition-all duration-300 py-1.5 px-4 sm:px-6 bg-white/60 shadow-xs dark:bg-black/30 backdrop-blur-xl border border-white/40 dark:border-white/5 rounded-full flex items-center justify-between`}
      >
        {/* Left: Logo */}
        <div className="flex-shrink-0 flex items-center">
          <button
            onClick={navigateToHome}
            className="hover-elevate rounded-md transition-all py-1.5"
          >
            <img
              src={logoImage}
              alt="Kloud"
              className="h-4 md:h-5 w-auto object-contain"
            />
          </button>
        </div>

        {/* Center: Desktop Inline Links */}
        <div className="hidden lg:flex items-center gap-6 ">
          {navItems.map((item) => (
            <div key={item.testId} className="relative group">
              {item.type === 'link' ? (
                <Link
                  href={item.target}
                  className="text-[11px] font-semibold tracking-wider text-muted-foreground hover:text-foreground transition-all duration-300 uppercase py-1.5 block relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 group-hover:after:origin-left group-hover:after:scale-x-100"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  onClick={(e) => handleNavClick(item, e)}
                  className="text-[11px] font-semibold tracking-wider text-muted-foreground hover:text-foreground transition-all duration-300 uppercase py-1.5 block relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 group-hover:after:origin-left group-hover:after:scale-x-100"
                >
                  {item.label}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Right: Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          {onOpenSignup && (
            <>
              {/* Log In Text Link */}
              {/* <button
                onClick={onOpenSignup}
                className="hidden lg:inline-block text-xs font-semibold tracking-wider text-muted-foreground hover:text-foreground transition-colors mr-2 cursor-pointer"
              >
                Log in
              </button> */}

              {/* Get Started Button */}
              <Button
                onClick={onOpenSignup}
                className="hidden lg:inline-flex rounded-full px-5 py-2 text-[11px] font-bold tracking-wider uppercase bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 items-center gap-1.5 min-h-0 h-9 group/btn"
              >
                Get Started
                <span className="transition-transform duration-300 group-hover/btn:translate-x-0.5 text-xs font-normal">→</span>
              </Button>
            </>
          )}

          {/* Hamburger Menu Toggle for Mobile/Tablet */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden hover:bg-primary/10 transition-colors p-1.5 rounded-full relative h-9 w-9 flex items-center justify-center"
            data-testid="button-mobile-menu"
          >
            <Menu
              className="h-5.5 w-5.5 stroke-[1.5] absolute transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                opacity: isMobileMenuOpen ? 0 : 1,
                transform: isMobileMenuOpen ? 'rotate(90deg) scale(0.5)' : 'rotate(0deg) scale(1)',
              }}
            />
            <X
              className="h-5.5 w-5.5 stroke-[1.5] absolute transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? 'rotate(0deg) scale(1)' : 'rotate(-90deg) scale(0.5)',
              }}
            />
          </button>
        </div>
      </nav>

      {/* Standalone FullScreen Menu Overlay for Mobile */}
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
