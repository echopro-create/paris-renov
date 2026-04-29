import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Layers, CheckCircle, Phone, ArrowRight,
  Star, ChevronRight, Hammer, Sparkles, Ruler
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTABanner from '../components/CTABanner';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollToTop from '../components/ScrollToTop';

const SEO_DATA = {
  title: 'Pose Parquet Paris — Parquet Massif, Contrecollé & Point de Hongrie | D.A. BAT',
  description:
    'Pose et rénovation de parquet à Paris. Parquet massif chêne, Point de Hongrie, contrecollé, stratifié. Ponçage vitrification parquet ancien. Devis gratuit sous 24h.',
  canonical: 'https://da-bat.com/pose-parquet-paris',
};

const JSON_LD = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Pose et Rénovation Parquet Paris',
    provider: {
      '@type': 'GeneralContractor',
      name: 'D.A. BAT',
      url: 'https://da-bat.com',
      telephone: '+33601997659',
    },
    areaServed: { '@type': 'City', name: 'Paris' },
    description:
      'Pose de parquet massif chêne, Point de Hongrie, contrecollé et stratifié à Paris. Rénovation parquet ancien : ponçage, vitrification, huilage. Garantie main d\'œuvre.',
    url: 'https://da-bat.com/pose-parquet-paris',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quel est le prix de pose d\'un parquet à Paris ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'La pose de parquet massif à Paris coûte entre 40 et 80 €/m² (main d\'œuvre). Le parquet massif chêne vierge s\'achète entre 60 et 120 €/m². Comptez donc 100 à 200 €/m² tout compris pour un parquet massif posé en pose collée ou clouée.',
        },
      },
      {
        '@type': 'Question',
        name: 'Peut-on poncer un parquet Point de Hongrie ancien ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui. Les parquets Point de Hongrie massifs peuvent être poncés et vitrifiés jusqu\'à 7 fois au cours de leur vie. Un ponçage professionnel enlève 2 à 3 mm de bois et restitue une surface parfaitement plane. Le résultat est bluffant.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quelle différence entre parquet massif, contrecollé et stratifié ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Le parquet massif (100% bois naturel) est le plus durable et rénovable. Le contrecollé (couche d\'usure + contreplaqué) offre un bon compromis prix/qualité avec une excellente stabilité. Le stratifié (imitation bois) est le plus économique mais ne se rénove pas et résiste moins à l\'humidité.',
        },
      },
      {
        '@type': 'Question',
        name: 'Combien de temps dure la pose d\'un parquet ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pour 60 m², comptez 3 à 5 jours : préparation du support (ragréage si nécessaire), acclimatation du parquet 48h dans la pièce, pose et finition. Pour un parquet en Point de Hongrie (qui exige une précision maximale), prévoyez plutôt 5 à 7 jours.',
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
        name: 'Pose Parquet Paris',
        item: 'https://da-bat.com/pose-parquet-paris',
      },
    ],
  },
].filter((schema) => schema['@type'] !== 'FAQPage');

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

