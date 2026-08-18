import React from 'react';

/**
 * Stat — large numeral + label, optional hairline rule. Understated by
 * design: no boxes, no icons, no accent fills. The numeral is never
 * accent-colored (A3 §2d) — it's off-white on navy or charcoal on light.
 */
export default function Stat({ value, label, hairline = true, onDark = false, className = '' }) {
  return (
    <div
      className={[
        'flex flex-col items-center text-center px-4',
        hairline && 'border-r border-c-border/30 last:border-r-0',
        className,
      ].filter(Boolean).join(' ')}
    >
      <span
        className={[
          'text-stat',
          onDark ? 'text-c-ondark' : 'text-c-on',
        ].join(' ')}
      >
        {value}
      </span>
      <span
        className={[
          'mt-2 text-eyebrow uppercase',
          onDark ? 'text-c-ondark/70' : 'text-c-on-muted',
        ].join(' ')}
      >
        {label}
      </span>
    </div>
  );
}
