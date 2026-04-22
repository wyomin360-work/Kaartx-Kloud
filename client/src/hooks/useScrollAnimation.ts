import { useEffect, useRef, useState } from "react";

export function useScrollAnimation<T extends HTMLElement = HTMLElement>(
  threshold = 0.15,
  rootMargin = "-50px",
) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Disconnect observer after visibility is set for performance
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      },
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}
