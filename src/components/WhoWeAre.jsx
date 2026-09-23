import React from 'react';
import TextLink from './ui/TextLink';
import { useInView, revealClass } from '../hooks/useInView';

/**
 * About / company introduction — A6 §2c. Split screen, full-bleed image
 * on one side, content on the other. Copy: two to three short paragraphs,
 * agent-authored (logged below for COPY-FOR-REVIEW.md), no unverifiable
 * size/history claims.
 */
export default function WhoWeAre() {
  const [ref, inView] = useInView();

  return (
    <section id="about" className="scroll-mt-24 bg-c-bg-alt">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image side — full-bleed to the viewport edge, not inset */}
        <div ref={ref} className="relative min-h-96 lg:min-h-full overflow-hidden order-2 lg:order-1">
          <img
            src="/assets/images/who_we_are_plant.gif"
            alt="Industrial plant at dusk"
            loading="lazy"
            className={['absolute inset-0 h-full w-full object-cover reveal-image', inView && 'is-visible'].filter(Boolean).join(' ')}
          />
        </div>

        {/* Text side — same `inView` trigger as the image opposite it, so
            both sides of the split screen settle in together. */}
        <div className="order-1 lg:order-2 py-section-sm md:py-section flex items-center px-6 md:px-10 lg:px-16">
          <div className={['max-w-measure border-l-2 border-c-primary pl-6', revealClass(inView)].join(' ')}>
            <h2 className="text-display-sm md:text-display text-c-on mb-6">
              One partner for the moving parts.
            </h2>
            <div className="flex flex-col gap-4 text-c-on-muted leading-relaxed">
              <p>Moving people, vessels, equipment and materials takes coordination. M-FAV brings specialist services together so clients can plan connected scopes through one point of contact.</p>
              <p>Our six divisions span marine and offshore operations, aviation, energy and infrastructure, logistics and haulage, equipment and PPE, and property and investment.</p>
              <p>Safety, clear responsibilities and transparent communication guide how we approach each engagement.</p>
            </div>
            <div className="mt-8">
              <TextLink to="/about" standalone>
                Discover M-FAV
              </TextLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
