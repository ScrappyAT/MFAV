import React from 'react';
import Container from './ui/Container';
import Button from './ui/Button';

// Six points, COPY-APPROVED.md §3.7. Commitment and process only — no
// certification numbers, no standards claims, no statistics (A3 §3c).
const INTRO = 'Safety is not a department here. It is the condition under which work is authorised to proceed, and the reason a job stops when something is wrong.';

const POINTS = [
  {
    title: 'Safety-First Culture',
    body: 'Every person on an M-FAV job has the authority to stop work, and no one is penalised for using it.',
  },
  {
    title: 'Operational Discipline',
    body: 'Procedures, permits and pre-task briefings are followed as written, on every job, regardless of schedule pressure.',
  },
  {
    title: 'Regulatory Compliance',
    body: 'We operate within the regulatory framework governing marine, offshore and industrial work in Nigeria, and maintain the registrations our scope requires.',
  },
  {
    title: 'Risk Management',
    body: 'Hazards are identified and controlled before mobilisation, and reassessed when conditions change.',
  },
  {
    title: 'Quality Assurance',
    body: 'Equipment, materials and subcontracted services are inspected against specification before they reach your operation.',
  },
  {
    title: 'Environmental Responsibility',
    body: 'Marine and pipeline operations are planned to limit environmental impact and to meet the standards applicable to the work.',
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
          <h2 className="text-display-sm md:text-display text-c-ondark mb-6">
            Safety at Every Level of Operation
          </h2>
          <p className="text-c-ondark/85 leading-relaxed mb-8">{INTRO}</p>

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
