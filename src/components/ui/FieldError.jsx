import React from 'react';
import { AlertCircle } from 'lucide-react';

/**
 * FieldError — the red-token error message tied to a field via
 * `aria-describedby` on the input itself. Pass `id` matching that
 * `aria-describedby` value.
 */
export default function FieldError({ id, children }) {
  if (!children) return null;
  return (
    <p id={id} role="alert" className="mt-2 flex items-center gap-1.5 text-sm text-c-error">
      <AlertCircle size={14} aria-hidden="true" className="shrink-0" />
      {children}
    </p>
  );
}
