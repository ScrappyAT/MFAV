import React from 'react';
import Container from './ui/Container';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import TextLink from './ui/TextLink';
const STEPS = [
  ['Define the scope', 'Tell us the service you need, the work involved and any equipment or personnel requirements.'],
  ['Share the location and timing', 'Include the operating location, target start date and key delivery milestones.'],
  ['Discuss the requirements', 'Talk through the relevant capabilities, documentation and next steps with our team.'],
];
export default function EnquiryGuide() {
  return <Section tone="surface"><Container>
    <SectionHeader heading="Start with your operation." supporting="A useful conversation begins with a clear brief. Here is what to share when you get in touch." action={<TextLink to="/contact" standalone>Discuss your requirements</TextLink>} />
    <div className="grid md:grid-cols-3 gap-8 md:gap-12">{STEPS.map(([title,body],i) => <div key={title} className="border-t border-c-border pt-6"><span className="text-eyebrow text-c-primary">{String(i+1).padStart(2,'0')}</span><h3 className="text-xl font-semibold mt-5 mb-3">{title}</h3><p className="text-c-on-muted">{body}</p></div>)}</div>
  </Container></Section>;
}
