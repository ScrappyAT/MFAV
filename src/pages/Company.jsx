import React from 'react';
import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { DIVISIONS } from '../content/divisions';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import SectionHeader from '../components/ui/SectionHeader';
import TextLink from '../components/ui/TextLink';
import Button from '../components/ui/Button';

/**
 * Company (Phase 5e) — a group-level page distinct from /about: structure
 * at a glance, operating model, governance/HSE posture and the careers
 * teaser. /about covers mission, values, leadership and safety detail;
 * this page covers how the group itself is organised and run.
 */
export default function Company() {
  useDocumentMeta(
    'Company',
    'MFAV Offshore and Allied Resources: group structure, operating model, governance and HSE posture, and careers.'
  );

  return (
    <main>
      {/* Hero */}
      <Section size="md" tone="alt" border>
        {/* pt-12 (mobile only) stacks on top of Section's own 80px
            top padding — 80px alone sits under the fixed 100px header,
            clipping the H1's top edge; the extra 48px clears it with
            margin. md+ gets pt-0 since Section's own md padding
            (144px) was already safe. */}
        <Container className="pt-12 md:pt-0">
          <h1 className="text-display md:text-hero-sm text-c-on mb-6 max-w-3xl">
            MFAV Offshore and Allied Resources
          </h1>
          <p className="max-w-measure text-lg text-c-on-muted leading-relaxed">
            A single group operating six distinct divisions, coordinated under one
            operating model, one governance posture and one HSE policy.
          </p>
        </Container>
      </Section>

      {/* Structure and divisions at a glance */}
      <Section size="md">
        <Container>
          <SectionHeader heading="Divisions at a Glance" />
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
              Each division is run by people who understand its specific operating
              conditions — a marine charter is planned differently from a pipeline
              installation, and a helicopter rotation differently from a haulage move.
              What sits above that is a single coordination layer: one commercial
              contact, one delivery standard, and one escalation path regardless of
              which division or combination of divisions a project touches.
            </p>
            <p>
              For engagements that cross divisions — a project that needs marine
              transport, equipment supply and site infrastructure work together — that
              coordination happens inside the group rather than across separate
              external contracts.
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
              Operational decisions are made against documented standards, not
              case-by-case judgement calls — from how a vessel charter is contracted to
              how equipment is specified and inspected before it reaches site.
            </p>
            <p>
              Where a division operates under a specific regulatory regime, its
              procedures are built around that regime’s requirements. MFAV does not
              publish certifications or regulatory memberships it cannot verify — see
              the <TextLink to="/about#certifications">Certifications</TextLink> section
              of About for the current status of that documentation.
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
              Safety-first culture, operational discipline, risk management and
              environmental responsibility apply as one policy across every division —
              not a stricter standard for offshore work and a looser one for haulage or
              supply. The full detail behind that policy — culture, compliance posture,
              risk management and environmental responsibility — is set out on the{' '}
              <TextLink to="/about#safety">About page</TextLink>.
            </p>
          </div>
        </Container>
      </Section>

      {/* Careers teaser */}
      <section id="careers" className="scroll-mt-24 bg-c-primary-bg">
        <Container className="py-section-sm md:py-section">
          <div className="max-w-measure">
            <h2 className="text-display-sm text-c-ondark mb-4">Work Across the Group</h2>
            <p className="text-c-ondark/75 leading-relaxed mb-2">
              [CAREERS CONTENT PLACEHOLDER] — open roles across MFAV’s divisions will be
              listed here once supplied by the client. In the meantime, enquiries can be
              sent to [CAREERS EMAIL PLACEHOLDER].
            </p>
          </div>
        </Container>
      </section>

      {/* Company profile download */}
      <Section size="md">
        <Container>
          <SectionHeader heading="Company Profile" />
          <div className="max-w-measure flex flex-col items-start gap-4">
            <p id="company-profile-note" className="text-c-on-muted leading-relaxed">
              [COMPANY PROFILE PDF PLACEHOLDER] — a downloadable overview of the group,
              its divisions and its operating model, pending a client-supplied document.
              The button below will activate once it's supplied.
            </p>
            {/* aria-disabled (not the native `disabled` attribute) so the
                control stays keyboard-reachable and its reason is
                announced via aria-describedby — a native `title` on a
                disabled button is invisible to keyboard/touch users and
                unreliable for screen readers. */}
            <Button
              type="button"
              variant="secondary"
              aria-disabled="true"
              aria-describedby="company-profile-note"
              onClick={(e) => e.preventDefault()}
              className="opacity-50 cursor-not-allowed"
            >
              <Download size={16} aria-hidden="true" />
              Download Company Profile (PDF)
            </Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}
