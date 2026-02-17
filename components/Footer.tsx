import React, { useState } from 'react';
import { ContentData } from '../types';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import Modal from './Modal';

interface FooterProps {
  content: ContentData['footer'];
  common: ContentData['common'];
}

const Footer: React.FC<FooterProps> = ({ content }) => {
  const [modalContent, setModalContent] = useState<{ title: string; body: string } | null>(null);

  const openLegal = (e: React.MouseEvent) => {
    e.preventDefault();
    setModalContent({
      title: content.legal,
      body: content.legalBody
    });
  };

  const openPrivacy = (e: React.MouseEvent) => {
    e.preventDefault();
    setModalContent({
      title: content.privacy,
      body: content.privacyBody
    });
  };

  return (
    <>
      <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <a href="#" className="font-serif text-3xl font-bold tracking-tight text-white block mb-6">
                Paris<span className="text-gold-500">Renov</span>
              </a>
              <p className="max-w-md leading-relaxed mb-6">
                {content.description}
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">{content.services}</h4>
              <ul className="space-y-4">
                <li><a href="#services" className="hover:text-gold-400 transition-colors">Rénovation d'Intérieur</a></li>
                <li><a href="#services" className="hover:text-gold-400 transition-colors">Peinture & Décoration</a></li>
                <li><a href="#services" className="hover:text-gold-400 transition-colors">Plomberie</a></li>
                <li><a href="#services" className="hover:text-gold-400 transition-colors">Parquets & Sols</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">{content.legal}</h4>
              <ul className="space-y-4">
                <li><button onClick={openLegal} className="hover:text-gold-400 transition-colors text-left">{content.legal}</button></li>
                <li><button onClick={openPrivacy} className="hover:text-gold-400 transition-colors text-left">{content.privacy}</button></li>
                <li className="text-sm text-slate-500 pt-4">{content.areas}</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} ParisRenov. {content.rights}</p>
            <p>{content.designedBy}</p>
          </div>
        </div>
      </footer>

      <Modal
        isOpen={!!modalContent}
        onClose={() => setModalContent(null)}
        title={modalContent?.title}
      >
        <div className="whitespace-pre-wrap text-slate-600 leading-relaxed">
          {modalContent?.body}
        </div>
      </Modal>
    </>
  );
};

export default Footer;