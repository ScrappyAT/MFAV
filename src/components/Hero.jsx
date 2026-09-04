import React from 'react';
import Container from './ui/Container';
import Grid from './ui/Grid';
import Button from './ui/Button';

/**
 * Hero — A6 §2a. Full-viewport (92vh, not a rigid 100vh), full-bleed
 * cinematic image, directional navy scrim (strong bottom-left where the
 * text sits, lighter top-right), content left-aligned across the left 7
 * of 12 columns.
 *
 * Vertical position was moved from "anchored to the lower third" to
 * "at/slightly below true center" by request — see the flex-spacer note
 * below.
 *
 * Copy below is client-approved (A7) — reproduced verbatim.
 */
export default function Hero({ onRequestConsultation }) {
  return (
    <section className="relative min-h-hero flex flex-col overflow-hidden bg-c-scrim">
      <img
        src="/assets/images/hero_section.jpg"
        alt="Offshore rig platform and supply vessels at dusk"
        width={1081}
        height={720}
        fetchpriority="high"
        className="grade-cool absolute inset-0 h-full w-full object-cover animate-hero-settle"
      />
      {/* Cool-tone grade (A4) — source photo runs warm (sunset sky);
          see the `.grade-cool`/`.grade-cool-tint` note in index.css. */}
      <div aria-hidden="true" className="grade-cool-tint absolute inset-0" />
      {/* Directional scrim: two stacked linear gradients (vertical +
          horizontal) approximate a corner-to-corner wash — strong at the
          bottom-left where the text column sits, lighter top-right —
          without any arbitrary/raw-color values (A2.3).
          Combined opacity at bottom-left ≈ 65 % (brief target 55–70 %).
          Stacking two semi-transparent layers compounds exponentially:
          (1 − 0.50) × (1 − 0.30) ≈ 0.35 visible image → 65 % navy. */}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-c-scrim/50 via-c-scrim/15 to-transparent" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-c-scrim/30 via-transparent to-transparent" />

      {/* Vertical position: two empty flex-grow spacers (not padding)
          split whatever vertical space the 92vh hero has left over after
          the content block's own height, 6:1 top:bottom — enough top-
          heavy bias to land the block at roughly true center to slightly
          below, while still leaving comfortable room below the CTAs.
          This replaces the previous `justify-end` (bottom-anchored)
          layout by request — a flex-grow ratio was used instead of
          `justify-center`/padding because with only one real flex
          child, neither of those let top and bottom space be tuned
          independently: `justify-end` locks the block's bottom edge to
          the section's bottom edge regardless of padding, and
          `justify-center` ties the space above and below together.
          (Ratio bumped from an earlier 5:1 — and the top spacer's floor
          below raised from 96px to 128px — once the header became
          permanently solid/opaque: a hard white bar sitting directly
          above the content reads tighter at a given pixel gap than the
          old transparent-over-hero header did, so it gets a bit more
          clearance than before.)

          `min-h-32` on the top spacer is load-bearing, not decorative:
          at a short/tall-content combination (measured failure case:
          375×667, a real iPhone 8/SE viewport height, and 768×600) an
          unconstrained flex-grow ratio lets the top spacer shrink toward
          0 under pressure, which would let the H1 collide with the
          header — min-h-32 (128px, comfortably over the fixed 100px-tall
          header) gives it a floor it can't shrink below, so the
          section grows past its 92vh minimum instead of ever overlapping
          the header. The bottom spacer gets a smaller `min-h-12` (48px)
          for the same reason, on the other edge. */}
      <div aria-hidden="true" className="flex-6 min-h-32" />
      <div className="relative z-10 py-8">
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
      <div aria-hidden="true" className="flex-1 min-h-12" />

      {/* Scroll indicator — hidden on mobile and under reduced motion per
          A6 §2a ("Hidden on mobile and under reduced-motion. Subtle.");
          the travel keyframe itself is neutralized by the global
          reduced-motion rule. `bottom-24` (96px) moved to `bottom-6`
          (24px) in the same pass that pushed the content block down via
          the flex spacers above — the indicator sat almost flush against
          the CTA row's bottom edge before (measured gap ≈0 at a 1440×900
          viewport); leaving it at `bottom-24` while the button row moved
          ~70px lower would have opened a ~70px gap between them and
          broken that relationship, so it moves down by the same ~70px
          (96px − 72px ≈ 24px) to stay flush. */}
      <a
        href="#capabilities"
        aria-label="Scroll to Our Capabilities"
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-c-ondark/60 hover:text-c-ondark transition-colors duration-200 ease-standard"
      >
        <span className="text-micro uppercase">Scroll</span>
        <span className="relative h-10 w-px bg-c-ondark/20 overflow-hidden">
          <span aria-hidden="true" className="absolute left-0 top-0 h-2.5 w-px bg-c-ondark-primary animate-scroll-travel" />
        </span>
      </a>
    </section>
  );
}
