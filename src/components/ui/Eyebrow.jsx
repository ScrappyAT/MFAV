import React from 'react';

/**
 * Eyebrow — small uppercase, wide-tracked label. Pass `index` for the
 * canonical homepage numeral treatment ("01 — Our Capabilities").
 */
export default function Eyebrow({ index, onDark = false, className = '', children }) {
  return (
    <span
      className={[
        'block text-eyebrow uppercase',
        onDark ? 'text-c-ondark-primary' : 'text-c-primary',
        className,
      ].join(' ')}
    >
      {index && <span aria-hidden="true">{index} — </span>}
      {children}
    </span>
  );
}
