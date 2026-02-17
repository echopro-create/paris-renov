import { motion } from 'framer-motion';
import { content } from '../constants';
import { ArrowRight, Phone } from 'lucide-react';

export default function Hero() {
  const { hero, common } = content;

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg-real.webp"
          alt="Atelier Alexei - Travaux de rénovation"
          className="w-full h-full object-cover"
        />

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
          <h1 className="font-serif text-[clamp(2.5rem,8vw,5.5rem)] font-bold leading-[1.05] mb-6 tracking-tight text-white text-balance">
            {hero.title} <span className="italic text-gold-400">Parisienne.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto font-light text-balance">
            {hero.subtitle.split('exigence absolue')[0]}
            <span className="text-gold-400 font-medium">exigence absolue</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-slate-900 rounded-full font-semibold text-base hover:bg-gold-400 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              {hero.ctaPrimary}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white rounded-full font-medium text-base hover:bg-white/10 transition-all"
            >
              {hero.ctaSecondary}
            </a>
          </div>
        </motion.div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 w-full max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-black/50 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10"
        >
          {hero.stats.map((stat, i) => (
            <div key={i} className="px-6 py-6 text-center group hover:bg-white/5 transition-colors duration-300 first:rounded-l-2xl last:rounded-r-2xl">
              <div className="text-3xl md:text-4xl font-bold text-white font-serif mb-1">{stat.value}</div>
              <div className="text-xs text-gold-400 font-medium tracking-widest uppercase">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}