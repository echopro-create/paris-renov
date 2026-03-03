import React from 'react';

interface LogoProps {
    /** SVG icon size in px */
    iconSize?: number;
    /** Text size classes for the brand name */
    nameClassName?: string;
    /** Text size classes for the tagline */
    taglineClassName?: string;
    /** Whether the text should be white (hero/transparent navbar) or dark (scrolled navbar) */
    variant?: 'light' | 'dark' | 'auto';
}

/**
 * Reusable D.A. BAT logo component with Haussmann balcony icon.
 * Used in Navbar and Footer to eliminate SVG/markup duplication.
 */
export default function Logo({
    iconSize = 48,
    nameClassName = 'font-serif text-2xl lg:text-3xl font-extrabold tracking-widest leading-none',
    taglineClassName = "text-[9px] uppercase tracking-[0.3em] text-gold-500 font-bold mt-2",
    variant = 'auto',
}: LogoProps) {
    const textColorClass = variant === 'light'
        ? 'text-white'
        : variant === 'dark'
            ? 'text-slate-900 dark:text-white'
            : 'text-slate-900 dark:text-white';

    return (
        <div className="relative flex items-center gap-4">
            <div className="flex flex-col items-center group-hover:scale-110 transition-transform duration-700">
                <svg
                    width={iconSize}
                    height={iconSize}
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gold-500 filter drop-shadow-sm"
                    role="img"
                    aria-label="D.A. BAT — Logo balcon Haussmannien"
                >
                    <title>D.A. BAT</title>
                    <path d="M5 25H35V30H5V25Z" fill="currentColor" fillOpacity="0.1" />
                    <path d="M8 12V25M14 12V25M20 12V25M26 12V25M32 12V25" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    <path d="M5 12H35" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M5 25H35" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M5 30H35" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="opacity-40" />
                </svg>
            </div>
            <div className="flex flex-col border-l border-gold-500/30 pl-4 py-1">
                <span className={`${nameClassName} ${textColorClass}`}>
                    D.A. BAT
                </span>
                <span className={taglineClassName}>
                    Votre Projet, Notre Savoir-Faire
                </span>
            </div>
        </div>
    );
}
