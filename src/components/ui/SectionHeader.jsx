import React from 'react';
import Eyebrow from './Eyebrow';

/**
 * SectionHeader — eyebrow + heading + optional supporting paragraph +
 * optional right-aligned action. Left-aligned by default; pass `align =
 * "center"` for the few sections (e.g. Industries) that call for it.
 */
export default function SectionHeader({
  eyebrow,
  index,
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

  return (
    <div
      className={[
        'flex flex-col gap-4 mb-12 md:mb-16',
        isCenter ? 'items-center text-center' : 'md:flex-row md:items-end md:justify-between',
        className,
      ].join(' ')}
    >
      <div className={isCenter ? 'max-w-2xl' : 'max-w-2xl'}>
        {eyebrow && (
          <Eyebrow index={index} onDark={onDark} className="mb-3">
            {eyebrow}
          </Eyebrow>
        )}
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
