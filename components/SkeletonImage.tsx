import React, { useState } from 'react';
import { optimizeUnsplashUrl, getSrcSet } from '../lib/utils/imageOptimizer';

interface SkeletonImageProps {
    src: string;
    alt: string;
    className?: string;
    containerClassName?: string;
    width?: number;
    height?: number;
    quality?: number;
    priority?: boolean;
    optimize?: boolean;
}

const SkeletonImage: React.FC<SkeletonImageProps> = ({
    src,
    alt,
    className = "",
    containerClassName = "",
    width = 800,
    height,
    quality = 80,
    priority = false,
    optimize = true
}) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // Optimize image URL if enabled
    const optimizedSrc = optimize ? optimizeUnsplashUrl(src, { width, height, quality }) : src;

    // Generate srcset for responsive images
    const srcSet = optimize && src.includes('unsplash.com')
        ? getSrcSet(optimizedSrc.split('?')[1] || '')
        : undefined;

    return (
        <div className={`relative overflow-hidden bg-gray-200 dark:bg-slate-800 ${containerClassName}`}>
            {/* Shimmer Effect */}
            {!isLoaded && (
                <div className="absolute inset-0 z-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 animate-shimmer"
                        style={{ backgroundSize: '1000px 100%', animationDuration: '2s', animationIterationCount: 'infinite' }} />
                </div>
            )}
            <img
                src={optimizedSrc}
                srcSet={srcSet}
                sizes={width <= 400 ? '(max-width: 640px) 100vw, 400px' : '(max-width: 1024px) 50vw, 33vw'}
                alt={alt}
                width={width}
                height={height}
                onLoad={() => setIsLoaded(true)}
                loading={priority ? 'eager' : 'lazy'}
                fetchPriority={priority ? 'high' : 'auto'}
                decoding="async"
                className={`${className} transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            />
        </div>
    );
};

export default SkeletonImage;
