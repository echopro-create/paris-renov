import React, { useState } from 'react';
import { ContentData } from '../types';
import { X, ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SkeletonImage from './SkeletonImage';

interface GalleryProps {
  content: ContentData['gallery'];
  common: ContentData['common'];
}

const Gallery: React.FC<GalleryProps> = ({ content, common }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Using curated local images and Unsplash fallback
  const images = [
    { src: "/assets/images/gallery_1_after.png", title: "Salon Eiffel", type: "Rénovation Complète", ratio: "aspect-square" },
    { src: "/assets/images/after_salon.png", title: "Salon Haussmann", type: "Rénovation", ratio: "aspect-[3/4]" },
    { src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", title: "Cuisine Moderne", type: "Agencement", ratio: "aspect-square" },
    { src: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", title: "Salle de Bain Marbre", type: "Sanitaire", ratio: "aspect-[3/4]" },
    { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", title: "Chambre Parentale", type: "Décoration", ratio: "aspect-[4/3]" },
    { src: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", title: "Escalier Bois", type: "Menuiserie", ratio: "aspect-[3/4]" }
  ];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <section id="gallery" className="py-32 bg-white relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold tracking-widest text-gold-600 uppercase mb-3">{common.portfolio}</h2>
            <h3 className="font-serif text-4xl text-slate-900 font-bold mb-4">{content.title}</h3>
            <p className="text-slate-600">{content.subtitle}</p>
          </div>
          <a href="#contact" className="hidden md:inline-block text-paris-dark font-semibold border-b-2 border-gold-500 hover:text-gold-600 transition-colors pb-1">
            {common.viewAll}
          </a>
        </div>

        {/* CSS Masonry Layout using Columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImageIndex(idx)}
              className="group relative break-inside-avoid overflow-hidden rounded-sm cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <SkeletonImage
                src={img.src}
                alt={img.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay with more sophisticated hover effect */}
              <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-8">
                <div className="flex justify-end">
                  <div className="w-10 h-10 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
                    <Plus size={20} />
                  </div>
                </div>
                <div>
                  <span className="text-gold-400 text-xs font-bold uppercase tracking-wider mb-2 block">{img.type}</span>
                  <p className="text-white font-serif text-2xl">{img.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <a href="#contact" className="inline-block text-paris-dark font-semibold border-b-2 border-gold-500 hover:text-gold-600 transition-colors pb-1">
            {common.viewAll}
          </a>
        </div>
      </div>

      {/* Premium Lightbox */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md" onClick={() => setSelectedImageIndex(null)}>
            <button
              className="absolute top-6 right-6 p-2 text-white/50 hover:text-white transition-colors z-20"
              onClick={() => setSelectedImageIndex(null)}
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 p-4 rounded-full border border-white/10 text-white/50 hover:bg-white/10 hover:text-white transition-all z-20 hidden md:flex"
              onClick={handlePrev}
              aria-label="Previous image"
            >
              <ChevronLeft size={32} />
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-full border border-white/10 text-white/50 hover:bg-white/10 hover:text-white transition-all z-20 hidden md:flex"
              onClick={handleNext}
              aria-label="Next image"
            >
              <ChevronRight size={32} />
            </button>

            <motion.div
              key={selectedImageIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-[90vw] max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <SkeletonImage
                src={images[selectedImageIndex].src}
                alt={images[selectedImageIndex].title}
                className="max-w-full max-h-[85vh] object-contain rounded-sm shadow-2xl"
              />
              <div className="mt-4 text-center">
                <p className="font-serif text-2xl text-white tracking-wide">{images[selectedImageIndex].title}</p>
                <p className="text-sm text-gold-500 uppercase tracking-widest mt-1">{images[selectedImageIndex].type}</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;