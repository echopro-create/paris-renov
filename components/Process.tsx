import React from 'react';
import { ContentData } from '../types';

interface ProcessProps {
  content: ContentData['process'];
}

const Process: React.FC<ProcessProps> = ({ content }) => {
  return (
    <section id="process" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-sm font-bold tracking-widest text-gold-600 uppercase mb-3">Workflow</h2>
          <h3 className="font-serif text-4xl text-slate-900 font-bold mb-4">{content.title}</h3>
          <p className="text-slate-600">{content.subtitle}</p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {content.steps.map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative">
                <div className="w-12 h-12 bg-paris-dark text-white rounded-lg flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-paris-dark/20">
                  {step.number}
                </div>
                <h4 className="font-serif text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;