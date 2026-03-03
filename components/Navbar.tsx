import { useState, useEffect, useRef } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../constants';
import { useActiveSection } from '../lib/hooks/useActiveSection';
import { useTheme } from '../lib/contexts/ThemeContext';

import Logo from './Logo';

export default function Navbar() {
  const { nav, common } = content;
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  // Scroll spy for active section highlighting
  const activeSection = useActiveSection(['hero', 'services', 'why-us', 'process', 'gallery', 'testimonials', 'contact']);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY.current && currentScrollY > 100 && !isOpen) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsVisible(true);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const navLinks = [
    { label: nav.services, href: '#services', id: 'services' },
    { label: nav.whyUs, href: '#why-us', id: 'why-us' },
    { label: nav.gallery, href: '#gallery', id: 'gallery' },
    { label: common.clientReviews, href: '#testimonials', id: 'testimonials' },
    { label: nav.process, href: '#process', id: 'process' },
  ];

  const mobileNavLinks = [
    { label: nav.home, href: '#hero' },
    ...navLinks.map(link => ({ label: link.label, href: link.href })),
    { label: nav.contact, href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 transform ${isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${isScrolled
          ? 'bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-2xl border-b border-white/20 dark:border-slate-700/50 py-6'
          : 'bg-transparent py-10'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo - Clickable to scroll to top */}
        <a href="#hero" className="flex items-center gap-3 group" onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>
          <Logo
            iconSize={64}
            nameClassName={`font-serif text-3xl lg:text-4xl font-extrabold tracking-[0.2em] leading-none`}
            taglineClassName="text-[10px] lg:text-[11px] uppercase tracking-[0.3em] text-gold-500 font-bold mt-2"
            variant={isScrolled ? 'dark' : 'light'}
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors uppercase ${isScrolled
                ? activeSection === link.id
                  ? 'text-gold-600 dark:text-gold-500'
                  : 'text-slate-700 dark:text-slate-300 hover:text-gold-600 dark:hover:text-gold-400'
                : activeSection === link.id
                  ? 'text-gold-300'
                  : 'text-white hover:text-gold-200'
                }`}
              aria-current={activeSection === link.id ? 'page' : undefined}
            >
              {link.label}
              {/* Active indicator */}
              {activeSection === link.id && (
                <span className={`absolute -bottom-1 left-0 right-0 h-0.5 ${isScrolled ? 'bg-gold-600 dark:bg-gold-400' : 'bg-white'}`} />
              )}
            </a>
          ))}

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`p-2.5 rounded-full transition-all focus-ring ${isScrolled
              ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700'
              : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20'
              }`}
            aria-label={theme === 'dark' ? 'Passer au thème clair' : 'Passer au thème sombre'}
            aria-pressed={theme === 'dark'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="#contact"
            className={`px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus-ring ${isScrolled
              ? 'bg-slate-900 dark:bg-gold-500 text-white dark:text-slate-900 hover:bg-gold-600 dark:hover:bg-gold-400'
              : 'bg-white text-slate-900 hover:bg-slate-100'
              }`}
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-4">
          {/* Theme Toggle (Mobile) */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors focus-ring ${isScrolled
              ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white'
              : 'bg-white/10 backdrop-blur-sm text-white'
              }`}
            aria-label={theme === 'dark' ? 'Passer au thème clair' : 'Passer au thème sombre'}
            aria-pressed={theme === 'dark'}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 transition-colors focus-ring ${isScrolled ? 'text-slate-900 dark:text-white' : 'text-white'}`}
            aria-label={isOpen ? common.closeMenu : common.openMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={24} className="text-slate-900 dark:text-white" /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-white/98 dark:bg-slate-900/98 backdrop-blur-2xl lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menu principal"
          >
            {/* Fixed Header with Close Button */}
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-900">
              <span className="font-serif text-lg font-bold text-slate-900 dark:text-white">D.A. BAT</span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus-ring"
                aria-label={common.closeMenu}
              >
                <X size={24} className="text-slate-900 dark:text-white" />
              </button>
            </div>

            {/* Scrollable Menu Content */}
            <div className="pt-20 px-6 flex flex-col gap-4 overflow-y-auto h-full pb-32">
              {mobileNavLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="text-lg font-medium text-slate-800 dark:text-white py-3 border-b border-slate-100 dark:border-slate-700 hover:text-gold-600 dark:hover:text-gold-400 transition-colors focus-ring"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-4 w-full text-center bg-gold-500 text-white dark:text-slate-900 py-4 rounded-full font-semibold text-lg hover:bg-gold-400 transition-colors focus-ring"
              >
                {nav.getQuote}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}