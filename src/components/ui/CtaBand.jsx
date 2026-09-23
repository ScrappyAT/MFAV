import React from 'react';
import Container from './Container';
import Button from './Button';

/**
 * CtaBand — the closing CTA band (A3 §3g), reused as-is per A5 Phase 4
 * §8 ("reuse the Phase 3g component with division-specific copy"). Only
 * heading/body vary per caller; the two buttons stay standard across the
 * site (Request a Consultation → /contact, View Our Services → /services).
 *
 * `bg-c-primary` (the lighter brand blue) rather than `bg-c-primary-bg` —
 * Footer.jsx always renders this immediately above its own navy
 * (`bg-c-primary-bg`) link columns, so the two need distinct colors or
 * the CTA band visually fuses into the footer below it instead of reading
 * as its own section.
 */
export default function CtaBand({ heading, body }) {
  return (
    <div className="bg-c-primary">
      <Container className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 py-16">
        <div className="max-w-xl">
          <h2 className="text-display-sm text-c-ondark">{heading}</h2>
          <p className="mt-3 text-c-ondark">{body}</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
          <Button to="/contact" variant="onDark" size="md">
            Start a Conversation
          </Button>
          <Button to="/services" variant="onDark" size="md">
            View Our Services
          </Button>
        </div>
      </Container>
    </div>
  );
}
