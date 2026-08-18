import React, { useState } from 'react';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import Grid from '../components/ui/Grid';
import Button from '../components/ui/Button';
import TextLink from '../components/ui/TextLink';
import Eyebrow from '../components/ui/Eyebrow';
import SectionHeader from '../components/ui/SectionHeader';
import Tag from '../components/ui/Tag';
import Stat from '../components/ui/Stat';
import ServiceCard from '../components/ui/ServiceCard';
import IndustryCard from '../components/ui/IndustryCard';
import ProjectCard from '../components/ui/ProjectCard';
import DivisionPanel from '../components/ui/DivisionPanel';
import Input from '../components/ui/Input';
import Textarea from '../components/ui/Textarea';
import Select from '../components/ui/Select';
import Checkbox from '../components/ui/Checkbox';

function Swatch({ label, hint }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-eyebrow uppercase text-c-on-muted">{label}</p>
      {hint}
    </div>
  );
}

function Block({ title, children }) {
  return (
    <div className="flex flex-col gap-4 border-b border-c-border pb-12">
      <h2 className="text-display-sm text-c-on">{title}</h2>
      {children}
    </div>
  );
}

const PLACEHOLDER_IMG =
  'data:image/svg+xml;charset=UTF-8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800"><rect width="100%" height="100%" fill="%232C4678"/></svg>'
  );

