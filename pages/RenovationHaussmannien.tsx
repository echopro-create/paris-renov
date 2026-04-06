import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Building2, Hammer, Star, CheckCircle, Phone, ArrowRight,
  Clock, Shield, Award, ChevronRight
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTABanner from '../components/CTABanner';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollToTop from '../components/ScrollToTop';

const SEO_DATA = {
  title: 'Rénovation Appartement Haussmannien Paris | D.A. BAT',
  description:
    'Spécialiste de la rénovation d\'appartements haussmanniens à Paris. Restauration de parquets Point de Hongrie, moulures, plafonds à la française et boiseries. Devis gratuit 24h.',
  canonical: 'https://da-bat.com/renovation-haussmannien-paris',
};

const JSON_LD = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Rénovation Appartement Haussmannien',
    provider: {
      '@type': 'GeneralContractor',
      name: 'D.A. BAT',
      url: 'https://da-bat.com',
      telephone: '+33601997659',
    },
    areaServed: { '@type': 'City', name: 'Paris' },
    description:
      'Rénovation complète d\'appartements haussmanniens à Paris : parquet Point de Hongrie, moulures, boiseries, plâtrerie ornementale, peinture à la chaux.',
    url: 'https://da-bat.com/renovation-haussmannien-paris',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quel est le coût d\'une rénovation d\'appartement haussmannien à Paris ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Le coût dépend de la superficie et des prestations. Comptez entre 800 €/m² pour une rénovation partielle et 2 000 €/m² pour une rénovation complète avec matériaux haut de gamme. Nous proposons un devis gratuit sous 24h.',
        },
      },
      {
        '@type': 'Question',
        name: 'Combien de temps dure la rénovation d\'un appartement haussmannien ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pour un appartement de 80-100m², comptez 6 à 12 semaines selon l\'étendue des travaux. Nous établissons un planning précis avec des délais fermes dès le début du chantier.',
        },
      },
      {
        '@type': 'Question',
        name: 'Peut-on rénover le parquet d\'un appartement haussmannien sans le remplacer ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui, dans la majorité des cas. Les parquets massifs anciens (Point de Hongrie, point de Versailles, lames larges) peuvent être poncés, vitrifiés ou huilés plusieurs fois. Nous évaluons systématiquement l\'état du parquet avant de recommander un remplacement.',
        },
      },
      {
        '@type': 'Question',
        name: 'Préservez-vous les éléments d\'architecture d\'origine ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolument. Moulures, corniches, rosaces, boiseries et parquets anciens sont des éléments patrimoniaux que nous restaurons avec soin. Nous travaillons avec des artisans spécialisés en restauration du bâti ancien.',
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
        name: 'Rénovation Haussmannien Paris',
        item: 'https://da-bat.com/renovation-haussmannien-paris',
      },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function RenovationHaussmannien() {
  return (
    <>
      <SEOHead {...SEO_DATA} jsonLd={JSON_LD} />
      <div className="min-h-screen bg-bg-primary text-text-primary selection:bg-gold-200 selection:text-slate-900">
        <Navbar />

        {/* ── HERO ── */}
        <section
          className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden"
          aria-label="Rénovation appartement haussmannien Paris"
        >
          <div className="absolute inset-0">
            <img
              src="/assets/gallery/real/photo_45_2026-03-03_12-40-16.jpg"
              alt="Appartement haussmannien rénové à Paris - parquet Point de Hongrie et moulures"
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/60 to-slate-900/30" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 pt-32 w-full">
            <Breadcrumbs items={[{ label: 'Rénovation Appartement Haussmannien' }]} />

            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/40 text-gold-300 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full backdrop-blur-sm">
                  <Building2 size={13} /> SPÉCIALISTE HAUSSMANNIEN
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 max-w-4xl"
              >
                Rénovation Appartement{' '}
                <span className="text-gold-400">Haussmannien</span> à Paris
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-lg md:text-xl text-slate-200 max-w-2xl mb-10 leading-relaxed"
              >
                Restauration experte des matériaux anciens : parquets Point de Hongrie,
                moulures en staff, boiseries, plafonds à la française. Le charme de l'époque
                préservé, le confort d'aujourd'hui garanti.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <a
                  href="tel:0601997659"
                  className="inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-400 text-slate-900 font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-gold-500/30 hover:-translate-y-0.5"
                >
                  <Phone size={18} />
                  06 01 99 76 59
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

        {/* ── CONFIANCE ── */}
        <section className="bg-slate-900 dark:bg-slate-950 py-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { icon: <Award size={22} />, value: '+15 ans', label: "d'expérience" },
                { icon: <CheckCircle size={22} />, value: '100%', label: 'chantiers livrés' },
                { icon: <Shield size={22} />, value: 'Décennale', label: 'assurance incluse' },
                { icon: <Clock size={22} />, value: '24h', label: 'délai de réponse' },
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

        {/* ── INTRO ── */}
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
                <span className="text-gold-600 dark:text-gold-400 text-sm font-bold uppercase tracking-widest">Notre expertise</span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-3 mb-6">
                  L'art de rénover sans trahir
                </h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  Un appartement haussmannien n'est pas un appartement ordinaire. Sa valeur réside
                  dans ses volumes, ses hauteurs sous plafond, ses moulures en staff et ses parquets
                  massifs centenaires. Chez D.A. BAT, nous avons développé une expertise spécifique
                  pour ces biens d'exception : rénovation douce, respect du bâti ancien, et intégration
                  de tout le confort moderne sans altérer l'âme des lieux.
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                  Chaque chantier commence par un diagnostic complet — état des parquets, des plafonds,
                  des menuiseries, des réseaux — pour établir un programme de travaux précis et un budget
                  maîtrisé. Résultat : un appartement valorisé, prêt à vivre, sans mauvaise surprise.
                </p>
                <ul className="space-y-3">
                  {[
                    'Restauration parquet Point de Hongrie et point de Versailles',
                    'Réfection moulures, corniches et rosaces en staff',
                    'Enduits à la chaux et peintures à l\'ancienne',
                    'Coordination tous corps d\'état (plomberie, électricité, menuiserie)',
                    'Garantie décennale sur tous les ouvrages',
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
                  { src: '/assets/gallery/real/photo_30_2026-03-03_12-40-16.jpg', alt: 'Parquet Point de Hongrie restauré' },
                  { src: '/assets/gallery/real/photo_25_2026-03-03_12-40-16.jpg', alt: 'Rénovation mansarde haussmannienne' },
                  { src: '/assets/gallery/real/photo_60_2026-03-03_12-40-16.jpg', alt: 'Salon haussmannien rénové' },
                  { src: '/assets/gallery/real/photo_35_2026-03-03_12-40-16.jpg', alt: 'Finitions haut de gamme appartement parisien' },
                ].map((img, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden shadow-lg aspect-square">
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── PROCESSUS ── */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="text-center mb-14"
            >
              <motion.span variants={fadeUp} className="text-gold-600 dark:text-gold-400 text-sm font-bold uppercase tracking-widest">Méthode</motion.span>
              <motion.h2 variants={fadeUp} className="font-serif text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-3">
                Notre processus de rénovation haussmannienne
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                {
                  step: '01',
                  title: 'Diagnostic complet',
                  desc: 'Visite sur site, évaluation de l\'état des parquets, plafonds, réseaux et menuiseries. Identification des éléments d\'origine à préserver.',
                },
                {
                  step: '02',
                  title: 'Devis détaillé',
                  desc: 'Chiffrage poste par poste, choix des matériaux, planning de chantier avec jalons précis. Remis sous 24h après visite.',
                },
                {
                  step: '03',
                  title: 'Travaux coordonnés',
                  desc: 'Un seul interlocuteur pour tous les corps de métier. Gros œuvre, finitions, électricité, plomberie — nous orchestrons tout.',
                },
                {
                  step: '04',
                  title: 'Livraison garantie',
                  desc: 'Réception contradictoire, levée de réserves en 48h, garanties légales (parfait achèvement, décennale).',
                },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700 hover:border-gold-300 dark:hover:border-gold-600 transition-colors"
                >
                  <span className="text-5xl font-extrabold text-gold-200 dark:text-gold-900/60 font-serif leading-none">{s.step}</span>
                  <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white mt-3 mb-3">{s.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── SPECIALITES ── */}
        <section className="py-20 bg-white dark:bg-bg-primary">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="text-center mb-14">
                <span className="text-gold-600 dark:text-gold-400 text-sm font-bold uppercase tracking-widest">Savoir-faire</span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-3">
                  Nos spécialités haussmanniennes
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Hammer size={28} />,
                    title: 'Parquets anciens',
                    items: [
                      'Ponçage et vitrification parquet Point de Hongrie',
                      'Restauration point de Versailles et lames larges',
                      'Huilage et ciration parquet massif chêne',
                      'Remplacement de lames manquantes à l\'identique',
                      'Traitement anti-craquements et nivellement',
                    ],
                  },
                  {
                    icon: <Building2 size={28} />,
                    title: 'Architecture intérieure',
                    items: [
                      'Restauration moulures et corniches en plâtre',
                      'Refection rosaces de plafond à l\'identique',
                      'Création et reprise de boiseries sur mesure',
                      'Doublage thermique et isolation phonique',
                      'Plafonds à caissons et plafonds tendus',
                    ],
                  },
                  {
                    icon: <Star size={28} />,
                    title: 'Finitions d\'exception',
                    items: [
                      'Peinture à la chaux sur murs et plafonds',
                      'Enduits décoratifs (béton ciré, stucco veneziano)',
                      'Peinture laquée haute brillance sur boiseries',
                      'Papier peint panoramique et tapisserie artisanale',
                      'Dorure à la feuille sur éléments décoratifs',
                    ],
                  },
                ].map((card, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700"
                  >
                    <span className="text-gold-500 mb-4 block">{card.icon}</span>
                    <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white mb-5">{card.title}</h3>
                    <ul className="space-y-2.5">
                      {card.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-slate-600 dark:text-slate-300 text-sm">
                          <ChevronRight size={14} className="text-gold-500 shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-12">
                <span className="text-gold-600 dark:text-gold-400 text-sm font-bold uppercase tracking-widest">FAQ</span>
                <h2 className="font-serif text-3xl font-bold text-slate-900 dark:text-white mt-3">
                  Questions fréquentes
                </h2>
              </motion.div>
              <div className="space-y-4">
                {[
                  {
                    q: 'Quel est le coût d\'une rénovation d\'appartement haussmannien à Paris ?',
                    a: 'Entre 800 €/m² (rénovation partielle) et 2 000 €/m² (rénovation complète haut de gamme). Nos devis sont gratuits et détaillés, remis sous 24h après visite.',
                  },
                  {
                    q: 'Combien de temps dure la rénovation d\'un appartement haussmannien ?',
                    a: 'Pour 80-100m², comptez 6 à 12 semaines selon l\'étendue des travaux. Nous établissons un planning précis avec des jalons dès la signature.',
                  },
                  {
                    q: 'Peut-on rénover le parquet d\'un appartement haussmannien sans le remplacer ?',
                    a: 'Oui, dans la grande majorité des cas. Les parquets massifs anciens supportent plusieurs poncés et vitrifications. Nous évaluons toujours l\'état avant de recommander un remplacement.',
                  },
                  {
                    q: 'Préservez-vous les éléments d\'architecture d\'origine ?',
                    a: 'Absolument. Moulures, rosaces, boiseries et parquets anciens sont restaurés avec les techniques et matériaux d\'origine. Nous travaillons avec des artisans spécialisés dans le bâti ancien.',
                  },
                ].map((faq, i) => (
                  <motion.details
                    key={i}
                    variants={fadeUp}
                    className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 group p-6 cursor-pointer"
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
        <section className="py-16 bg-white dark:bg-bg-primary border-t border-slate-100 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="font-serif text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
                Nos autres services à Paris
              </motion.h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { to: '/peintre-decorateur-paris', label: 'Peintre Décorateur', desc: 'Peinture intérieure & enduits décoratifs' },
                  { to: '/renovation-salle-de-bain-paris', label: 'Rénovation Salle de Bain', desc: 'Douche italienne, carrelage & plomberie' },
                  { to: '/pose-parquet-paris', label: 'Pose de Parquet', desc: 'Parquet massif, contrecollé & stratifié' },
                  { to: '/devis-renovation-paris', label: 'Devis Gratuit', desc: 'Réponse sous 24h, sans engagement' },
                ].map((link, i) => (
                  <motion.div key={i} variants={fadeUp}>
                    <Link
                      to={link.to}
                      className="flex flex-col gap-1 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-gold-400 dark:hover:border-gold-500 transition-colors group"
                    >
                      <span className="font-semibold text-slate-900 dark:text-white group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                        {link.label}
                      </span>
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
