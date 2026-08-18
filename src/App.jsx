import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import Capabilities from './components/Capabilities';
import KeyStats from './components/KeyStats';
import FeaturedServices from './components/FeaturedServices';
import IndustriesWeServe from './components/IndustriesWeServe';
import SafetyExcellence from './components/SafetyExcellence';
import ProjectsSection from './components/ProjectsSection';
import WhyMfav from './components/WhyMfav';
import ConsultationModal from './components/ConsultationModal';
import ServiceModal from './components/ServiceModal';
import Footer from './components/Footer';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleOpenConsultation = () => {
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
  };

  const handleSelectServiceOrDivision = (item) => {
    setSelectedService(item);
  };

  const handleCloseServiceModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-c-bg text-c-on selection:bg-c-primary-bg selection:text-white">
      {/* 1. Header Navigation */}
      <Header onRequestConsultation={handleOpenConsultation} />

      {/* Main Content Sections */}
      <main>
        {/* 2. Hero */}
        <Hero onRequestConsultation={handleOpenConsultation} />

        {/* 3. Who We Are */}
        <WhoWeAre />

        {/* 4. Capabilities (6 Divisions) */}
        <Capabilities onSelectDivision={handleSelectServiceOrDivision} />

        {/* 5. Key Statistics */}
        <KeyStats />

        {/* 6. Featured Services */}
        <FeaturedServices onSelectService={handleSelectServiceOrDivision} />

        {/* 7. Industries We Serve */}
        <IndustriesWeServe />

        {/* 8. Safety & Operational Excellence */}
        <SafetyExcellence />

        {/* 9. Projects / Operations */}
        <ProjectsSection onSelectProject={handleSelectServiceOrDivision} />

        {/* 10. Why MFAV */}
        <WhyMfav />
      </main>

      {/* 11 & 12. Final CTA & Footer */}
      <Footer onRequestConsultation={handleOpenConsultation} />

      {/* Interactive Modals */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
      />

      <ServiceModal
        item={selectedService}
        onClose={handleCloseServiceModal}
        onRequestConsultation={handleOpenConsultation}
      />
    </div>
  );
}
