import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Bath, Droplets, CheckCircle, Phone, ArrowRight,
  ShieldCheck, Clock, Ruler, ChevronRight
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTABanner from '../components/CTABanner';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollToTop from '../components/ScrollToTop';

const SEO_DATA = {
  title: 'Rénovation Salle de Bain Paris — Douche Italienne & Carrelage | D.A. BAT',
  description:
    'Rénovation complète salle de bain à Paris. Pose douche italienne, carrelage grand format, plomberie, robinetterie haut de gamme. Prix et délais maîtrisés. Devis gratuit 24h.',
  canonical: 'https://da-bat.com/renovation-salle-de-bain-paris',
};

const JSON_LD = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Rénovation Salle de Bain Paris',
    provider: {
      '@type': 'GeneralContractor',
      name: 'D.A. BAT',
      url: 'https://da-bat.com',
      telephone: '+33601997659',
    },
    areaServed: { '@type': 'City', name: 'Paris' },
    description:
      'Rénovation complète salle de bain et salle d\'eau à Paris. Douche à l\'italienne, carrelage grand format, double vasque, niche de douche, plomberie et électricité.',
    url: 'https://da-bat.com/renovation-salle-de-bain-paris',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quel est le prix d\'une rénovation de salle de bain à Paris ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pour une salle de bain de 5 m², comptez entre 6 000 et 15 000 € selon les matériaux et prestations choisis. Une rénovation complète avec douche italienne, carrelage grand format et robinetterie haut de gamme se situe généralement entre 10 000 et 15 000 €.',
        },
      },
      {
        '@type': 'Question',
        name: 'Combien de temps dure une rénovation de salle de bain ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pour une salle de bain standard (4-6 m²), comptez 10 à 15 jours ouvrés incluant démolition, plomberie, carrelage et finitions. Nous gérons l\'intégralité du chantier : vous n\'avez qu\'un seul interlocuteur.',
        },
      },
      {
        '@type': 'Question',
        name: 'Réalisez-vous les douches à l\'italienne sans receveur ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui. C\'est notre spécialité. Nous réalisons les douches à l\'italienne avec étanchéité SPEC (système de protection à l\'eau sous carrelage), siphon de sol en laiton design et raccords de carrelage sur mesure. Garantie décennale sur l\'étanchéité.',
        },
      },
      {
        '@type': 'Question',
        name: 'Pouvez-vous agrandir ma salle de bain en déplaçant des cloisons ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui, si les cloisons sont non-porteuses. Nous réalisons les études de faisabilité (plans, permis si nécessaire) et prenons en charge l\'ensemble des travaux : démolition, redistribution des pièces, nouvelles cloisons en placo, isolants phoniques.',
        },
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://da-bat.com/' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Rénovation Salle de Bain Paris',
        item: 'https://da-bat.com/renovation-salle-de-bain-paris',
      },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

