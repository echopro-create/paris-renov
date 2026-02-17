import React, { useState } from 'react';
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
import { CONTENT } from './constants';
import { Language } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('fr');
  const content = CONTENT[lang];

  return (
    <div className="font-sans antialiased text-slate-900 bg-white selection:bg-gold-500 selection:text-white">
      <CustomCursor />
      <Navbar lang={lang} setLang={setLang} content={content.nav} />
      <main>
        <Hero content={content.hero} />
        <TrustBadges content={content.trustBadges} />
        <Services content={content.services} />
        <WhyUs content={content.whyUs} />
        <BeforeAfter content={content.beforeAfter} />
        <Process content={content.process} />
        <Gallery content={content.gallery} />
        <Testimonials content={content.testimonials} />
        <Contact content={content.contact} />
      </main>
      <Footer content={content.footer} />
      <WhatsAppButton />
    </div>
  );
};

export default App;