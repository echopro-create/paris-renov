import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, ChevronDown } from 'lucide-react';
import { ContentData } from '../types';

interface HeroProps {
  content: ContentData['hero'];
}

const Hero: React.FC<HeroProps & { common: ContentData['common'] }> = ({ content, common }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
          <source src="https://videos.pexels.com/video-files/7578546/7578546-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-slate-900/20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-white max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8 text-sm font-medium text-gold-400 tracking-wide uppercase"
          >
            <Star size={14} className="fill-gold-400" />
            <span>{common.expertBadge}</span>
          </motion.div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 tracking-tight">
            {content.title}
          </h1>

          <p className="text-lg md:text-xl text-slate-200 mb-12 leading-relaxed max-w-lg font-light">
            {content.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-white rounded-lg font-semibold text-lg hover:bg-gold-600 transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:-translate-y-1"
            >
              {content.ctaPrimary}
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/30 text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all backdrop-blur-sm"
            >
              {content.ctaSecondary}
            </a>
          </div>

          <div className="mt-20 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
            {content.stats.map((stat, index) => (
              <div key={index}>
                <p className="text-3xl md:text-4xl font-serif font-bold text-white mb-1">{stat.value}</p>
                <p className="text-xs md:text-sm text-slate-400 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce hidden md:block"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;