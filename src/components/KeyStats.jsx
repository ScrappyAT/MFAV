import React from 'react';

export default function KeyStats() {
  const stats = [
    {
      value: '10+',
      label: 'Sectors Supported',
      sub: 'Marine, Aviation, Energy & Infra'
    },
    {
      value: '24/7',
      label: 'Operational Support',
      sub: 'Continuous Journey Management'
    },
    {
      value: '100%',
      label: 'Safety Commitment',
      sub: 'Strict HSE Standard Protocols'
    },
    {
      value: 'GLOBAL',
      label: 'Logistics Reach',
      sub: 'Intermodal Supply Network'
    },
  ];

  return (
    <section className="bg-c-bg-alt border-y border-c-border/40 py-12 relative overflow-hidden">
      {/* Background Accent Grid */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--clr-primary-bg) 1px, transparent 1px), linear-gradient(90deg, var(--clr-primary-bg) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="mfav-container relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 text-center">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center justify-center p-4 border-r last:border-r-0 border-c-border/30"
            >
              <span className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-1 font-mono">
                <span style={{ color: idx % 2 === 0 ? 'var(--clr-on-surface)' : 'var(--clr-teal)' }}>{stat.value}</span>
              </span>
              <span className="text-xs md:text-sm font-bold text-c-on uppercase tracking-wider mb-1">
                {stat.label}
              </span>
              <span className="text-[11px] text-c-muted/70 font-normal max-w-[180px]">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
