import React, { forwardRef } from 'react';
import Label from './Label';
import FieldError from './FieldError';

/**
 * Input — off-white fill, 1px border, accent border + focus ring on
 * focus, red-token error state with message, 48px+ hit height.
 */
const Input = forwardRef(function Input(
  { id, label, required, error, hint, className = '', ...rest },
  ref
) {
  const errorId = error ? `${id}-error` : undefined;
  const hintId = hint ? `${id}-hint` : undefined;
  const describedBy = [errorId, hintId].filter(Boolean).join(' ') || undefined;

  return (
    <div className={className}>
      {label && (
        <Label htmlFor={id} required={required}>
          {label}
        </Label>
      )}
      <input
        ref={ref}
        id={id}
        required={required}
        aria-invalid={!!error}
        aria-describedby={describedBy}
        className={[
          'w-full min-h-12 rounded-token border bg-c-bg-alt px-4 py-3 text-base text-c-on',
          'placeholder:text-c-on-muted/60',
          'transition-colors duration-200 ease-standard',
          'focus:outline-none focus:ring-2 focus:ring-c-primary/30',
          error
            ? 'border-c-error focus:border-c-error'
            : 'border-c-border focus:border-c-primary',
          'disabled:opacity-50 disabled:cursor-not-allowed',
        ].join(' ')}
        {...rest}
      />
      {hint && !error && (
        <p id={hintId} className="mt-2 text-sm text-c-on-muted">
          {hint}
        </p>
      )}
      <FieldError id={errorId}>{error}</FieldError>
    </div>
  );
});

export default Input;