export default function RenovationSalleDeBain() {
  return (
    <>
      <SEOHead {...SEO_DATA} jsonLd={JSON_LD} />
      <div className="min-h-screen bg-bg-primary text-text-primary selection:bg-gold-200 selection:text-slate-900">
        <Navbar />

        {/* ── HERO ── */}
        <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/assets/gallery/real/photo_9_2026-03-03_12-40-16.jpg"
              alt="Rénovation salle de bain Paris - douche italienne carrelage grand format"
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/60 to-slate-900/30" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 pt-32 w-full">
            <Breadcrumbs items={[{ label: 'Rénovation Salle de Bain Paris' }]} />

            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp} className="mb-6">
                <span className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/40 text-gold-300 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full backdrop-blur-sm">
                  <Bath size={13} /> SALLE DE BAIN & SALLE D'EAU
                </span>
              </motion.div>

              <motion.h1 variants={fadeUp} className="font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 max-w-4xl">
                Rénovation <span className="text-gold-400">Salle de Bain</span> à Paris —
                du Sol au Plafond
              </motion.h1>

              <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-200 max-w-2xl mb-10 leading-relaxed">
                Douche italienne, carrelage grand format, double vasque suspendue,
                robinetterie design — nous transformons votre salle de bain en espace spa.
                Plomberie, étanchéité et carrelage : tout en un seul chantier.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <a
                  href="tel:0601997659"
                  className="inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-400 text-slate-900 font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-gold-500/30 hover:-translate-y-0.5"
                >
                  <Phone size={18} /> 06 01 99 76 59
                </a>
                <Link
                  to="/devis-renovation-paris"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold px-8 py-4 rounded-full transition-all backdrop-blur-sm"
                >
                  Devis gratuit 24h <ArrowRight size={16} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="bg-slate-900 dark:bg-slate-950 py-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { icon: <Clock size={22} />, value: '10-15j', label: 'délai chantier' },
                { icon: <ShieldCheck size={22} />, value: 'Décennale', label: 'étanchéité garantie' },
                { icon: <Ruler size={22} />, value: 'Sur mesure', label: 'chaque project' },
                { icon: <Droplets size={22} />, value: 'SPEC', label: 'system étanchéité' },
              ].map((s, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <span className="text-gold-400">{s.icon}</span>
                  <span className="text-white font-bold text-xl">{s.value}</span>
                  <span className="text-slate-400 text-sm">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EXPERTISE ── */}
        <section className="py-20 bg-white dark:bg-bg-primary">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <motion.div variants={fadeUp}>
                <span className="text-gold-600 dark:text-gold-400 text-sm font-bold uppercase tracking-widest">Notre approche</span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-3 mb-6">
                  Une salle de bain clé en main
                </h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  Rénover une salle de bain, c'est coordonner pas moins de 5 corps de métier :
                  plombier, électricien, carreleur, plâtrier, peintre. Chez D.A. BAT, vous n'avez
                  qu'un seul interlocuteur. Nous gérons la totalité du chantier, de la démolition
                  à la pose des robinets, avec un planning précis et des délais respectés.
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                  Notre spécialité : les douches à l'italienne sans receveur. Étanchéité en
                  système SPEC (système de protection à l'eau sous carrelage), siphon de sol design
                  en laiton brossé, carrelage grand format posé en disposition rectiligne ou en
                  chevrons — nous soignons chaque détail. La garantie décennale couvre l'ensemble
                  des travaux d'étanchéité.
                </p>
                <ul className="space-y-3">
                  {[
                    'Démolition et évacuation des gravats incluses',
                    'Redistribution plomberie et évacuations en attente',
                    'Étanchéité SPEC sous carrelage (garantie décennale)',
                    'Carrelage grand format (60x120 cm et plus) au sol et aux murs',
                    'Robinetterie, sanitaires et accessoires haut de gamme',
                    'VMC (ventilation mécanique) et sèche-serviette électrique',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                      <CheckCircle size={18} className="text-gold-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
                {[
                  { src: '/assets/gallery/real/photo_8_2026-03-03_12-40-16.jpg', alt: 'Douche italienne carrelage noir mat Paris' },
                  { src: '/assets/gallery/real/photo_15_2026-03-03_12-40-16.jpg', alt: 'Salle de bain carrelage effet marbre' },
                  { src: '/assets/gallery/real/photo_40_2026-03-03_12-40-16.jpg', alt: 'Rénovation complète salle de bain appartement parisien' },
                  { src: '/assets/gallery/real/photo_3_2026-03-03_12-40-16.jpg', alt: 'WC et sanitaires rénovés Paris' },
                ].map((img, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden shadow-lg aspect-square">
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── SERVICES SDB ── */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-14">
                <span className="text-gold-600 dark:text-gold-400 text-sm font-bold uppercase tracking-widest">Nos réalisations</span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-3">
                  Nos galeries salle de bain à Paris
                </h2>
              </motion.div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { src: '/assets/gallery/real/photo_9_2026-03-03_12-40-16.jpg', title: 'Salle de Bain Moderne', location: 'Paris 16e', desc: 'Douche italienne miroir, vasque suspendue, carrelage grand format 60×120' },
                  { src: '/assets/gallery/real/photo_8_2026-03-03_12-40-16.jpg', title: 'Douche Italienne Épurée', location: 'Paris 7e', desc: 'Receveur affleurant, parois verre extra-clair, robinetterie thermostatique' },
                  { src: '/assets/gallery/real/photo_40_2026-03-03_12-40-16.jpg', title: 'SDB Complète Rénovée', location: 'Neuilly-sur-Seine', desc: 'Baignoire îlot, niche de douche, double vasque, miroir rétroéclairé' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="group rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={item.src} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-serif font-bold text-slate-900 dark:text-white">{item.title}</h3>
                        <span className="text-xs text-gold-600 dark:text-gold-400 font-medium">{item.location}</span>
                      </div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 bg-white dark:bg-bg-primary">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-12">
                <span className="text-gold-600 dark:text-gold-400 text-sm font-bold uppercase tracking-widest">FAQ</span>
                <h2 className="font-serif text-3xl font-bold text-slate-900 dark:text-white mt-3">
                  Questions sur la rénovation salle de bain à Paris
                </h2>
              </motion.div>
              <div className="space-y-4">
                {[
                  {
                    q: 'Quel est le prix d\'une rénovation de salle de bain à Paris ?',
                    a: 'Pour une SDB de 5 m² : entre 6 000 et 15 000 €. Une rénovation complète avec douche italienne et matériaux premium se situe entre 10 000 et 15 000 €. Devis gratuit et détaillé sous 24h.',
                  },
                  {
                    q: 'Combien de temps dure une rénovation de salle de bain ?',
                    a: 'Pour une SDB standard (4-6 m²) : 10 à 15 jours ouvrés. Démolition, plomberie, carrelage et finitions inclus. Vous n\'avez qu\'un seul interlocuteur pour l\'ensemble du chantier.',
                  },
                  {
                    q: 'Réalisez-vous les douches à l\'italienne sans receveur ?',
                    a: 'Oui. C\'est notre spécialité. Étanchéité SPEC, siphon de sol laiton, carrelage affleurant au sol — garantie décennale sur l\'étanchéité.',
                  },
                  {
                    q: 'Pouvez-vous agrandir ma salle de bain en déplaçant des cloisons ?',
                    a: 'Oui si les cloisons sont non-porteuses. Nous gérons l\'étude de faisabilité, la démolition, la redistribution et la reconstruction complète.',
                  },
                ].map((faq, i) => (
                  <motion.details
                    key={i}
                    variants={fadeUp}
                    className="bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 group p-6 cursor-pointer"
                  >
                    <summary className="flex items-center justify-between gap-4 font-semibold text-slate-900 dark:text-white list-none">
                      {faq.q}
                      <ChevronRight size={18} className="text-gold-500 shrink-0 group-open:rotate-90 transition-transform" />
                    </summary>
                    <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">{faq.a}</p>
                  </motion.details>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── PERLELINKAGE ── */}
        <section className="py-16 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="font-serif text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
                Nos autres services
              </motion.h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { to: '/renovation-haussmannien-paris', label: 'Rénovation Haussmannien', desc: 'Parquets anciens, moulures & boiseries' },
                  { to: '/peintre-decorateur-paris', label: 'Peintre Décorateur', desc: 'Peinture intérieure & enduits décoratifs' },
                  { to: '/pose-parquet-paris', label: 'Pose de Parquet', desc: 'Parquet massif, contrecollé & stratifié' },
                  { to: '/devis-renovation-paris', label: 'Devis Gratuit', desc: 'Réponse sous 24h, sans engagement' },
                ].map((link, i) => (
                  <motion.div key={i} variants={fadeUp}>
                    <Link
                      to={link.to}
                      className="flex flex-col gap-1 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-gold-400 dark:hover:border-gold-500 bg-white dark:bg-slate-800 transition-colors group"
                    >
                      <span className="font-semibold text-slate-900 dark:text-white group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">{link.label}</span>
                      <span className="text-sm text-slate-500 dark:text-slate-400">{link.desc}</span>
                      <ArrowRight size={14} className="text-gold-500 mt-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <CTABanner />
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </div>
    </>
  );
}
