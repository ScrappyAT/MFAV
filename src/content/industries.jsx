// Shared industries data — the single source for both the homepage
// "Industries We Serve" tiles (Phase 3b) and the full /industries page
// (Phase 5c), so the eight sectors, their marks and their one-line
// relevance copy never drift out of sync between the two. `detail` and
// `divisions` are Phase 5c additions only used by the full page.
//
// Marks are custom inline SVG — a geometric line motif, not a downloaded
// icon set (A3 §3b). `relevance` and `detail` are agent-authored copy
// (A7), logged for COPY-FOR-REVIEW.md.
import React from 'react';

const marks = {
  oilGas: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M16 4v10" /><path d="M10 14h12l3 14H7z" /><path d="M13 20h6" />
    </svg>
  ),
  maritime: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 22h20l-3 6H9z" /><path d="M16 4v16" /><path d="M16 8l7 4-7 3z" />
    </svg>
  ),
  energy: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M18 4 8 18h7l-2 10 11-15h-7z" strokeLinejoin="round" />
    </svg>
  ),
  aviation: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M16 5v22" /><path d="M4 14l24 4" /><path d="M11 27h10" />
    </svg>
  ),
  construction: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 27 20 12" /><path d="M17 9l6 6-3 3-6-6z" /><path d="M6 26h6" />
    </svg>
  ),
  infrastructure: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="16" cy="16" r="11" /><path d="M5 16h22" /><path d="M16 5v22" />
    </svg>
  ),
  logistics: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="5" y="12" width="14" height="10" /><path d="M19 15h5l3 4v3h-8z" />
      <circle cx="11" cy="25" r="2" /><circle cx="23" cy="25" r="2" />
    </svg>
  ),
  industrial: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 26V15l6 4v-4l6 4v-4l6 4v7z" strokeLinejoin="round" />
      <path d="M6 26h20" />
    </svg>
  ),
};

export const INDUSTRIES = [
  {
    name: 'Oil & Gas',
    mark: marks.oilGas,
    relevance: 'Offshore support, procurement and logistics for upstream operations.',
    detail: 'Upstream and midstream operations run on vessel availability, pipeline integrity and equipment that meets specification the first time. M-FAV supports oil & gas operators with vessel chartering and marine operations for platform supply, pipeline installation and maintenance for flowlines and infrastructure, and the equipment and PPE crews need to work safely on site.',
    divisions: ['marine-offshore', 'energy-infrastructure', 'equipment-ppe'],
  },
  {
    name: 'Maritime',
    mark: marks.maritime,
    relevance: 'Vessel management, chartering and marine support services.',
    detail: 'Commercial shipping and marine operators need vessel access that matches the job, not a fixed fleet, plus the marine-rated equipment and crew transfer support to keep a vessel working. M-FAV covers vessel chartering and marine support directly, with aviation crew transfer and marine-rated equipment supply alongside it.',
    divisions: ['marine-offshore', 'equipment-ppe', 'aviation'],
  },
  {
    name: 'Energy',
    mark: marks.energy,
    relevance: 'Infrastructure, equipment and technical support for energy assets.',
    detail: 'Power generation and distribution projects depend on infrastructure that is installed to specification and maintained through its working life. M-FAV supports energy operators with pipeline and industrial infrastructure work, marine transport for equipment and personnel, and the equipment and PPE supply that keeps technical teams working safely.',
    divisions: ['energy-infrastructure', 'marine-offshore', 'equipment-ppe'],
  },
  {
    name: 'Aviation',
    mark: marks.aviation,
    relevance: 'Charter and aircraft services for crew and executive movement.',
    detail: 'Time-critical travel for crew, executives and cargo doesn’t run on a scheduled-airline timetable. M-FAV’s aviation division covers private jet and helicopter charter, crew rotation and journey management, coordinated where needed with marine operations for offshore crew transfer.',
    divisions: ['aviation', 'marine-offshore'],
  },
  {
    name: 'Construction',
    mark: marks.construction,
    relevance: 'Plant movement, equipment supply and site logistics.',
    detail: 'Civil works move on the availability of heavy equipment, haulage capacity and materials arriving on schedule. M-FAV supports construction operators with abnormal-load haulage and equipment transportation, industrial equipment and PPE supply, and infrastructure work where a build touches pipeline or plant.',
    divisions: ['logistics-haulage', 'equipment-ppe', 'energy-infrastructure'],
  },
  {
    name: 'Infrastructure',
    mark: marks.infrastructure,
    relevance: 'Pipeline and industrial infrastructure delivery and maintenance.',
    detail: 'Pipeline, port and industrial infrastructure projects need installation, ongoing maintenance and the logistics to move equipment and materials to site. M-FAV covers the technical infrastructure work directly, with haulage and logistics support for site mobilisation and property expertise where the project involves port-adjacent land.',
    divisions: ['energy-infrastructure', 'logistics-haulage', 'property-investment'],
  },
  {
    name: 'Logistics',
    mark: marks.logistics,
    relevance: 'Haulage, equipment transportation and journey management.',
    detail: 'Supply chains that depend on heavy or abnormal loads need route planning, permits and journey management handled before the load moves, not during. M-FAV’s logistics & haulage division covers this end to end, with property and investment support where a supply chain needs port-adjacent facilities.',
    divisions: ['logistics-haulage', 'property-investment'],
  },
  {
    name: 'Industrial Operations',
    mark: marks.industrial,
    relevance: 'Protective equipment, consumables and technical procurement.',
    detail: 'Plant and refinery operations depend on a steady supply of certified equipment and PPE, technical infrastructure support, and logistics that get materials to site without disrupting the operation. M-FAV brings these three together for industrial operators working under continuous production pressure.',
    divisions: ['equipment-ppe', 'energy-infrastructure', 'logistics-haulage'],
  },
];
