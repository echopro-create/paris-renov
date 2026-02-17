import { motion } from 'framer-motion';
import { content } from '../constants';

export default function Process() {
  const { process } = content;

  return (
    <section id="process" className="py-24 md:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-400/30 bg-gold-500/10 mb-6">
            <span className="text-gold-400 text-xs font-semibold tracking-[0.2em] uppercase">{process.badge}</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4">
            {process.title}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {process.subtitle}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-4 gap-6">
          {process.steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-gold-400/30 transition-all duration-300 h-full">
                {/* Step Number */}
                <div className="w-12 h-12 rounded-full bg-gold-500/10 border border-gold-400/30 flex items-center justify-center mb-6">
                  <span className="text-gold-400 font-bold text-sm">{step.number}</span>
                </div>

                {/* Content */}
                <h3 className="font-serif text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
              </div>

              {/* Connector Line (desktop only) */}
              {index < process.steps.length - 1 && (
                <div className="hidden md:block absolute top-10 -right-3 w-6 h-px bg-gold-400/30" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}