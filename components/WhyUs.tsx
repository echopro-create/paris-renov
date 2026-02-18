import { motion } from 'framer-motion';
import { content } from '../constants';
import { Check } from 'lucide-react';

export default function WhyUs() {
  const { whyUs } = content;

  return (
    <section id="why-us" className="py-24 md:py-32 bg-white dark:bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/5 mb-8">
              <span className="text-gold-600 text-xs font-semibold tracking-[0.2em] uppercase">{whyUs.badge}</span>
            </div>

            <h2 className="font-serif text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
              {whyUs.title}
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-lg mb-12 leading-relaxed">
              {whyUs.subtitle}
            </p>

            <div className="space-y-8">
              {whyUs.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start gap-6 pb-8 border-b border-slate-200 dark:border-slate-700 group-last:border-0 relative">
                    <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-500 transition-all duration-700 group-hover:w-full" />

                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 flex items-center justify-center text-gold-500 group-hover:border-gold-500 group-hover:text-gold-600 transition-colors duration-300">
                      <Check className="w-5 h-5" />
                    </div>

                    <div>
                      <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-gold-600 transition-colors">{feature.title}</h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Image (Asymmetrical/Editorial) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 relative"
          >
            {/* Main Image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src={whyUs.image}
                alt="Détail architectural"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-60" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-slate-50 dark:bg-slate-800 p-4 hidden md:block">
              <div className="w-full h-full border border-gold-500/30 flex items-center justify-center p-6 text-center">
                <div>
                  <span className="block text-3xl font-serif font-bold text-gold-600 mb-1">15+</span>
                  <span className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">Années d'Expérience</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}