import React from 'react';
import Container from './ui/Container';
import SectionHeader from './ui/SectionHeader';
import DivisionPanel from './ui/DivisionPanel';
import { DIVISIONS } from '../content/divisions';
import { useInView, revealClass } from '../hooks/useInView';

// Only 4 of 6 divisions have a dedicated image asset (see TOKENS-GAPS.md /
// Phase 0 audit) — marine-offshore and energy-infrastructure fall back to
// the closest existing placeholder. Flagged again in the Phase 2 report,
// not a new gap.
const IMAGE_BY_DIVISION = {
  'marine-offshore': '/assets/images/hero_section.jpg',
  aviation: '/assets/images/division_aviation.svg',
  'energy-infrastructure': '/assets/images/who_we_are_plant.svg',
  'logistics-haulage': '/assets/images/division_logistics.svg',
  'equipment-ppe': '/assets/images/division_equipment.svg',
  'property-investment': '/assets/images/division_property.svg',
};

// marine-offshore reuses the warm hero photo — grade it cool to match
// the rest of the site (A4). The other placeholders are already neutral.
const GRADED_DIVISIONS = new Set(['marine-offshore']);

// Deliberately asymmetric spans against a 6-column desktop grid (A3 §2b:
// "not six identical squares") — a wide feature panel, three even panels,
// then a full-width closing panel. 2-up on tablet, single stack on mobile.
const SPAN_BY_DIVISION = {
  'marine-offshore': 'lg:col-span-4',
  aviation: 'lg:col-span-2',
  'energy-infrastructure': 'lg:col-span-2',
  'logistics-haulage': 'lg:col-span-2',
  'equipment-ppe': 'lg:col-span-2',
  'property-investment': 'lg:col-span-6',
};

// NOTE: this section's panels are now real <Link> elements (Phase 1's
// modal→routing replacement), so the old `onSelectDivision` callback
// prop is gone — Home.jsx has been updated to match.
export default function Capabilities() {
  const [gridRef, gridInView] = useInView();

  return (
    <section id="capabilities" className="scroll-mt-24">
      <Container className="py-section-sm md:py-section">
        <SectionHeader
          heading="Our Capabilities"
          supporting="From offshore operations and marine logistics to aviation, infrastructure and industrial supply, MFAV brings multiple capabilities together to support complex operations."
        />

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {DIVISIONS.map((division, idx) => (
            <DivisionPanel
              key={division.id}
              image={IMAGE_BY_DIVISION[division.id]}
              imageAlt=""
              title={division.name}
              subCapabilities={division.subCapabilities}
              to={`/services/${division.id}`}
              spanClassName={SPAN_BY_DIVISION[division.id]}
              graded={GRADED_DIVISIONS.has(division.id)}
              className={revealClass(gridInView, idx)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
