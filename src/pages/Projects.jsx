import React, { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Inbox } from 'lucide-react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { METADATA } from '../content/metadata';
import { PROJECTS } from '../content/projects';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import ProjectCard from '../components/ui/ProjectCard';

// Filter categories match COPY-APPROVED.md §8's chip list exactly.
const SECTORS = [
  { slug: 'all', label: 'All' },
  { slug: 'marine-operations', label: 'Marine Operations' },
  { slug: 'offshore-support', label: 'Offshore Support' },
  { slug: 'logistics', label: 'Logistics' },
  { slug: 'infrastructure', label: 'Infrastructure' },
  { slug: 'equipment-supply', label: 'Equipment Supply' },
];

/**
 * Projects (Phase 5d) — filterable portfolio. Filtering is client-side and
 * keyboard-operable (real <button>s with aria-pressed), and the active
 * filter is reflected in the URL as `?sector=<slug>` so the filtered view
 * is linkable/shareable and survives a refresh.
 */
export default function Projects() {
  useDocumentMeta(METADATA.projects.title, METADATA.projects.description);

  const [searchParams, setSearchParams] = useSearchParams();
  const activeSector = searchParams.get('sector') || 'all';
  const activeSectorValid = SECTORS.some((s) => s.slug === activeSector) ? activeSector : 'all';

  const filtered = useMemo(
    () => (activeSectorValid === 'all' ? PROJECTS : PROJECTS.filter((p) => p.sectorSlug === activeSectorValid)),
    [activeSectorValid]
  );

  function handleSelect(slug) {
    if (slug === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ sector: slug });
    }
  }

  return (
    <main>
      <Section size="md" tone="alt" border>
        {/* pt-12 (mobile only) stacks on top of Section's own 80px
            top padding — 80px alone sits under the fixed 100px header,
            clipping the H1's top edge; the extra 48px clears it with
            margin. md+ gets pt-0 since Section's own md padding
            (144px) was already safe. */}
        <Container className="pt-12 md:pt-0">
          <h1 className="text-display md:text-hero-sm text-c-on mb-6 max-w-3xl">Projects & Operations</h1>
          <p className="max-w-measure text-lg text-c-on-muted leading-relaxed">
            A selection of the marine, offshore, logistics and infrastructure
            operations M-FAV has supported.
          </p>
        </Container>
      </Section>

      <Section size="md">
        <Container>
          {/* Filter chips */}
          <div role="group" aria-label="Filter projects by sector" className="mb-10 flex flex-wrap gap-2.5">
            {SECTORS.map((sector) => {
              const isActive = sector.slug === activeSectorValid;
              return (
                <button
                  key={sector.slug}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => handleSelect(sector.slug)}
                  className={[
                    'rounded-token border px-4 min-h-11 inline-flex items-center text-sm font-semibold uppercase tracking-wide',
                    'transition-colors duration-200 ease-standard',
                    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-c-primary',
                    isActive
                      ? 'bg-c-primary-bg text-c-on-primary border-c-primary-bg'
                      : 'bg-transparent text-c-on-muted border-c-border hover:border-c-border-hl hover:text-c-on',
                  ].join(' ')}
                >
                  {sector.label}
                </button>
              );
            })}
          </div>

          {/* Visually-hidden heading so the ProjectCard h3s below have a
              valid h2 parent in the outline (this page's own heading is
              h1) — keeps heading-order valid without changing ProjectCard,
              which also runs under a real h2 on the homepage. */}
          <h2 className="sr-only">
            {SECTORS.find((s) => s.slug === activeSectorValid)?.label} projects
          </h2>

          {/* Live region so screen-reader users hear the result count change
              when a filter is applied, without moving focus. */}
          <p aria-live="polite" className="sr-only">
            {filtered.length} project{filtered.length === 1 ? '' : 's'} shown for {SECTORS.find((s) => s.slug === activeSectorValid)?.label}.
          </p>

          {filtered.length === 0 ? (
            <div className="flex flex-col items-center gap-3 rounded-token border border-dashed border-c-border-hl py-16 text-center">
              <Inbox size={32} strokeWidth={1.5} aria-hidden="true" className="text-c-on-muted" />
              <p className="text-c-on-muted">
                No projects match this filter yet. <span className="font-semibold text-c-on">View all projects</span> or{' '}
                <Link to="/contact" className="underline underline-offset-2 hover:text-c-on">get in touch</Link> to discuss a specific capability.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project) => (
                <ProjectCard
                  key={project.id}
                  image={project.image}
                  imageAlt=""
                  sector={project.sector}
                  title={project.title}
                  location={`${project.location} · ${project.date}`}
                  description={project.description}
                  graded={project.graded}
                />
              ))}
            </div>
          )}
        </Container>
      </Section>
    </main>
  );
}