export default function Styleguide() {
  const [checked, setChecked] = useState(true);

  return (
    <main>
      <Section size="sm" tone="alt" border>
        <Container>
          <Eyebrow>Dev only</Eyebrow>
          <h1 className="text-display text-c-on mt-2">Styleguide</h1>
          <p className="mt-4 max-w-measure text-c-on-muted">
            Every primitive, in every state, rendered against the live tokens. Not a
            production route — not linked from navigation, not indexed.
          </p>
        </Container>
      </Section>

      <Section tone="base">
        <Container className="flex flex-col gap-16">
          {/* BUTTON */}
          <Block title="Button">
            <div className="flex flex-col gap-8">
              {['primary', 'secondary', 'ghost'].map((variant) => (
                <div key={variant} className="flex flex-col gap-3">
                  <p className="text-eyebrow uppercase text-c-on-muted">{variant}</p>
                  <div className="flex flex-wrap items-center gap-4">
                    <Button variant={variant} size="sm">Small</Button>
                    <Button variant={variant} size="md">Medium</Button>
                    <Button variant={variant} size="lg">Large</Button>
                    <Button variant={variant} trailingArrow>With arrow</Button>
                    <Button variant={variant} loading>Loading</Button>
                    <Button variant={variant} disabled>Disabled</Button>
                    <Button variant={variant} to="/styleguide">As link (to)</Button>
                  </div>
                </div>
              ))}
              <div className="flex flex-col gap-3 rounded-token bg-c-primary-bg p-8">
                <p className="text-eyebrow uppercase text-c-ondark-primary">onDark</p>
                <div className="flex flex-wrap items-center gap-4">
                  <Button variant="onDark" size="md">On dark</Button>
                  <Button variant="onDark" trailingArrow>With arrow</Button>
                  <Button variant="onDark" disabled>Disabled</Button>
                </div>
              </div>
              <p className="text-sm text-c-on-muted">
                Focus states: tab to each button above — a visible 2px accent outline
                should appear on every one.
              </p>
            </div>
          </Block>

          {/* TEXTLINK */}
          <Block title="TextLink">
            <div className="flex flex-wrap items-center gap-8">
              <TextLink href="#">Inline link</TextLink>
              <TextLink href="#" standalone>Learn more</TextLink>
              <div className="rounded-token bg-c-primary-bg p-6">
                <TextLink href="#" onDark standalone>Discover MFAV</TextLink>
              </div>
            </div>
          </Block>

          {/* EYEBROW + SECTIONHEADER */}
          <Block title="Eyebrow & SectionHeader">
            <div className="flex flex-col gap-4">
              <Eyebrow index="01">Our Capabilities</Eyebrow>
              <Eyebrow>No index numeral</Eyebrow>
            </div>
            <SectionHeader
              eyebrow="Our Capabilities"
              index="01"
              heading="Our Capabilities"
              supporting="From offshore operations and marine logistics to aviation, infrastructure and industrial supply, MFAV brings multiple capabilities together to support complex operations."
              action={<Button variant="secondary" size="sm">Action slot</Button>}
            />
            <SectionHeader
              align="center"
              eyebrow="Centered variant"
              heading="Industries We Serve"
              supporting="Used for scannable, non-hierarchical sections."
            />
          </Block>

          {/* TAG + STAT */}
          <Block title="Tag & Stat">
            <div className="flex flex-wrap items-center gap-3">
              <Tag>Marine Operations</Tag>
              <Tag>Offshore Support</Tag>
              <div className="rounded-token bg-c-primary-bg p-4">
                <Tag onDark>On dark</Tag>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 rounded-token bg-c-primary-bg p-8">
              <Stat value="10+" label="Service Capabilities" onDark />
              <Stat value="24/7" label="Operational Support" onDark />
              <Stat value="100%" label="Safety Commitment" onDark />
              <Stat value="Nigeria & Beyond" label="Operational Reach" onDark hairline={false} />
            </div>
          </Block>

          {/* CARDS */}
          <Block title="Card shells">
            <Grid cols={3}>
              <ServiceCard
                image={PLACEHOLDER_IMG}
                imageAlt=""
                title="Offshore Marine Operations"
                description="Vessel chartering and platform support for demanding sea environments."
                to="/services/marine-offshore"
              />
              <IndustryCard
                mark={<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="24" cy="24" r="18" /><path d="M6 24h36M24 6v36" /></svg>}
                name="Oil & Gas"
                relevance="Marine and logistics support across upstream and midstream operations."
              />
              <ProjectCard
                image={PLACEHOLDER_IMG}
                imageAlt=""
                sector="Marine Operations"
                title="[PROJECT TITLE PLACEHOLDER]"
                location="[LOCATION PLACEHOLDER]"
                description="Illustrative pending client content."
              />
            </Grid>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <DivisionPanel
                image={PLACEHOLDER_IMG}
                imageAlt=""
                title="Marine & Offshore"
                subCapabilities={['Offshore Marine Operations', 'Vessel Chartering', 'Marine Support', 'Journey Management']}
                to="/services/marine-offshore"
                spanClassName="md:col-span-2"
              />
              <DivisionPanel
                image={PLACEHOLDER_IMG}
                imageAlt=""
                title="Aviation"
                subCapabilities={['Private Jet Services', 'Charter Services']}
                to="/services/aviation"
              />
            </div>
            <p className="text-sm text-c-on-muted">
              Resize below 768px (or use a touch device) to confirm sub-capabilities
              stay visible without hovering.
            </p>
          </Block>

          {/* FORM CONTROLS */}
          <Block title="Form controls">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
              <Input id="sg-name" label="Full Name" required placeholder="e.g. John Doe" />
              <Input id="sg-error" label="Email" required error="Enter a valid email address." defaultValue="not-an-email" />
              <Select
                id="sg-select"
                label="Service of Interest"
                placeholder="Select a division"
                options={[
                  { value: 'marine-offshore', label: 'Marine & Offshore' },
                  { value: 'aviation', label: 'Aviation' },
                  { value: 'general', label: 'General Enquiry' },
                ]}
              />
              <Input id="sg-disabled" label="Disabled field" disabled defaultValue="Can't edit this" />
              <Textarea id="sg-message" label="Message" required className="md:col-span-2" placeholder="Outline your scope of work..." />
              <Checkbox
                id="sg-check"
                label="I'd like to receive occasional updates."
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                className="md:col-span-2"
              />
            </form>
            <p className="text-sm text-c-on-muted">
              Tab through the fields above — every one shows a visible focus ring; the
              email field demonstrates the error state with its message tied via
              aria-describedby.
            </p>
          </Block>
        </Container>
      </Section>
    </main>
  );
}
