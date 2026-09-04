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

// The Phase 6 section-reveal system, in one place: `useInView` above is
// the trigger (fires once, ~15% visibility, reduced-motion-aware); the
// `.reveal-on-scroll`/`.reveal-image` CSS in index.css is the motion
// (opacity 0→1 + translateY 16→0, ~500ms entrance easing — never a whole
// section as one heavy block); `revealClass` below is the one place that
// combines them with an optional stagger step, so no component hand-rolls
// its own reveal className logic. Any component fading/lifting content in
// on scroll should go through this trio rather than adding a bespoke
// IntersectionObserver or a one-off CSS transition.
//
// `index` staggers up to six children ~60ms apart (A3 Phase 6: "Stagger
// children ~60ms, capped at six"); pass nothing for a single-element
// reveal. Delays beyond the fifth child are clamped to the sixth's delay
// rather than continuing to climb, so a long list doesn't crawl in.
const STAGGER_DELAY_CLASSES = [
  'delay-stagger-0',
  'delay-stagger-1',
  'delay-stagger-2',
  'delay-stagger-3',
  'delay-stagger-4',
  'delay-stagger-5',
];

export function revealClass(inView, index = null, extra = '') {
  const classes = ['reveal-on-scroll'];
  if (inView) classes.push('is-visible');
  if (index != null) classes.push(STAGGER_DELAY_CLASSES[Math.min(index, STAGGER_DELAY_CLASSES.length - 1)]);
  if (extra) classes.push(extra);
  return classes.join(' ');
}
