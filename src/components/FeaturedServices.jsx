import React from 'react';
import Container from './ui/Container';
import SectionHeader from './ui/SectionHeader';
import ServiceCard from './ui/ServiceCard';
import { useInView, revealClass } from '../hooks/useInView';

// H2 is [AGENT-AUTHORED] per A7 — logged in COPY-FOR-REVIEW.md, not final
// until client sign-off. Using the brief's own suggested line as written.
const HEADING = 'Capabilities That Keep Operations Moving';

// Six priority capabilities, in the brief's specified order (A3 §3a).
// Descriptions are agent-authored (COPY-FOR-REVIEW.md) — one-to-two
// sentences, grounded in what the service is and what it enables, no
// boastful language. `graded` marks images reusing the warm hero photo,
// which needs the standard cool-tone grade (A4) wherever it's reused.
const FEATURED = [
  {
    id: 'offshore-marine',
    title: 'Offshore Marine Operations',
    description: 'Vessel support and platform operations for deepwater and coastal installations, run to the continuity offshore work demands.',
    image: '/assets/images/hero_section.jpg',
    graded: true,
    to: '/services/marine-offshore',
  },
  {
    id: 'vessel-chartering',
    title: 'Vessel Chartering',
    description: 'Access to OSVs, tugs, barges and specialized maritime vessels, chartered and coordinated to match the scope of the operation.',
    image: '/assets/images/hero_section.jpg',
    graded: true,
    to: '/services/marine-offshore',
  },
  {
    id: 'aviation-charter',
    title: 'Aviation & Charter Services',
    description: 'Private jet and helicopter charter for executive travel, crew rotation and time-sensitive offshore access.',
    image: '/assets/images/division_aviation.svg',
    to: '/services/aviation',
  },
  {
    id: 'pipeline',
    title: 'Pipeline Installation & Maintenance',
    description: 'Installation, inspection and maintenance of pipeline infrastructure across onshore and offshore sites.',
    image: '/assets/images/who_we_are_plant.svg',
    to: '/services/energy-infrastructure',
  },
  {
    id: 'equipment-ppe',
    title: 'Equipment & PPE Supply',
    description: 'Industrial equipment, marine gear and certified personal protective equipment, supplied and maintained to specification.',
    image: '/assets/images/division_equipment.svg',
    to: '/services/equipment-ppe',
  },
  {
    id: 'haulage-logistics',
    title: 'Haulage & Logistics',
    description: 'Heavy haulage and end-to-end logistics coordination, from port to site, for equipment and materials on a schedule.',
    image: '/assets/images/division_logistics.svg',
    to: '/services/logistics-haulage',
  },
];

export default function FeaturedServices() {
  const [gridRef, gridInView] = useInView();

  return (
    <Container className="py-section-sm md:py-section">
      <SectionHeader heading={HEADING} />
      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURED.map((service, idx) => (
          <ServiceCard
            key={service.id}
            image={service.image}
            imageAlt=""
            title={service.title}
            description={service.description}
            to={service.to}
            graded={service.graded}
            className={revealClass(gridInView, idx)}
          />
        ))}
      </div>
    </Container>
  );
}
