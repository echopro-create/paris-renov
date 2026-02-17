import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../constants';
import { ShieldCheck, FileText, Clock, Award } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck,
  FileText,
  Clock,
  Award,
};

export default function WhyUs() {
  const { whyUs } = content;

  return (
    <section id="expertise" className="py-24 md:py-32 bg-paris-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 mb-6">
            <span className="text-gold-600 text-xs font-semibold tracking-[0.2em] uppercase">ENGAGEMENT QUALITÉ</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            {whyUs.title}
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            {whyUs.subtitle}
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image with Quote */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=800&auto=format&fit=crop"
              alt="Artisan au travail"
              className="rounded-2xl shadow-2xl w-full aspect-[4/5] object-cover"
            />
            {/* Quote Overlay */}
            {whyUs.quote && (
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <p className="font-serif text-slate-900 italic text-sm leading-relaxed">
                  "{whyUs.quote}"
                </p>
                {whyUs.quoteAuthor && (
                  <p className="text-gold-600 text-xs mt-2 font-semibold">{whyUs.quoteAuthor}</p>
                )}
              </div>
            )}
          </motion.div>

          {/* Right: Features */}
          <div className="space-y-6">
            {whyUs.features.map((feature, index) => {
              const Icon = iconMap[feature.icon] || ShieldCheck;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}