import { motion } from 'framer-motion';

interface SectionHeaderProps {
    badge: string;
    title: string;
    subtitle: string;
    /** Additional content after subtitle (e.g., trust badges) */
    children?: React.ReactNode;
    className?: string;
}

/**
 * Reusable section header with badge + title + subtitle pattern.
 * Eliminates duplication across Services, Gallery, Testimonials, Contact, Process sections.
 */
export default function SectionHeader({ badge, title, subtitle, children, className = '' }: SectionHeaderProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-center mb-16 ${className}`}
        >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 dark:bg-gold-500/20 mb-6">
                <span className="text-gold-600 dark:text-gold-400 text-xs font-semibold tracking-[0.2em] uppercase">{badge}</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                {title}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
                {subtitle}
            </p>
            {children}
        </motion.div>
    );
}
