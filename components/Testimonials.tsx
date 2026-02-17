import React from 'react';
import { ContentData } from '../types';
import { Quote } from 'lucide-react';

interface TestimonialsProps {
  content: ContentData['testimonials'];
  common: ContentData['common'];
}

const Testimonials: React.FC<TestimonialsProps> = ({ content, common }) => {
  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-gold-600 uppercase mb-3">{common.clientReviews}</h2>
          <h3 className="font-serif text-4xl text-slate-900 font-bold mb-4">{content.title}</h3>
          <p className="text-slate-600">{content.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {content.items.map((item) => (
            <div key={item.id} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col">
              <div className="mb-6 text-gold-400">
                <Quote size={40} className="fill-gold-400/20" />
              </div>
              <p className="text-slate-700 italic mb-6 flex-grow leading-relaxed">"{item.text}"</p>
              <div className="flex items-center gap-4 mt-auto border-t border-slate-100 pt-6">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-sm">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 text-sm">{item.name}</h5>
                  <p className="text-xs text-slate-500">{item.role} • {item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;