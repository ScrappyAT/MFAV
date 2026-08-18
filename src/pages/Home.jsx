import React from 'react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';
import Capabilities from '../components/Capabilities';
import KeyStats from '../components/KeyStats';
import FeaturedServices from '../components/FeaturedServices';
import IndustriesWeServe from '../components/IndustriesWeServe';
import SafetyExcellence from '../components/SafetyExcellence';
import ProjectsSection from '../components/ProjectsSection';
import WhyMfav from '../components/WhyMfav';
import Partners from '../components/Partners';

// Canonical homepage order per A6 — every section below is now a real
// <Link>/<Button>-driven component; the modal-era callback props
// (onRequestConsultation, onSelectDivision, onSelectService,
// onSelectProject) are gone as of the Phase 2/3 rewrites.
export default function Home() {
  useDocumentMeta(
    undefined,
    'MFAV Offshore and Allied Resources delivers integrated marine, offshore, aviation, logistics, energy, infrastructure and industrial solutions with safety and operational excellence at the core.'
  );

  return (
    <main>
      <Hero />
      <Capabilities />
      <WhoWeAre />
      <KeyStats />
      <FeaturedServices />
      <IndustriesWeServe />
      <SafetyExcellence />
      <ProjectsSection />
      <WhyMfav />
      <Partners />
    </main>
  );
}
