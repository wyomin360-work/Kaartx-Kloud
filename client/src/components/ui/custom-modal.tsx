import { useEffect, useRef, useLayoutEffect } from "react";
import * as Portal from "@radix-ui/react-portal";
import { FocusScope } from "@radix-ui/react-focus-scope";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface CustomModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
  showCloseButton?: boolean;
  preventOutsideClick?: boolean;
}

// Store scroll position for mobile
let scrollY = 0;
let touchMoveHandler: ((e: TouchEvent) => void) | null = null;

// DESKTOP: Simple scroll lock with scrollbar compensation
function lockBodyScrollDesktop() {
  const scrollbarWidth =
    window.innerWidth - document.documentElement.clientWidth;
  document.body.style.overflow = "hidden";
  document.body.style.paddingRight = `${scrollbarWidth}px`;
}

function unlockBodyScrollDesktop() {
  document.body.style.overflow = "";
  document.body.style.paddingRight = "";
}

// MOBILE: Scroll lock WITHOUT position changes - prevents header jitter
function lockBodyScrollMobile() {
  // Save current scroll position
  scrollY = window.scrollY;

  // Add class for CSS-based lock (NO position: fixed on body)
  document.documentElement.classList.add("modal-open-mobile");
  document.body.classList.add("modal-open-mobile");

  // Prevent touchmove on body (but allow on modal content)
  touchMoveHandler = (e: TouchEvent) => {
    const target = e.target as HTMLElement;
    // Allow scroll inside modal content
    if (target.closest("[data-modal-content]")) {
      return;
    }
    e.preventDefault();
  };
  document.addEventListener("touchmove", touchMoveHandler, { passive: false });
}

function unlockBodyScrollMobile() {
  // Remove touch handler
  if (touchMoveHandler) {
    document.removeEventListener("touchmove", touchMoveHandler);
    touchMoveHandler = null;
  }

  // Remove classes - no scroll restoration needed since we didn't change position
  document.documentElement.classList.remove("modal-open-mobile");
  document.body.classList.remove("modal-open-mobile");
}

function lockBodyScroll() {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  if (isMobile) {
    lockBodyScrollMobile();
  } else {
    lockBodyScrollDesktop();
  }
}

function unlockBodyScroll() {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  if (isMobile) {
    unlockBodyScrollMobile();
  } else {
    unlockBodyScrollDesktop();
  }
}

export function CustomModal({
  open,
  onOpenChange,
  children,
  className,
  showCloseButton = true,
  preventOutsideClick = false,
}: CustomModalProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onOpenChange(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open, onOpenChange]);

  useEffect(() => {
    if (open && contentRef.current) {
      contentRef.current.focus();
      contentRef.current.scrollTop = 0;
    }
  }, [open]);

  // Lock body scroll for both mobile and desktop
  useLayoutEffect(() => {
    if (open) {
      lockBodyScroll();
      return () => {
        unlockBodyScroll();
      };
    }
  }, [open]);

  if (!open) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    // Check if click was inside the modal content
    if (contentRef.current?.contains(e.target as Node)) {
      return; // Click inside modal, allow it
    }

    // Click was outside modal (on backdrop)
    if (preventOutsideClick) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    // Close modal if outside clicks are allowed
    onOpenChange(false);
  };

  return (
    <Portal.Root>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0"
        onClick={handleBackdropClick}
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          aria-hidden="true"
        />

        {/* Modal Content */}
        <FocusScope trapped loop>
          <div
            ref={contentRef}
            data-modal-content
            className={cn(
              "relative z-50 rounded-lg border bg-background shadow-lg",
              "duration-200 animate-in fade-in-0 zoom-in-95",
              "[&_*:focus-visible]:outline-none [&_*:focus-visible]:ring-0 [&_*:focus]:outline-none [&_*:focus]:ring-0",
              className,
            )}
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
          >
            {showCloseButton && (
              <button
                onClick={() => onOpenChange(false)}
                className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-0 disabled:pointer-events-none"
                aria-label="Close"
                data-testid="button-close-modal"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </button>
            )}
            {children}
          </div>
        </FocusScope>
      </div>
    </Portal.Root>
  );
}

export function CustomModalHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col space-y-1.5 p-6", className)}>
      {children}
    </div>
  );
}

export function CustomModalTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "text-lg font-semibold leading-none tracking-tight",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function CustomModalDescription({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)}>{children}</p>
  );
}
