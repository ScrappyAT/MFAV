import React from 'react';
import { Link } from 'react-router-dom';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { METADATA } from '../content/metadata';
import { DIVISIONS } from '../content/divisions';
import { CONTACT } from '../content/site';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import SectionHeader from '../components/ui/SectionHeader';
import TextLink from '../components/ui/TextLink';

/**
 * Company (Phase 5e) — a group-level page distinct from /about: structure
 * at a glance, operating model, governance/HSE posture and the careers
 * teaser. /about covers mission, values and safety detail; this page
 * covers how the group itself is organised and run.
 */
export default function Company() {
  useDocumentMeta(METADATA.company.title, METADATA.company.description);

  return (
    <main>
      {/* Hero — image-filled, matching About/Services/Industries. */}
      <section className="relative overflow-hidden bg-c-scrim">
        <img
          src="/assets/images/hero_section.jpg"
          alt=""
          loading="eager"
          className="grade-cool absolute inset-0 h-full w-full object-cover"
        />
        <div aria-hidden="true" className="grade-cool-tint absolute inset-0" />
        {/* Directional scrim (as the homepage Hero): strong top-left
            behind the text, fading to fully visible image bottom-right. */}
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-c-scrim/60 via-c-scrim/20 to-transparent" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-c-scrim/30 via-transparent to-transparent" />
        {/* pt-32 (mobile only) clears the fixed 100px header. */}
        <Container className="relative z-10 pt-32 pb-section-sm md:py-section-lg">
          <h1 className="text-hero-sm md:text-hero text-c-ondark mb-6 max-w-3xl">
            The Company
          </h1>
          <p className="max-w-measure text-lg text-c-ondark/85 leading-relaxed">
            How M-FAV is structured, how we operate, and the standards that apply
            across every division.
          </p>
        </Container>
      </section>

      {/* Structure and divisions at a glance */}
      <Section size="md">
        <Container>
          <SectionHeader heading="Divisions at a Glance" />
          <p className="max-w-measure text-c-on-muted leading-relaxed mb-8">
            M-FAV operates as six divisions under one management structure. Each
            division holds its own operational leadership and technical capability;
            commercial, HSE and quality functions are shared across the group so that
            standards do not vary by service line.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-c-border">
            {DIVISIONS.map((division) => (
              <Link
                key={division.id}
                to={`/services/${division.id}`}
                className="group border-r border-b border-c-border p-6 flex flex-col gap-2 transition-colors duration-200 ease-standard hover:bg-c-bg-alt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-c-primary"
              >
                <h3 className="font-bold text-c-on">{division.name}</h3>
                <p className="text-sm text-c-on-muted leading-relaxed">{division.blurb}</p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Operating model */}
      <Section size="md" tone="alt">
        <Container>
          <SectionHeader heading="How the Group Operates" />
          <div className="max-w-measure flex flex-col gap-4 text-c-on-muted leading-relaxed">
            <p>
              Every engagement is assigned a single accountable contact who holds the
              scope from enquiry to close-out, regardless of how many divisions are
              involved. Where a client uses several services — a vessel, a haulage
              programme and a PPE contract, for example — coordination happens inside
              M-FAV rather than on the client's desk.
            </p>
            <p>
              Operations are planned before mobilisation, executed against a documented
              method, and reported on an agreed cycle. Variations are raised in
              writing, priced and agreed before work proceeds.
            </p>
          </div>
        </Container>
      </Section>

      {/* Governance and standards posture */}
      <Section size="md">
        <Container>
          <SectionHeader heading="Governance & Standards" />
          <div className="max-w-measure flex flex-col gap-4 text-c-on-muted leading-relaxed">
            <p>
              M-FAV maintains the registrations and clearances required for the scopes
              we undertake, and operates within the regulatory framework governing
              marine, offshore and industrial work in Nigeria. Documentation is made
              available during prequalification and tender.
            </p>
            <p>
              Our commercial conduct is governed by transparent documentation, ethical
              procurement practice and clear contract terms. Supplier and subcontractor
              relationships are subject to evaluation before engagement and review
              through delivery.
            </p>
          </div>
        </Container>
      </Section>

      {/* HSE policy summary */}
      <Section size="md" tone="alt">
        <Container>
          <SectionHeader heading="Health, Safety & Environment" />
          <div className="max-w-measure flex flex-col gap-4 text-c-on-muted leading-relaxed">
            <p>
              Delivering Excellence at All Times sets the standard our work is held to,
              and safe execution is the first condition of meeting it. In practice that
              means stop-work authority at every level, risk assessment before
              mobilisation, incident and near-miss reporting with tracked corrective
              actions, and environmental controls built into the job plan rather than
              added to it. The full statement is on our{' '}
              <TextLink to="/about#safety">safety page</TextLink>.
            </p>
          </div>
        </Container>
      </Section>

      {/* Careers teaser */}
      <section id="careers" className="scroll-mt-24 bg-c-primary-bg">
        <Container className="py-section-sm md:py-section">
          <div className="max-w-measure">
            <h2 className="text-display-sm text-c-ondark mb-4">Careers at M-FAV</h2>
            <p className="text-c-ondark/75 leading-relaxed mb-4">
              We hire marine personnel, drivers and logistics coordinators, HSE
              professionals, procurement specialists and operational support staff.
              Experience in offshore, marine or heavy industrial environments matters;
              so does a demonstrated commitment to working safely.
            </p>
            <p className="text-c-ondark/75 leading-relaxed">
              To register interest, send your CV and the role you are interested in to{' '}
              <a
                href={`mailto:${CONTACT.email}`}
                className="underline underline-offset-2 text-c-ondark hover:text-c-ondark-primary"
              >
                {CONTACT.email}
              </a>.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
