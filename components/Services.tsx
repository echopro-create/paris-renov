import { motion } from 'framer-motion';
import { content } from '../constants';
import SkeletonImage from './SkeletonImage';

export default function Services() {
  const { services } = content;

  return (
    <section id="services" className="py-24 md:py-32 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 pt-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 dark:bg-gold-500/20 mb-6">
            <span className="text-gold-600 dark:text-gold-400 text-xs font-semibold tracking-[0.2em] uppercase">SERVICES</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {services.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
            {services.subtitle}
          </p>
        </motion.div>

        {/* Cards Grid - 4 columns */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.items.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: 'easeOut' }
              }}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-gold-500/30 transition-all duration-500 cursor-pointer"
            >
              {/* Background Image with Optimization */}
              <div className="aspect-[4/5] relative overflow-hidden">
                <SkeletonImage
                  src={service.image}
                  alt={service.title}
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  width={600}
                  height={750}
                  quality={85}
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Shine Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    backgroundSize: '200% 100%',
                    animation: 'shine 1.5s infinite',
                  }}
                />
              </div>

              {/* Glassmorphism Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 py-3 px-4 text-white backdrop-blur-sm bg-gradient-to-t from-black/80 via-black/20 to-transparent border-t border-white/10 flex flex-col justify-end text-center transition-all duration-500 group-hover:bg-black/60 group-hover:backdrop-blur-md">
                <div className="min-h-[3.5rem] flex items-center justify-center">
                  <h3 className="font-serif text-xl font-bold group-hover:text-gold-300 transition-colors leading-tight drop-shadow-lg">
                    {service.title}
                  </h3>
                </div>
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                  <div className="overflow-hidden">
                    <p className="text-sm text-slate-200 leading-relaxed pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}