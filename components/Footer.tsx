import { useState } from 'react';
import { content } from '../constants';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Linkedin, X, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const { footer, nav, contact } = content;
  const [modalContent, setModalContent] = useState<{ title: string; body: string } | null>(null);

  const navLinks = [
    { label: nav.services, href: '#services' },
    { label: nav.gallery, href: '#gallery' },
    { label: nav.process, href: '#process' },
    { label: nav.whyUs, href: '#expertise' },
    { label: nav.contact, href: '#contact' },
  ];

  const savoirFaire = [
    'Peinture & Décoration',
    'Plâtrerie & Cloisons',
    'Parquets & Sols',
  ];

  return (
    <>
      <footer className="bg-slate-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-4 gap-12 pb-12 border-b border-slate-800">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gold-500/10 border border-gold-400/30 flex items-center justify-center">
                  <span className="text-gold-400 font-serif font-bold text-sm">A</span>
                </div>
                <span className="font-serif text-lg font-bold tracking-wide">ATELIER ALEXEI</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                {footer.description}
              </p>
              <div className="flex gap-3">
                <motion.a
                  href="#"
                  className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gold-500/20 transition-colors"
                  aria-label="Suivez-nous sur Instagram"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram className="w-4 h-4 text-slate-400 hover:text-gold-400" />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gold-500/20 transition-colors"
                  aria-label="Suivez-nous sur Facebook"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Facebook className="w-4 h-4 text-slate-400 hover:text-gold-400" />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gold-500/20 transition-colors"
                  aria-label="Suivez-nous sur LinkedIn"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-4 h-4 text-slate-400 hover:text-gold-400" />
                </motion.a>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">{footer.navigation}</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm text-slate-400 hover:text-gold-400 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Savoir-faire */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">{footer.services}</h4>
              <ul className="space-y-3">
                {savoirFaire.map((item) => (
                  <li key={item}>
                    <span className="text-sm text-slate-400">{item}</span>
                  </li>
                ))}
                <li className="pt-2">
                  <button
                    onClick={() => setModalContent({ title: footer.legal, body: footer.legalBody })}
                    className="text-sm text-slate-400 hover:text-gold-400 transition-colors"
                  >
                    {footer.legal}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setModalContent({ title: footer.privacy, body: footer.privacyBody })}
                    className="text-sm text-slate-400 hover:text-gold-400 transition-colors"
                  >
                    {footer.privacy}
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gold-400" />
                  <a href={`tel:${contact.info.phone.replace(/\s/g, '')}`} className="text-sm text-slate-400 hover:text-gold-400 transition-colors">
                    {contact.info.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gold-400" />
                  <a href={`mailto:${contact.info.email}`} className="text-sm text-slate-400 hover:text-gold-400 transition-colors">
                    {contact.info.email}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-gold-400 mt-0.5" />
                  <span className="text-sm text-slate-400">{contact.info.address}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} Atelier Alexei. {footer.rights}
            </p>
            <p className="text-xs text-slate-500">
              {footer.designedBy}
            </p>
          </div>
        </div>
      </footer>

      {/* Legal Modal */}
      {modalContent && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4" onClick={() => setModalContent(null)}>
          <div className="bg-white rounded-2xl max-w-lg w-full p-8 max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-xl font-bold text-slate-900">{modalContent.title}</h3>
              <button onClick={() => setModalContent(null)} className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
              {modalContent.body}
            </div>
          </div>
        </div>
      )}
    </>
  );
}