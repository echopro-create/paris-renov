import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Mouse position state
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  };

  // Stiffer spring for snappier movement (less lag/drunk feel)
  const smoothOptions = { damping: 40, stiffness: 400, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions)
  };

  useEffect(() => {
    const manageMouseMove = (e: MouseEvent) => {
      // Show cursor only after first movement to avoid 0,0 glitch
      if (!isVisible) setIsVisible(true);
      mouse.x.set(e.clientX);
      mouse.y.set(e.clientY);
    };

    const manageMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check for interactive elements
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.closest('.cursor-hover') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", manageMouseMove);
    window.addEventListener("mouseover", manageMouseOver);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      window.removeEventListener("mouseover", manageMouseOver);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div 
      className="fixed top-0 left-0 border border-gold-500 rounded-full pointer-events-none z-[9999] hidden lg:block"
      style={{
        left: smoothMouse.x, 
        top: smoothMouse.y,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: isHovering ? 50 : 20,
        height: isHovering ? 50 : 20,
        opacity: isHovering ? 1 : 0.6,
        borderWidth: isHovering ? 1 : 2,
        borderColor: isHovering ? "#f59e0b" : "#cbd5e1", // Gold on hover, slate otherwise
        backgroundColor: isHovering ? "rgba(245, 158, 11, 0.05)" : "transparent",
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30
      }}
    />
  );
};

export default CustomCursor;