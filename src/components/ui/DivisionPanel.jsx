import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

/**
 * DivisionPanel — the Capabilities grid's large image panel. Pass a
 * Tailwind col/row-span className via `spanClassName` so the six panels
 * can vary in size for an editorial (non-uniform) composition (A3 §2b).
 *
 * Sub-capabilities are visible by default on touch and reveal on hover on
 * desktop (A3: "never hover-only content on mobile") — done with a
 * max-height/opacity transition gated behind the `md:` breakpoint, not a
 * hover-only conditional render.
 */
export default function DivisionPanel({
  image,
  imageAlt,
  title,
  subCapabilities = [],
  to,
  spanClassName = '',
  className = '',
}) {
  return (
    <Link
      to={to}
      className={[
        'group relative flex flex-col justify-end overflow-hidden rounded-token border border-c-border',
        'min-h-80 bg-c-surface-low',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-c-primary',
        spanClassName,
        className,
      ].join(' ')}
    >
      <img
        src={image}
        alt={imageAlt || ''}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-standard group-hover:scale-105"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-c-scrim/70 transition-colors duration-320 ease-standard group-hover:bg-c-scrim/85"
      />
      <div className="relative z-10 flex flex-col gap-3 p-6 md:p-8">
        <h3 className="flex items-center justify-between gap-3 text-xl font-bold text-c-ondark">
          {title}
          <ArrowUpRight
            size={20}
            aria-hidden="true"
            className="shrink-0 transition-transform duration-200 ease-standard group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </h3>
        {subCapabilities.length > 0 && (
          <ul className="flex flex-col gap-1 text-sm text-c-ondark/80 max-h-32 opacity-100 md:max-h-0 md:opacity-0 md:overflow-hidden md:transition-all md:duration-320 md:ease-standard md:group-hover:max-h-32 md:group-hover:opacity-100">
            {subCapabilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </Link>
  );
}
