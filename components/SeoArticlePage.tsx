import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, CalendarDays, CheckCircle, Clock, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';
import Footer from './Footer';
import Navbar from './Navbar';
import SEOHead from './SEOHead';
import ScrollToTop from './ScrollToTop';
import WhatsAppButton from './WhatsAppButton';
import type { SeoArticleConfig } from '../lib/seoArticleConfigs';

interface SeoArticlePageProps {
  page: SeoArticleConfig;
}

const SITE_URL = 'https://da-bat.com';

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function toAbsoluteUrl(path: string) {
  return path.startsWith('http') ? path : `${SITE_URL}${path}`;
}

function buildJsonLd(page: SeoArticleConfig) {
  const imageUrls = [page.heroImage, ...page.images.map((image) => image.src)].map(toAbsoluteUrl);

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': page.canonical,
      },
      headline: page.heading,
      description: page.description,
      image: imageUrls,
      datePublished: page.datePublished,
      dateModified: page.dateModified,
      author: {
        '@type': 'Organization',
        name: 'D.A. BAT',
        url: SITE_URL,
      },
      publisher: {
        '@type': 'Organization',
        name: 'D.A. BAT',
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/favicon.png`,
        },
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: page.breadcrumbLabel, item: page.canonical },
      ],
    },
  ];
}

export default function SeoArticlePage({ page }: SeoArticlePageProps) {
  return (
    <>
      <SEOHead
        title={page.title}
        description={page.description}
        canonical={page.canonical}
        ogImage={toAbsoluteUrl(page.heroImage)}
        jsonLd={buildJsonLd(page)}
      />

      <div className="min-h-screen bg-bg-primary text-text-primary selection:bg-gold-200 selection:text-slate-900">
        <Navbar />

        <div className="bg-white">
          <Breadcrumbs items={[{ label: 'Guides travaux', href: '/renovation-appartement-paris' }, { label: page.breadcrumbLabel }]} />
        </div>

        <header className="relative overflow-hidden bg-slate-950">
          <div className="absolute inset-0">
            <img
              src={page.heroImage}
              alt={page.heroAlt}
              className="h-full w-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/78 to-slate-900/40" />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[66vh] max-w-7xl flex-col justify-center px-6 py-20 md:py-24">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-500/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-gold-200 backdrop-blur-sm">
                {page.badge}
              </span>

              <h1 className="mt-6 max-w-4xl font-serif text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
                {page.heading}
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-200 md:text-xl">
                {page.heroCopy}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-5 text-sm font-medium text-slate-200">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-gold-300" />
                  Mis à jour le {page.dateModified}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gold-300" />
                  Lecture {page.readingTime}
                </span>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/devis-renovation-paris"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-4 font-semibold text-slate-950 transition-all hover:-translate-y-0.5 hover:bg-gold-400"
                >
                  Demander un devis
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="tel:+33601997659"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 font-medium text-white transition-all hover:bg-white/10"
                >
                  <Phone className="h-4 w-4" />
                  06 01 99 76 59
                </a>
              </div>
            </motion.div>
          </div>
        </header>

        <main>
          <article>
            <section className="bg-white py-16 md:py-20">
              <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.08fr_0.72fr]">
                <div className="space-y-5 text-lg leading-relaxed text-slate-600">
                  {page.intro.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <aside className="self-start rounded-lg border border-slate-200 bg-slate-50 p-6" aria-label="Repères rapides">
                  <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-slate-900">
                    <BookOpen className="h-4 w-4 text-gold-600" />
                    Repères rapides
                  </div>
                  <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                    {page.quickFacts.map((fact) => (
                      <div key={fact.label} className="rounded-lg bg-white p-4 ring-1 ring-slate-200">
                        <dt className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">{fact.label}</dt>
                        <dd className="mt-2 font-serif text-xl font-bold text-slate-900">{fact.value}</dd>
                      </div>
                    ))}
                  </dl>
                </aside>
              </div>
            </section>

            <section className="bg-slate-100 py-12">
              <div className="mx-auto max-w-7xl px-6">
                <nav aria-label="Sommaire" className="rounded-lg border border-slate-200 bg-white p-6">
                  <div className="text-sm font-bold uppercase tracking-[0.18em] text-gold-700">Sommaire</div>
                  <div className="mt-5 grid gap-3 md:grid-cols-2">
                    {page.sections.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="flex items-center justify-between gap-4 rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-gold-400 hover:text-slate-950"
                      >
                        {section.title}
                        <ArrowRight className="h-4 w-4 shrink-0 text-gold-600" />
                      </a>
                    ))}
                  </div>
                </nav>
              </div>
            </section>

            <section className="bg-white py-16 md:py-20">
              <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.68fr_1.32fr]">
                <div className="max-w-sm">
                  <div className="text-sm font-bold uppercase tracking-[0.2em] text-gold-700">Guide pratique</div>
                  <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                    Points à vérifier avant de signer
                  </h2>
                  <p className="mt-5 text-sm leading-relaxed text-slate-600">
                    Ces repères servent à préparer la visite technique, comparer les devis et décider les bons arbitrages avant le début des travaux.
                  </p>
                </div>

                <div className="space-y-12">
                  {page.sections.map((section) => (
                    <section key={section.id} id={section.id} className="scroll-mt-28">
                      <h3 className="font-serif text-3xl font-bold leading-tight text-slate-900">{section.title}</h3>
                      <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600">
                        {section.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                      {section.bullets && (
                        <ul className="mt-6 grid gap-3">
                          {section.bullets.map((bullet) => (
                            <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-slate-700">
                              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </section>
                  ))}
                </div>
              </div>
            </section>

            <section className="bg-slate-950 py-16 md:py-20">
              <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-6 md:grid-cols-2">
                  {page.images.map((image) => (
                    <figure key={image.src} className="overflow-hidden rounded-lg border border-white/10 bg-white/5">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img src={image.src} alt={image.alt} className="h-full w-full object-cover" loading="lazy" />
                      </div>
                      <figcaption className="px-5 py-5 text-sm leading-relaxed text-slate-300">
                        {image.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </section>

            <section className="bg-white py-16 md:py-20">
              <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
                <div>
                  <h2 className="font-serif text-3xl font-bold text-slate-900 md:text-4xl">{page.serviceLinksTitle}</h2>
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {page.serviceLinks.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        className="rounded-lg border border-slate-200 bg-slate-50 p-5 transition-all hover:-translate-y-1 hover:border-gold-400"
                      >
                        <div className="font-serif text-xl font-bold text-slate-900">{link.label}</div>
                        <p className="mt-3 text-sm leading-relaxed text-slate-600">{link.desc}</p>
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="font-serif text-3xl font-bold text-slate-900 md:text-4xl">{page.articleLinksTitle}</h2>
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {page.articleLinks.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        className="rounded-lg border border-slate-200 bg-white p-5 ring-1 ring-transparent transition-all hover:-translate-y-1 hover:border-gold-400 hover:ring-gold-100"
                      >
                        <div className="font-serif text-xl font-bold text-slate-900">{link.label}</div>
                        <p className="mt-3 text-sm leading-relaxed text-slate-600">{link.desc}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-slate-100 py-16 md:py-20">
              <div className="mx-auto max-w-5xl px-6">
                <h2 className="font-serif text-3xl font-bold text-slate-900 md:text-4xl">{page.faqTitle}</h2>
                <div className="mt-10 space-y-4">
                  {page.faq.map((item) => (
                    <details key={item.q} className="rounded-lg border border-slate-200 bg-white px-6 py-5">
                      <summary className="cursor-pointer list-none pr-8 font-semibold text-slate-900">
                        {item.q}
                      </summary>
                      <p className="mt-4 text-sm leading-relaxed text-slate-600">{item.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            </section>

            <section className="bg-slate-950 py-16 md:py-20">
              <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between">
                <div className="max-w-3xl">
                  <div className="text-sm font-bold uppercase tracking-[0.2em] text-gold-300">Projet à Paris</div>
                  <h2 className="mt-4 font-serif text-3xl font-bold text-white md:text-5xl">
                    Faites vérifier le budget, le délai et les contraintes avant de lancer les travaux.
                  </h2>
                </div>
                <Link
                  to="/devis-renovation-paris"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-4 font-semibold text-slate-950 transition-all hover:-translate-y-0.5 hover:bg-gold-400"
                >
                  Obtenir un devis
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </section>
          </article>
        </main>

        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </div>
    </>
  );
}
