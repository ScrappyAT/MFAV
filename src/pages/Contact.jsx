import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { METADATA } from '../content/metadata';
import { CONTACT } from '../content/site';
import { DIVISIONS } from '../content/divisions';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import Input from '../components/ui/Input';
import Textarea from '../components/ui/Textarea';
import Select from '../components/ui/Select';
import Button from '../components/ui/Button';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Anything submitted faster than this (ms) is treated as automated, not a
// human filling in four fields (A5 §5f: "a simple timing check for spam").
const MIN_HUMAN_SUBMIT_MS = 1500;

const SERVICE_OPTIONS = [
  { value: 'general', label: 'General Enquiry' },
  ...DIVISIONS.map((d) => ({ value: d.id, label: d.name })),
];

/**
 * Documented stub submit handler (A2.4/A5 §5f: "Wire to a documented stub
 * submit handler — do not integrate any third-party service without
 * asking"). No backend or third-party form service is called here. Swap
 * this implementation for a real API call once the client approves one.
 */
function stubSubmitEnquiry(payload) {
  // eslint-disable-next-line no-console
  console.info('[stub] Contact form submission (no backend wired):', payload);
  return new Promise((resolve) => setTimeout(resolve, 900));
}

function validate(values) {
  const errors = {};
  if (!values.fullName.trim()) errors.fullName = 'Please enter your name.';
  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address, e.g. name@company.com';
  }
  if (!values.message.trim()) errors.message = 'Please tell us how we can help.';
  return errors;
}

const FIELD_ORDER = ['fullName', 'email', 'message'];
const FIELD_LABELS = { fullName: 'Full Name', email: 'Email', message: 'Message' };

