import React, { useState } from 'react';
import {
  Anchor, Plane, Compass, Wrench, Shield, Truck, HardHat, Building,
  ArrowRight, ArrowUpRight, Activity, CheckCircle2
} from 'lucide-react';

export default function FeaturedServices({ onSelectService }) {
  const [activeTab, setActiveTab] = useState('all');

  const services = [
    {
      id: 'offshore-marine',
      title: 'Offshore Marine Operations',
      category: 'marine',
      icon: Anchor,
      short: 'Comprehensive vessel support, crew transfers, and platform operational services.',
      fullDesc: 'MFAV delivers offshore marine support tailored to deepwater rigs, FPSOs, and marine infrastructure. Our services include crew transfer operations, platform supply support, and offshore logistics coordination with safety standards.'
    },
    {
      id: 'vessel-chartering',
      title: 'Vessel Chartering',
      category: 'marine',
      icon: Compass,
      short: 'Flexible chartering solutions for OSVs, tugs, barges, and specialized maritime vessels.',
      fullDesc: 'We provide vessel chartering solutions connecting energy companies with modern Offshore Supply Vessels (OSVs), Anchor Handling Tug Supply (AHTS) vessels, and utility crafts designed for marine projects.'
    },
    {
      id: 'journey-management',
      title: 'Journey Management',
      category: 'aviation',
      icon: Activity,
      short: 'Structured end-to-end travel protocols and real-time security tracking for personnel.',
      fullDesc: 'Rigorous journey management protocols designed to safeguard personnel traveling across remote offshore sites, air routes, and transit corridors with 24/7 monitoring and emergency response planning.'
    },
    {
      id: 'private-jet',
      title: 'Private Jet Services',
      category: 'aviation',
      icon: Plane,
      short: 'Executive air transport tailored for corporate leadership and urgent executive dispatch.',
      fullDesc: 'On-demand private jet chartering offering speed, privacy, and international reach for corporate executives, project leads, and emergency technical teams requiring direct air access.'
    },
    {
      id: 'helicopter-services',
      title: 'Helicopter Services',
      category: 'aviation',
      icon: Plane,
      short: 'Offshore rig crew shuttle, medical evacuations, and heavy-lift aerial operations.',
      fullDesc: 'Dedicated twin-engine helicopter chartering and aerial support for offshore platform transfers, medevac readiness, and remote aerial site inspections.'
    },
    {
      id: 'helicopter-sales',
      title: 'Purchase & Sale of Helicopters',
      category: 'aviation',
      icon: Plane,
      short: 'Aviation asset brokerage, procurement consulting, and fleet advisory services.',
      fullDesc: 'Technical advisory and brokerage services facilitating the acquisition, inspection, structural auditing, and sale of commercial and rotary aircraft for industrial operators.'
    },
    {
      id: 'pipeline-maintenance',
      title: 'Pipeline Installation & Maintenance',
      category: 'energy',
      icon: Wrench,
      short: 'Subsea and onshore pipeline engineering, integrity testing, and corrosion control.',
      fullDesc: 'Specialized pipeline installation, hydro-testing, cathodic protection, and ongoing maintenance for oil, gas, and utility distribution networks.'
    },
    {
      id: 'haulage-services',
      title: 'Haulage Services',
      category: 'logistics',
      icon: Truck,
      short: 'Heavy-duty freight transit, breakbulk cargo haulage, and site-to-site supply chain management.',
      fullDesc: 'Fleet haulage capabilities optimized for oversized machinery, pipe racks, containerized cargo, and industrial supplies transported under highway and off-road conditions.'
    },
    {
      id: 'equipment-supply',
      title: 'Equipment Supply',
      category: 'equipment',
      icon: Wrench,
      short: 'Procurement of certified industrial machinery, generators, pumps, and specialized tools.',
      fullDesc: 'Direct supply of industrial machinery, power generators, high-pressure pumps, welding systems, and rental equipment sourced from certified original equipment manufacturers (OEMs).'
    },
    {
      id: 'ppe-supply',
      title: 'Personal Protective Equipment',
      category: 'equipment',
      icon: HardHat,
      short: 'Certified PPE gear, offshore survival suits, safety helmets, and protective wear.',
      fullDesc: 'Supply of certified safety gear including offshore survival suits, flame-resistant apparel, fall arrest harnesses, respirators, and protective boots engineered for hazardous workplaces.'
    },
    {
      id: 'marine-support',
      title: 'Marine & Industrial Support',
      category: 'marine',
      icon: Anchor,
      short: 'Port agency support, chandlery, bunkering coordination, and technical repair assistance.',
      fullDesc: 'Full-service port agency coordination, vessel bunkering logistics, marine crew welfare, and industrial repair support for maritime fleets.'
    },
    {
      id: 'property-services',
      title: 'Property & Investment Services',
      category: 'property',
      icon: Building,
      short: 'Industrial property acquisition, estate management, and commercial asset investment.',
      fullDesc: 'Strategic industrial real estate development, logistics hub acquisitions, commercial property management, and long-term asset value enhancement.'
    },
  ];

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'marine', label: 'Marine & Offshore' },
    { id: 'aviation', label: 'Aviation & Journey' },
    { id: 'energy', label: 'Energy & Pipelines' },
    { id: 'logistics', label: 'Haulage & Logistics' },
    { id: 'equipment', label: 'Equipment & PPE' },
    { id: 'property', label: 'Property & Assets' },
  ];

  const filteredServices = activeTab === 'all'
    ? services
    : services.filter(s => s.category === activeTab);

  return (
    <section id="services" className="mfav-section bg-c-bg border-b border-c-border/30">
      <div className="mfav-container">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="section-tag">SERVICES IN DETAIL</span>
          <h2 className="section-title">Featured Services & Solutions</h2>
          <p className="section-description mx-auto">
            Comprehensive industrial and offshore capabilities tailored for high-stakes environments.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded text-xs md:text-sm font-semibold transition-all duration-200 ${
                activeTab === cat.id
                  ? 'bg-c-primary-bg text-white border border-c-primary/40 shadow-lg'
                  : 'bg-c-surface text-c-muted border border-c-border/40 hover:border-c-border-hl hover:text-c-on'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const IconComp = service.icon;
            return (
              <div
                key={service.id}
                onClick={() => onSelectService(service)}
                className="industrial-card p-6 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Icon & Category Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded bg-c-primary-bg/30 border border-c-primary/20 flex items-center justify-center text-c-teal group-hover:bg-c-primary-bg group-hover:text-white transition-colors">
                      <IconComp size={20} />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-c-primary bg-c-bg px-2 py-0.5 rounded border border-c-border/40">
                      {service.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-c-on mb-2 group-hover:text-c-teal transition-colors flex items-center justify-between">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs text-c-muted leading-relaxed mb-6">
                    {service.short}
                  </p>
                </div>

                {/* View Details Link */}
                <div className="pt-4 border-t border-c-border/30 flex items-center justify-between text-xs text-c-primary font-semibold group-hover:text-c-primary-bg transition-colors">
                  <span>View Full Details</span>
                  <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
