import React, { useRef } from 'react';
import { ContentData } from '../types';
import * as LucideIcons from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface WhyUsProps {
  content: ContentData['whyUs'];
}

// Component for the revealing text effect
const ScrollyText = ({ text }: { text: string }) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start 0.9', 'start 0.25']
  });

  const words = text.split(" ");

  return (
    <p 
      ref={element}
      className="text-slate-600 text-lg mb-10 leading-relaxed border-b border-slate-100 pb-8 flex flex-wrap"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        // Create a dedicated opacity transform for each word
        const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
        
        return (
          <motion.span 
            key={i} 
            style={{ opacity }} 
            className="mr-1.5 transition-colors duration-200"
          >
            {word}
          </motion.span>
        );
      })}
    </p>
  );
};

const WhyUs: React.FC<WhyUsProps> = ({ content }) => {
  return (
    <section id="why-us" className="py-32 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center relative">
          
          {/* Large Image Side (7 cols) */}
          <div className="lg:col-span-7 relative z-10 order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                alt="Construction detail" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-slate-900/20"></div>
            </motion.div>
            
            {/* Floating decorative element */}
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-gold-500/10 rounded-full blur-3xl -z-10"></div>
          </div>

          {/* Content Side (Overlapping, 6 cols) */}
          <div className="lg:col-span-6 lg:-ml-24 relative z-20 order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-10 md:p-14 shadow-xl rounded-sm border-l-4 border-gold-500"
            >
              <h2 className="text-sm font-bold tracking-widest text-gold-600 uppercase mb-4">La Différence ParisRenov</h2>
              <h3 className="font-serif text-4xl lg:text-5xl font-bold mb-8 text-slate-900 leading-tight">
                {content.title}
              </h3>
              
              {/* ScrollyTelling Text Component */}
              <ScrollyText text={content.subtitle} />
              
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
                {content.features.map((feature, idx) => {
                  const IconComponent = (LucideIcons as any)[feature.icon] || LucideIcons.Check;
                  return (
                    <div key={idx} className="group cursor-default">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-gold-500 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent size={24} strokeWidth={1.5} />
                        </div>
                        <h4 className="font-bold text-slate-900 font-serif text-lg group-hover:text-gold-600 transition-colors">{feature.title}</h4>
                      </div>
                      <p className="text-sm text-slate-500 leading-relaxed pl-9 border-l border-slate-200 group-hover:border-gold-300 transition-colors">
                        {feature.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;