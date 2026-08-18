import React from 'react';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import Eyebrow from '../components/ui/Eyebrow';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

/**
 * PagePlaceholder — the Phase 1c "placeholder page body" for every route
 * that doesn't get real content until Phase 5. Keeps a real <h1>, real
 * landmark structure, a visible marker that this is a routing-shell
 * stand-in (A2.6), and a unique <title>/meta description per page.
 */
export default function PagePlaceholder({ eyebrow, title, note, children }) {
  useDocumentMeta(title, note);

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
