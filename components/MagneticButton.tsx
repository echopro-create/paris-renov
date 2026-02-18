import React from 'react';
import { useMagnetic } from '../lib/hooks/useMagnetic';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  range?: number;
  onClick?: () => void;
  href?: string;
}

/**
 * Magnetic Button Component
 * Buttons that attract to cursor on hover
 */
export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  strength = 0.5,
  range = 100,
  onClick,
  href,
}) => {
  const { ref, position } = useMagnetic(strength, range);

  const baseStyle = {
    transform: `translate(${position.x}px, ${position.y}px)`,
    transition: 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  };

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={className}
        style={{ ...baseStyle, display: 'inline-block' }}
      >
        <div ref={ref}>{children}</div>
      </a>
    );
  }

  return (
    <div
      ref={ref}
      className={className}
      style={baseStyle}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
