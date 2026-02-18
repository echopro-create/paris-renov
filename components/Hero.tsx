import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { content } from '../constants';
import { ShieldCheck, Clock, Users, Award, ChevronRight } from 'lucide-react';

export default function Hero() {
  const { hero, common } = content;
  const sectionRef = useRef<HTMLElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setPrefersReducedMotion(
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  }, []);

  // Track scroll progress of the hero section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // === Scroll-linked transforms (no sticky, just transforms) ===
  const bgScale = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [1, 1] : [1, 1.15]);
  const bgY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, 150]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.4], prefersReducedMotion ? [0, 0] : [0, -80]);

  // Stagger animation for elements on load
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Custom icons for stats
  const statIcons = [
    <Award key="award" className="w-5 h-5" />,
    <Users key="users" className="w-5 h-5" />,
    <ShieldCheck key="shield" className="w-5 h-5" />,
    <Clock key="clock" className="w-5 h-5" />,
  ];

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with parallax */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ scale: bgScale, y: bgY }}
      >
        <img
          src="/images/hero-bg-real.webp"
          alt="Atelier Alexei - Travaux de rénovation parisienne"
          className="w-full h-full object-cover"
          fetchPriority="high"
          loading="eager"
          decoding="sync"
        />
      </motion.div>

      {/* Overlay — gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/65" />

      {/* Content — fades and moves up on scroll */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pt-16 pb-24 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-gold-400/30 bg-white/5 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
            <span className="text-gold-400 text-xs font-semibold tracking-[0.25em] uppercase">
              {common.expertBadge}
            </span>
          </div>
        </motion.div>

        {/* Title with stagger animation */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-[clamp(2rem,5.5vw,4rem)] font-bold leading-[1.05] mb-5 tracking-tight text-white [text-shadow:_0_2px_16px_rgba(0,0,0,0.4)]"
        >
          <span className="block text-[0.6em] font-sans font-light tracking-[0.15em] uppercase text-white/80 mb-3 [text-shadow:_0_1px_10px_rgba(0,0,0,0.6)]">
            L'Art de la
          </span>
          Rénovation{' '}
          <span className="italic text-gold-400 drop-shadow-[0_0_30px_rgba(212,175,55,0.3)]">
            Parisienne.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base md:text-lg text-slate-300/90 mb-6 md:mb-8 leading-relaxed max-w-xl mx-auto font-light text-balance px-2"
        >
          {hero.subtitle.split('exigence absolue')[0]}
          <span className="text-gold-400 font-medium">exigence absolue</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]"
          >
            {/* Gradient background */}
            <span className="absolute inset-0 bg-gradient-to-r from-gold-500 to-gold-600 transition-all duration-300 group-hover:from-gold-600 group-hover:to-gold-500" />
            {/* Shine effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            <span className="relative text-white">{hero.ctaPrimary}</span>
            <ChevronRight className="relative w-5 h-5 text-white transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-7 py-3 border border-white/20 text-white rounded-full font-medium text-sm hover:bg-white/10 transition-all active:bg-white/15"
          >
            {hero.ctaSecondary}
          </a>
        </motion.div>
      </motion.div>

      {/* Stats Bar at bottom */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 w-full max-w-3xl px-4"
      >
        <div className="bg-white/8 backdrop-blur-lg border border-white/10 rounded-xl grid grid-cols-2 md:grid-cols-4 overflow-hidden">
          {hero.stats.map((stat, i) => {
            const isNumeric = /^[0-9+]+$/.test(stat.value);
            return (
              <div
                key={i}
                className={`px-3 py-3 text-center flex flex-col items-center justify-center ${i !== hero.stats.length - 1 ? 'border-r border-white/10' : ''
                  }`}
              >
                <div className="text-gold-400/60 mb-1.5">
                  {React.cloneElement(statIcons[i] as React.ReactElement, {
                    className: 'w-3.5 h-3.5',
                  })}
                </div>
                <div
                  className={`${isNumeric
                    ? 'text-lg sm:text-xl font-serif font-semibold'
                    : 'text-sm sm:text-base font-sans font-medium'
                    } text-white leading-none mb-1.5`}
                >
                  {stat.value}
                </div>
                <div className="text-[9px] sm:text-[10px] md:text-xs text-white/50 font-medium tracking-wide uppercase leading-tight">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>


    </section>
  );
}
