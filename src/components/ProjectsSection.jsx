import React from 'react';
import Container from './ui/Container';
import SectionHeader from './ui/SectionHeader';
import ProjectCard from './ui/ProjectCard';
import TextLink from './ui/TextLink';
import { PROJECTS } from '../content/projects';
import { useInView, revealClass } from '../hooks/useInView';

// Homepage teaser: one project per sector category, first-listed in the
// deck's own table order (COPY-APPROVED.md §3.8) — mirrors the original
// section's one-card-per-category design rather than showing all eight,
// which is /projects' job. Real content per A6.1; the "illustrative
// pending client input" banner is gone now that real projects are in.
const HOMEPAGE_PROJECTS = PROJECTS.filter((project, idx) => (
  PROJECTS.findIndex((p) => p.sectorSlug === project.sectorSlug) === idx
));

export default function ProjectsSection() {
  const [gridRef, gridInView] = useInView();

  return (
    <section id="projects" className="scroll-mt-24 bg-c-bg">
      <Container className="py-section-sm md:py-section">
        <SectionHeader heading="Experience in Motion" />

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HOMEPAGE_PROJECTS.map((project, idx) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              imageAlt=""
              sector={project.sector}
              title={project.title}
              location={`${project.location} · ${project.date}`}
              description={project.description}
              graded={project.graded}
              className={revealClass(gridInView, idx)}
            />
          ))}
        </div>

        <div className="mt-10">
          <TextLink to="/projects" standalone>
            View All Projects
          </TextLink>
        </div>
      </Container>
    </section>
  );
}
