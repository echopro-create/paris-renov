import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  jsonLd?: object | object[];
}

export default function SEOHead({
  title,
  description,
  canonical,
  ogImage = 'https://da-bat.com/og-image.jpg',
  jsonLd,
}: SEOHeadProps) {
  useEffect(() => {
    // Title
    document.title = title;

    // Helpers
    const setMeta = (selector: string, content: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        const [attr, value] = selector.replace(/[\[\]'"]/g, ' ').trim().split(/\s+/);
        el.setAttribute(attr, value);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement('link');
        el.rel = rel;
        document.head.appendChild(el);
      }
      el.href = href;
    };

    // Meta tags
    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]', canonical);
    setMeta('meta[property="og:image"]', ogImage);
    setMeta('meta[property="twitter:title"]', title);
    setMeta('meta[property="twitter:description"]', description);
    setMeta('meta[property="twitter:url"]', canonical);

    // Canonical
    setLink('canonical', canonical);

    // JSON-LD
    if (jsonLd) {
      const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      // Remove previous page-specific schemas (keep the main org schema)
      document.querySelectorAll('script[data-page-schema]').forEach(el => el.remove());
      schemas.forEach(schema => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-page-schema', 'true');
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      });
    }

    return () => {
      // Cleanup page-specific schemas on unmount
      document.querySelectorAll('script[data-page-schema]').forEach(el => el.remove());
    };
  }, [title, description, canonical, ogImage, jsonLd]);

  return null;
}
