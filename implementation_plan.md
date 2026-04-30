# Commercial SEO Implementation Plan

## Objective

Усилить сайт D.A. BAT для коммерческой выдачи Google по запросам ремонта в Париже: не только добиться индексации, а дать Google больше понятных коммерческих страниц, информационных статей, внутренних ссылок, структурированных данных и чистого пререндеренного HTML.

## Current Evidence

1. Экспорт Search Console за 3 месяца показывает 7 кликов, 47 показов и только главную страницу в таблице страниц.
2. Запросы почти полностью брендовые: `da bat`, `d-bat`, `dn bat`, `dano bat`.
3. Текущий сайт уже имеет SSR/prerender, sitemap, robots и 12 маршрутов, но новые страницы не получили видимости в коммерческой выдаче.
4. Ручной запрос индексации уже пробовали, результата нет, значит нужен не повтор запроса, а усиление качества, структуры и внутренних сигналов.
5. GA4 сейчас не нужен по решению пользователя; пустой GA-скрипт нужно убрать или отключить, чтобы HTML был чище.

## Self-Critique Before Implementation

### Risks

1. Массовое добавление похожих страниц может выглядеть как doorway pages и не помочь индексации.
2. Статьи без связи с коммерческими страницами дадут слабый SEO-эффект.
3. Слишком широкий кластер по всему Парижу может размыть интент.
4. Выдуманные адреса, отзывы, лицензии или факты вредят доверию и могут создать юридические риски.
5. Если метаданные есть только в React effect, часть поисковых систем может видеть слабый HTML.

### Mitigations

1. Добавлять страницы только под разные поисковые интенты: цена, сроки, типы помещений, виды работ, районы.
2. Каждая статья должна ссылаться на релевантную коммерческую страницу и на страницу заявки.
3. Коммерческие страницы должны получать блоки `Guides travaux` и контекстные ссылки на статьи.
4. Schema.org использовать только с проверяемыми фактами из текущего сайта.
5. Все новые URL добавить в router, SSR map, prerender metadata и sitemap.

## Planned SEO Architecture

### Commercial Hubs

1. Existing: `/renovation-appartement-paris`
2. Existing: `/renovation-cuisine-paris`
3. Existing: `/renovation-salle-de-bain-paris`
4. Existing: `/plomberie-electricite-paris`
5. Existing: `/maconnerie-cloisons-platrerie-paris`
6. Existing: `/pose-parquet-paris`
7. Existing: `/devis-renovation-paris`

### New Article / Guide Pages

1. `/prix-renovation-appartement-paris`
   - Intent: prix renovation appartement Paris, cout renovation m2 Paris.
   - Links to: renovation appartement, devis.
2. `/delai-renovation-appartement-paris`
   - Intent: delai travaux appartement Paris, combien de temps renovation.
   - Links to: renovation appartement, studio, devis.
3. `/renovation-appartement-paris-avant-apres`
   - Intent: exemples, inspirations, preuves visuelles, before/after.
   - Links to: gallery, renovation appartement, salle de bain, cuisine.
4. `/renovation-petite-surface-paris`
   - Intent: studio, petite surface, investissement locatif.
   - Links to: renovation studio, cuisine, plomberie/electricite.
5. `/renovation-appartement-haut-de-gamme-paris`
   - Intent: renovation haut de gamme Paris, finitions premium.
   - Links to: haussmannien, parquet, peintre decorateur.
6. `/renovation-paris-questions-copropriete`
   - Intent: copropriete, horaires travaux, parties communes, autorisations.
   - Links to: appartement ancien, maconnerie/cloisons, devis.

## Planned File Changes

### New files

1. `components/SeoArticlePage.tsx`
2. `lib/seoArticleConfigs.ts`
3. `lib/seoArticleConfigs.test.ts`
4. `pages/PrixRenovationAppartementParis.tsx`
5. `pages/DelaiRenovationAppartementParis.tsx`
6. `pages/RenovationAppartementAvantApres.tsx`
7. `pages/RenovationPetiteSurfaceParis.tsx`
8. `pages/RenovationAppartementHautDeGammeParis.tsx`
9. `pages/RenovationParisCopropriete.tsx`

### Existing files

1. `App.tsx`
2. `entry-server.tsx`
3. `components/Footer.tsx`
4. `components/SeoLandingPage.tsx`
5. `lib/seoPageConfigs.ts`
6. `lib/seoPageConfigs.test.ts`
7. `public/sitemap.xml`
8. `scripts/prerender.tsx`
9. `scripts/prerender.test.ts`
10. `index.html`
11. `task.md`

## Hashline Anchors For Planned Existing File Edits

### `index.html`

