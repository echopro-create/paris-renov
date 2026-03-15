import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    toggleTheme: () => { },
});

export function ThemeProvider({ children }: { children: ReactNode }) {
    const isSSR = typeof window === 'undefined';

    const [userOverride, setUserOverride] = useState<boolean>(() => {
        if (isSSR) return false;
        return localStorage.getItem('theme') !== null;
    });

    const [theme, setTheme] = useState<Theme>(() => {
        if (isSSR) return 'light';
        // If user has manually set a preference, use it
        const stored = localStorage.getItem('theme') as Theme | null;
        if (stored) return stored;

        // Otherwise follow system preference
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    // Listen to system theme changes in realtime (only when user hasn't overridden)
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleChange = (e: MediaQueryListEvent) => {
            if (!userOverride) {
                setTheme(e.matches ? 'dark' : 'light');
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [userOverride]);

    useEffect(() => {
        // Toggle 'dark' class on root element for Tailwind
        document.documentElement.classList.toggle('dark', theme === 'dark');
        document.documentElement.style.colorScheme = theme;

        // Persist only if user has manually toggled
        if (userOverride) {
            localStorage.setItem('theme', theme);
        }
    }, [theme, userOverride]);

    const toggleTheme = useCallback(() => {
        setUserOverride(true);
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
};
