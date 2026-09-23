import React from 'react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { METADATA } from '../content/metadata';
import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';
import Capabilities from '../components/Capabilities';
import KeyStats from '../components/KeyStats';
import IndustriesWeServe from '../components/IndustriesWeServe';
import SafetyExcellence from '../components/SafetyExcellence';
import WhyMfav from '../components/WhyMfav';
import Partners from '../components/Partners';

export default function Home() {
  useDocumentMeta(METADATA.home.title, METADATA.home.description);

  return (
    <main>
      <Hero />
      <Capabilities />
      <WhoWeAre />
      <KeyStats />
      <IndustriesWeServe />
      <SafetyExcellence />
      <WhyMfav />
      <Partners />
    </main>
  );
}
