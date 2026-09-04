import React from 'react';
import { User, ShieldCheck } from 'lucide-react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import SectionHeader from '../components/ui/SectionHeader';

// Agent-authored copy throughout this file (A7) — logged in
// COPY-FOR-REVIEW.md. No unverifiable size/history claims, no invented
// people, no fabricated credentials (A2.6/A2.7).
const VALUES = [
  { name: 'Safety', body: 'Every operation is planned and run with the safety of our people and partners as the first consideration, not a constraint applied afterward.' },
  { name: 'Integrity', body: 'We do what we say we will do, and we say plainly when we can’t — with clients, regulators and each other.' },
  { name: 'Excellence', body: 'Work is checked against defined standards at every stage, across every division, regardless of scale.' },
  { name: 'Accountability', body: 'One partner, one point of contact, one standard of delivery — across marine, aviation, logistics and every other division.' },
  { name: 'Collaboration', body: 'Complex operations move multiple teams at once; we coordinate them as one, not as a chain of handoffs.' },
];

const LEADERSHIP_SLOTS = [
  '[NAME PLACEHOLDER 1] — [ROLE PLACEHOLDER 1]',
  '[NAME PLACEHOLDER 2] — [ROLE PLACEHOLDER 2]',
  '[NAME PLACEHOLDER 3] — [ROLE PLACEHOLDER 3]',
  '[NAME PLACEHOLDER 4] — [ROLE PLACEHOLDER 4]',
];

const SAFETY_DETAIL = [
  {
    title: 'Culture',
    body: 'Safety is treated as a shared responsibility rather than a compliance checkbox — every person on an operation, regardless of division or seniority, has standing to stop work they judge unsafe. That expectation is set before mobilisation, not discovered on site.',
  },
  {
    title: 'Compliance posture',
    body: 'Operations are structured to meet the regulatory expectations of the sectors and jurisdictions we work in. Where a division operates under a specific regulatory regime — maritime, aviation, or otherwise — its procedures are built around that regime’s requirements, not a generic policy applied uniformly across the group.',
  },
  {
    title: 'Risk management',
    body: 'Hazards are identified and assessed before mobilisation, with mitigation designed into the operating plan rather than bolted on afterward. Risk assessment is revisited when conditions change — a shifting weather window, a route restriction, a change in scope — rather than treated as a one-time sign-off.',
  },
  {
    title: 'Environmental responsibility',
    body: 'Operations are planned to limit environmental impact across the full range of what the group does — marine discharge, waste handling on site, and the footprint of haulage and logistics work. This is a planning input, not an afterthought raised only when a project draws scrutiny.',
  },
];

export default function About() {
  useDocumentMeta(
    'About MFAV',
    'MFAV Offshore and Allied Resources: an integrated industrial services group across marine, aviation, logistics, energy and infrastructure — our mission, values, leadership and safety commitment.'
  );

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
          <h1 className="text-hero-sm md:text-hero text-c-ondark mb-6 max-w-3xl">About MFAV</h1>
          <p className="max-w-measure text-lg text-c-ondark/85 leading-relaxed">
            An integrated industrial services group built around capability, safety and
            accountability — one partner across marine, offshore, aviation, logistics,
            energy, infrastructure and industrial sectors.
          </p>
        </Container>
      </section>

      {/* Company overview */}
      <Section size="md">
        <Container>
          <div className="max-w-measure flex flex-col gap-5 text-c-on-muted leading-relaxed text-lg">
            <p>
              MFAV Offshore and Allied Resources is a diversified Nigerian integrated
              services group operating across marine, offshore, aviation, logistics,
              energy, infrastructure, equipment and PPE, and property and investment.
              Each division carries its own operational discipline, but all of them
              answer to the same standard.
            </p>
            <p>
              Bringing these capabilities together under one accountable partner reduces
              the coordination risk that comes with managing multiple vendors across a
              complex operation. Where a project touches several domains — a vessel
              charter that also needs haulage and equipment on the ground, or an
              infrastructure scope that needs both technical crews and PPE supply — that
              coordination happens inside one organisation instead of across several
              contracts.
            </p>
            <p>
              Safety, discipline and international operating standards are the constant
              across every division, regardless of sector or scale.
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
              To deliver integrated marine, offshore, aviation, logistics, energy and
              industrial solutions with safety and operational excellence at the core of
              every engagement.
            </p>
          </div>
          <div className="bg-c-bg-alt px-6 md:px-14 py-16 md:py-20 flex flex-col justify-center">
            <h2 className="text-xl font-bold text-c-on mb-4">Vision</h2>
            <p className="text-display-sm text-c-on leading-snug">
              To be the accountable partner operators turn to for complex,
              multi-discipline operations across Nigeria and beyond.
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

      {/* Leadership */}
      <section id="leadership" className="scroll-mt-24 bg-c-bg-alt">
        <Container className="py-section-sm md:py-section">
          <SectionHeader
            heading="Leadership"
            supporting="Team profiles are pending client-supplied names, roles and portraits — no individuals are represented below."
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERSHIP_SLOTS.map((slot) => {
              const [name, role] = slot.split(' — ');
              return (
                <div key={slot} className="flex flex-col">
                  <div className="aspect-4/5 w-full rounded-token border border-c-border bg-c-surface-low flex items-center justify-center">
                    <User size={40} strokeWidth={1.25} aria-hidden="true" className="text-c-on-muted/50" />
                  </div>
                  <p className="mt-4 font-bold text-c-on text-sm">{name}</p>
                  <p className="text-sm text-c-on-muted">{role}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Safety */}
      <section id="safety" className="scroll-mt-24 relative overflow-hidden bg-c-scrim">
        <img
          src="/assets/images/who_we_are_plant.svg"
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-c-scrim/90" />
        <Container className="relative z-10 py-section-sm md:py-section">
          <div className="max-w-3xl">
            <h2 className="text-display-sm md:text-display text-c-ondark mb-8">
              Safety at Every Level of Operation
            </h2>
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

      {/* Certifications — explicitly empty */}
      <section id="certifications" className="scroll-mt-24 bg-c-bg py-section-sm md:py-section">
        <Container>
          <SectionHeader heading="Certifications" />
          <div className="max-w-measure rounded-token border border-dashed border-c-border-hl bg-c-bg-alt p-8 flex flex-col items-start gap-3">
            <ShieldCheck size={28} strokeWidth={1.5} aria-hidden="true" className="text-c-on-muted" />
            <p className="text-c-on-muted leading-relaxed">
              <span className="font-semibold text-c-on">[CERTIFICATIONS PLACEHOLDER]</span> — this
              section is intentionally empty. Regulatory memberships and certifications will
              be published here once supplied and verified by the client. MFAV does not
              publish unverified credentials.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
