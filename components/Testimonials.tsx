import { motion } from 'framer-motion';
import { content } from '../constants';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const { testimonials } = content;

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-white dark:bg-neutral-900">
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
            <span className="text-gold-600 dark:text-gold-400 text-xs font-semibold tracking-[0.2em] uppercase">{testimonials.badge}</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {testimonials.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto mb-6">
            {testimonials.subtitle}
          </p>
          {/* Google Trust Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
            <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" aria-label="Google">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
              ))}
            </div>
            <span className="text-sm font-semibold text-slate-900 dark:text-white">4.9/5</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">sur Google</span>
          </div>
        </motion.div>


        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.items.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{
                y: -6,
                transition: { duration: 0.3, ease: 'easeOut' }
              }}
              className="relative bg-white/80 dark:bg-neutral-800/80 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 dark:border-neutral-700/50 before:absolute before:inset-0 before:rounded-2xl before:p-[1px] before:bg-gradient-to-br before:from-gold-400/50 before:to-transparent before:-z-10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <Quote className="absolute -top-1 -left-1 w-8 h-8 text-gold-400/30 dark:text-gold-400/40" />
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed pl-4 italic">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-700">
                {testimonial.avatar && (
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-gold-400/50"
                  />
                )}
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white text-sm">{testimonial.name}</div>
                  <div className="text-xs text-slate-500">{testimonial.role} — {testimonial.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}