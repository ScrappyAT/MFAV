import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { DIVISIONS } from '../content/divisions';
import { SERVICES } from '../content/services';
import { METADATA } from '../content/metadata';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import Container from '../components/ui/Container';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';
import TextLink from '../components/ui/TextLink';
import ServiceCard from '../components/ui/ServiceCard';
import CtaBand from '../components/ui/CtaBand';
import NotFound from './NotFound';

/**
 * ServiceDetail — Phase 4. ONE reusable template for all six division
 * routes, entirely data-driven from DIVISIONS (Phase 2b division data)
 * + SERVICES (Phase 4 copy). No per-division page files.
 */
export default function ServiceDetail() {
  const { slug } = useParams();
  const division = DIVISIONS.find((d) => d.id === slug);
  const service = SERVICES[slug];
  const meta = METADATA[`services/${slug}`];

  // Hooks must run unconditionally — call before the not-found bail-out.
  useDocumentMeta(
    meta ? meta.title : METADATA.notFound.title,
    meta ? meta.description : METADATA.notFound.description,
    service?.image
  );

  if (!division || !service) return <NotFound />;

  const relatedDivisions = service.relatedServices
    .map((id) => DIVISIONS.find((d) => d.id === id))
    .filter(Boolean);

  return (
    <main>
      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-c-scrim">
        <img
          src={service.image}
          alt=""
          loading="eager"
          className={['absolute inset-0 h-full w-full object-cover', service.graded && 'grade-cool'].filter(Boolean).join(' ')}
        />
        {service.graded && <div aria-hidden="true" className="grade-cool-tint absolute inset-0" />}
        <div aria-hidden="true" className="absolute inset-0 bg-c-scrim/80" />

        {/* pt-32 (mobile only) replaces py-section-sm's 80px top half —
            80px (plus the breadcrumb above the H1) sat right at the edge
            of the fixed 100px header, safe only by luck of the
            breadcrumb's exact height; 128px gives real margin instead.
            md+ is unaffected (py-section-lg's 180px was already safe). */}
        <Container className="relative z-10 pt-32 pb-section-sm md:py-section-lg">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-c-ondark/70">
            <TextLink to="/" onDark>Home</TextLink>
            <span className="mx-2">/</span>
            <TextLink to="/services" onDark>Services</TextLink>
            <span className="mx-2">/</span>
            <span aria-current="page" className="text-c-ondark">{division.name}</span>
          </nav>
          <h1 className="text-hero-sm md:text-hero text-c-ondark mb-6 max-w-3xl">{division.name}</h1>
          <p className="max-w-measure text-lg text-c-ondark/85 leading-relaxed mb-8">{service.positioning}</p>
          <Button to="/contact" variant="primary" size="lg">
            Request a Consultation
          </Button>
        </Container>
      </section>

      {/* 2. Overview */}
      <Container className="py-section-sm md:py-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="text-xl font-bold text-c-on mb-4">Overview</h2>
            <div className="flex flex-col gap-4">
              {service.overview.map((paragraph, idx) => (
                <p key={idx} className="text-lg text-c-on leading-relaxed">{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <dl className="flex flex-col">
              {service.keyFacts.map((fact) => (
                <div key={fact.label} className="py-4 border-t border-c-border first:border-t-0">
                  <dt className="text-eyebrow uppercase text-c-on-muted mb-1">{fact.label}</dt>
                  <dd className="text-c-on">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>

      {/* 3. Capabilities */}
      <section className="bg-c-bg-alt">
        <Container className="py-section-sm md:py-section">
          <SectionHeader heading={`${division.name} Capabilities`} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
            {service.capabilities.map((cap) => (
              <div key={cap.name} className="border-t border-c-border pt-5">
                <h3 className="font-bold text-c-on mb-1.5">{cap.name}</h3>
                <p className="text-c-on-muted leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Approach / Process */}
      <Container className="py-section-sm md:py-section">
        <SectionHeader heading="How We Work" />
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {service.process.map((step, idx) => (
            <div key={step.title} className="relative pt-6 border-t-2 border-c-primary">
              <span className="block text-eyebrow text-c-primary mb-3">{String(idx + 1).padStart(2, '0')}</span>
              <h3 className="font-bold text-c-on mb-1.5">{step.title}</h3>
              <p className="text-sm text-c-on-muted leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>

      {/* 5. Benefits */}
      <section className="bg-c-bg-alt">
        <Container className="py-section-sm md:py-section">
          <SectionHeader heading="Why This Division" />
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-c-border">
            {service.benefits.map((benefit) => (
              <div key={benefit} className="border-r border-b border-c-border p-6">
                <p className="text-c-on">{benefit}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Relevant Industries */}
      <Container className="py-section-sm md:py-section">
        <SectionHeader heading="Where This Applies" />
        <div className="flex flex-wrap gap-3">
          {service.relevantIndustries.map((industry) => (
            <Link
              key={industry}
              to="/industries"
              className="rounded-token border border-c-border-hl px-4 py-2 text-sm font-semibold uppercase tracking-wide text-c-on-muted transition-colors duration-200 ease-standard hover:border-c-primary hover:text-c-primary-bg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-c-primary"
            >
              {industry}
            </Link>
          ))}
        </div>
      </Container>

      {/* 7. Related Services */}
      {relatedDivisions.length > 0 && (
        <section className="bg-c-bg-alt">
          <Container className="py-section-sm md:py-section">
            <SectionHeader heading="Related Services" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedDivisions.map((related) => (
                <ServiceCard
                  key={related.id}
                  image={SERVICES[related.id]?.image}
                  imageAlt=""
                  title={related.name}
                  description={related.blurb}
                  to={`/services/${related.id}`}
                  graded={SERVICES[related.id]?.graded}
                />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 8. CTA band */}
      <CtaBand heading={service.cta.heading} body={service.cta.body} />
    </main>
  );
}
