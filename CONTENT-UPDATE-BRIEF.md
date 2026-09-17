# M-FAV — Content Update Brief

**Companion to `MFAV-AGENT-BRIEF.md`. Read that first; this amends it.**

**How to use this file:** drop it and `COPY-APPROVED.md` in the repo root. Paste `SECTION A` into the agent once. Then fire the passes in `SECTION B` **one at a time, in order**. Do not paste all passes at once.

---

# SECTION A — STANDING CONTEXT (paste once, keep in context all session)

## A1. What has changed

The client has supplied the full approved copy for every route. It lives in `COPY-APPROVED.md` in the repo root. Your job in this session is to apply it to the existing build — not to rewrite the site, not to redesign anything, and not to author new copy.

## A1a. Two similarly-named files. Do not confuse them.

| File | What it is | Status |
|---|---|---|
| `COPY-APPROVED.md` | Client-approved copy. The **target state**. Written by the client's content writer, not by you. | Authoritative |
| `COPY-FOR-REVIEW.md` | Your own Phase 7e deliverable — the record of the strings **you** authored. Describes the **current state**. | Historical record |

`COPY-FOR-REVIEW.md` is not an instruction and it is not a competing source of copy. It is useful in Pass 0 as the inventory of what is live now, so you can diff current against target. **Do not edit it during Passes 1–5.**

At the end of Pass 6, regenerate `COPY-FOR-REVIEW.md` so it once again reflects what is actually on the site — which, after this session, should be `COPY-APPROVED.md` almost in full, with every remaining authored string clearly identified. Do not simply copy one file over the other.

## A1b. The build is post-Phase-7. Later passes changed things the copy deck does not know about.

The copy deck was written from `MFAV-AGENT-BRIEF.md`, not from the finished site, so it describes some elements as the original brief specified them rather than as they were finally built. Your own Phase 7e notes record at least one such change: **eyebrow labels were retired sitewide in a later pass.**

Where the deck names a section element that no longer exists in the built design — an eyebrow, a numeral, a label, a control — **the deck is supplying the words for that element, not an instruction to reinstate it.** If the element is gone, the string is simply not needed. Do not add retired elements back to satisfy the deck.

This applies to presentation only. It never applies to body copy, headings, service descriptions, form strings or metadata, all of which must be applied in full.

List every instance of this in your Pass 0 audit so the client can confirm each one.

## A2. Authority order — read this twice

Where the two documents disagree, **`COPY-APPROVED.md` wins.** It is newer and it is client-approved.

This overrides `MFAV-AGENT-BRIEF.md` section A7. Strings that A7 marked client-approved and verbatim-inviolable **have been revised**, including the H1, the hero body, the footer brand line and the copyright line. Apply the revisions. Do not preserve the older wording on the grounds that A7 told you it was fixed. Do not "improve", condense, re-tone or re-punctuate the new copy either — it is final text, not a draft to work from.

Everything in `MFAV-AGENT-BRIEF.md` that the copy deck does **not** contradict still stands in full. Specifically, all of these remain law and this session does not relax any of them:

- A2 rule 3 — design tokens only. No raw hex, no arbitrary Tailwind values.
- A2 rule 4 — no new dependencies without asking.
- A2 rule 6 — placeholders stay labelled as placeholders.
- A2 rule 7 — never invent or imply a credential.
- A3 — the entire design law, including the hard-ban list and the under-10% accent rule.
- A8 — the Definition of Done applies to every pass below.

## A3. Scope boundary — what you may and may not touch

**You may change:** text content, content data files, metadata, `alt` text, link labels, form strings, validation messages, select options, and the removal specified in Pass 5.

**You may not change, in this session:** layout, component structure, spacing, tokens, imagery treatment, animation, or routing. If applying a string genuinely breaks a layout — a heading that now wraps to four lines on mobile, a nav label that overflows — **report it and stop on that item.** Do not fix it by editing the copy, and do not fix it by inventing a new component. Bring it to me.

## A4. Content must be data, not JSX

Every string you apply goes into the content layer (`src/content/`), not inline in components. If a page currently hardcodes copy in JSX, lift it into a content file as part of the relevant pass. One content source per page or per collection. This is the one structural change you are authorised to make, and it must not alter rendered output.

## A5. The global identity change — applies everywhere, all at once

The company name and motto have changed. These appear in almost every file.

| | Old | New |
|---|---|---|
| Name | MFAV Offshore and Allied **Resources** | M-FAV Offshore and Allied **Services Limited** |
| Short form | MFAV | M-FAV |
| Logo lockup, line 2 | OFFSHORE & ALLIED RESOURCES | OFFSHORE AND ALLIED SERVICES LTD |
| Motto | Safety at All Times | Delivering Excellence at All Times |

Rules: hyphenated `M-FAV` everywhere, including component names in new content files, `alt` text, metadata and the copyright line. `LTD` appears **only** in the logo lockup because that is how the mark is drawn; everywhere else the word is spelled **Limited**. First mention on a page uses the full name; subsequent mentions use `M-FAV`.

