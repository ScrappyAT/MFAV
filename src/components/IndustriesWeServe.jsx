import React from 'react';
import { Flame, Anchor, Zap, Plane, HardHat, Building2, Truck, Factory } from 'lucide-react';

export default function IndustriesWeServe() {
  const industries = [
    { name: 'Oil & Gas', icon: Flame, tag: 'Upstream / Downstream' },
    { name: 'Maritime', icon: Anchor, tag: 'Commercial Shipping' },
    { name: 'Energy', icon: Zap, tag: 'Power Generation & Grids' },
    { name: 'Aviation', icon: Plane, tag: 'Commercial & Offshore Flight' },
    { name: 'Construction', icon: HardHat, tag: 'Civil & Heavy Engineering' },
    { name: 'Infrastructure', icon: Building2, tag: 'Utilities & Ports' },
    { name: 'Logistics', icon: Truck, tag: 'Supply Chain Transit' },
    { name: 'Industrial Operations', icon: Factory, tag: 'Refineries & Plants' },
  ];

  return (
    <section id="industries" className="mfav-section bg-c-bg border-b border-c-border/30">
      <div className="mfav-container">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="section-tag">SECTORS</span>
          <h2 className="section-title">Industries We Serve</h2>
          <p className="section-description mx-auto text-sm md:text-base">
            Providing tailored operational framework and support across global heavy industry domains.
          </p>
        </div>

        {/* 4x2 Grid of Industry Cards matching reference layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((ind, idx) => {
            const IconComp = ind.icon;
            return (
              <div
                key={idx}
                className="group p-5 rounded-lg bg-c-surface border border-c-border/40 hover:border-c-primary transition-all duration-300 flex flex-col items-center justify-center text-center cursor-default hover:bg-c-surface-high"
              >
                <div className="w-12 h-12 rounded-full bg-c-bg border border-c-border/60 flex items-center justify-center text-c-primary group-hover:text-c-primary group-hover:border-c-primary transition-colors mb-3">
                  <IconComp size={22} />
                </div>
                <h3 className="text-sm md:text-base font-bold text-c-on mb-1 group-hover:text-c-primary transition-colors">
                  {ind.name}
                </h3>
                <span className="text-[10px] text-c-muted/70 font-medium">
                  {ind.tag}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
