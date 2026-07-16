import * as Portal from '@radix-ui/react-portal';
import { Link } from 'wouter';

export type NavItem = {
  label: string;
  target: string;
  type: 'scroll' | 'link';
  testId: string;
};

interface FullScreenMenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  mobileOnlyNavItems: NavItem[];
  onNavClick: (item: NavItem, e?: React.MouseEvent) => void;
}

export default function FullScreenMenuOverlay({
  isOpen,
  onClose,
  navItems,
  mobileOnlyNavItems,
  onNavClick,
}: FullScreenMenuOverlayProps) {
  const allItems = [...navItems, ...mobileOnlyNavItems];

  return (
    <Portal.Root>
      <div
        className={`fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-center ${
          isOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
        data-testid="fullscreen-menu-overlay"
      >
        <div className="mx-auto max-w-[1400px] w-full px-6 lg:px-12 pt-28 pb-10 flex flex-col justify-start h-full">
          <div className="flex flex-col w-full max-w-xs sm:max-w-sm md:max-w-md">
            {allItems.map((item, i) => (
              <div
                key={item.testId}
                className="overflow-hidden border-b border-foreground/10 last:border-b-0"
              >
                <div
                  className="transform transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    transform: isOpen ? 'translateY(0)' : 'translateY(100%)',
                    transitionDelay: isOpen ? `${i * 50 + 100}ms` : '0ms',
                  }}
                >
                  {item.type === 'link' ? (
                    <Link
                      href={item.target}
                      onClick={onClose}
                      className="py-5 sm:py-6 text-sm sm:text-base font-medium tracking-[0.2em] text-muted-foreground/70 hover:text-foreground transition-all duration-300 uppercase block hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] w-full text-left"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      onClick={(e) => {
                        onClose();
                        onNavClick(item, e);
                      }}
                      className="py-5 sm:py-6 text-sm sm:text-base font-medium tracking-[0.2em] text-muted-foreground/70 hover:text-foreground transition-all duration-300 uppercase block hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] w-full text-left"
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Portal.Root>
  );
}
