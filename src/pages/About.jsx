import React from 'react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { METADATA } from '../content/metadata';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import SectionHeader from '../components/ui/SectionHeader';

// COPY-APPROVED.md §4.3 — hairline-separated list, applied verbatim.
const VALUES = [
  { name: 'Safety', body: 'Work proceeds only when it is safe to proceed. Schedule never overrides that.' },
  { name: 'Integrity', body: 'We describe our capability accurately, price transparently and report honestly, including when something has gone wrong.' },
  { name: 'Accountability', body: 'One point of responsibility on every engagement, from mobilisation to close-out.' },
  { name: 'Operational Excellence', body: 'Disciplined execution, maintained equipment and competent crews.' },
  { name: 'Local Capability', body: 'Nigerian operations, Nigerian workforce, and in-country capacity built deliberately rather than imported.' },
  { name: 'Sustainability', body: 'Operations planned to limit environmental impact and to contribute to the communities we work in.' },
];

// COPY-APPROVED.md §4.5, applied verbatim. The `[VERIFY: ...]` registration
// list is rendered as written per A6.2 — not resolved, not turned into an
// "ISO certified"-style claim.
const SAFETY_DETAIL = [
  {
    title: 'Safety Culture',
    body: 'Every M-FAV operation begins with a briefing and ends with a close-out. Personnel at every level hold stop-work authority, and exercising it is treated as correct practice rather than disruption. Incidents and near misses are reported, investigated and closed out with corrective actions that are tracked to completion.',
  },
  {
    title: 'Regulatory Compliance',
    body: 'Our operations are conducted within the regulatory framework governing marine and offshore work in Nigeria. M-FAV maintains registrations and clearances with the relevant authorities for the scopes we undertake, including [VERIFY: NIMASA · Nigerian Navy · NUPRC/NMDPRA · NCDMB · NPA · NSCDC · FIRS]. Documentation is available to clients on request during prequalification.',
  },
  {
    title: 'Risk Management',
    body: 'Risk assessment precedes mobilisation on every scope. Vessel movements, haulage routes and journey management plans are assessed for operational, security and environmental risk, and controls are re-evaluated when conditions change — weather, sea state, security posture or scope variation.',
  },
  {
    title: 'Quality Assurance',
    body: 'Equipment and materials are inspected against specification before delivery. Subcontracted services are evaluated before engagement and monitored through delivery. Where a specification cannot be met, the client is told before substitution, not after.',
  },
  {
    title: 'Environmental Responsibility',
    body: 'Marine, pipeline and fuel-handling operations are planned to prevent spills and limit discharge. Waste from our operations is managed through licensed routes, and environmental requirements specific to a client\'s site or a regulator\'s conditions are incorporated into the job plan.',
  },
];

export default function About() {
  useDocumentMeta(METADATA.about.title, METADATA.about.description);

  return (
    <main>
      {/* Hero */}
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
          <h1 className="text-hero-sm md:text-hero text-c-ondark mb-6 max-w-3xl">An Integrated Partner for Demanding Operations</h1>
          <p className="max-w-measure text-lg text-c-ondark/85 leading-relaxed">
            M-FAV brings marine, offshore, aviation, logistics, energy and industrial
            capabilities together under one accountable structure.
          </p>
        </Container>
      </section>

      {/* Company overview */}
      <Section size="md">
        <Container>
          <div className="max-w-measure flex flex-col gap-5 text-c-on-muted leading-relaxed text-lg">
            <p>
              M-FAV Offshore and Allied Services Limited is a Nigerian integrated services
              group working across marine and offshore operations, aviation, energy and
              infrastructure, logistics and haulage, equipment and protective equipment
              supply, and property and investment.
            </p>
            <p>
              Our operational base is Nigeria and the wider Gulf of Guinea — waters and
              roads where conditions, security and regulation all shape how work gets
              done. That context is the reason clients use us: capability is only useful
              if it can be delivered here, on schedule, without incident, and with
              documentation that stands up to audit.
            </p>
            <p>
              We work for international operators, EPC contractors, marine operators and
              industrial clients. Some engage us for a single vessel charter or a PPE
              supply contract. Others use several divisions at once, which is where the
              integrated model earns its place — fewer interfaces, fewer handover gaps,
              and one party accountable when something needs to change mid-operation.
            </p>
          </div>
        </Container>
      </Section>

      {/* Mission and Vision — two-panel contrast block. "Mission"/"Vision"
          were previously the Eyebrow label sitting above the statement,
          which meant they were also each panel's only heading (the
          statement itself is a <p>, not a heading). Removing the Eyebrow
          component here couldn't just delete that line — with nothing
          else in the panel identifying what the statement is, that would
          have left two unlabeled paragraphs. It's promoted to a real,
          modestly-sized heading instead (matching the `text-xl font-bold`
          step already used for other subsection-level headings, e.g.
          Contact.jsx's "Office Details") rather than staying at the small
          eyebrow scale, since that scale is specifically what's retired. */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-c-primary-bg px-6 md:px-14 py-16 md:py-20 flex flex-col justify-center">
            <h2 className="text-xl font-bold text-c-ondark mb-4">Mission</h2>
            <p className="text-display-sm text-c-ondark leading-snug">
              To provide safe, efficient, and cost-effective offshore, marine, engineering.
              procurement, fabrication, logistics, and technical support services through
              operational excellence, skilled personnel, strategie partnerships, and adherence
              to international best practices, while promoting Nigeran Content developmen and
              environmental sustainability.
            </p>
          </div>
          <div className="bg-c-bg-alt px-6 md:px-14 py-16 md:py-20 flex flex-col justify-center">
            <h2 className="text-xl font-bold text-c-on mb-4">Vision</h2>
            <p className="text-display-sm text-c-on leading-snug">
              To be Africa's leading indigenous offshore and marine services compan
              delivering innovative, reliable, and sustainable solutions that support the
              growth of the energy industry while creating lasting value for our clients
              and stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <Section size="md" tone="base">
        <Container>
          <SectionHeader heading="What We Hold Ourselves To" />
          <dl className="flex flex-col max-w-measure">
            {VALUES.map((value) => (
              <div key={value.name} className="py-5 border-t border-c-border first:border-t-0">
                <dt className="font-bold text-c-on mb-1">{value.name}</dt>
                <dd className="text-c-on-muted leading-relaxed">{value.body}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      {/* Safety */}
      <section id="safety" className="scroll-mt-24 relative overflow-hidden bg-c-scrim">
        <img
          src="/assets/images/who_we_are_plant.gif"
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-c-scrim/90" />
        <Container className="relative z-10 py-section-sm md:py-section">
          <div className="max-w-3xl">
            <h2 className="text-display-sm md:text-display text-c-ondark mb-6">
              Our Commitment to Safety
            </h2>
            <p className="text-c-ondark/85 leading-relaxed mb-8">
              Excellence in delivery is not separable from safety. A scope completed on
              schedule but with an incident behind it has not been delivered well, and we
              do not account for it that way. Safety is the condition under which our
              work is authorised to proceed, and the reason a job stops when conditions
              change.
            </p>
            <dl className="flex flex-col">
              {SAFETY_DETAIL.map((item) => (
                <div key={item.title} className="py-6 border-t border-c-ondark/15 first:border-t-0">
                  <dt className="font-bold text-c-ondark mb-2">{item.title}</dt>
                  <dd className="text-c-ondark/80 leading-relaxed">{item.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>
    </main>
  );
}
