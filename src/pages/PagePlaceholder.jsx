import React from 'react';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import Eyebrow from '../components/ui/Eyebrow';

/**
 * PagePlaceholder — the Phase 1c "placeholder page body" for every route
 * that doesn't get real content until Phase 4/5. Keeps a real <h1>, real
 * landmark structure, and a visible marker that this is a routing-shell
 * stand-in, per A2.6.
 */
export default function PagePlaceholder({ eyebrow, title, note, children }) {
  return (
    <main>
      <Section size="lg" tone="alt" border>
        <Container>
          {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
          <h1 className="text-display text-c-on">{title}</h1>
          <p className="mt-6 max-w-measure text-c-on-muted">
            {note || 'This page is wired into routing as part of Phase 1. Its real content lands in a later phase per the build brief.'}
          </p>
          {children}
        </Container>
      </Section>
    </main>
  );
}
