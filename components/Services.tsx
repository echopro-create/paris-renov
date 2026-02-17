import React, { useState, useRef, MouseEvent } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { ContentData, ServiceItem } from '../types';
import * as LucideIcons from 'lucide-react';
import Modal from './Modal';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServicesProps {
  content: ContentData['services'];
}

// 3D Tilt Card Component
const TiltCard = ({ children, onClick }: { children: React.ReactNode, onClick: () => void }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set(clientX - left - width / 2);
    y.set(clientY - top - height / 2);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{
        transformStyle: "preserve-3d",
        transform: useMotionTemplate`perspective(1000px) rotateX(${mouseY}deg) rotateY(${mouseX}deg)`
      }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      className="h-full"
    >
      <motion.div 
        style={{ transform: "translateZ(20px)" }}
        className="group h-full p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-gold-200 hover:shadow-2xl hover:shadow-gold-500/10 transition-all duration-300 flex flex-col relative overflow-hidden"
      >
        {/* Shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-tr from-transparent via-white/50 to-transparent skew-x-12 translate-x-[-100%] group-hover:animate-shine" />
        
        {children}
      </motion.div>
    </motion.div>
  );
};

const Services: React.FC<ServicesProps> = ({ content }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <>
      <section id="services" className="py-24 bg-white relative z-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-gold-600 uppercase mb-3">Expertise</h2>
            <h3 className="font-serif text-4xl text-slate-900 font-bold mb-4">{content.title}</h3>
            <p className="text-slate-600">{content.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.items.map((item, index) => {
              // Dynamically get icon
              const IconComponent = (LucideIcons as any)[item.iconName] || LucideIcons.Hammer;
              
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="h-full"
                >
                  <TiltCard onClick={() => setSelectedService(item)}>
                    <div className="w-14 h-14 rounded-xl bg-white border border-slate-200 text-gold-600 flex items-center justify-center mb-6 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300 shadow-sm relative z-10">
                      <IconComponent size={28} strokeWidth={1.5} />
                    </div>
                    
                    <h4 className="font-serif text-xl font-bold text-slate-900 mb-3 relative z-10">{item.title}</h4>
                    <p className="text-slate-600 text-sm mb-6 leading-relaxed flex-grow relative z-10">{item.description}</p>
                    
                    <ul className="space-y-2 mb-6 relative z-10">
                      {item.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center text-xs font-medium text-slate-500">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold-400 mr-2"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>

                    <button 
                      className="w-full py-3 rounded-lg border border-slate-200 text-slate-600 text-sm font-semibold group-hover:bg-gold-500 group-hover:text-white group-hover:border-gold-500 transition-all flex items-center justify-center gap-2 relative z-10"
                    >
                      En savoir plus
                      <ArrowRight size={16} />
                    </button>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Modal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        title={selectedService?.title}
      >
        <div className="space-y-6">
          <p className="text-lg text-slate-600 leading-relaxed">
            {selectedService?.description}
          </p>
          
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
            <h4 className="font-bold text-slate-900 mb-4">Ce que nous proposons :</h4>
            <ul className="grid sm:grid-cols-2 gap-3">
              {selectedService?.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
              <li className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <span>Devis détaillé et gratuit</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <span>Respect des normes en vigueur</span>
              </li>
            </ul>
          </div>

          <div className="flex justify-end pt-4">
             <a 
                href="#contact" 
                onClick={() => setSelectedService(null)}
                className="px-6 py-3 bg-gold-500 text-white rounded-lg font-bold hover:bg-gold-600 transition-colors"
             >
                Demander un devis pour ce service
             </a>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Services;