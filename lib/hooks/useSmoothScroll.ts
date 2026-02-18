import { useEffect } from 'react';

/**
 * Custom hook for smooth scroll with custom easing (2026 standard)
 * Uses requestAnimationFrame for buttery-smooth 60fps animation
 */
export function useSmoothScroll() {
    useEffect(() => {
        // Easing function: easeInOutCubic
        const easeInOutCubic = (t: number): number => {
            return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        };

        // Smooth scroll animation
        const smoothScrollTo = (
            start: number,
            end: number,
            duration: number = 800
        ) => {
            const change = end - start;
            const startTime = performance.now();

            const animate = (currentTime: number) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easedProgress = easeInOutCubic(progress);

                window.scrollTo(0, start + change * easedProgress);

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };

            requestAnimationFrame(animate);
        };

        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest('a');

            if (!anchor) return;

            const href = anchor.getAttribute('href');
            if (!href || !href.startsWith('#')) return;

            // Prevent default jump
            e.preventDefault();

            const targetId = href.slice(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const start = window.pageYOffset;
                const end = targetElement.getBoundingClientRect().top + start;
                smoothScrollTo(start, end, 800);
            }
        };

        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, []);
}
