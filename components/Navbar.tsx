import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Language, ContentData } from '../types';
import LanguageSwitcher from './LanguageSwitcher';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  content: ContentData['nav'];
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if scrolled (change style)
      setIsScrolled(currentScrollY > 20);

      // Smart hide/show logic
      // Only hide if scrolling down, past header, AND mobile menu is NOT open
      if (currentScrollY > lastScrollY && currentScrollY > 100 && !isOpen) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isOpen]); // Add isOpen as dependency

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Ensure navbar is visible when opening menu
      setIsVisible(true);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { label: content.home, href: "#hero" },
    { label: content.services, href: "#services" },
    { label: content.whyUs, href: "#why-us" },
    { label: content.gallery, href: "#gallery" },
    { label: content.contact, href: "#contact" },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className={`font-serif text-2xl font-bold tracking-tight transition-colors ${isScrolled ? 'text-paris-dark' : 'text-white'}`}>
          Paris<span className="text-gold-500">Renov</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors ${
                isScrolled ? 'text-slate-600 hover:text-gold-600' : 'text-slate-200 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <LanguageSwitcher currentLang={lang} setLang={setLang} isScrolled={isScrolled} />
          <a 
            href="#contact"
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 ${
              isScrolled 
                ? 'bg-paris-dark text-white hover:bg-gold-600' 
                : 'bg-white text-paris-dark hover:bg-gold-500 hover:text-white'
            }`}
          >
            {content.getQuote}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-4">
           <LanguageSwitcher currentLang={lang} setLang={setLang} isScrolled={isScrolled} />
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 transition-colors ${isScrolled ? 'text-paris-dark' : 'text-white'}`}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isOpen ? <X size={24} className="text-slate-900" /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full h-screen bg-white shadow-lg lg:hidden py-6 px-6 flex flex-col gap-4 border-t border-slate-100 overflow-y-auto pb-32">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-slate-800 py-3 border-b border-slate-100"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 w-full text-center bg-gold-500 text-white py-4 rounded-lg font-semibold text-lg"
          >
            {content.getQuote}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;