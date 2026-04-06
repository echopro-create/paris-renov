import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSmoothScroll } from './lib/hooks/useSmoothScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
const BeforeAfter = React.lazy(() => import('./components/BeforeAfter'));
import Process from './components/Process';
const Gallery = React.lazy(() => import('./components/Gallery'));
const Testimonials = React.lazy(() => import('./components/Testimonials'));
const Contact = React.lazy(() => import('./components/Contact'));
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import SkeletonLoader from './components/SkeletonLoader';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import OfflineIndicator from './components/OfflineIndicator';
import PWAUpdateToast from './components/PWAUpdateToast';

// SEO pages (lazy-loaded)
const RenovationHaussmannien = React.lazy(() => import('./pages/RenovationHaussmannien'));
const PeintreDecorateur = React.lazy(() => import('./pages/PeintreDecorateur'));
const RenovationSalleDeBain = React.lazy(() => import('./pages/RenovationSalleDeBain'));
const PoseParquet = React.lazy(() => import('./pages/PoseParquet'));
const DevisRenovation = React.lazy(() => import('./pages/DevisRenovation'));

// Main page (homepage) — extracted as a component
const HomePage: React.FC = () => {
  useSmoothScroll();

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:top-4 focus-visible:left-4 bg-gold-500 text-slate-900 px-6 py-3 rounded-lg z-[100] focus-ring font-semibold"
      >
        Aller au contenu principal
      </a>

      <div className="min-h-screen bg-bg-primary text-text-primary selection:bg-gold-200 selection:text-slate-900">
        <Navbar />
        <main id="main-content">
          <Hero />
          <Services />
          <ErrorBoundary>
            <React.Suspense fallback={<SkeletonLoader type="beforeafter" />}>
              <BeforeAfter />
            </React.Suspense>
          </ErrorBoundary>
          <Process />
          <WhyUs />
          <ErrorBoundary>
            <React.Suspense fallback={<SkeletonLoader type="gallery" />}>
              <Gallery />
            </React.Suspense>
          </ErrorBoundary>
          <ErrorBoundary>
            <React.Suspense fallback={<SkeletonLoader type="testimonials" />}>
              <Testimonials />
            </React.Suspense>
          </ErrorBoundary>
          <ErrorBoundary>
            <React.Suspense fallback={<SkeletonLoader type="contact" />}>
              <Contact />
            </React.Suspense>
          </ErrorBoundary>
          <CTABanner />
        </main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
        <OfflineIndicator />
        <PWAUpdateToast />
      </div>
    </>
  );
};

const App: React.FC = () => {
  return (
    <React.Suspense fallback={<div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center"><div className="w-8 h-8 border-4 border-gold-500 border-t-transparent rounded-full animate-spin" /></div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/renovation-haussmannien-paris" element={<RenovationHaussmannien />} />
        <Route path="/peintre-decorateur-paris" element={<PeintreDecorateur />} />
        <Route path="/renovation-salle-de-bain-paris" element={<RenovationSalleDeBain />} />
        <Route path="/pose-parquet-paris" element={<PoseParquet />} />
        <Route path="/devis-renovation-paris" element={<DevisRenovation />} />
      </Routes>
    </React.Suspense>
  );
};

export default App;