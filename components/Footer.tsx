import React, { useState } from 'react';
import { ContentData } from '../types';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import Modal from './Modal';

interface FooterProps {
  content: ContentData['footer'];
}

const Footer: React.FC<FooterProps> = ({ content }) => {
  const [modalContent, setModalContent] = useState<{ title: string; body: string } | null>(null);

  const openLegal = (e: React.MouseEvent) => {
    e.preventDefault();
    setModalContent({
      title: content.legal,
      body: "ParisRenov SAS\nSiège social : 12 Avenue des Champs-Élysées, 75008 Paris\nRCS Paris B 123 456 789\nCapital social : 50 000 €\nDirecteur de la publication : Jean Dupont\nHébergeur : Vercel Inc."
    });
  };

  const openPrivacy = (e: React.MouseEvent) => {
    e.preventDefault();
    setModalContent({
      title: content.privacy,
      body: "Nous respectons votre vie privée. Les informations recueillies sur ce formulaire sont enregistrées dans un fichier informatisé par ParisRenov pour la gestion de notre clientèle.\n\nElles sont conservées pendant 3 ans et sont destinées au service commercial.\n\nConformément à la loi « informatique et libertés », vous pouvez exercer votre droit d'accès aux données vous concernant et les faire rectifier en contactant : contact@parisrenov.fr"
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
                Votre partenaire de confiance pour tous travaux de rénovation à Paris et en Île-de-France. Excellence, précision et savoir-faire français depuis 2008.
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
              <h4 className="text-white font-bold mb-6">Services</h4>
              <ul className="space-y-4">
                <li><a href="#services" className="hover:text-gold-400 transition-colors">Rénovation d'Intérieur</a></li>
                <li><a href="#services" className="hover:text-gold-400 transition-colors">Peinture & Décoration</a></li>
                <li><a href="#services" className="hover:text-gold-400 transition-colors">Plomberie</a></li>
                <li><a href="#services" className="hover:text-gold-400 transition-colors">Parquets & Sols</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Légal</h4>
              <ul className="space-y-4">
                <li><button onClick={openLegal} className="hover:text-gold-400 transition-colors text-left">{content.legal}</button></li>
                <li><button onClick={openPrivacy} className="hover:text-gold-400 transition-colors text-left">{content.privacy}</button></li>
                <li className="text-sm text-slate-500 pt-4">{content.areas}</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} ParisRenov. {content.rights}</p>
            <p>Designed with precision.</p>
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