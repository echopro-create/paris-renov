import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
const BeforeAfter = React.lazy(() => import('./components/BeforeAfter'));
import Process from './components/Process';
const Gallery = React.lazy(() => import('./components/Gallery'));
import Testimonials from './components/Testimonials';
const Contact = React.lazy(() => import('./components/Contact'));
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CustomCursor from './components/CustomCursor';
import { content as translations } from './constants';
const App: React.FC = () => {
  const currentContent = translations;

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-gold-200 selection:text-slate-900">
      <CustomCursor />
      <Navbar content={currentContent.nav} common={currentContent.common} />
      <main>
        <Hero content={currentContent.hero} common={currentContent.common} />
        <TrustBadges content={currentContent.trustBadges} />
        <React.Suspense fallback={<div className="h-96 flex items-center justify-center bg-slate-100 animate-pulse rounded-2xl m-6">Loading Services...</div>}>
          <Services content={currentContent.services} common={currentContent.common} />
        </React.Suspense>
        <React.Suspense fallback={<div className="h-96 flex items-center justify-center bg-slate-100 animate-pulse rounded-2xl m-6">Loading Why Us section...</div>}>
          <WhyUs content={currentContent.whyUs} common={currentContent.common} />
        </React.Suspense>
        <React.Suspense fallback={<div className="h-96 flex items-center justify-center bg-slate-100 animate-pulse rounded-2xl m-6">Loading Before & After gallery...</div>}>
          <BeforeAfter content={currentContent.beforeAfter} common={currentContent.common} />
        </React.Suspense>
        <Process content={currentContent.process} common={currentContent.common} />
        <React.Suspense fallback={<div className="h-96 flex items-center justify-center bg-slate-100 animate-pulse rounded-2xl m-6">Loading Gallery...</div>}>
          <Gallery content={currentContent.gallery} common={currentContent.common} />
        </React.Suspense>
        <React.Suspense fallback={<div className="h-96 flex items-center justify-center bg-slate-100 animate-pulse rounded-2xl m-6">Loading Testimonials...</div>}>
          <Testimonials content={currentContent.testimonials} common={currentContent.common} />
        </React.Suspense>
        <React.Suspense fallback={<div className="h-96 flex items-center justify-center bg-slate-100 animate-pulse rounded-2xl m-6">Loading Contact form...</div>}>
          <Contact content={currentContent.contact} common={currentContent.common} />
        </React.Suspense>
      </main>
      <Footer content={currentContent.footer} common={currentContent.common} />
      <WhatsAppButton common={currentContent.common} />
    </div>
  );
};

export default App;