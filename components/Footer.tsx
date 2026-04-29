import { useState, useRef, useEffect } from 'react';
import { content } from '../constants';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Instagram, X, MapPin, Phone, Mail } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const { footer, nav, contact } = content;
  const [modalContent, setModalContent] = useState<{ title: string; body: string } | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (modalContent) {
      dialog.showModal();
      document.body.style.overflow = 'hidden';
    } else {
      dialog.close();
      document.body.style.overflow = 'unset';
    }
  }, [modalContent]);

  const handleClose = () => {
    setModalContent(null);
  };

  const navLinks = [
    { label: nav.services, href: '#services' },
    { label: nav.gallery, href: '#gallery' },
    { label: nav.process, href: '#process' },
    { label: nav.whyUs, href: '#why-us' },
    { label: nav.contact, href: '#contact' },
  ];

  const savoirFaire = [
    'Peinture & Décoration',
    'Plâtrerie & Cloisons',
    'Parquets & Sols',
  ];

  const seoLinks = [
    { label: "Rénovation appartement", href: '/renovation-appartement-paris' },
    { label: 'Rénovation cuisine', href: '/renovation-cuisine-paris' },
    { label: 'Plomberie & électricité', href: '/plomberie-electricite-paris' },
    { label: 'Maçonnerie & cloisons', href: '/maconnerie-cloisons-platrerie-paris' },
    { label: 'Appartement ancien', href: '/renovation-appartement-ancien-paris' },
    { label: 'Rénovation studio', href: '/renovation-studio-paris' },
    { label: 'Rénovation haussmannien', href: '/renovation-haussmannien-paris' },
    { label: 'Peintre décorateur', href: '/peintre-decorateur-paris' },
    { label: 'Rénovation salle de bain', href: '/renovation-salle-de-bain-paris' },
    { label: 'Pose de parquet', href: '/pose-parquet-paris' },
    { label: 'Prix rénovation Paris', href: '/prix-renovation-appartement-paris' },
    { label: 'Délais rénovation', href: '/delai-renovation-appartement-paris' },
    { label: 'Avant / Après', href: '/renovation-appartement-paris-avant-apres' },
    { label: 'Petite surface', href: '/renovation-petite-surface-paris' },
    { label: 'Haut de gamme', href: '/renovation-appartement-haut-de-gamme-paris' },
    { label: 'Copropriété', href: '/renovation-paris-questions-copropriete' },
    { label: 'Contact & Devis', href: '/devis-renovation-paris' },
  ];

  return (
    <>
      <footer className="bg-slate-100 dark:bg-bg-primary text-slate-900 dark:text-white pt-16 pb-8 border-t border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-5 gap-12 pb-12 border-b border-slate-200 dark:border-slate-800">
            {/* Brand */}
            <div className="md:col-span-1">
              <Link
                to="/"
                className="flex items-center gap-2 mb-4 group"
                onClick={(e) => {
                  if (window.location.pathname === '/') {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
              >
                <Logo
                  iconSize={48}
                  nameClassName="font-serif text-2xl lg:text-3xl font-extrabold tracking-widest leading-none"
                  taglineClassName="text-[9px] uppercase tracking-[0.3em] text-gold-500 font-bold mt-2"
                  variant="dark"
                />
              </Link>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                {footer.description}
              </p>
              <div className="flex gap-3">
                <motion.a
                  href={content.social?.instagram || 'https://instagram.com'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-200 dark:bg-neutral-800 flex items-center justify-center hover:bg-gold-500/20 transition-colors"
                  aria-label="Suivez-nous sur Instagram"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram className="w-4 h-4 text-slate-500 dark:text-slate-400 hover:text-gold-400" />
                </motion.a>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <div className="text-sm font-semibold uppercase tracking-wider mb-4">{footer.navigation}</div>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm text-slate-500 dark:text-slate-400 hover:text-gold-500 dark:hover:text-gold-400 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Savoir-faire */}
            <div>
              <div className="text-sm font-semibold uppercase tracking-wider mb-4">{footer.services}</div>
              <ul className="space-y-3">
                {savoirFaire.map((item) => (
                  <li key={item}>
                    <span className="text-sm text-slate-500 dark:text-slate-400">{item}</span>
                  </li>
                ))}
                <li className="pt-2">
                  <button
                    onClick={() => setModalContent({ title: footer.legal, body: footer.legalBody })}
                    className="text-sm text-slate-500 dark:text-slate-400 hover:text-gold-500 dark:hover:text-gold-400 transition-colors"
                  >
                    {footer.legal}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setModalContent({ title: footer.privacy, body: footer.privacyBody })}
                    className="text-sm text-slate-500 dark:text-slate-400 hover:text-gold-500 dark:hover:text-gold-400 transition-colors"
                  >
                    {footer.privacy}
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <div className="text-sm font-semibold uppercase tracking-wider mb-4">Contact</div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gold-400" />
                  <a href={`tel:${contact.info.phone.replace(/\s/g, '')}`} className="text-sm text-slate-500 dark:text-slate-400 hover:text-gold-500 dark:hover:text-gold-400 transition-colors">
                    {contact.info.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gold-400" />
                  <a href={`mailto:${contact.info.email}`} className="text-sm text-slate-500 dark:text-slate-400 hover:text-gold-500 dark:hover:text-gold-400 transition-colors">
                    {contact.info.email}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-gold-400 mt-0.5" />
                  <span className="text-sm text-slate-500 dark:text-slate-400">{contact.info.address}</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold uppercase tracking-wider mb-4">Guides travaux</div>
              <ul className="space-y-3">
                {seoLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm text-slate-500 dark:text-slate-400 hover:text-gold-500 dark:hover:text-gold-400 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row items-center justify-start gap-x-8 gap-y-4 border-t border-slate-200 dark:border-slate-800">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} D.A. BAT. {footer.rights}
            </p>
          </div>
        </div>
      </footer>

      {/* Legal Modal (Native Dialog) */}
      <dialog
        ref={dialogRef}
        className="bg-transparent p-4 w-full h-full max-w-none max-h-none backdrop:bg-black/60 z-50 open:flex items-center justify-center m-0 fixed inset-0"
        onClick={(e) => {
          if (e.target === dialogRef.current) {
            handleClose();
          }
        }}
        onCancel={handleClose}
      >
        {modalContent && (
          <div className="bg-white dark:bg-bg-primary rounded-2xl max-w-lg w-full p-8 max-h-[80vh] overflow-y-auto border border-slate-200 dark:border-neutral-800 shadow-2xl relative">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white">{modalContent.title}</h3>
              <button
                onClick={handleClose}
                className="w-8 h-8 rounded-full bg-slate-100 dark:bg-neutral-800 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-neutral-700 transition-colors"
                aria-label="Fermer"
              >
                <X className="w-4 h-4 text-slate-900 dark:text-white" />
              </button>
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
              {modalContent.body}
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
