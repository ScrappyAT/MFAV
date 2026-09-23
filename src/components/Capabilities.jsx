import React from 'react';
import Container from './ui/Container';
import SectionHeader from './ui/SectionHeader';
import DivisionPanel from './ui/DivisionPanel';
import { DIVISIONS } from '../content/divisions';
import { useInView, revealClass } from '../hooks/useInView';

// Existing division photography.
const IMAGE_BY_DIVISION = {
  'marine-offshore': '/assets/images/marine_offshore.gif',
  aviation: '/assets/images/division_aviation.jpg',
  'energy-infrastructure': '/assets/images/energy and infrasture division.png',
  'logistics-haulage': '/assets/images/division_logistics.jpeg',
  'equipment-ppe': '/assets/images/division_equipment.png',
  'property-investment': '/assets/images/division_property.jpeg',
};

// Equal panel sizes keep all six divisions easy to scan.
const SPAN_BY_DIVISION = {
  'marine-offshore': 'lg:col-span-2',
  aviation: 'lg:col-span-2',
  'energy-infrastructure': 'lg:col-span-2',
  'logistics-haulage': 'lg:col-span-2',
  'equipment-ppe': 'lg:col-span-2',
  'property-investment': 'lg:col-span-2',
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
          heading="Specialist capabilities. Connected delivery."
          supporting="Find the right division for your scope, or speak to us about coordinating support across more than one service."
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
              className={revealClass(gridInView, idx)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
