import React from 'react';
import { Layers, Clock, ShieldCheck, Award, Headset, CheckCircle2 } from 'lucide-react';

export default function WhyMfav() {
  const pillars = [
    {
      title: 'Integrated Capabilities',
      description: 'Unified execution across marine, aviation, energy, logistics, equipment, and real estate.',
      icon: Layers
    },
    {
      title: 'Operational Reliability',
      description: 'Proven track record of maintaining project timelines and supply chain continuity.',
      icon: Clock
    },
    {
      title: 'Safety First',
      description: 'Strict adherence to international HSE benchmarks, regulatory compliance, and risk controls.',
      icon: ShieldCheck
    },
    {
      title: 'Industry Expertise',
      description: 'Skilled technical personnel and specialized assets deployed for high-stakes projects.',
      icon: Award
    },
    {
      title: 'Responsive Support',
      description: '24/7 journey management, dispatch response, and active client communication.',
      icon: Headset
    },
    {
      title: 'Quality & Compliance',
      description: 'Rigorous quality assurance, certified equipment standards, and transparent governance.',
      icon: CheckCircle2
    },
  ];

  return (
    <section className="mfav-section bg-c-bg border-b border-c-border/30">
      <div className="mfav-container">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-tag">VALUE PROPOSITION</span>
          <h2 className="section-title">Why MFAV</h2>
          <p className="section-description mx-auto text-sm md:text-base">
            Engineered to deliver seamless execution, maximum safety, and operational excellence for multi-sector enterprises.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <div
                key={idx}
                className="industrial-card p-6 flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-full bg-c-primary-bg/30 border border-c-primary/20 flex items-center justify-center text-c-teal group-hover:bg-c-primary-bg group-hover:text-white transition-all duration-300 mb-5">
                  <IconComp size={24} />
                </div>
                <h3 className="text-lg font-bold text-c-on mb-2 group-hover:text-c-teal transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs text-c-muted leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
