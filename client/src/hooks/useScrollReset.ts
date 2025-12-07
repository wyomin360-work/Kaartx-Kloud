import { useLayoutEffect } from 'react';
import { useLocation } from 'wouter';

export function useScrollReset() {
  const [location] = useLocation();

  useLayoutEffect(() => {
    // Disable browser scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    // Check if we're on the homepage without a hash
    if (location === '/' && !window.location.hash) {
      // Force scroll to top immediately
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, [location]);

  // Also run on initial mount with a slight delay to override browser restoration
  useLayoutEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    // Immediate scroll
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    
    // Also schedule for next frame to catch any late browser restoration
    const frameId = requestAnimationFrame(() => {
      if (window.location.pathname === '/' && !window.location.hash) {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
      }
    });
    
    // And a backup timeout
    const timeoutId = setTimeout(() => {
      if (window.location.pathname === '/' && !window.location.hash) {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
      }
    }, 50);

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(timeoutId);
    };
  }, []);
}
