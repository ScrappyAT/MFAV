import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Loader2 } from 'lucide-react';

/**
 * Button — the one source of truth for every button/CTA in the app.
 *
 * Variants: primary | secondary | ghost | onDark
 * Sizes: sm | md | lg
 * States: default, hover, focus-visible, active, disabled, loading (all via
 * native CSS pseudo-classes + the `disabled`/`loading` props — no JS-driven
 * hover state anywhere).
 *
 * Renders a real <button>, a real <a>, or a react-router <Link> — never a
 * div with an onClick. Pass `to` for an internal route, `href` for an
 * external/anchor link, or neither for an in-page action button.
 */
const VARIANT_CLASSES = {
  primary:
    'bg-c-primary-bg text-c-on-primary border border-c-primary-bg hover:bg-c-primary focus-visible:bg-c-primary',
  secondary:
    'bg-transparent text-c-on border border-c-on hover:bg-c-on hover:text-c-on-primary focus-visible:bg-c-on focus-visible:text-c-on-primary',
  ghost:
    'bg-transparent text-c-primary-bg border border-transparent hover:bg-c-surface-high focus-visible:bg-c-surface-high',
  onDark:
    'bg-transparent text-c-ondark border border-c-ondark/50 hover:bg-c-ondark hover:text-c-primary-bg focus-visible:bg-c-ondark focus-visible:text-c-primary-bg',
};

const SIZE_CLASSES = {
  sm: 'text-xs px-4 py-2 gap-1.5 min-h-9',
  md: 'text-sm px-6 py-3 gap-2 min-h-12',
  lg: 'text-base px-8 py-4 gap-2.5 min-h-14',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  trailingArrow = false,
  loading = false,
  disabled = false,
  to,
  href,
  className = '',
  children,
  ...rest
}) {
  const isDisabled = disabled || loading;

  const classes = [
    'group inline-flex items-center justify-center rounded-token font-semibold',
    'transition-colors duration-200 ease-standard',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-c-primary',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    className,
  ].join(' ');

  const content = (
    <>
      {loading && (
        <Loader2 size={16} className="animate-spin" aria-hidden="true" />
      )}
      <span>{children}</span>
      {trailingArrow && !loading && (
        <ArrowRight
          size={16}
          aria-hidden="true"
          className="transition-transform duration-200 ease-standard group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (to && !isDisabled) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  if (href && !isDisabled) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={rest.type || 'button'}
      className={classes}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      {...rest}
    >
      {content}
    </button>
  );
}
