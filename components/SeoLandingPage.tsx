import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';
import Footer from './Footer';
import Navbar from './Navbar';
import SEOHead from './SEOHead';
import ScrollToTop from './ScrollToTop';
import WhatsAppButton from './WhatsAppButton';
import type { SeoPageConfig } from '../lib/seoPageConfigs';

interface SeoLandingPageProps {
  page: SeoPageConfig;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

function buildJsonLd(page: SeoPageConfig) {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: page.breadcrumbLabel,
      provider: {
        '@type': 'GeneralContractor',
        name: 'D.A. BAT',
        url: 'https://da-bat.com',
        telephone: '+33601997659',
      },
      areaServed: { '@type': 'City', name: 'Paris' },
      description: page.description,
      url: page.canonical,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://da-bat.com/' },
        { '@type': 'ListItem', position: 2, name: page.breadcrumbLabel, item: page.canonical },
      ],
    },
  ];
}

export default function SeoLandingPage({ page }: SeoLandingPageProps) {
  return (
    <>
      <SEOHead
        title={page.title}
        description={page.description}
        canonical={page.canonical}
        jsonLd={buildJsonLd(page)}
      />

      <div className="min-h-screen bg-bg-primary text-text-primary selection:bg-gold-200 selection:text-slate-900">
        <Navbar />

        <section className="relative min-h-[76vh] overflow-hidden" aria-label={page.breadcrumbLabel}>
          <div className="absolute inset-0">
            <img
              src={page.heroImage}
              alt={page.heroAlt}
              className="h-full w-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/70 to-slate-900/35" />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[76vh] w-full max-w-7xl flex-col justify-center px-6 pb-16 pt-32">
            <Breadcrumbs items={[{ label: page.breadcrumbLabel }]} />

            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl">
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gold-500/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-gold-300 backdrop-blur-sm">
                {page.badge}
              </span>

              <h1 className="max-w-4xl font-serif text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
                {page.headingStart} <span className="text-gold-400">{page.headingAccent}</span>{' '}
                {page.headingEnd}
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-200 md:text-xl">
                {page.heroCopy}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/devis-renovation-paris"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-4 font-semibold text-slate-900 transition-all hover:-translate-y-0.5 hover:bg-gold-400"
                >
                  Demander un devis
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="tel:+33601997659"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 font-medium text-white transition-all hover:bg-white/10"
                >
                  <Phone className="h-4 w-4" />
                  06 01 99 76 59
                </a>
              </div>
            </motion.div>

            <div className="mt-14 grid gap-4 md:grid-cols-4">
              {page.heroStats.map((stat) => (
                <div key={stat.label} className="rounded-lg border border-white/10 bg-white/8 px-5 py-5 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="mt-1 text-sm uppercase tracking-[0.18em] text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <main>
          <section className="bg-white py-20 md:py-24">
            <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <div className="text-sm font-bold uppercase tracking-[0.22em] text-gold-600">{page.leadEyebrow}</div>
                <h2 className="mt-4 max-w-3xl font-serif text-3xl font-bold text-slate-900 md:text-5xl">
                  {page.leadTitle}
                </h2>
                <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate-600">
                  {page.leadParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="self-start rounded-lg border border-slate-200 bg-slate-50 p-7">
                <div className="text-sm font-bold uppercase tracking-[0.22em] text-slate-900">Points de vigilance</div>
                <ul className="mt-5 space-y-4">
                  {page.leadBullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-slate-100 py-20 md:py-24">
            <div className="mx-auto max-w-7xl px-6">
              <h2 className="max-w-3xl font-serif text-3xl font-bold text-slate-900 md:text-5xl">
                {page.expertiseTitle}
              </h2>

              <div className="mt-12 grid gap-6 lg:grid-cols-3">
                {page.expertiseCards.map((card) => (
                  <article key={card.title} className="rounded-lg border border-slate-200 bg-white p-7">
                    <h3 className="font-serif text-2xl font-bold text-slate-900">{card.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600">{card.description}</p>
                    <ul className="mt-6 space-y-3">
                      {card.items.map((item) => (
                        <li key={item} className="flex gap-3 text-sm text-slate-700">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-white py-20 md:py-24">
            <div className="mx-auto max-w-7xl px-6">
              <h2 className="max-w-3xl font-serif text-3xl font-bold text-slate-900 md:text-5xl">
                {page.galleryTitle}
              </h2>

              <div className="mt-12 grid gap-6 md:grid-cols-2">
                {page.galleryItems.map((item) => (
                  <article key={item.src} className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={item.src} alt={item.alt} className="h-full w-full object-cover" loading="lazy" />
                    </div>
                    <div className="px-5 py-5">
                      <div className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">{item.location}</div>
                      <h3 className="mt-2 font-serif text-2xl font-bold text-slate-900">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.alt}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-slate-950 py-20 md:py-24">
            <div className="mx-auto max-w-7xl px-6">
              <h2 className="max-w-3xl font-serif text-3xl font-bold text-white md:text-5xl">
                {page.pricingTitle}
              </h2>

              <div className="mt-12 grid gap-6 lg:grid-cols-3">
                {page.pricingItems.map((item) => (
                  <article key={item.label} className="rounded-lg border border-white/10 bg-white/5 p-7">
                    <div className="text-sm font-bold uppercase tracking-[0.18em] text-gold-300">{item.label}</div>
                    <div className="mt-4 font-serif text-3xl font-bold text-white">{item.value}</div>
                    <p className="mt-4 text-sm leading-relaxed text-slate-300">{item.detail}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-white py-20 md:py-24">
            <div className="mx-auto max-w-5xl px-6">
              <h2 className="font-serif text-3xl font-bold text-slate-900 md:text-5xl">{page.faqTitle}</h2>

              <div className="mt-12 space-y-4">
                {page.faq.map((item) => (
                  <details key={item.q} className="rounded-lg border border-slate-200 bg-slate-50 px-6 py-5">
                    <summary className="cursor-pointer list-none pr-8 font-semibold text-slate-900">
                      {item.q}
                    </summary>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {page.guideLinks && page.guideLinks.length > 0 && (
            <section className="bg-slate-100 py-20 md:py-24">
              <div className="mx-auto max-w-7xl px-6">
                <h2 className="max-w-3xl font-serif text-3xl font-bold text-slate-900 md:text-5xl">
                  {page.guideLinksTitle ?? 'Guides pour préparer votre projet'}
                </h2>

                <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                  {page.guideLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="rounded-lg border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-gold-400"
                    >
                      <div className="font-serif text-2xl font-bold text-slate-900">{link.label}</div>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">{link.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}

          <section className="bg-slate-100 py-20 md:py-24">
            <div className="mx-auto max-w-7xl px-6">
              <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <h2 className="max-w-2xl font-serif text-3xl font-bold text-slate-900 md:text-5xl">
                  {page.relatedTitle}
                </h2>
                <Link
                  to="/devis-renovation-paris"
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-gold-700"
                >
                  Demander un devis
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {page.relatedLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="rounded-lg border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-gold-400"
                  >
                    <div className="font-serif text-2xl font-bold text-slate-900">{link.label}</div>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{link.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </div>
    </>
  );
}
