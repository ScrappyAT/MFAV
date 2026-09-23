# Website refresh ? 22 September 2026

Updated the homepage opening, six division cards, company introduction and enquiry guide. Removed the repeated featured-service grid and numerical marketing band from the homepage. Existing inner-page factual copy, division routes, brand colours, solid header and black footer are retained.

Shared improvements: calmer sentence-case buttons, balanced headings, 48px header CTA, callable footer phones and email, responsive closing CTA, mobile client-logo grid. Service pages now have a distinct key-facts panel and carry the selected service into Contact.

Contact is still a preview, with no backend. It now states that clearly, provides direct email/phone links and does not log personal details or claim delivery. Integration requires a selected delivery provider.

New copy is proposed editorial text; no new certifications, projects, client relationships or response-time promises were added. Existing client logos remain as supplied in the current implementation. Historical placeholder and approval documents contain stale notes and should not be treated as a current inventory.

New layout rules: home header clearance 100px, hero photo minimum height 28rem (20rem small mobile / 40rem desktop), desktop copy width 720px and right inset 3rem. Shared display heading is now 3rem; palette, hero scale and motion tokens unchanged.

## Verification

Production build and token check passed. Token checker now excludes the explicitly named PLACEHOLDER and VERIFY editorial markers; arbitrary CSS declarations remain checked. Checked 13 public routes at 390px and 1440px: one H1 per route and no document horizontal overflow. Visually inspected homepage, division grid and mobile service hero. Mobile menu opens and closes; service selection carries into Contact. Empty form reports three errors and focuses Full Name; a filled preview displays No enquiry sent. No delivery backend, Lighthouse audit or deployment was performed. Build used the existing Vite configuration loaded directly because the sandbox prevented its default config-bundling step.

User review correction: the hero photograph now appears behind its text below 1024px instead of stacking below it. Client logos use the previous arc composition at every width; narrow phones can scroll the arc region horizontally. Verified the hero and arcs visually at 762px. Build and token checks pass.


Desktop review and items 4/8: replaced the split homepage hero with one full-width photograph at every breakpoint, using the shared Container alignment. Added subject-specific crops and removed the redundant cool filter from neutral marine imagery. About uses marine imagery and Industries uses industrial imagery to reduce sunset reuse. Existing project photographs are retained; actual M-FAV photography has not been supplied. About now contains operating model, governance and careers from Company, with section navigation. Duplicate Company navigation removed; /company redirects to /about and retains the hash/query.

User-requested restoration: Contact.jsx restored exactly from the original Git HEAD version, including its original submit button and demonstration handler. Original consultation labels restored per placement: Request a Consultation in navigation and service pages, Contact Us in the hero, Start a Conversation in the closing band. Footer Careers link removed. Original closing band restored on Contact. Backend integration remains pending.
