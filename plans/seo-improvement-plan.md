# Detailed SEO Improvement Plan

## 1. Technical SEO & Metadata

### index.html
- [ ] **GA4 Configuration**: The Google Analytics ID is currently a placeholder `%VITE_GA_ID%`. Ensure this is properly replaced during build or provided in `.env`.
- [ ] **Deduplication**: Remove duplicate `apple-touch-icon` link (present in both `index.html` and handled by `vite-plugin-pwa`).
- [ ] **Canonical URL**: Ensure `https://atelier-alexei.fr/` is the final intended domain.
- [ ] **Preload**: Verify `fetchpriority="high"` on the hero image preload matches the actual image resource used in `Hero.tsx` (hash/name consistency).

### Sitemap & Robots
- [ ] **Sitemap**: Ensure `sitemap.xml` is dynamically generated or manually updated to include all routes (currently single page, so likely static).
- [ ] **Robots**: `robots.txt` exists, ensure it points to the correct sitemap URL.

## 2. Content & Semantic Structure

### Headings Hierarchy
- [ ] **Hero**: Excellent use of `<h1>`.
- [ ] **Sections**: Consistent use of `<h2>` for section titles and `<h3>` for cards/subsections.
- [ ] **Footer**: Uses `<h4>` for column headers, which is appropriate.

### Alt Text & Accessibility
- [ ] **Images**:
    - `Hero`: "Appartement parisien rénové - D.A. BAT" - Good.
    - `Services`: "Service de rénovation" (generic) -> Suggest making more specific per service (e.g., "Rénovation de salle de bain à Paris").
    - `Gallery`: Uses `item.alt` which is good. Ensure data source has descriptive texts.
    - `Testimonials`: `alt={testimonial.name}` is good.
- [ ] **ARIA**:
    - `Contact` form inputs: Add `aria-invalid` and `aria-describedby` for better error handling accessibility.
    - `Gallery` lightbox: Good focus management.
    - `Navbar`: Good ARIA labels for toggles.

## 3. Performance (Core Web Vitals)

### Image Optimization
- [ ] **Loading Strategy**:
    - `Hero`: Properly uses `priority={true}` (eager).
    - `Services`: First 2 items have `priority={true}`, others lazy. This is a good strategy for above-the-fold content on large screens.
    - `SkeletonImage`: logic handles generic `sizes` attribute.
        - **Action**: Refine `sizes` attribute in `SkeletonImage` or pass specific `sizes` prop from parent components to match actual layout (e.g., `(max-width: 768px) 100vw, 25vw` for 4-col grid).
- [ ] **Font Loading**:
    - Using `@fontsource-variable`, which is excellent for performance (self-hosted, subsetted).
- [ ] **CSS/JS**:
    - `performance.css`: Contains `content-visibility: auto`, `will-change`, and `scroll-behavior`.
    - **Action**: Verify `content-visibility: auto` doesn't cause layout shifts (CLS) on dynamic content loading.

## 4. Local SEO (Crucial for "Renovation Paris")

### Schema.org
- [ ] **Organization/LocalBusiness**: `index.html` contains `GeneralContractor` schema.
    - **Action**: Add `sameAs` array linking to social profiles (Instagram, etc.).
    - **Action**: Ensure `priceRange` and `openingHoursSpecification` match actual business data.
- [ ] **FAQ Schema**: `Process.tsx` correctly implements `FAQPage` schema.

### Content Localization
- [ ] **Keywords**: "Paris" and specific arrondissements/neighborhoods could be more naturally integrated into `Services` and `Projects` descriptions.

## 5. Actionable Todo List

1.  **Fix GA4 ID**: Check `.env` and build process.
2.  **Refine Image Sizes**: Update `SkeletonImage` or call sites to use accurate `sizes` attribute to avoid downloading overly large images on mobile.
3.  **Enhance Contact Form Accessiblity**: Add `aria-invalid` attributes.
4.  **Local SEO**: Enhance `GeneralContractor` schema with `sameAs`.
5.  **Content**: Review generic alt texts in `Services` to be more keyword-rich (e.g., include "Renovation").
