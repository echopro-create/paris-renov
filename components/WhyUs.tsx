import React, { useRef } from 'react';
import { ContentData } from '../types';
import * as Icons from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface WhyUsProps {
  content: ContentData['whyUs'];
  common: ContentData['common'];
}

interface AnimatedWordProps {
  word: string;
  scrollYProgress: any;
  index: number;
  total: number;
}

const AnimatedWord: React.FC<AnimatedWordProps> = ({ word, scrollYProgress, index, total }) => {
  const start = index / total;
  const end = start + (1 / total);
  const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);

  return (
    <motion.span
      style={{ opacity }}
      className="mr-1.5 transition-colors duration-200"
    >
      {word}
    </motion.span>
  );
};

const WhyUs: React.FC<WhyUsProps> = ({ content }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const words = content.subtitle.split(" ");

  return (
    <section id="expertise" ref={containerRef} className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold tracking-widest text-gold-600 uppercase mb-6">{content.title}</h2>
            <div className="font-serif text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-8">
              {words.map((word, i) => (
                <AnimatedWord
                  key={i}
                  word={word}
                  scrollYProgress={scrollYProgress}
                  index={i}
                  total={words.length}
                />
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-8 mt-12">
              {content.features.map((feature, index) => {
                const Icon = (Icons as any)[feature.icon] || Icons.CheckCircle2;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-gold-600 shrink-0">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{feature.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Expertise Artisanal"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold-500 rounded-2xl -z-10 animate-pulse"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-gold-200 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;