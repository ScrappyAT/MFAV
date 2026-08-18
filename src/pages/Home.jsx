import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';
import Capabilities from '../components/Capabilities';
import KeyStats from '../components/KeyStats';
import FeaturedServices from '../components/FeaturedServices';
import IndustriesWeServe from '../components/IndustriesWeServe';
import SafetyExcellence from '../components/SafetyExcellence';
import ProjectsSection from '../components/ProjectsSection';
import WhyMfav from '../components/WhyMfav';

// Maps the ad hoc ids these Phase-2/3-scope components already use to the
// real A5 service slugs, now that /services/:slug is a real route instead
// of a modal. The components themselves are untouched this phase (their
// content/copy is Phase 2/3 work) — only the selection handler changed.
const DIVISION_SLUG_BY_ID = {
  marine: 'marine-offshore',
  aviation: 'aviation',
  energy: 'energy-infrastructure',
  logistics: 'logistics-haulage',
  equipment: 'equipment-ppe',
  property: 'property-investment',
};

export default function Home() {
  const navigate = useNavigate();

  const handleRequestConsultation = () => navigate('/contact');

  // Capabilities panels and FeaturedServices cards both resolve to a
  // division page. FeaturedServices' `category` field already uses the
  // same short ids as Capabilities' `id` (marine/aviation/energy/...).
  const handleSelectDivision = (item) => {
    const slug = DIVISION_SLUG_BY_ID[item.id] || DIVISION_SLUG_BY_ID[item.category];
    navigate(slug ? `/services/${slug}` : '/services');
  };

  // Projects don't have individual detail routes in the A5 IA — every
  // project card resolves to the /projects overview.
  const handleSelectProject = () => navigate('/projects');

  return (
    <main>
      <Hero onRequestConsultation={handleRequestConsultation} />
      <WhoWeAre />
      <Capabilities onSelectDivision={handleSelectDivision} />
      <KeyStats />
      <FeaturedServices onSelectService={handleSelectDivision} />
      <IndustriesWeServe />
      <SafetyExcellence />
      <ProjectsSection onSelectProject={handleSelectProject} />
      <WhyMfav />
    </main>
  );
}
