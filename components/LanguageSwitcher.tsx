import React from 'react';
import { Language } from '../types';

interface LanguageSwitcherProps {
  currentLang: Language;
  setLang: (lang: Language) => void;
  isScrolled: boolean;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLang, setLang, isScrolled }) => {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLang('fr')}
        className={`px-2 py-1 text-sm font-medium transition-colors rounded ${
          currentLang === 'fr' 
            ? 'bg-gold-500 text-white' 
            : isScrolled ? 'text-slate-600 hover:text-gold-600' : 'text-slate-200 hover:text-white'
        }`}
      >
        FR
      </button>
      <span className={isScrolled ? "text-slate-300" : "text-slate-500"}>|</span>
      <button
        onClick={() => setLang('ru')}
        className={`px-2 py-1 text-sm font-medium transition-colors rounded ${
          currentLang === 'ru' 
            ? 'bg-gold-500 text-white' 
            : isScrolled ? 'text-slate-600 hover:text-gold-600' : 'text-slate-200 hover:text-white'
        }`}
      >
        RU
      </button>
    </div>
  );
};

export default LanguageSwitcher;