import React from 'react';

/**
 * Container — the one horizontal-measure wrapper. `wide` opts into the
 * 1440px content-lg band for Phase 5's editorial split-rows; the default
 * 1320px covers everything else.
 */
export default function Container({ as: Tag = 'div', wide = false, className = '', children, ...rest }) {
  return (
    <Tag
      className={[
        'w-full mx-auto px-6 md:px-10',
        wide ? 'max-w-content-lg' : 'max-w-content',
        className,
      ].join(' ')}
      {...rest}
    >
      {children}
    </Tag>
  );
}
