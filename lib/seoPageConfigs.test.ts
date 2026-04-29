import { describe, expect, it } from 'vitest';
import { seoPages } from './seoPageConfigs';
import { seoArticles } from './seoArticleConfigs';

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

  it('uses optional guide links only for known article routes', () => {
    const articleSlugs = new Set(seoArticles.map((article) => article.slug));

    for (const page of seoPages) {
      if (!page.guideLinks) continue;

      expect(page.guideLinks.length).toBeGreaterThanOrEqual(4);
      for (const link of page.guideLinks) {
        expect(articleSlugs.has(link.to)).toBe(true);
      }
    }
  });
});
