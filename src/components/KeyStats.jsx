import React, { useEffect, useState } from 'react';
import Container from './ui/Container';
import Stat from './ui/Stat';
import { useInView } from '../hooks/useInView';

const STATS = [
  { value: '10+', label: 'Service Capabilities' },
  { value: '24/7', label: 'Operational Support' },
  { value: '100%', label: 'Safety Commitment' },
  { value: 'Nigeria & Beyond', label: 'Operational Reach' },
];

const NUMERIC = /^(\d+)(.*)$/;
const COUNT_MS = 1200;
const easeOut = (t) => 1 - Math.pow(1 - t, 3);

/** Counts 0 → target once when `start` flips true; static otherwise. */
function useCountUp(target, start) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start || target == null) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(target);
      return undefined;
    }

    let raf;
    const startTime = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - startTime) / COUNT_MS, 1);
      setValue(Math.round(easeOut(progress) * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target]);

  return value;
}

function AnimatedStat({ value, label, start }) {
  const match = value.match(NUMERIC);
  const target = match ? Number(match[1]) : null;
  const suffix = match ? match[2] : '';
  const count = useCountUp(target, start);

  const display = target != null ? `${count}${suffix}` : value;

  return <Stat value={display} label={label} onDark />;
}

/**
 * Statistics band — A6 §2d. Full-width navy band, four items on hairline
 * rules. Numerals are off-white and never accent-colored (A3). Counters
 * fire once on scroll-into-view via useInView (which itself only ever
 * fires once) — they cannot re-trigger on scroll-back.
 */
export default function KeyStats() {
  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <section ref={ref} className="bg-c-primary-bg py-16">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {STATS.map((stat) => (
            <AnimatedStat key={stat.label} value={stat.value} label={stat.label} start={inView} />
          ))}
        </div>
      </Container>
    </section>
  );
}
