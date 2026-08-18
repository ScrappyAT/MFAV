import React from 'react';

/**
 * Section — owns the vertical rhythm so no page hardcodes section padding.
 * `size` picks the desktop padding step (A3: ~120–180px); `tone` sets the
 * background against the surface ladder without any component needing to
 * know the hex/rgb values.
 */
const TONE_CLASSES = {
  base: 'bg-c-bg',
  alt: 'bg-c-bg-alt',
  surface: 'bg-c-surface',
  navy: 'bg-c-primary-bg',
};

const SIZE_CLASSES = {
  sm: 'py-section-sm',
  md: 'py-section-sm md:py-section',
  lg: 'py-section-sm md:py-section-lg',
};

export default function Section({
  as: Tag = 'section',
  tone = 'base',
  size = 'md',
  border = false,
  className = '',
  children,
  ...rest
}) {
  return (
    <Tag
      className={[
        'relative',
        TONE_CLASSES[tone],
        SIZE_CLASSES[size],
        border && 'border-b border-c-border/40',
        className,
      ].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </Tag>
  );
}
