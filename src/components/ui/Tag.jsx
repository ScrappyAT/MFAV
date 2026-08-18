import React from 'react';

/**
 * Tag — square, hairline-bordered, uppercase micro-label. Used for sector
 * and location metadata (ProjectCard, etc.). Not a button, not a link —
 * a static label; wrap it in a real interactive element if it needs to
 * be clickable.
 */
export default function Tag({ onDark = false, className = '', children }) {
  return (
    <span
      className={[
        'inline-flex items-center rounded-token-sm border px-2.5 py-1',
        'text-micro uppercase',
        onDark
          ? 'border-c-ondark/30 text-c-ondark'
          : 'border-c-border-hl text-c-on-muted',
        className,
      ].join(' ')}
    >
      {children}
    </span>
  );
}
