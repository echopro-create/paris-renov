import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import BeforeAfter from './components/BeforeAfter';
import Process from './components/Process';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
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
        <Services content={currentContent.services} common={currentContent.common} />
        <WhyUs content={currentContent.whyUs} common={currentContent.common} />
        <BeforeAfter content={currentContent.beforeAfter} common={currentContent.common} />
        <Process content={currentContent.process} common={currentContent.common} />
        <Gallery content={currentContent.gallery} common={currentContent.common} />
        <Testimonials content={currentContent.testimonials} common={currentContent.common} />
        <Contact content={currentContent.contact} common={currentContent.common} />
      </main>
      <Footer content={currentContent.footer} common={currentContent.common} />
      <WhatsAppButton common={currentContent.common} />
    </div>
  );
};

export default App;