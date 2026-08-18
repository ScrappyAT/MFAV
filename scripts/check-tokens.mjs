#!/usr/bin/env node
/**
 * check-tokens.mjs — the "documented convention forbidding arbitrary
 * values in components" from Phase 1a, made enforceable without adding
 * an ESLint dependency.
 *
 * Scans every .jsx file under src/ for:
 *   1. Tailwind arbitrary-value syntax ( `-[...]` inside a className )
 *   2. Raw hex colors ( #fff, #1a2b3c )
 *
 * A2.3: "Zero raw hex values, zero arbitrary Tailwind values ... in
 * component code. If a needed value is missing from the tokens, stop,
 * tell me what gap you found, propose the token, and wait."
 *
 * LEGACY_ALLOWLIST holds the Phase-2/3-scope homepage section files that
 * predate the Phase 1 token system and haven't been rewritten yet (see
 * TOKENS-GAPS.md + the Phase 1 report). Every violation in those files is
 * already known and tracked — this script's job is to make sure nothing
 * *new* slips in anywhere else. When a file in this list gets its
 * Phase 2/3 rewrite, remove it from the allowlist in the same change.
 *
 * Usage: node scripts/check-tokens.mjs
 * Exits non-zero (and lists offending lines) if a NEW violation appears
 * outside the allowlist.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const SRC_DIR = join(process.cwd(), 'src');

const LEGACY_ALLOWLIST = new Set([
  'components/Hero.jsx',
  'components/WhoWeAre.jsx',
  'components/Capabilities.jsx',
  'components/KeyStats.jsx',
  'components/IndustriesWeServe.jsx',
  'components/SafetyExcellence.jsx',
  'components/ProjectsSection.jsx',
  'components/FeaturedServices.jsx',
]);

// index.css's own token-definition block is exempt — that's the one
// place hex values are supposed to live.
const CSS_ALLOWLIST = new Set(['index.css']);

const ARBITRARY_VALUE = /-\[[^\]]*\]/;
const RAW_HEX = /#[0-9A-Fa-f]{3,8}\b/;

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) walk(full, files);
    else files.push(full);
  }
  return files;
}

let violations = [];

for (const file of walk(SRC_DIR)) {
  const rel = relative(SRC_DIR, file).replace(/\\/g, '/');
  const isJsx = rel.endsWith('.jsx') || rel.endsWith('.js');
  const isCss = rel.endsWith('.css');
  if (!isJsx && !isCss) continue;

  const allowed = isCss ? CSS_ALLOWLIST.has(rel) : LEGACY_ALLOWLIST.has(rel);
  if (allowed) continue;

  const lines = readFileSync(file, 'utf8').split('\n');
  lines.forEach((line, idx) => {
    if (ARBITRARY_VALUE.test(line) || RAW_HEX.test(line)) {
      violations.push(`${rel}:${idx + 1}: ${line.trim()}`);
    }
  });
}

if (violations.length > 0) {
  console.error(`Found ${violations.length} token violation(s) outside the legacy allowlist:\n`);
  violations.forEach((v) => console.error(`  ${v}`));
  console.error('\nEvery value must come from the token set (tailwind.config.js / index.css).');
  console.error('If a file legitimately needs to migrate off tokens temporarily, that is a');
  console.error('decision to flag explicitly — not something to add to this allowlist quietly.');
  process.exit(1);
} else {
  console.log('check-tokens: no new arbitrary-value or raw-hex violations found.');
}
