import React from 'react';
import Container from './ui/Container';
import SectionHeader from './ui/SectionHeader';
import IndustryCard from './ui/IndustryCard';
import { INDUSTRIES } from '../content/industries';
import { useInView, revealClass } from '../hooks/useInView';

export default function IndustriesWeServe() {
  const [gridRef, gridInView] = useInView();

  return (
    <section id="industries" className="scroll-mt-24 bg-c-bg-alt">
      <Container className="py-section-sm md:py-section">
        <SectionHeader
          align="center"
          heading="Industries We Serve"
        />
        <div ref={gridRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {INDUSTRIES.map((industry, idx) => (
            <IndustryCard
              key={industry.name}
              mark={industry.mark}
              name={industry.name}
              relevance={industry.relevance}
              className={revealClass(gridInView, idx)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
