import React, { useState } from 'react';

interface SkeletonImageProps {
    src: string;
    alt: string;
    className?: string;
    containerClassName?: string;
}

const SkeletonImage: React.FC<SkeletonImageProps> = ({
    src,
    alt,
    className = "",
    containerClassName = ""
}) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className={`relative overflow-hidden bg-gray-200 ${containerClassName}`}>
            {/* Shimmer Effect */}
            {!isLoaded && (
                <div className="absolute inset-0 z-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer"
                        style={{ backgroundSize: '1000px 100%', animationDuration: '2s', animationIterationCount: 'infinite' }} />
                </div>
            )}
            <img
                src={src}
                alt={alt}
                onLoad={() => setIsLoaded(true)}
                className={`${className} transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                loading="lazy"
            />
        </div>
    );
};

export default SkeletonImage;
