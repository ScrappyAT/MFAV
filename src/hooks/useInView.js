import { useEffect, useRef, useState } from 'react';

/**
 * useInView — fires once when the element crosses `threshold` visibility,
 * then disconnects (A3/Phase 6: "triggered at ~15% visibility, once...
 * never re-animate on scroll-back"). Used by section/image reveals and by
 * the statistics counter.
 *
 * Under `prefers-reduced-motion: reduce`, resolves to visible immediately
 * — the caller's animation is already neutralized by the global reduced-
 * motion rule, but skipping the observer entirely means content isn't
 * left waiting on a scroll trigger that will never visibly animate.
 */
export function useInView({ threshold = 0.15 } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInView(true);
      return undefined;
    }

    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}
