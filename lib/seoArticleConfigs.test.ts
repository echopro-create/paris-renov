import { describe, expect, it } from 'vitest';
import { seoArticles } from './seoArticleConfigs';
import { seoPages } from './seoPageConfigs';

const legacyCommercialRoutes = [
  '/renovation-haussmannien-paris',
  '/peintre-decorateur-paris',
  '/renovation-salle-de-bain-paris',
  '/pose-parquet-paris',
  '/devis-renovation-paris',
];

describe('seoArticleConfigs', () => {
  it('uses unique slugs and canonical URLs for every article', () => {
    const slugs = seoArticles.map((article) => article.slug);
    const canonicals = seoArticles.map((article) => article.canonical);

    expect(new Set(slugs).size).toBe(slugs.length);
    expect(new Set(canonicals).size).toBe(canonicals.length);

    for (const article of seoArticles) {
      expect(article.canonical).toBe(`https://da-bat.com${article.slug}`);
    }
  });

  it('provides enough commercial substance for every article', () => {
    for (const article of seoArticles) {
      expect(article.intro.length).toBeGreaterThanOrEqual(2);
      expect(article.sections.length).toBeGreaterThanOrEqual(4);
      expect(article.images.length).toBeGreaterThanOrEqual(2);
      expect(article.faq.length).toBeGreaterThanOrEqual(4);
      expect(article.serviceLinks.length).toBeGreaterThanOrEqual(4);
      expect(article.articleLinks.length).toBeGreaterThanOrEqual(2);
    }
  });

  it('links only to known service and article routes', () => {
    const knownRoutes = new Set([
      ...seoPages.map((page) => page.slug),
      ...seoArticles.map((article) => article.slug),
      ...legacyCommercialRoutes,
    ]);

    for (const article of seoArticles) {
      for (const link of [...article.serviceLinks, ...article.articleLinks]) {
        expect(knownRoutes.has(link.to)).toBe(true);
      }
    }
  });
});
