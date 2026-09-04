import React from 'react';
import { useInView, revealClass } from '../../hooks/useInView';

/**
 * SectionHeader — heading + optional supporting paragraph + optional
 * right-aligned action. Left-aligned by default; pass `align = "center"`
 * for the few sections (e.g. Industries) that call for it.
 *
 * No eyebrow label — retired site-wide (previously an `Eyebrow` above the
 * heading; see DESIGN-SYSTEM.md). The heading is the true top of a
 * section's content now, so it sits directly on the section's own
 * padding token with no compensating spacing needed.
 *
 * Carries the Phase 6 section-reveal (see `revealClass` in useInView.js)
 * as a single unit — this is the highest-leverage place to wire it,
 * since nearly every section on the site opens with a SectionHeader, so
 * every one of them now reveals consistently for free instead of each
 * page/section rolling its own scroll-trigger.
 */
export default function SectionHeader({
  heading,
  headingLevel = 'h2',
  supporting,
  action,
  align = 'left',
  onDark = false,
  className = '',
}) {
  const Heading = headingLevel;
  const isCenter = align === 'center';
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={[
        'flex flex-col gap-4 mb-12 md:mb-16',
        isCenter ? 'items-center text-center' : 'md:flex-row md:items-end md:justify-between',
        revealClass(inView),
        className,
      ].join(' ')}
    >
      <div className={isCenter ? 'max-w-2xl' : 'max-w-2xl'}>
        <Heading
          className={[
            'text-display-sm md:text-display',
            onDark ? 'text-c-ondark' : 'text-c-on',
          ].join(' ')}
        >
          {heading}
        </Heading>
        {supporting && (
          <p
            className={[
              'mt-4 text-base md:text-lg leading-relaxed max-w-measure',
              onDark ? 'text-c-ondark/75' : 'text-c-on-muted',
            ].join(' ')}
          >
            {supporting}
          </p>
        )}
      </div>
      {action && !isCenter && <div className="shrink-0">{action}</div>}
    </div>
  );
}
