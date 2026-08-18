import React from 'react';
import Container from './ui/Container';
import SectionHeader from './ui/SectionHeader';
import IndustryCard from './ui/IndustryCard';

// Custom inline SVG marks — geometric line motifs, not a downloaded icon
// set (A3 §3b). Each is a simple, distinct composition in the same
// visual language: thin stroke, currentColor, no fill.
const marks = {
  oilGas: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M16 4v10" /><path d="M10 14h12l3 14H7z" /><path d="M13 20h6" />
    </svg>
  ),
  maritime: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 22h20l-3 6H9z" /><path d="M16 4v16" /><path d="M16 8l7 4-7 3z" />
    </svg>
  ),
  energy: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M18 4 8 18h7l-2 10 11-15h-7z" strokeLinejoin="round" />
    </svg>
  ),
  aviation: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M16 5v22" /><path d="M4 14l24 4" /><path d="M11 27h10" />
    </svg>
  ),
  construction: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 27 20 12" /><path d="M17 9l6 6-3 3-6-6z" /><path d="M6 26h6" />
    </svg>
  ),
  infrastructure: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="16" cy="16" r="11" /><path d="M5 16h22" /><path d="M16 5v22" />
    </svg>
  ),
  logistics: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="5" y="12" width="14" height="10" /><path d="M19 15h5l3 4v3h-8z" />
      <circle cx="11" cy="25" r="2" /><circle cx="23" cy="25" r="2" />
    </svg>
  ),
  industrial: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 26V15l6 4v-4l6 4v-4l6 4v7z" strokeLinejoin="round" />
      <path d="M6 26h20" />
    </svg>
  ),
};

// Relevance lines are agent-authored (A7, COPY-FOR-REVIEW.md).
const INDUSTRIES = [
  { name: 'Oil & Gas', mark: marks.oilGas, relevance: 'Marine and logistics support across upstream and midstream operations.' },
  { name: 'Maritime', mark: marks.maritime, relevance: 'Vessel operations, chartering and marine support for commercial shipping.' },
  { name: 'Energy', mark: marks.energy, relevance: 'Infrastructure and technical services for power generation and distribution.' },
  { name: 'Aviation', mark: marks.aviation, relevance: 'Charter, crew transfer and journey management for time-critical air travel.' },
  { name: 'Construction', mark: marks.construction, relevance: 'Heavy equipment, haulage and materials logistics for civil works.' },
  { name: 'Infrastructure', mark: marks.infrastructure, relevance: 'Pipeline, port and industrial infrastructure installation and upkeep.' },
  { name: 'Logistics', mark: marks.logistics, relevance: 'Haulage, equipment transport and supply chain coordination end to end.' },
  { name: 'Industrial Operations', mark: marks.industrial, relevance: 'Equipment, PPE and technical support for plant and refinery operations.' },
];

export default function IndustriesWeServe() {
  return (
    <section id="industries" className="scroll-mt-24 bg-c-bg-alt">
      <Container className="py-section-sm md:py-section">
        <SectionHeader
          align="center"
          eyebrow="Industries"
          index="04"
          heading="Industries We Serve"
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {INDUSTRIES.map((industry) => (
            <IndustryCard key={industry.name} mark={industry.mark} name={industry.name} relevance={industry.relevance} />
          ))}
        </div>
      </Container>
    </section>
  );
}
