import React from 'react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { METADATA } from '../content/metadata';
import { INDUSTRIES } from '../content/industries';
import { DIVISIONS } from '../content/divisions';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import TextLink from '../components/ui/TextLink';

/**
 * Industries We Serve (Phase 5c) — the eight sectors at full depth. Marks,
 * names and the one-line relevance copy are shared with the homepage tile
 * grid via content/industries.jsx; `detail` and `divisions` here are the
 * Phase 5c additions that give each sector a paragraph plus links to the
 * two or three divisions that actually serve it.
 */
export default function Industries() {
  useDocumentMeta(METADATA.industries.title, METADATA.industries.description);

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-c-scrim">
        <img
          src="/assets/images/hero_section.jpg"
          alt=""
          loading="eager"
          className="grade-cool absolute inset-0 h-full w-full object-cover"
        />
        <div aria-hidden="true" className="grade-cool-tint absolute inset-0" />
        <div aria-hidden="true" className="absolute inset-0 bg-c-scrim/80" />
        {/* pt-32 (mobile only) replaces py-section-sm's 80px top half —
            80px sits under the fixed 100px header, clipping the H1's
            top edge; 128px clears it with margin. md+ is unaffected
            (py-section-lg's 180px was already safe). */}
        <Container className="relative z-10 pt-32 pb-section-sm md:py-section-lg">
          <h1 className="text-hero-sm md:text-hero text-c-ondark mb-6 max-w-3xl">Industries We Serve</h1>
          <p className="max-w-measure text-lg text-c-ondark/85 leading-relaxed">
            Our capabilities were built for environments where operations are
            technically demanding, heavily regulated and expensive to interrupt. Below
            is how each division applies to the sectors we work in.
          </p>
        </Container>
      </section>

      {/* Sector depth */}
      <Section size="md">
        <Container>
          <div className="flex flex-col">
            {INDUSTRIES.map((industry, idx) => {
              const relatedDivisions = industry.divisions
                .map((id) => DIVISIONS.find((d) => d.id === id))
                .filter(Boolean);
              return (
                <div
                  key={industry.name}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 py-10 border-t border-c-border first:border-t-0 first:pt-0"
                >
                  <div className="lg:col-span-4 flex items-start gap-4">
                    <span aria-hidden="true" className="flex h-12 w-12 shrink-0 items-center justify-center text-c-primary">
                      {industry.mark}
                    </span>
                    <div>
                      <span className="block text-eyebrow uppercase text-c-on-muted mb-1">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <h2 className="text-xl font-bold text-c-on">{industry.name}</h2>
                    </div>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="text-c-on-muted leading-relaxed max-w-measure mb-5">{industry.detail}</p>
                    <span className="block text-eyebrow uppercase text-c-on-muted mb-2">Relevant divisions:</span>
                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                      {relatedDivisions.map((division) => (
                        <TextLink key={division.id} to={`/services/${division.id}`}>
                          {division.name}
                        </TextLink>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>
    </main>
  );
}
