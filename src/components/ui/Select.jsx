import React, { forwardRef } from 'react';
import { ChevronDown } from 'lucide-react';
import Label from './Label';
import FieldError from './FieldError';

const Select = forwardRef(function Select(
  { id, label, required, error, hint, options = [], placeholder, className = '', ...rest },
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
      <div className="relative">
        <select
          ref={ref}
          id={id}
          required={required}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          {...(rest.value === undefined ? { defaultValue: '' } : {})}
          className={[
            'w-full min-h-12 appearance-none rounded-token border bg-c-bg-alt pl-4 pr-10 py-3 text-base text-c-on',
            'transition-colors duration-200 ease-standard',
            'focus:outline-none focus:ring-2 focus:ring-c-primary/30',
            error
              ? 'border-c-error focus:border-c-error'
              : 'border-c-border focus:border-c-primary',
            'disabled:opacity-50 disabled:cursor-not-allowed',
          ].join(' ')}
          {...rest}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown
          size={18}
          aria-hidden="true"
          className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-c-on-muted"
        />
      </div>
      {hint && !error && (
        <p id={hintId} className="mt-2 text-sm text-c-on-muted">
          {hint}
        </p>
      )}
      <FieldError id={errorId}>{error}</FieldError>
    </div>
  );
});

export default Select;
