import React from 'react';
import { AlertTriangle } from 'lucide-react';
import Container from './ui/Container';
import SectionHeader from './ui/SectionHeader';
import ProjectCard from './ui/ProjectCard';
import TextLink from './ui/TextLink';

// Every field below is an explicit placeholder (A3 §3d: "Invent nothing").
// Descriptions stay at the level of "what kind of work this represents"
// (no invented specifics — no dates, no client names, no performance
// figures); title and location are bracketed placeholders throughout.
// Categories match the brief's list exactly; a 5th card was added so all
// five are represented (the original had only 4).
const PROJECTS = [
  {
    id: 'project-1',
    sector: 'Marine Operations',
    description: 'Illustrative: offshore platform supply vessel chartering and journey management.',
    image: '/assets/images/hero_section.jpg',
    graded: true,
  },
  {
    id: 'project-2',
    sector: 'Offshore Support',
    description: 'Illustrative: aviation and rotary-wing crew transfer support for remote site operations.',
    image: '/assets/images/division_aviation.svg',
  },
  {
    id: 'project-3',
    sector: 'Infrastructure',
    description: 'Illustrative: pipeline installation and engineering maintenance.',
    image: '/assets/images/who_we_are_plant.svg',
  },
  {
    id: 'project-4',
    sector: 'Logistics',
    description: 'Illustrative: heavy machinery haulage and port-to-site supply coordination.',
    image: '/assets/images/division_logistics.svg',
  },
  {
    id: 'project-5',
    sector: 'Equipment Supply',
    description: 'Illustrative: industrial equipment and PPE supply for site mobilisation.',
    image: '/assets/images/division_equipment.svg',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 bg-c-bg">
      <Container className="py-section-sm md:py-section">
        <SectionHeader eyebrow="Projects" index="06" heading="Experience in Motion" />

        <div className="mb-8 flex items-start gap-3 rounded-token border border-c-border-hl bg-c-bg-alt p-4 text-sm text-c-on-muted">
          <AlertTriangle size={18} aria-hidden="true" className="shrink-0 mt-0.5 text-c-primary" />
          <p>
            The portfolio below is illustrative and does not represent completed client
            engagements. Project titles, locations and details are placeholders pending
            real content from the client.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              imageAlt=""
              sector={project.sector}
              title="[PROJECT TITLE PLACEHOLDER]"
              location="[LOCATION PLACEHOLDER]"
              description={project.description}
              graded={project.graded}
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
