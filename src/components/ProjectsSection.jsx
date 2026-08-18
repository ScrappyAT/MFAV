import React from 'react';
import { ArrowUpRight, ShieldCheck, Compass, Anchor, Zap } from 'lucide-react';

export default function ProjectsSection({ onSelectProject }) {
  const projects = [
    {
      id: 'project-alpha',
      title: 'Project Alpha',
      category: 'MARINE LOGISTICS',
      description: 'Offshore platform supply vessel chartering and journey management for deepwater energy operations.',
      image: '/assets/images/hero_offshore.svg',
      specs: 'Deepwater OSV Deployment • 100% On-Time Delivery'
    },
    {
      id: 'project-beta',
      title: 'Project Beta',
      category: 'ENERGY INFRASTRUCTURE',
      description: 'Subsea pipeline installation, engineering maintenance, and structural corrosion testing.',
      image: '/assets/images/who_we_are_plant.svg',
      specs: 'Subsea Installation • Precision Engineering'
    },
    {
      id: 'project-gamma',
      title: 'Project Gamma',
      category: 'AVIATION SUPPORT',
      description: 'Executive aircraft charter dispatch and rotary wing crew transfers for remote site operations.',
      image: '/assets/images/division_aviation.svg',
      specs: 'Twin-Engine Rotary Transport • 24/7 Medevac Standby'
    },
    {
      id: 'project-delta',
      title: 'Project Delta',
      category: 'HEAVY HAULAGE',
      description: 'Breakbulk machinery haulage and port-to-site equipment supply chain management.',
      image: '/assets/images/division_logistics.svg',
      specs: 'Intermodal Freight • Heavy Industrial Gear'
    },
  ];

  return (
    <section id="projects" className="mfav-section bg-c-bg border-b border-c-border/30">
      <div className="mfav-container">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="section-tag">PORTFOLIO</span>
            <h2 className="section-title mb-0">EXPERIENCE IN MOTION</h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-c-primary uppercase tracking-wider">
            <span>Verified Operational History</span>
            <ShieldCheck size={16} className="text-c-teal" />
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group relative h-96 rounded-lg overflow-hidden border border-c-border bg-c-surface cursor-pointer transition-all duration-500 hover:border-c-teal hover:shadow-2xl flex flex-col justify-end p-6 md:p-8"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 filter brightness-50 contrast-125"
                />
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(180deg, rgba(18, 19, 24, 0.2) 0%, rgba(18, 19, 24, 0.7) 50%, rgba(18, 19, 24, 0.98) 100%)'
                  }}
                />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="text-[11px] font-bold tracking-widest text-c-ondark-teal uppercase mb-1">
                  {project.category}
                </div>

                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2 group-hover:text-c-ondark-primary transition-colors flex items-center justify-between">
                  {project.title}
                  <ArrowUpRight size={22} className="text-c-ondark-teal transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </h3>

                <p className="text-xs md:text-sm text-c-ondark/75 line-clamp-2 leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="inline-block text-[11px] text-c-ondark-primary bg-black/40 backdrop-blur-md px-3 py-1 rounded border border-white/10 font-mono">
                  {project.specs}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
