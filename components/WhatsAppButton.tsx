import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col gap-3 items-center">
      {/* Mobile Only Call Button */}
      <a 
        href="tel:+33601997659"
        className="md:hidden w-12 h-12 bg-white text-paris-dark rounded-full flex items-center justify-center shadow-lg hover:bg-slate-50 transition-all active:scale-95 border border-slate-200"
        aria-label="Appeler maintenant"
      >
        <Phone size={20} className="fill-paris-dark" />
      </a>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/33601997659" 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:bg-[#128C7E] transition-all hover:scale-110 active:scale-95 group"
        aria-label="Contacter sur WhatsApp"
      >
        {/* Pulse Effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 duration-1000"></span>
        
        <MessageCircle size={28} className="fill-white text-white relative z-10" />
        
        {/* Tooltip for desktop */}
        <span className="hidden md:block absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap top-1/2 -translate-y-1/2 border border-slate-100">
          Discuter sur WhatsApp
          {/* Arrow */}
          <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-white transform rotate-45 border-t border-r border-slate-100"></span>
        </span>
      </a>
    </div>
  );
};

export default WhatsAppButton;