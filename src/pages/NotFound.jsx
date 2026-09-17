import React from 'react';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { METADATA } from '../content/metadata';

export default function NotFound() {
  useDocumentMeta(METADATA.notFound.title, METADATA.notFound.description);

  return (
    <main>
      <Section size="lg" tone="navy">
        <Container className="flex flex-col items-start gap-6">
          <h1 className="text-display text-c-ondark">Page Not Found</h1>
          <p className="max-w-measure text-c-ondark/75">
            The page you requested doesn't exist or has moved.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Button to="/" variant="onDark" trailingArrow>
              Return Home
            </Button>
            <Button to="/services" variant="onDark">
              View Our Services
            </Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}
