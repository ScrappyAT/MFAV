import React from 'react';

export default function Label({ htmlFor, required = false, className = '', children }) {
  return (
    <label
      htmlFor={htmlFor}
      className={['block text-sm font-semibold text-c-on mb-2', className].join(' ')}
    >
      {children}
      {required && (
        <span className="text-c-error ml-0.5" aria-hidden="true">
          *
        </span>
      )}
    </label>
  );
}
