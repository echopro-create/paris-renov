import { describe, expect, it } from 'vitest';
import { ROUTES_META, applyRouteSeo, getCanonicalUrl } from './prerender';

const TEMPLATE = `
  <title>Home</title>
  <meta name="description" content="Home description" />
  <link rel="canonical" href="https://da-bat.com/" />
  <meta property="og:url" content="https://da-bat.com/" />
  <meta property="og:title" content="Home" />
  <meta property="og:description" content="Home description" />
  <meta property="twitter:url" content="https://da-bat.com/" />
  <meta property="twitter:title" content="Home" />
  <meta property="twitter:description" content="Home description" />
`;

describe('prerender SEO replacements', () => {
  it('applies route-specific canonical and social tags for service pages', () => {
    // Arrange
    const route = '/renovation-haussmannien-paris';
    const title = 'Rénovation Appartement Haussmannien Paris | D.A. BAT';
    const description = 'Description de test pour la page haussmannienne.';

    // Act
    const html = applyRouteSeo(TEMPLATE, { route, title, description });

    // Assert
    expect(html).toContain(`<link rel="canonical" href="${getCanonicalUrl(route)}" />`);
    expect(html).toContain(`<meta property="og:url" content="${getCanonicalUrl(route)}" />`);
    expect(html).toContain(`<meta property="twitter:url" content="${getCanonicalUrl(route)}" />`);
    expect(html).toContain(`<meta property="twitter:title" content="${title}" />`);
    expect(html).toContain(`<meta property="twitter:description" content="${description}" />`);
  });

  it('keeps the homepage canonical on the root route', () => {
    // Arrange
    const route = '/';

    // Act
    const html = applyRouteSeo(TEMPLATE, {
      route,
      title: 'Accueil',
      description: 'Description accueil',
    });

    // Assert
    expect(html).toContain('<link rel="canonical" href="https://da-bat.com/" />');
    expect(getCanonicalUrl(route)).toBe('https://da-bat.com/');
  });

  it('includes every commercial article route in prerender metadata', () => {
    // Arrange
    const articleRoutes: Array<keyof typeof ROUTES_META> = [
      '/prix-renovation-appartement-paris',
      '/delai-renovation-appartement-paris',
      '/renovation-appartement-paris-avant-apres',
      '/renovation-petite-surface-paris',
      '/renovation-appartement-haut-de-gamme-paris',
      '/renovation-paris-questions-copropriete',
    ];

    // Act / Assert
    for (const route of articleRoutes) {
      expect(ROUTES_META[route]).toBeDefined();
      expect(ROUTES_META[route][0]).toContain('D.A. BAT');
    }
  });
});
