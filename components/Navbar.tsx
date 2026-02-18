import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { content } from '../constants';
import { useActiveSection } from '../lib/hooks/useActiveSection';
import { useTheme } from '../lib/contexts/ThemeContext';

export default function Navbar() {
  const { nav, common } = content;
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll spy for active section highlighting
  const activeSection = useActiveSection(['hero', 'services', 'why-us', 'process', 'gallery', 'testimonials', 'contact']);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > 100 && !isOpen) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isOpen]);

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
    { label: 'Témoignages', href: '#testimonials', id: 'testimonials' },
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
          ? 'bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-2xl border-b border-white/20 dark:border-slate-700/50 py-4'
          : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo - Clickable to scroll to top */}
        <a href="#hero" className="flex items-center gap-3 group" onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>
          <div className="w-10 h-10 border border-gold-500 flex items-center justify-center rounded-sm group-hover:bg-gold-500/10 transition-colors">
            <span className="font-serif text-2xl text-gold-500">A</span>
          </div>
          <span className={`font-serif text-xl font-bold tracking-widest transition-colors uppercase ${isScrolled ? 'text-slate-900 dark:text-white' : 'text-white'}`}>
            ATELIER ALEXEI
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative text-xs font-bold tracking-[0.15em] uppercase transition-all focus-ring ${activeSection === link.id
                ? isScrolled
                  ? 'text-gold-600 dark:text-gold-400'
                  : 'text-white'
                : isScrolled
                  ? 'text-slate-600 dark:text-slate-300 hover:text-gold-600 dark:hover:text-gold-400'
                  : 'text-slate-300 hover:text-white'
                }`}
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
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 transition-colors focus-ring ${isScrolled ? 'text-slate-900 dark:text-white' : 'text-white'}`}
            aria-label={isOpen ? common.closeMenu : common.openMenu}
          >
            {isOpen ? <X size={24} className="text-slate-900 dark:text-white" /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white dark:bg-slate-900 lg:hidden">
          {/* Fixed Header with Close Button */}
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-900">
            <span className="font-serif text-lg font-bold text-slate-900 dark:text-white">ATELIER ALEXEI</span>
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
            {mobileNavLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-slate-800 dark:text-white py-3 border-b border-slate-100 dark:border-slate-700 hover:text-gold-600 dark:hover:text-gold-400 transition-colors focus-ring"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 w-full text-center bg-gold-500 text-white dark:text-slate-900 py-4 rounded-full font-semibold text-lg hover:bg-gold-400 transition-colors focus-ring"
            >
              {nav.getQuote}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}