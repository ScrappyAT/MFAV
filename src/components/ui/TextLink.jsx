import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/**
 * TextLink — inline and standalone-with-arrow link styles. The hover/focus
 * state is always an underline that wipes in from the left (`.u-wipe` in
 * index.css), never a color-only change (A3: "never a color-only change").
 *
 * `standalone` adds a trailing arrow that translates on hover, for
 * "Learn more →" / "Discover MFAV →" style links.
 */
export default function TextLink({
  to,
  href,
  standalone = false,
  onDark = false,
  className = '',
  children,
  ...rest
}) {
  const classes = [
    'group inline-flex items-center gap-1.5 font-semibold rounded-token-sm',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-c-primary',
    onDark ? 'text-c-ondark' : 'text-c-primary-bg',
    className,
  ].join(' ');

  const content = (
    <>
      <span className="u-wipe">{children}</span>
      {standalone && (
        <ArrowRight
          size={16}
          aria-hidden="true"
          className="transition-transform duration-200 ease-standard group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} {...rest}>
      {content}
    </a>
  );
}
