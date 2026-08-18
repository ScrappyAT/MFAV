import React from 'react';
import Container from './ui/Container';
import Grid from './ui/Grid';
import Button from './ui/Button';
import { DIVISIONS } from '../content/divisions';

/**
 * Hero — A6 §2a. Full-viewport (92vh, not a rigid 100vh), full-bleed
 * cinematic image, directional navy scrim (strong bottom-left where the
 * text sits, lighter top-right), content left-aligned across the left 7
 * of 12 columns, vertically anchored to the lower third.
 *
 * Copy below is client-approved (A7) — reproduced verbatim.
 */
export default function Hero({ onRequestConsultation }) {
  return (
    <section className="relative min-h-hero flex flex-col justify-end overflow-hidden bg-c-scrim">
      <img
        src="/assets/images/hero_section.jpg"
        alt="Offshore rig platform and supply vessels at dusk"
        width={1081}
        height={720}
        fetchpriority="high"
        className="absolute inset-0 h-full w-full object-cover animate-hero-settle"
      />
      {/* Directional scrim: two stacked linear gradients (vertical +
          horizontal) approximate a corner-to-corner wash — strong at the
          bottom-left where the text column sits, lighter top-right —
          without any arbitrary/raw-color values (A2.3). */}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-c-scrim/95 via-c-scrim/60 to-transparent" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-c-scrim/70 via-transparent to-transparent" />

      <div className="relative z-10 pb-20 pt-32 md:pb-28">
        <Container>
          <Grid cols={12} gap="gap-0">
            <div className="col-span-12 md:col-span-9 lg:col-span-7 flex flex-col gap-8">
              <h1 className="text-hero-sm md:text-hero text-white">
                Integrated Solutions. Built for What Moves the World.
              </h1>
              <p className="max-w-measure text-lg text-c-ondark/85 leading-relaxed">
                MFAV Offshore and Allied Resources delivers integrated marine, offshore,
                aviation, logistics, energy, infrastructure and industrial solutions with
                safety and operational excellence at the core.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Button to="/services" variant="primary" size="lg" trailingArrow>
                  Explore Our Services
                </Button>
                <Button to="/contact" variant="onDark" size="lg">
                  Contact Us
                </Button>
              </div>
            </div>
          </Grid>
        </Container>
      </div>

      {/* Hairline table-of-contents strip — the six divisions, small and
          restrained, along the hero's bottom edge (A6 §2a, optional). */}
      <div className="relative z-10 border-t border-c-ondark/15">
        <Container>
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-2 py-4 text-micro uppercase text-c-ondark/60">
            {DIVISIONS.map((division) => (
              <li key={division.id}>{division.name}</li>
            ))}
          </ul>
        </Container>
      </div>

      {/* Scroll indicator — hidden on mobile and under reduced motion
          (the travel keyframe is neutralized by the global rule; hiding
          it below md keeps it from competing with the division strip). */}
      <a
        href="#capabilities"
        aria-label="Scroll to Our Capabilities"
        className="hidden md:flex absolute bottom-24 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-c-ondark/60 hover:text-c-ondark transition-colors duration-200 ease-standard"
      >
        <span className="text-micro uppercase">Scroll</span>
        <span className="relative h-10 w-px bg-c-ondark/20 overflow-hidden">
          <span aria-hidden="true" className="absolute left-0 top-0 h-2.5 w-px bg-c-ondark-primary animate-scroll-travel" />
        </span>
      </a>
    </section>
  );
}
