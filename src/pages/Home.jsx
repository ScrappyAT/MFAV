import React from 'react';
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
