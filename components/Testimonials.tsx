import { motion } from 'framer-motion';
import { content } from '../constants';
import { Star, Quote } from 'lucide-react';
import SkeletonImage from './SkeletonImage';

export default function Testimonials() {
  const { testimonials } = content;

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-white dark:bg-bg-primary">
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
              className="relative bg-white/80 dark:bg-bg-secondary/80 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 dark:border-neutral-700/50 before:absolute before:inset-0 before:rounded-2xl before:p-[1px] before:bg-gradient-to-br before:from-gold-400/50 before:to-transparent before:-z-10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500"
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
                  <SkeletonImage
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    containerClassName="w-10 h-10 rounded-full overflow-hidden ring-2 ring-gold-400/50 flex-shrink-0"
                    className="w-full h-full object-cover"
                    width={40}
                    height={40}
                    priority={false}
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