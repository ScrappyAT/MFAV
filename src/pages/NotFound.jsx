import React from 'react';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';

export default function NotFound() {
  return (
    <main>
      <Section size="lg" tone="navy">
        <Container className="flex flex-col items-start gap-6">
          <span className="text-eyebrow uppercase text-c-ondark-primary">404</span>
          <h1 className="text-display text-c-ondark">Page Not Found</h1>
          <p className="max-w-measure text-c-ondark/75">
            The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
          </p>
          <Button to="/" variant="onDark" trailingArrow>
            Back to Home
          </Button>
        </Container>
      </Section>
    </main>
  );
}
