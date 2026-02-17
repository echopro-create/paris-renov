import React, { useState, useRef, useEffect } from 'react';
import { ContentData } from '../types';
import { MoveHorizontal } from 'lucide-react';

interface BeforeAfterProps {
  content: ContentData['beforeAfter'];
  common: ContentData['common'];
}

const BeforeAfter: React.FC<BeforeAfterProps> = ({ content, common }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [hasInteracted, setHasInteracted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  // Track container width to ensure the clipped image stays full size
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    // Also use ResizeObserver for more robustness
    const observer = new ResizeObserver(updateWidth);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener('resize', updateWidth);
      observer.disconnect();
    };
  }, []);

  const handleMove = (clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percentage = (x / rect.width) * 100;
      setSliderPosition(percentage);
      if (!hasInteracted) setHasInteracted(true);
    }
  };

  const handleMouseDown = () => { isDragging.current = true; };
  const handleMouseUp = () => { isDragging.current = false; };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      // Prevent text selection while dragging
      e.preventDefault();
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    // Stop event propagation to prevent other handlers
    e.stopPropagation();
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseUp);
    document.addEventListener('touchend', handleMouseUp);
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseUp);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-gold-600 uppercase mb-3">{common.metamorphose}</h2>
          <h3 className="font-serif text-4xl text-slate-900 font-bold mb-4">{content.title}</h3>
          <p className="text-slate-600">{content.subtitle}</p>
        </div>

        {/* 
            Main Container 
            touch-none prevents page scrolling on mobile while interacting with this element
        */}
        <div
          ref={containerRef}
          className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl aspect-[16/9] select-none group cursor-col-resize touch-none"
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onTouchMove={handleTouchMove}
          onTouchStart={handleMouseDown}
        >

          {/* AFTER Image (Background - Base Layer) */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="After renovation"
              className="w-full h-full object-cover select-none pointer-events-none"
            />
            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur text-white px-3 py-1 rounded text-sm font-bold z-10">
              {content.labelAfter}
            </div>
          </div>

          {/* BEFORE Image (Foreground - Clipped Layer) */}
          <div
            className="absolute inset-0 overflow-hidden border-r-2 border-white"
            style={{ width: `${sliderPosition}%` }}
          >
            <img
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Before renovation"
              className="h-full object-cover absolute top-0 left-0 max-w-none select-none pointer-events-none"
              // CRITICAL FIX: Explicitly set width to container width so image doesn't shrink
              style={{ width: containerWidth ? `${containerWidth}px` : '100%' }}
            />
            {/* Dark overlay for "old" look */}
            <div className="absolute inset-0 bg-sepia/30 mix-blend-multiply pointer-events-none"></div>
            <div className="absolute top-4 left-4 bg-white/80 backdrop-blur text-slate-900 px-3 py-1 rounded text-sm font-bold z-10">
              {content.labelBefore}
            </div>
          </div>

          {/* Slider Handle Button */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-transparent z-20 flex items-center justify-center"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="w-10 h-10 bg-white rounded-full shadow-[0_0_20px_rgba(0,0,0,0.3)] flex items-center justify-center text-gold-600 -ml-[2px] transition-transform transform hover:scale-110 active:scale-95">
              <MoveHorizontal size={20} />
            </div>
          </div>

          {/* Instruction Overlay (fades out permanently on interaction) */}
          <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none transition-opacity duration-500 z-30 ${hasInteracted ? 'opacity-0' : 'opacity-100'}`}>
            <div className="bg-black/60 backdrop-blur text-white px-4 py-2 rounded-full text-sm">
              &larr; {common.dragToCompare} &rarr;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;