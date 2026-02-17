import { useState } from 'react';
import { motion } from 'framer-motion';
import { content } from '../constants';
import { Instagram, X } from 'lucide-react';

const galleryItems = [
  {
    src: 'https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?q=80&w=900&auto=format&fit=crop',
    alt: 'Salon haussmannien rénové',
    title: 'Salon Haussmannien',
    location: 'Paris 8e',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop',
    alt: 'Rénovation cuisine moderne',
    title: 'Cuisine Moderne',
    location: 'Neuilly',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop',
    alt: 'Chambre parentale',
    title: 'Suite Parentale',
    location: 'Paris 16e',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1558603668-6570496b66f8?q=80&w=600&auto=format&fit=crop',
    alt: 'Salle de bain marbre',
    title: 'Salle de Bain',
    location: 'Paris 7e',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop',
    alt: 'Bureau contemporain',
    title: 'Bureau Contemporain',
    location: 'Paris 6e',
    span: '',
  },
];

export default function Gallery() {
  const { gallery } = content;
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 mb-6">
            <span className="text-gold-600 text-xs font-semibold tracking-[0.2em] uppercase">{gallery.badge}</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            {gallery.title}
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            {gallery.subtitle}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${item.span}`}
              onClick={() => setLightboxIdx(index)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                <p className="text-slate-300 text-xs">{item.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-12">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:border-gold-400 hover:text-gold-600 transition-all"
          >
            <Instagram className="w-4 h-4" />
            Suivre nos chantiers sur Instagram
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxIdx(null)}
        >
          <button
            onClick={() => setLightboxIdx(null)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
          <img
            src={galleryItems[lightboxIdx].src}
            alt={galleryItems[lightboxIdx].alt}
            className="max-w-full max-h-[85vh] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </section>
  );
}