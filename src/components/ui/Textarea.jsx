import React, { forwardRef } from 'react';
import Label from './Label';
import FieldError from './FieldError';

const Textarea = forwardRef(function Textarea(
  { id, label, required, error, hint, rows = 5, className = '', ...rest },
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
      <textarea
        ref={ref}
        id={id}
        rows={rows}
        required={required}
        aria-invalid={!!error}
        aria-describedby={describedBy}
        className={[
          'w-full min-h-12 rounded-token border bg-c-bg-alt px-4 py-3 text-base text-c-on resize-y',
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

export default Textarea;
