import { describe, expect, it } from 'vitest';
import { seoPages } from './seoPageConfigs';

describe('seoPageConfigs', () => {
  it('uses unique slugs and canonical URLs for every SEO page', () => {
    const slugs = seoPages.map((page) => page.slug);
    const canonicals = seoPages.map((page) => page.canonical);

    expect(new Set(slugs).size).toBe(slugs.length);
    expect(new Set(canonicals).size).toBe(canonicals.length);
  });

  it('provides enough commercial substance for every page', () => {
    for (const page of seoPages) {
      expect(page.faq.length).toBeGreaterThanOrEqual(4);
      expect(page.relatedLinks.length).toBeGreaterThanOrEqual(4);
      expect(page.expertiseCards.length).toBe(3);
      expect(page.galleryItems.length).toBe(4);
    }
  });
});
