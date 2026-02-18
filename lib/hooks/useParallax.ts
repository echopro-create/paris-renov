import React, { useEffect, useRef, useState } from 'react';

interface ParallaxOptions {
  speed?: number; // Parallax speed multiplier (default: 0.5)
  disabled?: boolean; // Disable parallax effect
}

interface ParallaxReturn {
  ref: React.RefObject<HTMLDivElement>;
  offsetY: number;
}

/**
 * Parallax hook for scroll-based image movement
 * @param options - Parallax configuration options
 */
export function useParallax(options: ParallaxOptions = {}): ParallaxReturn {
  const { speed = 0.5, disabled = false } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    if (disabled || !ref.current) return;

    let animationFrameId: number;
    let targetOffset = 0;
    let currentOffset = 0;

    const handleScroll = () => {
      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + window.pageYOffset;
      const elementBottom = rect.bottom + window.pageYOffset;
      const viewportHeight = window.innerHeight;

      // Check if element is in viewport
      if (elementTop < window.pageYOffset + viewportHeight && elementBottom > window.pageYOffset) {
        // Calculate parallax offset based on scroll position
        const distanceFromTop = window.pageYOffset - elementTop + viewportHeight;
        const totalDistance = viewportHeight + rect.height;
        const progress = distanceFromTop / totalDistance;

        targetOffset = (progress - 0.5) * speed * 200; // Max offset of ±100px * speed
      }

      // Smooth animation with lerp (linear interpolation)
      const animate = () => {
        currentOffset += (targetOffset - currentOffset) * 0.1; // 10% smoothing
        setOffsetY(currentOffset);

        if (Math.abs(targetOffset - currentOffset) > 0.1) {
          animationFrameId = requestAnimationFrame(animate);
        }
      };

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed, disabled]);

  return { ref, offsetY };
}
