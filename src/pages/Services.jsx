import React from 'react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { DIVISIONS } from '../content/divisions';
import { SERVICES } from '../content/services';
import Container from '../components/ui/Container';
import TextLink from '../components/ui/TextLink';

/**
 * Services overview (Phase 5b) — all six divisions as alternating
 * full-bleed split rows (A5: "read more premium than another six-card
 * grid"). Content is entirely sourced from DIVISIONS + SERVICES — the
 * same single source ServiceDetail already uses — so nothing here can
 * drift out of sync with the division pages this links to.
 */
export default function Services() {
  useDocumentMeta(
    'Our Services',
    'MFAV Offshore and Allied Resources: six integrated divisions across marine, aviation, energy, logistics, equipment and property — one accountable partner for complex operations.'
  );

  return (
    <main>
      {/* Hero — matches About/Industries: full-bleed hero photo, cool
          grade, navy scrim, same H1 step and on-dark text colors. */}
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
          <h1 className="text-hero-sm md:text-hero text-c-ondark mb-6 max-w-3xl">Our Services</h1>
          <p className="max-w-measure text-lg text-c-ondark/85 leading-relaxed">
            Six divisions, one accountable partner. Each operates to its own technical
            discipline; all of them are coordinated as a single point of contact for
            operations that touch more than one domain.
          </p>
        </Container>
      </section>

      {DIVISIONS.map((division, idx) => {
        const service = SERVICES[division.id];
        const imageFirst = idx % 2 === 0;
        return (
          <section key={division.id} className="border-b border-c-border/40 last:border-b-0">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div
                className={[
                  'relative min-h-80 lg:min-h-full overflow-hidden',
                  imageFirst ? 'order-2 lg:order-1' : 'order-2 lg:order-2',
                ].join(' ')}
              >
                <img
                  src={service.image}
                  alt=""
                  loading="lazy"
                  className={['absolute inset-0 h-full w-full object-cover', service.graded && 'grade-cool'].filter(Boolean).join(' ')}
                />
                {service.graded && <div aria-hidden="true" className="grade-cool-tint absolute inset-0" />}
              </div>

              <div
                className={[
                  'py-section-sm md:py-section flex items-center px-6 md:px-10 lg:px-16',
                  imageFirst ? 'order-1 lg:order-2' : 'order-1 lg:order-1',
                ].join(' ')}
              >
                <div className="max-w-measure border-l-2 border-c-primary pl-6">
                  <h2 className="text-display-sm text-c-on mb-4">{division.name}</h2>
                  <p className="text-c-on-muted leading-relaxed mb-6">{service.positioning}</p>
                  <ul className="flex flex-col gap-1.5 text-sm text-c-on-muted mb-8">
                    {division.subCapabilities.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span aria-hidden="true" className="h-1 w-1 rounded-full bg-c-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <TextLink to={`/services/${division.id}`} standalone>
                    View division
                  </TextLink>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </main>
  );
}
