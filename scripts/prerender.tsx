/**
 * Post-build prerender script — Multi-route SSR.
 *
 * For each route:
 * 1. Renders the route via entry-server.render(url)
 * 2. Updates <title> and <meta description> in the HTML template
 * 3. Writes dist/<route>/index.html
 *
 * Usage: tsx scripts/prerender.tsx
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const SSR_OUTLET = '<!--ssr-outlet-->';

type RouteMeta = readonly [title: string, description: string];
type RouteSeo = {
  route: string;
  title: string;
  description: string;
};
type RenderModule = {
  render: (route: string) => string;
};
type StringReplacer = string | ((substring: string, ...args: string[]) => string);

// Route → [title, metaDescription]
export const ROUTES_META: Record<string, RouteMeta> = {
  '/': [
    'D.A. BAT | Rénovation Générale, Peinture & Décoration à Paris',
    'D.A. BAT — entreprise générale de bâtiment, tous corps d\'état à Paris. Rénovation d\'appartements anciens et haussmanniens : peinture, plomberie, électricité, maçonnerie, parquets. Devis gratuit sous 24h.',
  ],
  '/renovation-appartement-paris': [
    'Rénovation Appartement Paris | Entreprise Tous Corps d\'État | D.A. BAT',
    'Rénovation d\'appartement à Paris par une entreprise tous corps d\'état. Redistribution, plomberie, électricité, peinture, sols et finitions premium. Devis gratuit sous 24h.',
  ],
  '/renovation-cuisine-paris': [
    'Rénovation Cuisine Paris | Cuisine Ouverte, Pose & Réseaux | D.A. BAT',
    'Rénovation de cuisine à Paris : dépose, implantation, plomberie, électricité, crédence, sol et finitions. Cuisine ouverte ou fermée, devis gratuit sous 24h.',
  ],
  '/plomberie-electricite-paris': [
    'Plomberie Électricité Paris | Mise aux Normes & Réseaux | D.A. BAT',
    'Plomberie et électricité en rénovation à Paris. Mise aux normes, tableau électrique, circuits, alimentation, évacuation, appareils sanitaires et coordination tous corps d\'état.',
  ],
  '/maconnerie-cloisons-platrerie-paris': [
    'Maçonnerie Cloisons Plâtrerie Paris | Redistribution Intérieure | D.A. BAT',
    'Maçonnerie intérieure, cloisons et plâtrerie à Paris. Redistribution des volumes, doublages, faux plafonds, reprises de supports et préparation avant finitions.',
  ],
  '/renovation-appartement-ancien-paris': [
    'Rénovation Appartement Ancien Paris | Bâti Ancien & Finitions | D.A. BAT',
    'Rénovation d\'appartement ancien à Paris. Reprise des réseaux, murs, plafonds, sols et finitions avec respect du bâti ancien. Devis détaillé sous 24h.',
  ],
  '/renovation-studio-paris': [
    'Rénovation Studio Paris | Optimisation Petite Surface | D.A. BAT',
    'Rénovation de studio à Paris. Optimisation de petite surface, cuisine compacte, salle d\'eau, rangements, réseaux et finitions pour résidence ou investissement locatif.',
  ],
  '/renovation-haussmannien-paris': [
    'Rénovation Appartement Haussmannien Paris | D.A. BAT',
    'Spécialiste de la rénovation d\'appartements haussmanniens à Paris. Restauration de parquets Point de Hongrie, moulures, plafonds à la française et boiseries. Devis gratuit 24h.',
  ],
  '/peintre-decorateur-paris': [
    'Peintre Décorateur Paris — Peinture Intérieure Appartement | D.A. BAT',
    'Peintre décorateur professionnel à Paris. Peinture intérieure appartement, enduits décoratifs, béton ciré, stucco. Finitions premium pour appartements parisiens. Devis gratuit.',
  ],
  '/renovation-salle-de-bain-paris': [
    'Rénovation Salle de Bain Paris — Douche Italienne & Carrelage | D.A. BAT',
    'Rénovation complète salle de bain à Paris. Pose douche italienne, carrelage grand format, plomberie, robinetterie haut de gamme. Prix et délais maîtrisés. Devis gratuit 24h.',
  ],
  '/pose-parquet-paris': [
    'Pose Parquet Paris — Parquet Massif, Contrecollé & Point de Hongrie | D.A. BAT',
    'Pose et rénovation de parquet à Paris. Parquet massif chêne, Point de Hongrie, contrecollé, stratifié. Ponçage vitrification parquet ancien. Devis gratuit sous 24h.',
  ],
  '/devis-renovation-paris': [
    'Devis Rénovation Appartement Paris — Gratuit Sous 24h | D.A. BAT',
    'Demandez votre devis rénovation appartement à Paris. Réponse garantie sous 24h. Prix rénovation au m², estimation travaux, conseil personnalisé gratuit. D.A. BAT — tous corps d\'état.',
  ],
  '/prix-renovation-appartement-paris': [
    'Prix Rénovation Appartement Paris | Budget au m² & Devis | D.A. BAT',
    'Guide des prix de rénovation d\'appartement à Paris : budget au m², postes qui font varier le coût, arbitrages utiles et méthode de devis détaillé.',
  ],
  '/delai-renovation-appartement-paris': [
    'Délai Rénovation Appartement Paris | Planning Travaux | D.A. BAT',
    'Combien de temps prévoir pour rénover un appartement à Paris ? Planning par étape, facteurs de retard et méthode pour sécuriser les délais.',
  ],
  '/renovation-appartement-paris-avant-apres': [
    'Rénovation Appartement Paris Avant Après | Exemples | D.A. BAT',
    'Exemples de rénovation d\'appartement à Paris : avant/après, pièces transformées, arbitrages techniques et finitions qui valorisent le bien.',
  ],
  '/renovation-petite-surface-paris': [
    'Rénovation Petite Surface Paris | Studio & Investissement | D.A. BAT',
    'Guide pour rénover une petite surface à Paris : studio, cuisine compacte, salle d’eau, rangements, budget et logique d’investissement locatif.',
  ],
  '/renovation-appartement-haut-de-gamme-paris': [
    'Rénovation Appartement Haut de Gamme Paris | Finitions | D.A. BAT',
    'Rénovation haut de gamme à Paris : finitions, matériaux, parquet, peinture, salle de bain, cuisine et coordination tous corps d’état.',
  ],
  '/renovation-paris-questions-copropriete': [
    'Rénovation Paris & Copropriété | Règles Travaux | D.A. BAT',
    'Travaux de rénovation en copropriété à Paris : horaires, parties communes, bruit, gravats, autorisations et préparation du chantier.',
  ],
};

export function getCanonicalUrl(route: string): string {
  return `https://da-bat.com${route === '/' ? '/' : route}`;
}

function escapeHtmlText(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeHtmlAttribute(value: string): string {
  return escapeHtmlText(value).replace(/"/g, '&quot;');
}

function replaceRequired(html: string, pattern: RegExp, replacement: StringReplacer, label: string): string {
  if (!pattern.test(html)) {
    throw new Error(`Missing SEO placeholder: ${label}`);
  }

  return typeof replacement === 'string'
    ? html.replace(pattern, replacement)
    : html.replace(pattern, replacement);
}

export function applyRouteSeo(html: string, { route, title, description }: RouteSeo): string {
  const canonicalUrl = getCanonicalUrl(route);
  const titleText = escapeHtmlText(title);
  const titleAttribute = escapeHtmlAttribute(title);
  const descriptionAttribute = escapeHtmlAttribute(description);
  const canonicalAttribute = escapeHtmlAttribute(canonicalUrl);
  const replacements = [
    [/<title>[^<]*<\/title>/, `<title>${titleText}</title>`, 'title'],
    [
      /(<meta\s+name="description"\s+content=")[^"]*(")/,
      (_match: string, prefix: string, suffix: string) => `${prefix}${descriptionAttribute}${suffix}`,
      'meta description',
    ],
    [
      /(<meta\s+property="og:title"\s+content=")[^"]*(")/,
      (_match: string, prefix: string, suffix: string) => `${prefix}${titleAttribute}${suffix}`,
      'og:title',
    ],
    [
      /(<meta\s+property="og:description"\s+content=")[^"]*(")/,
      (_match: string, prefix: string, suffix: string) => `${prefix}${descriptionAttribute}${suffix}`,
      'og:description',
    ],
    [
      /(<link\s+rel="canonical"\s+href=")[^"]*(")/,
      (_match: string, prefix: string, suffix: string) => `${prefix}${canonicalAttribute}${suffix}`,
      'canonical',
    ],
    [
      /(<meta\s+property="og:url"\s+content=")[^"]*(")/,
      (_match: string, prefix: string, suffix: string) => `${prefix}${canonicalAttribute}${suffix}`,
      'og:url',
    ],
    [
      /(<meta\s+property="twitter:url"\s+content=")[^"]*(")/,
      (_match: string, prefix: string, suffix: string) => `${prefix}${canonicalAttribute}${suffix}`,
      'twitter:url',
    ],
    [
      /(<meta\s+property="twitter:title"\s+content=")[^"]*(")/,
      (_match: string, prefix: string, suffix: string) => `${prefix}${titleAttribute}${suffix}`,
      'twitter:title',
    ],
    [
      /(<meta\s+property="twitter:description"\s+content=")[^"]*(")/,
      (_match: string, prefix: string, suffix: string) => `${prefix}${descriptionAttribute}${suffix}`,
      'twitter:description',
    ],
  ] satisfies Array<[RegExp, StringReplacer, string]>;

  return replacements.reduce(
    (currentHtml, [pattern, replacement, label]) => replaceRequired(currentHtml, pattern, replacement, label),
    html
  );
}

function assertTemplateReady(templateHtml: string): void {
  if (!templateHtml.includes(SSR_OUTLET)) {
    throw new Error(`Missing SSR outlet marker: ${SSR_OUTLET}`);
  }
}

function injectAppHtml(templateHtml: string, route: string, appHtml: string): string {
  if (!appHtml.trim()) {
    throw new Error(`SSR returned empty markup for route "${route}"`);
  }

  const html = templateHtml.replace(SSR_OUTLET, appHtml);

  if (html.includes(SSR_OUTLET) || /<div id="root">\s*<\/div>/.test(html)) {
    throw new Error(`Route "${route}" still has an empty root after prerender`);
  }

  return html;
}

async function prerender() {
  const distPath = path.resolve(root, 'dist');
  const distServerPath = path.resolve(root, 'dist-server');
  const htmlTemplatePath = path.resolve(distPath, 'index.html');

  try {
    // Read the built HTML template
    const templateHtml = fs.readFileSync(htmlTemplatePath, 'utf-8');
    assertTemplateReady(templateHtml);

    // Import the SSR-built entry module
    const ssrModulePath = path.resolve(distServerPath, 'entry-server.js');
    const { render } = (await import(pathToFileURL(ssrModulePath).href)) as RenderModule;

    let successCount = 0;
    const failures: string[] = [];
    const routeEntries = Object.entries(ROUTES_META);

    for (const [route, [title, description]] of routeEntries) {
      try {
        // Render the React app for this route
        const appHtml = render(route);

        // Start from the template
        let html = injectAppHtml(templateHtml, route, appHtml);

        html = applyRouteSeo(html, { route, title, description });

        // Determine output path
        let outputPath;
        if (route === '/') {
          outputPath = path.resolve(distPath, 'index.html');
        } else {
          const routeDir = path.resolve(distPath, route.slice(1));
          fs.mkdirSync(routeDir, { recursive: true });
          outputPath = path.resolve(routeDir, 'index.html');
        }

        fs.writeFileSync(outputPath, html, 'utf-8');
        console.log(`OK: prerendered ${route} -> ${path.relative(root, outputPath)}`);
        successCount++;
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        failures.push(`${route}: ${message}`);
        console.error(`Failed to prerender ${route}: ${message}`);
      }
    }

    if (failures.length > 0 || successCount !== routeEntries.length) {
      throw new Error(`Prerender failed for ${failures.length} route(s): ${failures.join('; ')}`);
    }

    console.log(`OK: prerendered ${successCount}/${routeEntries.length} routes successfully`);
  } finally {
    // Clean up the SSR build artifacts
    try {
      fs.rmSync(distServerPath, { recursive: true, force: true });
      console.log('OK: cleaned dist-server/');
    } catch {
      console.warn('WARN: could not clean dist-server/ (may be locked). Delete manually.');
    }
  }
}

const isDirectRun = process.argv[1]
  ? pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url
  : false;

if (isDirectRun) {
  prerender().catch((err) => {
    console.error('❌ Prerender failed:', err);
    process.exit(1);
  });
}
