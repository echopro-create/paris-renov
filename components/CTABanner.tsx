import { ArrowRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { content } from '../constants';

export default function CTABanner() {
    const { ctaBanner } = content;

    return (
        <section className="py-24 md:py-32 bg-slate-900 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">
                        {ctaBanner.title}{' '}
                        <span className="text-gold-400">{ctaBanner.titleHighlight}</span>
                    </h2>
                    <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
                        {ctaBanner.subtitle}
                    </p>
                </motion.div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="#contact"
                        className="group inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-slate-900 rounded-full font-semibold text-base hover:bg-gold-400 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    >
                        {ctaBanner.ctaPrimary}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href={`tel:${ctaBanner.ctaSecondary.replace(/\s/g, '')}`}
                        className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white rounded-full font-medium text-base hover:bg-white/10 transition-all"
                    >
                        <Phone className="w-4 h-4" />
                        {ctaBanner.ctaSecondary}
                    </a>
                </div>
            </div>
        </section>
    );
}
