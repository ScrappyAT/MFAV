import React from 'react';
import Tag from './Tag';

/**
 * ProjectCard — image, title, sector Tag, location, short description.
 * Phase 3d/5d content is explicit placeholder data passed in via props —
 * this component only owns structure and states.
 */
export default function ProjectCard({ image, imageAlt, sector, title, location, description, graded = false, className = '' }) {
  return (
    <article
      className={[
        'group flex flex-col overflow-hidden rounded-token border border-c-border bg-c-surface',
        'transition-colors duration-320 ease-standard hover:border-c-border-hl',
        className,
      ].join(' ')}
    >
      <div className="relative aspect-4/3 overflow-hidden">
        <img
          src={image}
          alt={imageAlt || ''}
          loading="lazy"
          className={[
            'h-full w-full object-cover transition-transform duration-320 ease-standard group-hover:scale-105',
            graded && 'grade-cool',
          ].filter(Boolean).join(' ')}
        />
        {graded && <div aria-hidden="true" className="grade-cool-tint absolute inset-0" />}
        <div aria-hidden="true" className="absolute inset-0 bg-c-scrim/30" />
        {sector && <Tag className="absolute left-4 top-4 bg-c-bg/90">{sector}</Tag>}
      </div>
      <div className="flex flex-col gap-2 p-6">
        <h3 className="text-lg font-bold text-c-on">{title}</h3>
        {location && <p className="text-sm text-c-on-muted">{location}</p>}
        {description && <p className="text-sm text-c-on-muted leading-relaxed">{description}</p>}
      </div>
    </article>
  );
}
