import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { content } from '../constants';
import { ArrowRight, ShieldCheck, Clock, Users, Award } from 'lucide-react';
import { useParallax } from '../lib/hooks/useParallax';

export default function Hero() {
  const { hero, common } = content;
  const [shouldDisableParallax, setShouldDisableParallax] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;
    setShouldDisableParallax(prefersReducedMotion || isMobile);
  }, []);

  const { ref: bgRef, offsetY: bgOffset } = useParallax({ speed: 0.3, disabled: shouldDisableParallax });

  // Custom icons for stats
  const statIcons = [
    <Award className="w-5 h-5 text-gold-400/80 mb-2" />,
    <Users className="w-5 h-5 text-gold-400/80 mb-2" />,
    <ShieldCheck className="w-5 h-5 text-gold-400/80 mb-2" />,
    <Clock className="w-5 h-5 text-gold-400/80 mb-2" />,
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={bgRef}
          className="absolute inset-0 will-change-transform"
          style={{ transform: `translateY(${bgOffset}px)` }}
        >
          <img
            src="/images/hero-bg-real.webp"
            alt="Atelier Alexei - Travaux de rénovation"
            className="w-full h-full object-cover"
            fetchPriority="high"
            loading="eager"
            decoding="sync"
          />
        </div>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold-400/30 bg-white/5 backdrop-blur-sm mb-6">
            <div className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
            <span className="text-gold-400 text-xs font-semibold tracking-[0.2em] uppercase">{common.expertBadge}</span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-[clamp(2rem,6vw,4.5rem)] font-bold leading-[1.05] mb-6 tracking-tight text-white text-balance">
            {hero.title} <span className="italic text-gold-400">Parisienne.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-xl text-slate-300 mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto font-light text-balance px-2">
            {hero.subtitle.split('exigence absolue')[0]}
            <span className="text-gold-400 font-medium">exigence absolue</span>.
          </p>

          {/* CTA Buttons - Mobile Optimized */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-gold-500 text-slate-900 rounded-full font-semibold text-sm sm:text-base hover:bg-gold-400 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:shadow-md"
            >
              {hero.ctaPrimary}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 border border-white/20 text-white rounded-full font-medium text-sm sm:text-base hover:bg-white/10 transition-all active:bg-white/15"
            >
              {hero.ctaSecondary}
            </a>
          </div>
        </motion.div>
      </div>

      {/* Stats Bar - Compact & Subtle */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 w-full max-w-4xl px-3 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-gold-400/20 rounded-xl shadow-lg grid grid-cols-2 md:grid-cols-4 overflow-hidden"
        >
          {hero.stats.map((stat, i) => {
            const isNumeric = /^[0-9+]+$/.test(stat.value);
            return (
              <div
                key={i}
                className={`px-3 py-3 sm:px-4 sm:py-3.5 text-center flex flex-col items-center justify-center min-w-0 ${i !== hero.stats.length - 1 ? 'border-r border-gold-400/15' : ''
                  }`}
              >
                {/* Icon - compact */}
                <div className="mb-1.5">
                  {statIcons[i] && React.cloneElement(statIcons[i] as React.ReactElement, {
                    className: 'w-4 h-4 sm:w-4.5 sm:h-4.5 text-gold-500/80'
                  })}
                </div>

                {/* Value - subtle gold */}
                <div className={`
                  ${isNumeric ? 'text-xl sm:text-2xl font-serif font-semibold' : 'text-base sm:text-lg font-sans font-medium'}
                  text-gold-600 dark:text-gold-500 leading-none mb-1.5
                `}>
                  {stat.value}
                </div>

                {/* Label - small & muted */}
                <div className="text-[8px] sm:text-[9px] text-slate-500 dark:text-slate-500 font-medium tracking-wide uppercase leading-tight px-1 line-clamp-2">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
