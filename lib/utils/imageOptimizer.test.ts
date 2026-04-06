import { describe, it, expect } from 'vitest';
import { optimizeUnsplashUrl, getSrcSet } from './imageOptimizer';

describe('imageOptimizer', () => {
  describe('optimizeUnsplashUrl', () => {
    it('adds width parameter to Unsplash URL', () => {
      const result = optimizeUnsplashUrl('https://images.unsplash.com/photo-123', { width: 800 });
      expect(result).toContain('w=800');
    });

    it('adds quality parameter', () => {
      const result = optimizeUnsplashUrl('https://images.unsplash.com/photo-123', { width: 800, quality: 75 });
      expect(result).toContain('q=75');
    });

    it('adds fit=max and height when height is provided', () => {
      const result = optimizeUnsplashUrl('https://images.unsplash.com/photo-123', { width: 800, height: 600 });
      expect(result).toContain('fit=max');
      expect(result).toContain('h=600');
    });

    it('returns original URL for non-Unsplash images', () => {
      const url = 'https://example.com/photo.jpg';
      expect(optimizeUnsplashUrl(url, { width: 800 })).toBe(url);
    });

    it('replaces auto=format with fm=webp', () => {
      const result = optimizeUnsplashUrl('https://images.unsplash.com/photo-123?auto=format', { width: 800 });
      expect(result).toContain('fm=webp');
      expect(result).toContain('w=800');
    });
  });

  describe('getSrcSet', () => {
    it('generates srcset with multiple widths', () => {
      const result = getSrcSet('w=800');
      expect(result).toContain('400w');
      expect(result).toContain('800w');
      expect(result).toContain('1200w');
    });

    it('includes expected breakpoints', () => {
      const result = getSrcSet('');
      expect(result).toContain('400w');
      expect(result).toContain('800w');
      expect(result).toContain('1200w');
      expect(result).toContain('1600w');
    });
  });
});
