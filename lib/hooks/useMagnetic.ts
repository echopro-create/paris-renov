import { useState, useRef, useCallback } from 'react';

interface MagneticReturn {
  ref: React.RefObject<HTMLDivElement>;
  position: { x: number; y: number };
  isHovered: boolean;
}

/**
 * Magnetic button hook - attracts button to cursor on hover
 * @param strength - How strong the magnetic pull is (default: 0.5)
 * @param range - Distance in pixels from center where magnetism applies (default: 100)
 */
export function useMagnetic(strength: number = 0.5, range: number = 100): MagneticReturn {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    if (distance < range) {
      const moveX = distanceX * strength;
      const moveY = distanceY * strength;
      setPosition({ x: moveX, y: moveY });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  }, [strength, range]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  }, []);

  return {
    ref,
    position,
    isHovered,
    handlers: {
      onMouseMove: handleMouseMove,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    },
  };
}

/**
 * Magnetic wrapper component props
 */
export interface MagneticWrapperProps {
  children: React.ReactNode;
  strength?: number;
  range?: number;
  className?: string;
}
