import React from 'react';

/**
 * IndustryCard — hairline-bordered, scannable tile. `mark` takes a small
 * inline SVG (a geometric line motif, per A3 — never a downloaded icon
 * set). An accent hairline draws in along the top edge on hover.
 */
export default function IndustryCard({ mark, name, relevance, className = '' }) {
  return (
    <div
      className={[
        'group relative flex flex-col items-center gap-3 rounded-token border border-c-border p-6 text-center',
        'transition-colors duration-320 ease-standard hover:bg-c-bg-alt',
        className,
      ].join(' ')}
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-c-primary transition-transform duration-320 ease-standard group-hover:scale-x-100"
      />
      <span className="flex h-12 w-12 items-center justify-center text-c-primary" aria-hidden="true">
        {mark}
      </span>
      <h3 className="text-base font-bold text-c-on">{name}</h3>
      {relevance && <p className="text-sm text-c-on-muted leading-relaxed">{relevance}</p>}
    </div>
  );
}
