import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Industries from './pages/Industries';
import Projects from './pages/Projects';
import Company from './pages/Company';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Dev-only route (A2: "/styleguide dev-only route") — lazy-loaded so it,
// and every primitive it imports, are excluded from the production
// bundle entirely, not just hidden from navigation.
const StyleguideLazy = React.lazy(() => import('./pages/Styleguide'));

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
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
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
