import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';

// A6 Phase 6: "a brief opacity-and-lift on route change, ~200ms in,
// ~120ms out. Never block interaction, never delay first paint."
//
// React Router swaps the matched route's element synchronously — there's
// no built-in exit phase to animate during, and pulling in a routing-
// transition library needs approval per A2.4. This holds the OUTGOING
// page on screen for one dur-1 (120ms) tick while it fades/lifts out,
// then swaps to the new page and lets it fade/lift in over dur-2
// (200ms). No new dependency: `useOutlet()` (react-router-dom, already a
// dependency) hands back the current route's element; a `key` change on
// the wrapper forces a clean unmount/remount at the swap.
//
// "Never delay first paint" is satisfied by starting in the `entered`
// stage with no animation — only a subsequent navigation ever enters
// `exiting`/`entering`. A same-page hash change (an anchor jump, not a
// route change) is explicitly excluded — that's ScrollManager's job, and
// re-mounting the page for a hash-only change would be visible flicker
// for zero benefit.
const EXIT_MS = 120;

export default function PageTransition() {
  const location = useLocation();
  const outlet = useOutlet();

  const latestRef = useRef({ location, outlet });
  latestRef.current = { location, outlet };
  const prevPathRef = useRef(location.pathname);

  const [displayed, setDisplayed] = useState({ location, outlet });
  const [stage, setStage] = useState('entered'); // 'entered' | 'exiting' | 'entering'

  useEffect(() => {
    if (location.pathname === prevPathRef.current) return undefined; // hash-only change
    prevPathRef.current = location.pathname;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayed(latestRef.current);
      return undefined;
    }

    setStage('exiting');
    const exitTimer = setTimeout(() => {
      setDisplayed(latestRef.current);
      setStage('entering');
    }, EXIT_MS);
    return () => clearTimeout(exitTimer);
  }, [location.pathname]);

  useEffect(() => {
    if (stage !== 'entering') return undefined;
    // Two rAFs: the first lets the browser actually paint the "entering"
    // starting state (opacity 0 / translated); only on the following
    // frame do we flip to "entered", so the transition is guaranteed to
    // run instead of being coalesced into a single no-op frame.
    let cancelled = false;
    let raf2 = null;
    const raf1 = requestAnimationFrame(() => {
      if (cancelled) return;
      raf2 = requestAnimationFrame(() => setStage('entered'));
    });
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf1);
      if (raf2 != null) cancelAnimationFrame(raf2);
    };
  }, [stage]);

  return (
    <div
      key={displayed.location.pathname}
      className={[
        'page-transition',
        stage === 'exiting' && 'page-transition-exit',
        stage === 'entering' && 'page-transition-enter',
        stage === 'entered' && 'page-transition-entered',
      ].filter(Boolean).join(' ')}
    >
      {displayed.outlet}
    </div>
  );
}
