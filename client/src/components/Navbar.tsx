import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/kloud_plain_blue_1770616738294.png";
import { Link } from "wouter";
import * as Portal from "@radix-ui/react-portal";

interface NavbarProps {
  onOpenSignup?: () => void;
}

type NavItem = {
  label: string;
  target: string;
  type: "scroll" | "link";
  testId: string;
};

function lockScrollForMobileMenu() {
  document.documentElement.classList.add("mobile-menu-open");
  document.body.classList.add("mobile-menu-open");
}

function unlockScrollForMobileMenu() {
  document.documentElement.classList.remove("mobile-menu-open");
  document.body.classList.remove("mobile-menu-open");
}

export default function Navbar({ onOpenSignup }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems: NavItem[] = [
    {
      label: "Features",
      target: "features",
      type: "scroll",
      testId: "link-features",
    },
    {
      label: "Integrations",
      target: "integrations",
      type: "scroll",
      testId: "link-integrations",
    },
    {
      label: "Pricing",
      target: "pricing",
      type: "scroll",
      testId: "link-pricing",
    },
    { label: "FAQs", target: "faq", type: "scroll", testId: "link-faq" },
    {
      label: "Contact",
      target: "booking",
      type: "scroll",
      testId: "link-contact",
    },
    { label: "About", target: "about", type: "scroll", testId: "link-about" },
  ];

  const mobileOnlyNavItems: NavItem[] = [
    { label: "Blog", target: "/blog", type: "link", testId: "link-blog" },
    {
      label: "Careers",
      target: "/careers",
      type: "link",
      testId: "link-careers",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (document.body.classList.contains("modal-open-mobile")) return;
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (!isMobile) return;

    if (isMobileMenuOpen) lockScrollForMobileMenu();
    else unlockScrollForMobileMenu();
  }, [isMobileMenuOpen]);

  const navigateToSection = (id: string) => {
    setIsMobileMenuOpen(false);

    if (location !== "/") {
      window.location.href = `/#${id}`;
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        history.pushState(null, "", `#${id}`);
      }
    }
  };

  const navigateToHome = () => {
    setIsMobileMenuOpen(false);

    if (location !== "/") {
      window.location.href = "/";
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      history.pushState(null, "", "/");
    }
  };

  const handleNavClick = (item: NavItem, e?: React.MouseEvent) => {
    setIsMobileMenuOpen(false);

    if (item.type === "scroll") {
      e?.preventDefault();
      navigateToSection(item.target);
    }
  };

  return (
    <Portal.Root>
      <nav
        className={`duration-[900ms] fixed left-0 right-0 top-0 z-50 transition-all ${
          isScrolled ? "py-2" : "py-4"
        }`}
        style={{
          transform: isScrolled ? "translateY(12px)" : "translateY(0)",
        }}
      >
        <div className="flex justify-center px-2">
          {/* PAPER CONTAINER */}
          <div
            className={`w-full transition-all duration-500 ease-out ${
              isScrolled
                ? "max-w-5xl rounded-full border border-slate-200/50 bg-white/80 px-6 shadow-sm backdrop-blur-xl"
                : "max-w-7xl border-transparent bg-transparent px-2"
            }`}
          >
            {/* NAV CONTENT */}
            <div className="flex h-16 w-full items-center justify-between">
              {/* LOGO */}
              <button
                onClick={navigateToHome}
                className="hover-elevate shrink-0 rounded-md transition-all"
              >
                <img src={logoImage} alt="Kloud" className="h-8 w-auto" />
              </button>

              {/* DESKTOP NAV */}
              <div className="hidden shrink-0 items-center space-x-8 md:flex">
                {navItems.map((item) =>
                  item.type === "link" ? (
                    <Link
                      key={item.testId}
                      href={item.target}
                      className="text-[13px] font-semibold tracking-tight text-slate-600 transition-colors hover:text-slate-900"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      key={item.testId}
                      onClick={(e) => handleNavClick(item, e)}
                      className="text-[13px] font-semibold tracking-tight text-slate-600 transition-colors hover:text-slate-900"
                    >
                      {item.label}
                    </button>
                  ),
                )}

                <Button
                  onClick={onOpenSignup}
                  className="rounded-full bg-slate-900 px-6 py-2 text-xs font-bold text-white shadow-none transition-all hover:scale-[1.02] hover:bg-slate-800 active:scale-[0.98]"
                >
                  Get Started
                </Button>
              </div>

              {/* MOBILE BUTTON */}
              <div className="flex items-center md:hidden">
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
        className="fixed inset-0 top-16 z-[100] bg-black/50 md:hidden"
        onClick={onClose}
      />

      <div className="fixed left-0 right-0 top-16 z-[101] border-t border-border bg-background shadow-md md:hidden">
        <div className="space-y-1 px-5 py-4">
          {navItems.map((item) =>
            item.type === "link" ? (
              <Link
                key={item.testId}
                href={item.target}
                onClick={onClose}
                className="block rounded-lg px-4 py-2.5 text-base text-muted-foreground hover:text-foreground"
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.testId}
                onClick={(e) => onNavClick(item, e)}
                className="block w-full rounded-lg px-4 py-2.5 text-left text-base text-muted-foreground hover:text-foreground"
              >
                {item.label}
              </button>
            ),
          )}

          {mobileOnlyNavItems.map((item) => (
            <Link
              key={item.testId}
              href={item.target}
              onClick={onClose}
              className="block rounded-lg px-4 py-2.5 text-base text-muted-foreground hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </Portal.Root>
  );
}
