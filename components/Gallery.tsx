import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../constants';
import { Instagram, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import SkeletonImage from './SkeletonImage';
import { useParallax } from '../lib/hooks/useParallax';

export default function Gallery() {
  const { gallery } = content;
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIdx === null) return;

      if (e.key === 'Escape') {
        setLightboxIdx(null);
        setZoomLevel(1);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIdx(prev => prev !== null && prev > 0 ? prev - 1 : gallery.items.length - 1);
        setZoomLevel(1);
      } else if (e.key === 'ArrowRight') {
        setLightboxIdx(prev => prev !== null && prev < gallery.items.length - 1 ? prev + 1 : 0);
        setZoomLevel(1);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIdx, gallery.items.length]);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 dark:bg-gold-500/20 mb-6">
            <span className="text-gold-600 dark:text-gold-400 text-xs font-semibold tracking-[0.2em] uppercase">{gallery.badge}</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {gallery.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
            {gallery.subtitle}
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {gallery.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${item.span}`}
              onClick={() => setLightboxIdx(index)}
              whileHover={{ scale: 1.02 }}
            >
              <SkeletonImage
                src={item.src}
                alt={item.alt}
                containerClassName="w-full h-full"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                width={800}
                height={600}
                quality={85}
                priority={index < 4}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-end">
                <div>
                  <h4 className="text-white font-semibold text-sm drop-shadow-lg">{item.title}</h4>
                  <p className="text-slate-300 text-xs drop-shadow-md">{item.location}</p>
                </div>
              </div>
              {/* Zoom hint on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-black/50 backdrop-blur-sm p-3 rounded-full">
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>
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
            className="inline-flex items-center gap-2 px-8 py-3 border border-slate-200 dark:border-slate-700 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 hover:border-gold-400 hover:text-gold-600 dark:hover:text-gold-400 transition-all"
          >
            <Instagram className="w-4 h-4" />
            Suivre nos chantiers sur Instagram
          </a>
        </div>
      </div>

      {/* Enhanced Lightbox with Navigation */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => {
              setLightboxIdx(null);
              setZoomLevel(1);
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => {
                setLightboxIdx(null);
                setZoomLevel(1);
              }}
              className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors z-50 focus-ring"
              aria-label="Fermer"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIdx(prev => prev !== null && prev > 0 ? prev - 1 : gallery.items.length - 1);
                setZoomLevel(1);
              }}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 z-50 focus-ring"
              aria-label="Image précédente"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIdx(prev => prev !== null && prev < gallery.items.length - 1 ? prev + 1 : 0);
                setZoomLevel(1);
              }}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 z-50 focus-ring"
              aria-label="Image suivante"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Image with Zoom */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: zoomLevel }}
              transition={{ duration: 0.3 }}
              className="relative max-w-full max-h-[85vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={gallery.items[lightboxIdx].src}
                alt={gallery.items[lightboxIdx].alt}
                className="max-w-full max-h-[85vh] rounded-lg object-contain cursor-zoom-in"
                onClick={() => setZoomLevel(prev => prev === 1 ? 2 : 1)}
                loading="eager"
              />
              {/* Zoom hint */}
              {zoomLevel === 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm flex items-center gap-2">
                  <ZoomIn className="w-4 h-4" />
                  Cliquez pour zoomer
                </div>
              )}
            </motion.div>

            {/* Image Info */}
            <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 text-center text-white">
              <h4 className="font-semibold text-base md:text-lg">{gallery.items[lightboxIdx].title}</h4>
              <p className="text-slate-300 text-sm">{gallery.items[lightboxIdx].location}</p>
              <p className="text-slate-400 text-xs mt-1">{lightboxIdx + 1} / {gallery.items.length}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}