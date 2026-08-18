import React from 'react';
import { Anchor, Plane, Zap, Truck, ShieldAlert, Building2, ArrowUpRight } from 'lucide-react';

export default function Capabilities({ onSelectDivision }) {
  const divisions = [
    {
      id: 'marine',
      title: 'Marine & Offshore',
      description: 'Offshore vessel chartering, platform operational support, and maritime logistics for demanding sea environments.',
      icon: Anchor,
      image: '/assets/images/hero_offshore.svg',
      badge: 'Marine Operations'
    },
    {
      id: 'aviation',
      title: 'Aviation Support',
      description: 'Private jet charters, offshore helicopter operations, aircraft purchase & sale, and specialized crew journey management.',
      icon: Plane,
      image: '/assets/images/division_aviation.svg',
      badge: 'Air Transport'
    },
    {
      id: 'energy',
      title: 'Energy & Infrastructure',
      description: 'Pipeline installation, subsea & onshore maintenance, engineering support, and energy infrastructure construction.',
      icon: Zap,
      image: '/assets/images/who_we_are_plant.svg',
      badge: 'Industrial Energy'
    },
    {
      id: 'logistics',
      title: 'Logistics & Haulage',
      description: 'Heavy materials haulage, end-to-end supply chain logistics, equipment transport, and port-to-site journey management.',
      icon: Truck,
      image: '/assets/images/division_logistics.svg',
      badge: 'Heavy Freight'
    },
    {
      id: 'equipment',
      title: 'Equipment & PPE',
      description: 'Supply of high-grade industrial machinery, specialized tools, certified personal protective equipment (PPE), and safety gear.',
      icon: ShieldAlert,
      image: '/assets/images/division_equipment.svg',
      badge: 'Safety Gear'
    },
    {
      id: 'property',
      title: 'Property & Investment',
      description: 'Strategic commercial real estate development, industrial asset acquisition, facilities management, and property investment.',
      icon: Building2,
      image: '/assets/images/division_property.svg',
      badge: 'Asset Management'
    },
  ];

  return (
    <section id="divisions" className="mfav-section bg-c-bg border-b border-c-border/30">
      <div className="mfav-container">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="section-tag">OUR CAPABILITIES</span>
            <h2 className="section-title mb-0">Core Operational Divisions</h2>
          </div>
          <p className="section-description text-sm md:text-base">
            MFAV operates through six specialized divisions designed to deliver scalable, integrated solutions for industrial and offshore challenges.
          </p>
        </div>

        {/* 3x2 Grid of Division Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {divisions.map((div) => {
            const IconComponent = div.icon;
            return (
              <div
                key={div.id}
                onClick={() => onSelectDivision(div)}
                className="group relative h-80 rounded-lg overflow-hidden border border-c-border cursor-pointer transition-all duration-300 hover:border-c-teal hover:shadow-2xl flex flex-col justify-between p-6 bg-c-surface-low"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={div.image}
                    alt={div.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700 filter brightness-40 contrast-125"
                  />
                  {/* Dark Gradient Overlay matching reference image */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(180deg, rgba(18, 19, 24, 0.4) 0%, rgba(18, 19, 24, 0.75) 50%, rgba(18, 19, 24, 0.95) 100%)'
                    }}
                  />
                </div>

                {/* Top Badge & Icon */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="w-10 h-10 rounded bg-c-primary-bg/80 backdrop-blur-md border border-c-ondark-primary/30 flex items-center justify-center text-c-ondark-teal">
                    <IconComponent size={20} />
                  </div>
                  <span className="text-[11px] font-semibold tracking-wider text-c-ondark-primary uppercase bg-black/40 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
                    {div.badge}
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-c-ondark-teal transition-colors flex items-center justify-between">
                    {div.title}
                    <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-c-ondark-teal" />
                  </h3>
                  <p className="text-xs text-c-ondark/75 line-clamp-2 leading-relaxed font-normal">
                    {div.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
