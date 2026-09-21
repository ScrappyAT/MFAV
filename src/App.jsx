import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';

// Phase 7c: every route past the homepage is lazy-loaded. The homepage
// stays a static import (it's what the very first request needs), but
// About/Services/ServiceDetail/Industries/Projects/Company/Contact are
// only fetched once a visitor actually navigates there — this keeps the
// initial JS payload (and therefore parse/exec time before first paint)
// down to what "/" needs, instead of shipping all eight routes' code on
// every load. Suspense fallback is `null`: these are same-origin chunks
// on a already-warm connection, so a spinner would flash longer than the
// chunk takes to arrive on anything but a very slow link, and `null`
// avoids introducing a layout shift of its own.
const About = React.lazy(() => import('./pages/About'));
const Services = React.lazy(() => import('./pages/Services'));
const ServiceDetail = React.lazy(() => import('./pages/ServiceDetail'));
const Industries = React.lazy(() => import('./pages/Industries'));
const Projects = React.lazy(() => import('./pages/Projects'));
const Company = React.lazy(() => import('./pages/Company'));
const Contact = React.lazy(() => import('./pages/Contact'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

// Dev-only route (A2: "/styleguide dev-only route") — lazy-loaded so it,
// and every primitive it imports, are excluded from the production
// bundle entirely, not just hidden from navigation.
const StyleguideLazy = React.lazy(() => import('./pages/Styleguide'));

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Suspense fallback={null}><About /></Suspense>} />
        <Route path="/services" element={<Suspense fallback={null}><Services /></Suspense>} />
        <Route path="/services/:slug" element={<Suspense fallback={null}><ServiceDetail /></Suspense>} />
        <Route path="/industries" element={<Suspense fallback={null}><Industries /></Suspense>} />
        <Route path="/projects" element={<Suspense fallback={null}><Projects /></Suspense>} />
        <Route path="/company" element={<Suspense fallback={null}><Company /></Suspense>} />
        <Route path="/contact" element={<Suspense fallback={null}><Contact /></Suspense>} />
        <Route path="/faq" element={<Suspense fallback={null}><FAQ /></Suspense>} />
        {import.meta.env.DEV && (
          <Route
            path="/styleguide"
            element={
              <Suspense fallback={null}>
                <StyleguideLazy />
              </Suspense>
            }
          />
        )}
        <Route path="*" element={<Suspense fallback={null}><NotFound /></Suspense>} />
      </Route>
    </Routes>
  );
}
