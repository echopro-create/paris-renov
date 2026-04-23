# SEO Expansion Implementation Plan

## Objective

Расширить SEO-контур сайта D.A. BAT за счёт новых коммерческих посадочных страниц, которые закрывают уже заявленные на сайте направления работ в Париже и усиливают внутреннюю перелинковку без скатывания в doorway pages.

## Roadmap

### Phase 1 — Core money pages

1. `/renovation-appartement-paris`
2. `/renovation-cuisine-paris`
3. `/plomberie-electricite-paris`
4. `/maconnerie-cloisons-platrerie-paris`
5. `/renovation-appartement-ancien-paris`
6. `/renovation-studio-paris`

### Phase 2 — Internal SEO distribution

1. Обновить маршруты SPA и SSR.
2. Расширить `sitemap.xml`.
3. Обновить `scripts/prerender.js` для route-specific title/description.
4. Расширить SEO-ссылки в футере и кросс-ссылки между сервисными страницами.

### Phase 3 — Validation

1. Проверить сборку `npm run build`.
2. Прогнать `npm run test:run`.
3. Проверить пререндеренный HTML для новых страниц.

## Self-Critique Before Implementation

### Risks

1. Слишком похожие страницы могут выглядеть как doorway cluster.
2. Переабстракция страницы-шаблона может сломать текущий tone of voice и визуальный ритм.
3. Механическое добавление URL без продуманной перелинковки даст мало эффекта.

### Mitigations

1. Каждая новая страница получает собственный поисковый интент, FAQ, proof points, pricing angle и CTA.
2. Использовать существующий визуальный паттерн SEO-страниц, а не строить новую систему с нуля.
3. Добавить ссылки из футера, sitemap, prerender и блоков “autres services”.

## Hashline Anchors For Critical Existing Files

### Router

- [App.tsx](/Users/macbook/Work/paris-renov/App.tsx:81)
  - `81:cc7e13|const App: React.FC = () => {`
  - `85:4c20be|        <Route path="/" element={<HomePage />} />`
  - `90:de7fd6|        <Route path="/devis-renovation-paris" element={<DevisRenovation />} />`

### SSR static route map

- [entry-server.tsx](/Users/macbook/Work/paris-renov/entry-server.tsx:15)
  - `15:f76da0|// Map of static routes for SSR rendering`
  - `16:ef66d0|const PAGE_MAP: Record<string, React.ReactElement> = {`
  - `38:9ff448|  '/devis-renovation-paris': (`

### Footer SEO links

- [components/Footer.tsx](/Users/macbook/Work/paris-renov/components/Footer.tsx:44)
  - `44:79585a|  const seoLinks = [`
  - `45:6d6127|    { label: 'Rénovation haussmannien', href: '/renovation-haussmannien-paris' },`
  - `49:ac2ace|    { label: 'Contact & Devis', href: '/devis-renovation-paris' },`

### Sitemap

- [public/sitemap.xml](/Users/macbook/Work/paris-renov/public/sitemap.xml:1)
  - `1:ddb059|<?xml version="1.0" encoding="UTF-8"?>`
  - `10:b9ca8d|    <loc>https://da-bat.com/renovation-haussmannien-paris</loc>`
  - `34:950dff|    <loc>https://da-bat.com/devis-renovation-paris</loc>`

### Prerender metadata map

- [scripts/prerender.js](/Users/macbook/Work/paris-renov/scripts/prerender.js:19)
  - `19:aaf712|// Route → [title, metaDescription]`
  - `20:1f865c|const ROUTES_META = {`
  - `41:a41d99|  '/devis-renovation-paris': [`

## Planned File Changes

### New files

1. `pages/RenovationAppartement.tsx`
2. `pages/RenovationCuisine.tsx`
3. `pages/PlomberieElectricite.tsx`
4. `pages/MaconnerieCloisonsPlatrerie.tsx`
5. `pages/RenovationAppartementAncien.tsx`
6. `pages/RenovationStudio.tsx`

### Existing files

1. `App.tsx`
2. `entry-server.tsx`
3. `components/Footer.tsx`
4. `public/sitemap.xml`
5. `scripts/prerender.js`

## Execution Order

1. Создать новые страницы с уникальным контентом и локальным SEO.
2. Подключить lazy routes и SSR imports.
3. Обновить перелинковку и sitemap.
4. Обновить prerender metadata.
5. Прогнать тесты и сборку.