- [index.html](/Users/macbook/Work/paris-renov/index.html:14)
  - `14:da39a3|`
  - `15:f92472|  <script async src="https://www.googletagmanager.com/gtag/js?id=%VITE_GA_ID%"></script>`
  - `20:da57bf|    gtag('config', '%VITE_GA_ID%');`
  - Action: remove the inactive GA4 block entirely for now.

### `App.tsx`

- [App.tsx](/Users/macbook/Work/paris-renov/App.tsx:23)
  - `23:2be6fe|// SEO pages (lazy-loaded)`
  - `34:4b7ae5|const RenovationStudio = React.lazy(() => import('./pages/RenovationStudio'));`
  - `85:4c20be|        <Route path="/" element={<HomePage />} />`
  - Action: add article page lazy imports and routes.

### `entry-server.tsx`

- [entry-server.tsx](/Users/macbook/Work/paris-renov/entry-server.tsx:8)
  - `8:f55206|// Import page components for static rendering (no lazy-loading on SSR)`
  - `22:ef66d0|const PAGE_MAP: Record<string, React.ReactElement> = {`
  - `71:d9e11a|};`
  - Action: add article imports and route map entries.

### `components/Footer.tsx`

- [components/Footer.tsx](/Users/macbook/Work/paris-renov/components/Footer.tsx:44)
  - `44:79585a|  const seoLinks = [`
  - `55:821037|  ];`
  - Action: add guide links without overcrowding footer.

### `components/SeoLandingPage.tsx`

- [components/SeoLandingPage.tsx](/Users/macbook/Work/paris-renov/components/SeoLandingPage.tsx:250)
  - `250:678c94|          <section className="bg-slate-100 py-20 md:py-24">`
  - `260:067947|              <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">`
  - Action: add optional guide/article links section based on page config.

### `lib/seoPageConfigs.ts`

- [lib/seoPageConfigs.ts](/Users/macbook/Work/paris-renov/lib/seoPageConfigs.ts:1)
  - `1:1550e2|export interface SeoGalleryItem {`
  - `23:ce1c84|export interface SeoRelatedLink {`
  - `56:e3fd00|export const seoPageConfigs: Record<string, SeoPageConfig> = {`
  - Action: add optional `guideLinks`, strengthen French accents in key visible copy where touched.

### `public/sitemap.xml`

- [public/sitemap.xml](/Users/macbook/Work/paris-renov/public/sitemap.xml:1)
  - `1:ddb059|<?xml version="1.0" encoding="UTF-8"?>`
  - `4:f0d7e3|    <loc>https://da-bat.com/</loc>`
  - `69:fe258e|</urlset>`
  - Action: add article URLs with current `lastmod`.

### `scripts/prerender.tsx`

- [scripts/prerender.tsx](/Users/macbook/Work/paris-renov/scripts/prerender.tsx:20)
  - `20:1f865c|const ROUTES_META = {`
  - `79:2d0ebd|};`
  - Action: add article titles/descriptions and keep canonical generation.

### `scripts/prerender.test.ts`

- [scripts/prerender.test.ts](/Users/macbook/Work/paris-renov/scripts/prerender.test.ts:1)
  - `1:1c354f|import { describe, expect, it } from 'vitest';`
  - Action: extend route metadata tests if current coverage exists.

### `task.md`

- [task.md](/Users/macbook/Work/paris-renov/task.md:1)
  - `1:f876d7|# Task List`
  - Action: replace completed old checklist with the new commercial SEO checklist.

## Execution Order

1. Build article data model and article page component.
2. Add six article routes to SPA and SSR.
3. Add metadata, sitemap entries and prerender coverage.
4. Add guide links from commercial pages and footer.
5. Remove inactive GA4 block from `index.html`.
6. Add/extend unit tests for article configs and route metadata.
7. Run `npm run test:run`.
8. Run `npm run build`.
9. Inspect prerendered HTML for new URLs: title, description, canonical, H1, internal links.
10. Commit and push after successful verification.

## Prerender Status 2026-04-30

- Сборка приведена к build-time SSR/prerender модели: `vite build` собирает client bundle, `vite build --ssr entry-server.tsx` собирает SSR entry, затем `npm run prerender` запускает `tsx scripts/prerender.tsx`.
- `scripts/prerender.tsx` пишет готовую HTML-разметку для 18 публичных маршрутов и обновляет route-specific title, description, canonical, Open Graph и Twitter tags.
- Build теперь fail-fast: отсутствующий `<!--ssr-outlet-->`, пустой SSR markup, оставшийся пустой root или отсутствующие SEO placeholders считаются ошибкой сборки.
- Проверено через `npm run test:run`, `npm run build` и поиск пустых root/SSR markers в `dist`.

## Approval Gate

This plan intentionally touches more than 3 files. Per project rule, implementation must wait for user approval before code changes beyond this plan update.
