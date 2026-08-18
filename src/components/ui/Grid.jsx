import React from 'react';

/**
 * Grid — a 12-column grid helper (A3: "12-column grid, generous
 * max-width"). Pass `cols` for a simple responsive N-up grid, or omit it
 * and use Tailwind's `col-span-*` utilities directly on children against
 * the underlying 12 columns for editorial/asymmetric layouts.
 */
const COLS_CLASSES = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-2 lg:grid-cols-4',
  12: 'grid-cols-12',
};

export default function Grid({ cols = 12, gap = 'gap-6 md:gap-8', className = '', children, ...rest }) {
  return (
    <div className={['grid', COLS_CLASSES[cols] || COLS_CLASSES[12], gap, className].join(' ')} {...rest}>
      {children}
    </div>
  );
}
