import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { METADATA } from '../content/metadata';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';

const FAQS = [
  {
    question: 'What is a "division" at M-FAV?',
    answer:
      'A division is a dedicated service line within M-FAV. We operate six: Marine & Offshore, Aviation, Energy & Infrastructure, Logistics & Haulage, Equipment & PPE, and Property & Investment. Each holds its own operational leadership and technical capability, but shares commercial, HSE and quality functions across the group.',
  },
  {
    question: 'Can I engage more than one division on a single project?',
    answer:
      'Yes — and this is where the integrated model earns its place. You are assigned a single accountable contact who coordinates across whichever divisions your operation requires. This reduces interfaces and handover gaps, with one party answerable for delivery.',
  },
  {
    question: 'Where does M-FAV operate?',
    answer:
      'Our operational base is Nigeria and the wider Gulf of Guinea. We work in the waters and on the roads where conditions, security and regulation shape how work gets done.',
  },
  {
    question: 'What industries do you serve?',
    answer:
      'Our capabilities were built for oil and gas, maritime shipping, energy, aviation, construction, infrastructure, logistics and industrial operations. See our Industries page for the full breakdown of how each division maps to each sector.',
  },
  {
    question: 'How do I request a consultation?',
    answer:
      'Use the "Request a Consultation" button in the navigation or visit the Contact page. Tell us the scope, location and timeline, and the right person will come back to you — not a general acknowledgement.',
  },
  {
    question: 'How quickly do you respond to enquiries?',
    answer:
      'We respond to enquiries within one business day. For urgent operational matters, please call us directly — our phone numbers are listed on the Contact page and are monitored 24/7.',
  },
  {
    question: 'What is "Journey Management"?',
    answer:
      'Journey Management is the planning, monitoring and control of vehicle movements to manage route risks — including road conditions, security posture and weather. This service is provided by our Logistics & Haulage division.',
  },
  {
    question: 'Are your PPE and equipment supplies certified?',
    answer:
      'Equipment and materials are inspected against specification before delivery. Where a specification cannot be met, you are told before substitution — not after.',
  },
  {
    question: 'How do I apply for a role at M-FAV?',
    answer:
      'Send your CV and the role you are interested in to our support email. Full details are on the About page under the Careers section.',
  },
];

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  const id = question.replace(/\s+/g, '-').toLowerCase().slice(0, 40);

  return (
    <div className="border-t border-c-border">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={`faq-answer-${id}`}
        id={`faq-question-${id}`}
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-c-primary"
      >
        <span className="font-semibold text-c-on group-hover:text-c-primary-bg transition-colors duration-200 ease-standard">
          {question}
        </span>
        <ChevronDown
          size={20}
          aria-hidden="true"
          className={[
            'shrink-0 text-c-on-muted transition-transform duration-200 ease-standard',
            open && 'rotate-180',
          ]
            .filter(Boolean)
            .join(' ')}
        />
      </button>
      <div
        id={`faq-answer-${id}`}
        role="region"
        aria-labelledby={`faq-question-${id}`}
        hidden={!open}
        className="pb-5 text-c-on-muted leading-relaxed"
      >
        {answer}
      </div>
    </div>
  );
}

export default function FAQ() {
  useDocumentMeta(METADATA.faq.title, METADATA.faq.description);

  return (
    <main>
      <Section size="md" tone="alt" border>
        <Container className="pt-12 md:pt-0">
          <h1 className="text-display md:text-hero-sm text-c-on mb-6 max-w-3xl">
            Frequently Asked Questions
          </h1>
          <p className="max-w-measure text-lg text-c-on-muted leading-relaxed">
            Answers to common questions about our services, operations and how to work with us.
          </p>
        </Container>
      </Section>

      <Section size="md">
        <Container>
          <div className="max-w-measure">
            {FAQS.map((faq) => (
              <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
            {/* Closing border on last item */}
            <div className="border-t border-c-border" />
          </div>
        </Container>
      </Section>
    </main>
  );
}
