import React from 'react';
import Container from './ui/Container';
import SectionHeader from './ui/SectionHeader';
import { useInView, revealClass } from '../hooks/useInView';

// H2 is [AGENT-AUTHORED] per A7 — logged in COPY-FOR-REVIEW.md, not final
// until client sign-off. Using the brief's own suggested line as written.
const HEADING = 'Why MFAV';

// Client-approved copy (A7) — reproduced verbatim, exactly as given.
const DIFFERENTIATORS = [
  { heading: 'Integrated Capabilities', line: 'Multiple services under one trusted partner.' },
  { heading: 'Operational Reliability', line: 'Solutions designed around continuity and efficiency.' },
  { heading: 'Safety First', line: 'Safety embedded into every operation.' },
  { heading: 'Industry Expertise', line: 'Practical knowledge across complex operational environments.' },
  { heading: 'Responsive Support', line: 'Reliable support for time-sensitive requirements.' },
  { heading: 'Quality & Compliance', line: 'Professional standards across our services.' },
];

export default function WhyMfav() {
  const [gridRef, gridInView] = useInView();

  return (
    <section className="bg-c-bg-alt">
      <Container className="py-section-sm md:py-section">
        <SectionHeader align="center" heading={HEADING} />

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-c-border">
          {DIFFERENTIATORS.map((item, idx) => (
            <div
              key={item.heading}
              className={['border-r border-b border-c-border p-8', revealClass(gridInView, idx)].join(' ')}
            >
              <span className="block text-eyebrow text-c-primary mb-4">{String(idx + 1).padStart(2, '0')}</span>
              <h3 className="text-lg font-bold text-c-on mb-2">{item.heading}</h3>
              <p className="text-c-on-muted leading-relaxed">{item.line}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
