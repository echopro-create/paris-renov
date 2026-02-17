import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, ChevronDown } from 'lucide-react';
import { ContentData } from '../types';

interface HeroProps {
  content: ContentData['hero'];
}

const Hero: React.FC<HeroProps & { common: ContentData['common'] }> = ({ content, common }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden text-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/hero-bg.png')`, // Decorative blue paint texture
          }}
        />
        {/* Dark overlay with noise/texture feel */}
        <div className="absolute inset-0 bg-[#1a1c22]/85 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1c22]/40 to-[#1a1c22]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl flex flex-col items-center"
        >
          {/* Services Pill Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#3d424d]/40 backdrop-blur-md border border-white/10 mb-12 text-xs font-bold text-gold-400 tracking-[0.2em] uppercase"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            <span>Peinture • Parquet • Rénovation</span>
            <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
          </motion.div>

          <h1 className="font-serif text-[clamp(2.5rem,8vw,5.5rem)] font-bold leading-[1.05] mb-8 tracking-tight text-white">
            L'Art de la <br />
            Rénovation <br />
            <span className="text-gold-500 italic">Parisienne.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl font-light">
            {content.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full">
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center px-10 py-4 bg-gold-500 text-slate-900 rounded-full font-bold text-lg hover:bg-gold-400 transition-all duration-300 shadow-xl overflow-hidden"
            >
              <span className="relative z-10">{content.ctaPrimary}</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center justify-center px-10 py-4 bg-white/5 border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300 backdrop-blur-md"
            >
              {content.ctaSecondary}
            </a>
          </div>

          {/* Stats removed from Hero to match the minimalist look of the screenshot */}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/30 animate-bounce hidden md:block"
      >
        <ChevronDown size={40} strokeWidth={1} />
      </motion.div>
    </section>
  );
};

export default Hero;