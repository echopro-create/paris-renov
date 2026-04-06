# D.A. BAT — Site Vitrine

> Entreprise générale de bâtiment, tous corps d'état à Paris.

**Site :** https://da-bat.com

## Technologies

- **Framework :** React 19 + TypeScript
- **Build :** Vite 6
- **Styling :** Tailwind CSS v4
- **Animations :** Framer Motion
- **PWA :** vite-plugin-pwa
- **SSR :** Prerendering personnalisé
- **Déploiement :** Vercel
- **Email :** Resend
- **CAPTCHA :** Cloudflare Turnstile

## Démarrage

### Prérequis

- Node.js 18+
- npm

### Installation

```bash
# 1. Installer les dépendances
npm install

# 2. Configurer les variables d'environnement
cp .env.example .env.local
# Éditez .env.local avec vos clés API

# 3. Lancer en développement
npm run dev
```

### Build

```bash
# Build complet avec SSR prerendering
npm run build

# Preview du build de production
npm run preview
```

## Variables d'environnement

| Variable | Description | Requis |
|---|---|---|
| `VITE_GA_ID` | Google Analytics ID | Non |
| `RESEND_API_KEY` | Clé API Resend (emails) | Oui |
| `VITE_TURNSTILE_SITE_KEY` | Cloudflare Turnstile site key | Non |
| `TURNSTILE_SECRET_KEY` | Cloudflare Turnstile secret key | Non |

## Structure

```
├── api/              # API routes Vercel (contact form)
├── components/       # Composants React
├── lib/
│   ├── contexts/     # React contexts (Theme)
│   ├── hooks/        # Custom React hooks
│   └── utils/        # Utilitaires
├── public/           # Assets statiques
├── scripts/          # Scripts de build (prerender, optimisation)
├── constants.ts      # Contenu du site
├── types.ts          # Types TypeScript
└── vite.config.ts    # Configuration Vite
```

## Fonctionnalités

- ✅ SSR Prerendering pour le SEO
- ✅ PWA avec service worker
- ✅ Dark mode automatique
- ✅ Formulaire de contact avec validation
- ✅ Cloudflare Turnstile (anti-spam)
- ✅ Lazy loading & code splitting
- ✅ Accessibilité WCAG 2.2
- ✅ Données structurées JSON-LD
- ✅ Optimisation des images (WebP/AVIF)
