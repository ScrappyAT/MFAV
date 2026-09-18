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
    description: 'Vessel management and marine support for offshore assets, covering crew transfer, AGO supply coordination and security escort. We keep vessels on station, compliant and available.',
    image: '/assets/images/hero_section.jpg',
    graded: true,
    to: '/services/marine-offshore',
  },
  {
    id: 'vessel-chartering',
    title: 'Vessel Chartering',
    description: 'Chartering of FSIVs, anchor handling vessels, platform supply vessels and specialised offshore craft. We match the vessel to the scope and manage the contract through to demobilisation.',
    image: '/assets/images/hero_section.jpg',
    graded: true,
    to: '/services/marine-offshore',
  },
  {
    id: 'aviation-charter',
    title: 'Aviation & Charter Services',
    description: 'Fixed-wing and rotary charter for crew movement, executive travel and offshore rotation, arranged around your operational schedule rather than a fixed timetable.',
    image: '/assets/images/division_aviation.jpg',
    to: '/services/aviation',
  },
  {
    id: 'pipeline',
    title: 'Pipeline Installation & Maintenance',
    description: 'Pipeline installation, cable laying and subsea infrastructure work supported by DP2-capable vessels, delivered to the safety and environmental standards the scope demands.',
    image: '/assets/images/energy and infrasture division.png',
    to: '/services/energy-infrastructure',
  },
  {
    id: 'equipment-ppe',
    title: 'Equipment & PPE Supply',
    description: 'Certified protective equipment and technical procurement, including locally manufactured workwear, sourced to specification and delivered to the schedule your work depends on.',
    image: '/assets/images/division_equipment.png',
    to: '/services/equipment-ppe',
  },
  {
    id: 'haulage-logistics',
    title: 'Haulage & Logistics',
    description: 'Onshore and offshore haulage of petroleum products, machinery, spares and raw materials, with tracking and monitoring across every movement.',
    image: '/assets/images/division_logistics.jpeg',
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