Do not do this with a blind find-and-replace across the repo. It will corrupt `mfavoffshore.com` in email addresses and URLs, which are lowercase and **unchanged**. Work file by file and verify.

The motto change has a consequence the copy deck already handles: the safety copy no longer quotes the motto, because "Delivering Excellence" is a delivery claim rather than a safety one. Take the safety sections exactly as written in the deck. Do not reintroduce the old motto anywhere, in any casing.

## A6. Three places where the old brief told you to invent nothing — and the client has now supplied real content

`MFAV-AGENT-BRIEF.md` forbade you from inventing clients, projects and certifications. That rule was to stop *you* fabricating them. The client has now supplied real ones. Applying them is not a violation.

1. **Projects (Phase 3d and 5d).** The brief required every project card to be a labelled placeholder. The copy deck supplies eight real projects. Use them. Keep `[DATE PLACEHOLDER]` on each — dates have not been supplied. Remove the "illustrative pending client input" banner once real projects are in; leaving it under real content actively undermines them.
2. **Certifications (Phase 5a).** The deck supplies a regulatory registration list marked `[VERIFY]`. Render it as written. Do **not** add "ISO certified", a certificate number, a badge graphic, or any standards claim beyond the exact words given.
3. **Partners (Phase 3f).** Client names are **not yet cleared for publication**. Use the unattributed fallback paragraph in the deck and keep the generic placeholder marks. Do not name any operator anywhere on the site in this session, including in `alt` text and metadata.

## A7. Placeholders that remain open

These are still unresolved and must stay as clearly-labelled placeholders. Do not guess, do not substitute a plausible value, do not fill a Lagos address because the company is Nigerian:

- Registered office address, and the map embed
- General enquiry email and careers email (suggested values in the deck are suggestions, not decisions — render them as placeholders)
- Operating hours
- RC number
- Social media URLs
- Leadership names, roles, bios, portraits
- Project dates
- Aviation operator basis, and the scope of "Airline Services"
- Property & Investment engagement model

Collect every one into `PLACEHOLDERS.md` as the original brief requires.

---

# SECTION B — UPDATE PASSES (fire one at a time)

---

## PASS 0 — Audit

**Write no content in this pass.**

1. Inventory what exists: which routes are built, which sections of each are built, and where copy currently lives (content files vs inline JSX).
2. Produce a coverage table mapping every section of `COPY-APPROVED.md` to its current state: **present / partially present / missing / not yet built**.
3. List every file containing the old company name or the old motto.
4. Flag every place where applying the new copy will break a layout — specifically: the hero H1 at 375px, nav and footer labels, the capability panel sub-lists, and any heading that has grown in length.
5. State which content files you will create or restructure under A4.

**Deliverable:** the audit, plus `CONTENT-COVERAGE.md`. Then stop and wait for approval.

---

## PASS 1 — Global identity and app shell

Apply A5 across the header, footer, mobile nav, metadata and every remaining reference.

- Logo lockup, both lines, header and footer.
- Footer brand line, motto placement beneath the lockup, copyright line, RC placeholder.
- Footer columns exactly as deck section 11.2 — including the Company and Services additions noted there. Every link resolves; no `href="#"`.
- If `/privacy` and `/terms` do not exist as real pages, **remove those footer links** rather than pointing them anywhere.
- Services mega-menu descriptors from deck section 1.
- All page titles and meta descriptions from deck section 2.
- Contact details from deck section 10.2, with the address, general email and hours as labelled placeholders.

**QA gate:** grep the repo for `MFAV`, `Allied Resources`, `Safety at All Times` and `OFFSHORE & ALLIED RESOURCES` — report the result as zero, excluding the two documents themselves. Confirm no email address or URL was corrupted by the rename. Definition of Done.

Report, then stop.

---

## PASS 2 — Homepage

Apply deck section 3, all eleven sections, in order. Hero through closing CTA band.

Watch these specifically:
- The hero H1 and body have changed. Re-measure the hero overlay contrast after the change and report the actual ratio.
- Section 3.4 statistics: apply the table as given. Do **not** adopt the alternative first stat noted in the deck — it is pending client verification.
- Section 3.8 projects: real content per A6.1, with date placeholders and the banner removed.
- Section 3.10 partners: unattributed fallback per A6.3.
- Capability panel accessible names per deck section 3.2 — each panel needs a full name, not "Explore".

**QA gate:** confirm no capability content is hover-only on touch. Screenshot at 1440 and 390 and confirm the accent still reads under 10%. Definition of Done.

Report, then stop.

---

## PASS 3 — Service detail pages

Apply deck section 6 to all six divisions through the single `ServiceDetail` template and one content source. Each division has: positioning line, overview, key facts table, capabilities, approach steps, benefits, relevant industries, related services, and its own CTA band copy.

Note that three divisions have **division-specific process step names** rather than the default sequence — Marine & Offshore, Logistics & Haulage