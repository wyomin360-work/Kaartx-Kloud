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

  const mobileOnlyNavItems: NavItem[] = [
    { label: 'Blog', target: '/blog', type: 'link', testId: 'link-blog' },
    { label: 'Careers', target: '/careers', type: 'link', testId: 'link-careers' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (document.body.classList.contains('modal-open-mobile')) return;
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (!isMobile) return;

    if (isMobileMenuOpen) lockScrollForMobileMenu();
    else unlockScrollForMobileMenu();
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-[900ms] ${isScrolled ? 'py-2' : 'py-4'
          }`}
        style={{
          transform: isScrolled
            ? 'translateY(8px) scale(0.98)'
            : 'translateY(0) scale(1)',
        }}
      >
        <div className="px-2 flex justify-center">
          {/* PAPER CONTAINER */}
          <div
            className={`w-full transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isScrolled
                ? 'bg-background/80 backdrop-blur-lg border border-border rounded-2xl shadow-lg px-8 max-w-7xl'
                : 'bg-transparent border-transparent px-2 max-w-7xl'
              }`}
          >
            {/* NAV CONTENT */}
            <div className="flex items-center justify-between h-16 w-full">
              {/* LOGO */}
              <button
                onClick={navigateToHome}
                className="hover-elevate rounded-md transition-all shrink-0"
              >
                <img src={logoImage} alt="Kloud" className="h-8 w-auto" />
              </button>

              {/* DESKTOP NAV */}
              <div className="hidden md:flex items-center space-x-8 shrink-0">
                {navItems.map((item) =>
                  item.type === 'link' ? (
                    <Link
                      key={item.testId}
                      href={item.target}
                      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      key={item.testId}
                      onClick={(e) => handleNavClick(item, e)}
                      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </button>
                  )
                )}

                <Button
                  onClick={onOpenSignup}
                  className="shadow-glow hover:scale-[1.02] transition-transform rounded-full px-6"
                >
                  Get Started
                </Button>
              </div>

              {/* MOBILE BUTTON */}
              <div className="md:hidden flex items-center">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </Button>
              </div>
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

/* MOBILE MENU (UNCHANGED) */
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
      <div
        className="md:hidden fixed inset-0 top-16 bg-black/50 z-[100]"
        onClick={onClose}
      />

      <div className="md:hidden fixed left-0 right-0 top-16 bg-background border-t border-border shadow-md z-[101]">
        <div className="px-5 py-4 space-y-1">
          {navItems.map((item) =>
            item.type === 'link' ? (
              <Link
                key={item.testId}
                href={item.target}
                onClick={onClose}
                className="block px-4 py-2.5 text-base text-muted-foreground hover:text-foreground rounded-lg"
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.testId}
                onClick={(e) => onNavClick(item, e)}
                className="block w-full text-left px-4 py-2.5 text-base text-muted-foreground hover:text-foreground rounded-lg"
              >
                {item.label}
              </button>
            )
          )}

          {mobileOnlyNavItems.map((item) => (
            <Link
              key={item.testId}
              href={item.target}
              onClick={onClose}
              className="block px-4 py-2.5 text-base text-muted-foreground hover:text-foreground rounded-lg"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </Portal.Root>
  );
}