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
    detail: 'Upstream operations depend on continuity: vessels on station, fuel delivered, crews rotated, equipment certified and on site. M-FAV supports operators and contractors across offshore marine operations, security escort, offshore AGO supply, PPE and technical procurement, and pipeline scopes. Our work sits in the support layer that determines whether the production programme holds its schedule.',
    divisions: ['marine-offshore', 'energy-infrastructure', 'equipment-ppe'],
  },
  {
    name: 'Maritime',
    mark: marks.maritime,
    relevance: 'Vessel management, chartering and marine support services.',
    detail: 'Vessel operators need craft that are available, certified and correctly crewed. We provide vessel management and chartering across FSIVs, AHVs, PSVs and specialised assets, alongside marine equipment supply and offshore chandling.',
    divisions: ['marine-offshore', 'equipment-ppe'],
  },
  {
    name: 'Energy',
    mark: marks.energy,
    relevance: 'Infrastructure, equipment and technical support for energy assets.',
    detail: 'Energy assets require infrastructure delivery, maintenance support and a reliable supply chain across long asset lives. We support pipeline and infrastructure scopes, technical services, and the logistics that keep remote energy sites supplied.',
    divisions: ['energy-infrastructure', 'logistics-haulage', 'marine-offshore'],
  },
  {
    name: 'Aviation',
    mark: marks.aviation,
    relevance: 'Charter and aircraft services for crew and executive movement.',
    detail: 'Operational aviation runs to shift patterns and weather windows rather than published timetables. We arrange fixed-wing and rotary charter for crew rotation, executive movement and site access, and support helicopter acquisition and disposal.',
    divisions: ['aviation', 'logistics-haulage'],
  },
  {
    name: 'Construction',
    mark: marks.construction,
    relevance: 'Plant movement, equipment supply and site logistics.',
    detail: 'Construction programmes are held up by plant that has not arrived and crews without compliant PPE. We move heavy plant and project cargo, supply protective equipment and consumables, and support site infrastructure scopes.',
    divisions: ['logistics-haulage', 'equipment-ppe', 'energy-infrastructure'],
  },
  {
    name: 'Infrastructure',
    mark: marks.infrastructure,
    relevance: 'Pipeline and industrial infrastructure delivery and maintenance.',
    detail: 'Infrastructure delivery demands precision execution and documentation that survives review. We deliver pipeline installation and maintenance, cable laying and industrial infrastructure scopes, supported by DP2-capable marine assets where the work is offshore.',
    divisions: ['energy-infrastructure', 'marine-offshore', 'logistics-haulage'],
  },
  {
    name: 'Logistics',
    mark: marks.logistics,
    relevance: 'Haulage, equipment transportation and journey management.',
    detail: 'Moving cargo across Nigeria is a security and compliance exercise as much as a transport one. We provide tracked haulage, equipment transportation, offshore supply and journey management for personnel, with route and security assessment before every movement.',
    divisions: ['logistics-haulage', 'marine-offshore'],
  },
  {
    name: 'Industrial Operations',
    mark: marks.industrial,
    relevance: 'Protective equipment, consumables and technical procurement.',
    detail: 'Continuous industrial operations need consumables, spares and protective equipment delivered before they run out. We supply PPE, locally manufactured workwear, industrial supplies and technical equipment on scheduled replenishment.',
    divisions: ['equipment-ppe', 'logistics-haulage'],
  },
];
