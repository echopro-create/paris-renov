/**
 * Image optimization utility for CDN
 * Supports: Unsplash, local images via Vite
 */

interface ImageOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'avif' | 'jpg';
  crop?: 'center' | 'top' | 'bottom' | 'left' | 'right';
}

/**
 * Optimize Unsplash image URL with CDN parameters
 */
export function optimizeUnsplashUrl(url: string, options: ImageOptions = {}): string {
  const {
    width = 800,
    height,
    quality = 80,
    format = 'webp',
    crop = 'center'
  } = options;

  // Check if it's already an Unsplash URL
  if (!url.includes('unsplash.com')) {
    return url;
  }

  // Extract the image ID from Unsplash URL
  const match = url.match(/photo-([a-zA-Z0-9_-]+)/);
  if (!match) return url;

  // Build optimized URL with CDN parameters
  const params = new URLSearchParams({
    w: width.toString(),
    q: quality.toString(),
    fm: format,
    fit: 'max',
  });

  if (height) {
    params.set('h', height.toString());
  }

  // Reconstruct URL with optimization parameters
  const baseUrl = url.split('?')[0];
  return `${baseUrl}?${params.toString()}`;
}

/**
 * Get responsive srcset for an image
 */
export function getSrcSet(baseParams: string, sizes: number[] = [400, 800, 1200, 1600]): string {
  return sizes
    .map((size) => `${baseParams}&w=${size} ${size}w`)
    .join(', ');
}

/**
 * Lazy image component props
 */
export interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  placeholderClassName?: string;
  width?: number;
  height?: number;
  quality?: number;
  priority?: boolean; // For above-the-fold images
  optimize?: boolean; // Enable CDN optimization
}
