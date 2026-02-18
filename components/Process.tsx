import { motion } from 'framer-motion';
import { content } from '../constants';
import { ClipboardList, FileText, Hammer, Key, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Process() {
  const { process } = content;
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const icons = [ClipboardList, FileText, Hammer, Key];

  return (
    <section id="process" className="py-24 md:py-32 bg-gray-50 dark:bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-400/30 bg-gold-500/5 mb-6">
            <span className="text-gold-400 text-xs font-semibold tracking-[0.2em] uppercase">{process.badge}</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            {process.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            {process.subtitle}
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          {process.steps.map((step, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Connector Line (Desktop) */}
                {index < process.steps.length - 1 && (
                  <div className="hidden md:block absolute top-[2.5rem] left-1/2 w-full h-[1px] bg-gradient-to-r from-gold-500/20 via-gold-500/60 to-gold-500/20 -z-10 transform translate-x-1/2" />
                )}

                <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-gold-500/20 rounded-xl p-8 hover:border-gold-400 dark:hover:border-gold-500/50 transition-colors duration-500 h-full flex flex-col items-center text-center shadow-sm dark:shadow-none">
                  {/* Number Badge */}
                  <div className="absolute top-4 right-4 text-xs font-mono text-gold-600/50 dark:text-gold-500/40 border border-gold-500/20 px-2 py-1 rounded">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-20 h-20 rounded-full bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-gold-500/30 flex items-center justify-center text-gold-600 dark:text-gold-400 mb-6 group-hover:scale-105 group-hover:bg-slate-50 dark:group-hover:bg-slate-900 transition-all duration-300 shadow-[0_0_15px_-3px_rgba(212,175,55,0.1)]">
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Content */}
                  <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-gold-700 dark:group-hover:text-gold-200 transition-colors">{step.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-200 leading-relaxed opacity-90">{step.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* FAQ Section with Schema.org markup */}
        <div className="mt-24 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Questions Fréquentes
            </h3>
            <p className="text-slate-500 dark:text-slate-400">
              Tout ce que vous devez savoir sur notre processus
            </p>
          </motion.div>

          <div className="space-y-4">
            {process.faq.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm dark:shadow-none"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-slate-900/80 transition-colors focus-ring"
                  aria-expanded={openFaqIndex === index}
                >
                  <span className="font-semibold text-slate-900 dark:text-white pr-8">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gold-400 flex-shrink-0 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''
                      }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openFaqIndex === index ? 'max-h-48' : 'max-h-0'
                    }`}
                >
                  <p className="px-6 pb-5 text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": process.faq.map((item) => ({
                "@type": "Question",
                "name": item.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": item.answer
                }
              }))
            })
          }}
        />
      </div>
    </section>
  );
}