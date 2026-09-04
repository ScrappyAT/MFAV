import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/**
 * ServiceCard — near-square, hairline-bordered photographic card. The
 * description reveals on hover on desktop; always visible on touch (A3:
 * "never hover-only content on mobile"). The whole card is a single
 * focusable link, not nested interactive elements.
 */
export default function ServiceCard({ image, imageAlt, title, description, to, graded = false, className = '' }) {
  return (
    <Link
      to={to}
      className={[
        'group relative flex flex-col justify-end overflow-hidden rounded-token border border-c-border',
        'aspect-square bg-c-surface-low',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-c-primary',
        className,
      ].join(' ')}
    >
      <img
        src={image}
        alt={imageAlt || ''}
        loading="lazy"
        className={[
          'absolute inset-0 h-full w-full object-cover transition-transform duration-320 ease-standard group-hover:scale-105',
          graded && 'grade-cool',
        ].filter(Boolean).join(' ')}
      />
      {graded && <div aria-hidden="true" className="grade-cool-tint absolute inset-0" />}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-c-scrim/70 transition-colors duration-320 ease-standard group-hover:bg-c-scrim/80"
      />
      <div className="relative z-10 p-6 flex flex-col gap-2">
        <h3 className="text-lg font-bold text-c-ondark">{title}</h3>
        <div className="hover-reveal">
          <p className="text-sm text-c-ondark/80 leading-relaxed">{description}</p>
        </div>
        <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-c-ondark-primary">
          Learn more
          <ArrowRight size={14} aria-hidden="true" className="transition-transform duration-200 ease-standard group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
