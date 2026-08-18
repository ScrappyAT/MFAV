import React from 'react';
import Container from './ui/Container';
import Eyebrow from './ui/Eyebrow';
import Button from './ui/Button';

// Six points, agent-authored (A7, COPY-FOR-REVIEW.md). Commitment and
// process only — no certification numbers, no standards claims, no
// statistics (A3 §3c). The original version of this section quoted "IMO,
// ICAO, NIPEX" compliance in a policy modal with no client-supplied data
// behind it — removed entirely as part of this rewrite, not softened.
const POINTS = [
  {
    title: 'Safety-first culture',
    body: 'Safety is treated as a shared responsibility, built into how every operation is planned and run — not a step added at the end.',
  },
  {
    title: 'Operational discipline',
    body: 'Standard operating procedures and pre-mission checks are followed consistently, across every division and every site.',
  },
  {
    title: 'Regulatory compliance',
    body: 'Operations are structured to meet the regulatory expectations of the sectors and jurisdictions we work in.',
  },
  {
    title: 'Risk management',
    body: 'Hazards are identified and assessed before mobilisation, with mitigation built into the plan rather than added after the fact.',
  },
  {
    title: 'Quality assurance',
    body: 'Work is checked against defined standards at each stage of an operation, not only at handover.',
  },
  {
    title: 'Environmental responsibility',
    body: 'Operations are planned to limit environmental impact, from marine discharge to waste handling on site.',
  },
];

export default function SafetyExcellence() {
  return (
    <section id="safety" className="scroll-mt-24 relative overflow-hidden bg-c-scrim">
      <img
        src="/assets/images/who_we_are_plant.svg"
        alt="Industrial plant at dusk"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-c-scrim/90" />

      <Container className="relative z-10 py-section-sm md:py-section">
        <div className="max-w-2xl">
          <Eyebrow index="05" onDark className="mb-4">
            Safety
          </Eyebrow>
          <h2 className="text-display-sm md:text-display text-c-ondark mb-6">
            Safety at Every Level of Operation
          </h2>

          <dl className="flex flex-col">
            {POINTS.map((point) => (
              <div key={point.title} className="py-5 border-t border-c-ondark/15 first:border-t-0">
                <dt className="font-bold text-c-ondark mb-1">{point.title}</dt>
                <dd className="text-c-ondark/75 leading-relaxed">{point.body}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8">
            <Button to="/about#safety" variant="onDark" trailingArrow>
              Our Commitment to Safety
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