export default function PoseParquet() {
  return (
    <>
      <SEOHead {...SEO_DATA} jsonLd={JSON_LD} />
      <div className="min-h-screen bg-bg-primary text-text-primary selection:bg-gold-200 selection:text-slate-900">
        <Navbar />

        {/* ── HERO ── */}
        <section className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/hero-bg-apartment.webp"
              alt="Pose parquet Paris - D.A. BAT"
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/60 to-slate-900/30" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 pt-32 w-full text-center flex flex-col items-center justify-center">
            <Breadcrumbs items={[{ label: 'Pose Parquet Paris' }]} />

            <motion.div initial="hidden" animate="visible" variants={stagger} className="flex flex-col items-center">
              <motion.div variants={fadeUp} className="mb-6">
                <span className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/40 text-gold-300 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full backdrop-blur-sm">
                  <Layers size={13} /> PARQUETS & SOLS
                </span>
              </motion.div>

              <motion.h1 variants={fadeUp} className="font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 max-w-4xl mx-auto">
                Pose & Rénovation <span className="text-gold-400">Parquet</span> à Paris —
                Massif, Point de Hongrie
              </motion.h1>

              <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
                Pose de parquet massif en chêne, restauration de parquets anciens Point de Hongrie,
                ponçage et vitrification — nous maîtrisons l'art du sol en bois à Paris depuis
                plus de 15 ans.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
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
                { icon: <Ruler size={22} />, value: 'Massif', label: 'jusqu\'à 7 poncés' },
                { icon: <Star size={22} />, value: 'Point', label: 'de Hongrie, Versailles' },
                { icon: <Hammer size={22} />, value: 'Cloué', label: 'collé ou flottant' },
                { icon: <Sparkles size={22} />, value: 'Huilé', label: 'vitrifié ou ciré' },
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
                <span className="text-gold-600 dark:text-gold-400 text-sm font-bold uppercase tracking-widest">Savoir-faire</span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-3 mb-6">
                  Le parquet, une passion artisanale
                </h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  Le parquet en bois massif est l'une des matières nobles les plus appréciées dans
                  les appartements parisiens, notamment dans les immeubles haussmanniens où le Point
                  de Hongrie — avec ses lattes posées en chevrons — incarne la tradition du bâtiment
                  de qualité. Chez D.A. BAT, nous posons et rénovons tous types de parquets avec
                  une précision artisanale.
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                  La préparation du support est cruciale : un parquet posé sur un sol irrégulier ou
                  humide est condamné à sonner ou à travailler. Nous ragréons systématiquement,
                  vérifions l'hygrométrie du support et laissons acclimatiser le bois 48h minimum
                  dans la pièce avant toute pose. C'est ce soin préalable qui garantit un résultat
                  silencieux et durable.
                </p>
                <ul className="space-y-3">
                  {[
                    'Ragréage et préparation du support inclus',
                    'Acclimatation du parquet 48h minimum avant pose',
                    'Pose collée, clouée ou flottante selon le support',
                    'Parquet Point de Hongrie et point de Versailles sur devis',
                    'Ponçage bandes et d\'angle, vitrification ou huilage',
                    'Pose de plinthes et quart-de-rond assortis',
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
                  { src: '/assets/gallery/real/photo_45_2026-03-03_12-40-16.jpg', alt: 'Parquet massif chêne point de Hongrie Paris' },
                  { src: '/assets/gallery/real/photo_30_2026-03-03_12-40-16.jpg', alt: 'Parquet rénové chambre appartement parisien' },
                  { src: '/assets/gallery/real/photo_60_2026-03-03_12-40-16.jpg', alt: 'Parquet salon vitrifié appartement haussmannien' },
                  { src: '/assets/gallery/real/photo_25_2026-03-03_12-40-16.jpg', alt: 'Parquet mansarde vitrifié appartement Paris' },
                ].map((img, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden shadow-lg aspect-square">
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── TYPES PARQUETS ── */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-14">
                <span className="text-gold-600 dark:text-gold-400 text-sm font-bold uppercase tracking-widest">Gammes</span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-3">
                  Tous les types de parquets — posés à Paris
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Layers size={28} />,
                    title: 'Parquet massif',
                    badge: 'Le plus durable',
                    items: [
                      'Chêne massif 22 mm — le classique intemporel',
                      'Point de Hongrie : lattes en chevrons emblématiques',
                      'Point de Versailles : motif à caissons luxueux',
                      'Lames larges rabotées à l\'ancienne',
                      'Jusqu\'à 7 poncés et re-vitrifications',
                    ],
                  },
                  {
                    icon: <Star size={28} />,
                    title: 'Parquet contrecollé',
                    badge: 'Le meilleur rapport qualité/prix',
                    items: [
                      'Chêne contrecollé 14 mm — pose flottante ou collée',
                      'Excellent pour plancher chauffant',
                      'Grande stabilité dimensionnelle (hygrométrie)',
                      'Aspect identique au massif en couche d\'usure 3-6 mm',
                      '2 à 3 poncés possibles sur couche d\'usure épaisse',
                    ],
                  },
                  {
                    icon: <Hammer size={28} />,
                    title: 'Rénovation parquet',
                    badge: 'Donnez une seconde vie',
                    items: [
                      'Ponçage bandes + d\'angle (résultat uniforme)',
                      'Rebouchage fissures et remplacement lames cassées',
                      'Vitrification mate, satinée ou brillante',
                      'Huilage extra mat pour aspect bois naturel brut',
                      'Cirage traditionnel et entretien sur parquets anciens',
                    ],
                  },
                ].map((card, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-gold-500">{card.icon}</span>
                      <span className="text-xs font-bold text-gold-600 dark:text-gold-400 bg-gold-50 dark:bg-gold-900/30 px-3 py-1 rounded-full">{card.badge}</span>
                    </div>
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
        <section className="py-20 bg-white dark:bg-bg-primary">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-12">
                <span className="text-gold-600 dark:text-gold-400 text-sm font-bold uppercase tracking-widest">FAQ</span>
                <h2 className="font-serif text-3xl font-bold text-slate-900 dark:text-white mt-3">
                  Questions sur le parquet à Paris
                </h2>
              </motion.div>
              <div className="space-y-4">
                {[
                  {
                    q: 'Quel est le prix de pose d\'un parquet à Paris ?',
                    a: '40 à 80 €/m² de main d\'œuvre. Avec le matériau (parquet massif chêne), comptez 100 à 200 €/m² tout compris. Devis gratuit et précis sous 24h.',
                  },
                  {
                    q: 'Peut-on poncer un parquet Point de Hongrie ancien ?',
                    a: 'Oui ! Les parquets massifs anciens supportent jusqu\'à 7 poncés. Le résultat est spectaculaire : une surface parfaitement plane, comme neuve. Nous remplaçons les lames manquantes à l\'identique.',
                  },
                  {
                    q: 'Quelle différence entre parquet massif, contrecollé et stratifié ?',
                    a: 'Massif = 100% bois, le plus durable et rénovable. Contrecollé = couche bois + contreplaqué, excellent rapport qualité/prix, stable. Stratifié = imitation bois, économique mais non rénovable.',
                  },
                  {
                    q: 'Combien de temps dure la pose d\'un parquet ?',
                    a: 'Pour 60 m² : 3 à 5 jours (préparation support, acclimatation 48h, pose, finition). Pour un Point de Hongrie exigeant : 5 à 7 jours.',
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
                Nos autres services à Paris
              </motion.h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { to: '/renovation-haussmannien-paris', label: 'Rénovation Haussmannien', desc: 'Restauration moulures & boiseries anciennes' },
                  { to: '/peintre-decorateur-paris', label: 'Peintre Décorateur', desc: 'Peinture intérieure & enduits décoratifs' },
                  { to: '/renovation-salle-de-bain-paris', label: 'Rénovation Salle de Bain', desc: 'Douche italienne, carrelage & plomberie' },
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
