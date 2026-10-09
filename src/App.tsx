import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components';

// Lazy-loaded page components for code splitting & optimal performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Programs = lazy(() => import('./pages/Programs'));
const Achievements = lazy(() => import('./pages/Achievements'));
const Events = lazy(() => import('./pages/Events'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Resources = lazy(() => import('./pages/Resources'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Scroll to top helper on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

// Loading fallback component
const PageLoader: React.FC = () => (
  <div className="min-h-[60vh] flex items-center justify-center bg-[#FCFAF5]">
    <div className="flex flex-col items-center gap-3">
      <div className="w-10 h-10 border-3 border-[#071A3A] border-t-[#D89A18] rounded-full animate-spin" />
      <span className="text-xs font-serif font-bold text-[#071A3A] tracking-wider uppercase">
        Loading Velocity Chess...
      </span>
    </div>
  </div>
);

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#FCFAF5] text-[#18243A] flex flex-col font-sans selection:bg-[#D89A18]/20 selection:text-[#071A3A]">
        {/* Sticky Translucent Pill Navbar */}
        <Navbar />

        {/* Main Routed Page Content with Suspense code splitting */}
        <main className="flex-1">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses" element={<Programs />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/events" element={<Events />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
