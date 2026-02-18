import React from 'react';
import { ThemeProvider } from './lib/contexts/ThemeContext';
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

const App: React.FC = () => {
  // Enable smooth scroll for all anchor links
  useSmoothScroll();

  return (
    <ThemeProvider>
      {/* Skip Link for Accessibility (WCAG 2.2) */}
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
          <React.Suspense fallback={<SkeletonLoader type="beforeafter" />}>
            <BeforeAfter />
          </React.Suspense>
          <Process />
          <WhyUs />
          <React.Suspense fallback={<SkeletonLoader type="gallery" />}>
            <Gallery />
          </React.Suspense>
          <React.Suspense fallback={<SkeletonLoader type="testimonials" />}>
            <Testimonials />
          </React.Suspense>
          <React.Suspense fallback={<SkeletonLoader type="contact" />}>
            <Contact />
          </React.Suspense>
          <CTABanner />

        </main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
};

export default App;