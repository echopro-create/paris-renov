import React from 'react';
import { ContentData } from '../types';

interface TrustBadgesProps {
  content: ContentData['trustBadges'];
}

const TrustBadges: React.FC<TrustBadgesProps> = ({ content }) => {
  // Styled text logos to ensure perfect rendering without image assets
  const brands = [
    { name: "Farrow & Ball", className: "font-serif font-bold" },
    { name: "SAINT-GOBAIN", className: "font-sans font-bold" },
    { name: "GROHE", className: "font-sans font-black" },
    { name: "PORCELANOSA", className: "font-sans font-medium tracking-[0.2em]" },
    { name: "AXA / Assurances", className: "font-sans font-bold italic" },
    { name: "legrand", className: "font-sans font-medium" },
    // Duplicate for infinite loop
    { name: "Farrow & Ball", className: "font-serif font-bold" },
    { name: "SAINT-GOBAIN", className: "font-sans font-bold" },
    { name: "GROHE", className: "font-sans font-black" },
    { name: "PORCELANOSA", className: "font-sans font-medium tracking-[0.2em]" },
    { name: "AXA / Assurances", className: "font-sans font-bold italic" },
    { name: "legrand", className: "font-sans font-medium" }
  ];

  return (
    <section className="py-12 bg-slate-50 border-b border-slate-100 overflow-hidden relative">
      {/* Fade gradients on edges */}
      <div className="absolute top-0 left-0 w-20 md:w-40 h-full bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-20 md:w-40 h-full bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 mb-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
          {content.title}
        </p>
      </div>
      
      <div className="flex overflow-hidden">
        <div className="flex animate-marquee gap-16 md:gap-24 items-center whitespace-nowrap pl-4">
           {brands.map((brand, i) => (
             <span key={i} className={`${brand.className} text-xl md:text-2xl text-slate-400 hover:text-slate-800 transition-colors cursor-default`}>
               {brand.name}
             </span>
           ))}
        </div>
        {/* Second copy for seamless loop (handled by CSS animation, but double rendering ensures coverage) */}
         <div className="flex animate-marquee gap-16 md:gap-24 items-center whitespace-nowrap pl-16 md:pl-24" aria-hidden="true">
           {brands.map((brand, i) => (
             <span key={i} className={`${brand.className} text-xl md:text-2xl text-slate-400 hover:text-slate-800 transition-colors cursor-default`}>
               {brand.name}
             </span>
           ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;