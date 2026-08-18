import React from 'react';
import { useParams } from 'react-router-dom';
import { DIVISIONS } from '../content/divisions';
import PagePlaceholder from './PagePlaceholder';
import NotFound from './NotFound';

/**
 * ServiceDetail — the one reusable route for all six division pages
 * (A5: /services/:slug). The real ServiceDetail template (hero, overview,
 * capabilities, process, benefits, industries, related services, CTA) is
 * Phase 4 work, driven from src/content/services.ts. For now this
 * confirms the slug resolves and shows a placeholder body.
 */
export default function ServiceDetail() {
  const { slug } = useParams();
  const division = DIVISIONS.find((d) => d.id === slug);

  if (!division) return <NotFound />;

  return (
    <PagePlaceholder
      eyebrow={division.name}
      title={division.name}
      note={`${division.blurb} Full division content (overview, capabilities, process, benefits) lands here in Phase 4.`}
    />
  );
}
