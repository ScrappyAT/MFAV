import React from 'react';
import Container from './Container';
import Button from './Button';

/**
 * CtaBand — the closing CTA band (A3 §3g), reused as-is per A5 Phase 4
 * §8 ("reuse the Phase 3g component with division-specific copy"). Only
 * heading/body vary per caller; the two buttons stay standard across the
 * site (Request a Consultation → /contact, View Our Services → /services).
 */
export default function CtaBand({ heading, body }) {
  return (
    <div className="border-b border-c-ondark/15 bg-c-primary-bg">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-8 py-16">
        <div className="max-w-xl">
          <h2 className="text-display-sm text-c-ondark">{heading}</h2>
          <p className="mt-3 text-c-ondark/75">{body}</p>
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
