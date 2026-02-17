import React from 'react';
import { ThemeProvider } from './lib/contexts/ThemeContext';
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

const suspenseFallback = (
  <div className="h-96 flex items-center justify-center bg-slate-100 dark:bg-slate-800 animate-pulse rounded-2xl m-6">
    Chargement...
  </div>
);

const App: React.FC = () => {
  return (
    <ThemeProvider>
      {/* Skip Link for Accessibility (WCAG 2.2) */}
      <a
        href="#main-content"
        className="sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:top-4 focus-visible:left-4 bg-gold-500 text-slate-900 px-6 py-3 rounded-lg z-[100] focus-ring font-semibold"
      >
        Пропустить навигацию
      </a>

      <div className="min-h-screen bg-bg-primary text-text-primary selection:bg-gold-200 selection:text-slate-900">
        <Navbar />
        <main id="main-content">
          <Hero />
          <Services />
          <React.Suspense fallback={suspenseFallback}>
            <BeforeAfter />
          </React.Suspense>
          <Process />
          <WhyUs />
          <React.Suspense fallback={suspenseFallback}>
            <Gallery />
          </React.Suspense>
          <React.Suspense fallback={suspenseFallback}>
            <Testimonials />
          </React.Suspense>
          <React.Suspense fallback={suspenseFallback}>
            <Contact />
          </React.Suspense>
          <CTABanner />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </ThemeProvider>
  );
};

export default App;