import { useState, useEffect } from 'react';

/**
 * Custom hook to track the currently active section in the viewport
 * @param sectionIds - Array of section IDs to observe
 * @param threshold - Intersection threshold (default 0.5 = 50% visible)
 * @returns The ID of the currently active section
 */
export function useActiveSection(sectionIds: string[], threshold = 0.5) {
    const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || '');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-20% 0px -35% 0px', // Adjust for better UX
                threshold,
            }
        );

        // Observe all sections
        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, [sectionIds, threshold]);

    return activeSection;
}