export default function Contact() {
  useDocumentMeta(METADATA.contact.title, METADATA.contact.description);

  const [values, setValues] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    website: '', // honeypot — real users never see or fill this
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const mountedAt = useRef(Date.now());
  const fieldRefs = {
    fullName: useRef(null),
    email: useRef(null),
    message: useRef(null),
  };
  const summaryRef = useRef(null);
  const successHeadingRef = useRef(null);

  useEffect(() => {
    if (status === 'success' && successHeadingRef.current) {
      successHeadingRef.current.focus();
    }
  }, [status]);

  function handleChange(field) {
    return (e) => {
      const val = e.target.value;
      setValues((prev) => ({ ...prev, [field]: val }));
      if (errors[field]) {
        setErrors((prev) => {
          const next = { ...prev };
          delete next[field];
          return next;
        });
      }
    };
  }

  function focusField(field) {
    fieldRefs[field]?.current?.focus();
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === 'submitting') return;

    const nextErrors = validate(values);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      const firstInvalid = FIELD_ORDER.find((f) => nextErrors[f]);
      // Focus goes to the first invalid field itself (A5 §5f); the error
      // summary above the form is a role="alert" live region, so screen
      // readers hear the full list regardless of where focus lands.
      focusField(firstInvalid);
      return;
    }

    // Spam check: a filled honeypot or an inhumanly fast submit both fail
    // silently into the same success state, so a bot gets no signal that
    // anything was rejected (A5 §5f: honeypot + timing check, no CAPTCHA).
    const elapsed = Date.now() - mountedAt.current;
    const looksLikeSpam = values.website.trim() !== '' || elapsed < MIN_HUMAN_SUBMIT_MS;
    if (looksLikeSpam) {
      setStatus('success');
      return;
    }

    setStatus('submitting');
    try {
      await stubSubmitEnquiry({
        fullName: values.fullName,
        company: values.company,
        email: values.email,
        phone: values.phone,
        service: values.service,
        message: values.message,
      });
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <main>
      <Section size="md" tone="alt" border>
        {/* pt-12 (mobile only) stacks on top of Section's own 80px
            top padding — 80px alone sits under the fixed 100px header,
            clipping the H1's top edge; the extra 48px clears it with
            margin. md+ gets pt-0 since Section's own md padding
            (144px) was already safe. */}
        <Container className="pt-12 md:pt-0">
          <h1 className="text-display md:text-hero-sm text-c-on mb-6 max-w-3xl">Contact Us</h1>
          <p className="max-w-measure text-lg text-c-on-muted leading-relaxed">
            Tell us what you need. Give us the scope, the location and the timeline,
            and the right person will come back to you rather than a general
            acknowledgement.
          </p>
        </Container>
      </Section>

      <Section size="md">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form column */}
            <div className="lg:col-span-7">
              {status === 'success' ? (
                <div className="rounded-token border border-c-border bg-c-bg-alt p-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={28} aria-hidden="true" className="shrink-0 text-c-primary-bg" />
                    <div>
                      <h2
                        ref={successHeadingRef}
                        tabIndex={-1}
                        className="text-xl font-bold text-c-on mb-2 focus:outline-none"
                      >
                        Enquiry received.
                      </h2>
                      <p className="text-c-on-muted leading-relaxed">
                        Thank you — your enquiry has reached our team. We respond to
                        enquiries within one business day. For urgent operational
                        matters, call {CONTACT.phones[0]}.
                      </p>
                    </div>
                  </div>
                </div>
              ) : status === 'error' ? (
                <div className="rounded-token border border-c-error bg-c-bg-alt p-8">
                  <div className="flex items-start gap-3">
                    <XCircle size={28} aria-hidden="true" className="shrink-0 text-c-error" />
                    <div>
                      <h2 className="text-xl font-bold text-c-on mb-2">We couldn't send your enquiry.</h2>
                      <p className="text-c-on-muted leading-relaxed mb-4">
                        Something went wrong on our end. Please try again, or email us directly at{' '}
                        <a
                          href={`mailto:${CONTACT.email}`}
                          className="font-semibold text-c-on underline underline-offset-2 hover:text-c-primary-bg"
                        >
                          {CONTACT.email}
                        </a>.
                      </p>
                      <Button type="button" variant="secondary" onClick={() => setStatus('idle')}>
                        Try Again
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <form noValidate onSubmit={handleSubmit}>
                  {hasErrors && (
                    <div
                      ref={summaryRef}
                      role="alert"
                      className="mb-8 rounded-token border border-c-error bg-c-bg-alt p-5"
                    >
                      <div className="flex items-center gap-2 font-bold text-c-error mb-2">
                        <AlertCircle size={18} aria-hidden="true" />
                        There {Object.keys(errors).length === 1 ? 'is' : 'are'} {Object.keys(errors).length} problem{Object.keys(errors).length === 1 ? '' : 's'} with this form
                      </div>
                      <ul className="flex flex-col gap-1 pl-1">
                        {FIELD_ORDER.filter((f) => errors[f]).map((f) => (
                          <li key={f}>
                            <a
                              href={`#field-${f}`}
                              className="text-sm text-c-error underline underline-offset-2"
                              onClick={(e) => {
                                e.preventDefault();
                                focusField(f);
                              }}
                            >
                              {FIELD_LABELS[f]}: {errors[f]}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input
                      id="field-fullName"
                      ref={fieldRefs.fullName}
                      label="Full Name"
                      required
                      autoComplete="name"
                      value={values.fullName}
                      onChange={handleChange('fullName')}
                      error={errors.fullName}
                      className="sm:col-span-1"
                    />
                    <Input
                      id="field-company"
                      label="Company"
                      autoComplete="organization"
                      value={values.company}
                      onChange={handleChange('company')}
                      className="sm:col-span-1"
                    />
                    <Input
                      id="field-email"
                      ref={fieldRefs.email}
                      type="email"
                      label="Email"
                      required
                      autoComplete="email"
                      value={values.email}
                      onChange={handleChange('email')}
                      error={errors.email}
                      className="sm:col-span-1"
                    />
                    <Input
                      id="field-phone"
                      type="tel"
                      label="Phone"
                      autoComplete="tel"
                      value={values.phone}
                      onChange={handleChange('phone')}
                      className="sm:col-span-1"
                    />
                    <Select
                      id="field-service"
                      label="Service of Interest"
                      placeholder="Select a service"
                      options={SERVICE_OPTIONS}
                      value={values.service}
                      onChange={handleChange('service')}
                      className="sm:col-span-2"
                    />
                    <Textarea
                      id="field-message"
                      ref={fieldRefs.message}
                      label="Message"
                      required
                      rows={6}
                      value={values.message}
                      onChange={handleChange('message')}
                      error={errors.message}
                      className="sm:col-span-2"
                    />

                    {/* Honeypot — hidden from sighted and AT users alike
                        (Tailwind's built-in sr-only clips it via the same
                        1px-absolute pattern as focus-visible skip links,
                        no arbitrary values needed); real visitors never
                        interact with it. */}
                    <div aria-hidden="true" className="sr-only">
                      <label htmlFor="field-website">Leave this field blank</label>
                      <input
                        id="field-website"
                        name="website"
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        value={values.website}
                        onChange={handleChange('website')}
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    loading={status === 'submitting'}
                    className="mt-8 w-full sm:w-auto"
                  >
                    {status === 'submitting' ? 'Sending…' : 'Submit Enquiry'}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact info column */}
            <div className="lg:col-span-5">
              <h2 className="text-lg font-bold text-c-on mb-6">Office Details</h2>
              <ul className="flex flex-col gap-4 text-c-on-muted mb-8">
                <li className="flex items-start gap-3">
                  <MapPin size={18} aria-hidden="true" className="shrink-0 mt-0.5 text-c-primary" />
                  <span>
                    {CONTACT.addressLines.map((line, idx) => (
                      <React.Fragment key={line}>
                        {idx > 0 && <br />}
                        {line}
                      </React.Fragment>
                    ))}
                  </span>
                </li>
                {CONTACT.phones.map((phone) => (
                  <li key={phone} className="flex items-center gap-3">
                    <Phone size={18} aria-hidden="true" className="shrink-0 text-c-primary" />
                    <span>{phone}</span>
                  </li>
                ))}
                <li className="flex items-center gap-3">
                  <Mail size={18} aria-hidden="true" className="shrink-0 text-c-primary" />
                  <span><span className="font-semibold text-c-on">General enquiries:</span> {CONTACT.email}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} aria-hidden="true" className="shrink-0 text-c-primary" />
                  <span><span className="font-semibold text-c-on">Procurement:</span> {CONTACT.procurementEmail}</span>
                </li>
              </ul>

              <div className="aspect-16/9 w-full rounded-token border border-c-border bg-c-surface-low overflow-hidden mb-6">
                <iframe
                  src={CONTACT.mapEmbedUrl}
                  title={CONTACT.mapEmbedTitle}
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <p className="text-sm text-c-on-muted leading-relaxed">
                We respond to enquiries within one business day. Operational and urgent
                matters are handled 24/7 by phone.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
