import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'html-transform',
        transformIndexHtml(html) {
          return html.replace(/%VITE_GA_ID%/g, env.VITE_GA_ID || '');
        },
      },
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.png', 'robots.txt', 'sitemap.xml', 'apple-touch-icon.png'],
        manifest: {
          name: 'D.A. BAT - Rénovation Générale',
          short_name: 'D.A. BAT',
          description: 'Entreprise générale de bâtiment D.A. BAT à Paris. Rénovation, Peinture & Décoration.',
          theme_color: '#D4AF37',
          background_color: '#ffffff',
          display: 'standalone',
          orientation: 'portrait',
          categories: ['construction', 'design', 'business'],
          icons: [
            {
              src: 'pwa-64x64.png',
              sizes: '64x64',
              type: 'image/png'
            },
            {
              src: 'pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any'
            },
            {
              src: 'maskable-icon-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable'
            }
          ],
          shortcuts: [
            {
              name: 'Galerie',
              short_name: 'Galerie',
              description: 'Voir nos réalisations',
              url: '/#gallery',
              icons: [{ src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' }]
            },
            {
              name: 'Contact',
              short_name: 'Contact',
              description: 'Demander un devis',
              url: '/#contact',
              icons: [{ src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' }]
            }
          ],
          screenshots: [
            {
              src: 'og-image.jpg',
              sizes: '1200x630',
              type: 'image/jpeg',
              form_factor: 'wide',
              label: 'D.A. BAT Rénovation'
            },
            {
              src: 'og-image.jpg',
              sizes: '1200x630',
              type: 'image/jpeg',
              label: 'D.A. BAT Mobile'
            }
          ]
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,avif,json,xml,txt}'],
          globIgnores: ['**/node_modules/**/*', 'sw.js', 'workbox-*.js', 'assets/images/before_custom.png', 'assets/images/after_custom.png', 'images/hero-bg-apartment.png'],
          maximumFileSizeToCacheInBytes: 3000000, // Increase limit to 3MB just in case
          cleanupOutdatedCaches: true,
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'google-fonts-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
                },
                cacheableResponse: {
                  statuses: [0, 200]
                }
              }
            },
            {
              urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'gstatic-fonts-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
                },
                cacheableResponse: {
                  statuses: [0, 200]
                }
              }
            }
          ]
        }
      }),
    ],
    server: {
      host: true,
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'ui-vendor': ['framer-motion', 'lucide-react'],
            'utils-vendor': ['@emailjs/browser', '@marsidev/react-turnstile']
          }
        }
      }
    }
  };
});
