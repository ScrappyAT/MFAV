import React, { forwardRef } from 'react';
import { Check } from 'lucide-react';
import FieldError from './FieldError';

const Checkbox = forwardRef(function Checkbox(
  { id, label, error, className = '', ...rest },
  ref
) {
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div className={className}>
      <label htmlFor={id} className="group flex items-start gap-3 cursor-pointer select-none">
        <span className="relative flex items-center justify-center shrink-0 mt-0.5">
          <input
            ref={ref}
            id={id}
            type="checkbox"
            aria-invalid={!!error}
            aria-describedby={errorId}
            className="peer h-5 w-5 appearance-none rounded-token-sm border border-c-border bg-c-bg-alt transition-colors duration-200 ease-standard checked:bg-c-primary-bg checked:border-c-primary-bg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-c-primary disabled:opacity-50 disabled:cursor-not-allowed"
            {...rest}
          />
          <Check
            size={14}
            strokeWidth={3}
            aria-hidden="true"
            className="pointer-events-none absolute text-c-on-primary opacity-0 peer-checked:opacity-100 transition-opacity duration-120 ease-standard"
          />
        </span>
        <span className="text-sm text-c-on-muted leading-snug">{label}</span>
      </label>
      <FieldError id={errorId}>{error}</FieldError>
    </div>
  );
});

export default Checkbox;
