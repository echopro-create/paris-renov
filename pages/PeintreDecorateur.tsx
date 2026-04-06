import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Paintbrush, Palette, CheckCircle, Phone, ArrowRight,
  Star, ChevronRight, Layers, Droplets, Sparkles
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTABanner from '../components/CTABanner';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollToTop from '../components/ScrollToTop';

const SEO_DATA = {
  title: 'Peintre Décorateur Paris — Peinture Intérieure Appartement | D.A. BAT',
  description:
    'Peintre décorateur professionnel à Paris. Peinture intérieure appartement, enduits décoratifs, béton ciré, stucco. Finitions premium pour appartements parisiens. Devis gratuit.',
  canonical: 'https://da-bat.com/peintre-decorateur-paris',
};

const JSON_LD = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Peinture Intérieure et Décoration',
    provider: {
      '@type': 'GeneralContractor',
      name: 'D.A. BAT',
      url: 'https://da-bat.com',
      telephone: '+33601997659',
    },
    areaServed: { '@type': 'City', name: 'Paris' },
    description:
      'Peinture intérieure appartement Paris, enduits décoratifs, belle peinture à la chaux, béton ciré, papier peint haut de gamme.',
    url: 'https://da-bat.com/peintre-decorateur-paris',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quel est le prix d\'une peinture d\'appartement à Paris ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Le tarif moyen pour la peinture intérieure à Paris est de 25 à 60 €/m² de surface peinte, selon la préparation des supports, le nombre de couches et la qualité des peintures. Pour un appartement de 65m², prévoyez 3 500 à 7 000 €.',
        },
      },
      {
        '@type': 'Question',
        name: 'Combien de temps faut-il pour peindre un appartement ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pour un appartement de 65m², comptez 5 à 8 jours de travaux selon l\'état des murs. Nous travaillons proprement : protection des sols, rebouchage minutieux et application en plusieurs couches pour un résultat parfait.',
        },
      },
      {
        '@type': 'Question',
        name: 'Proposez-vous un conseil couleur inclus dans le devis ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui. Lors de la visite de devis, nous discutons de votre projet décoratif : ambiance souhaitée, luminosité, style. Nous pouvons proposer des palettes et réaliser des tests couleur sur vos murs avant de valider votre choix.',
        },
      },
      {
        '@type': 'Question',
        name: 'Travaillez-vous avec des peintures écologiques ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolument. Nous utilisons des peintures à faibles émissions de COV (A+ ou A++) des meilleures marques (Tollens, Zoffany, Farrow & Ball). Nous proposons également des finitions à la chaux naturelle pour les appartements anciens.',
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
        name: 'Peintre Décorateur Paris',
        item: 'https://da-bat.com/peintre-decorateur-paris',
      },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

export default function PeintreDecorateur() {
  return (
    <>
      <SEOHead {...SEO_DATA} jsonLd={JSON_LD} />
      <div className="min-h-screen bg-bg-primary text-text-primary selection:bg-gold-200 selection:text-slate-900">
        <Navbar />

        {/* ── HERO ── */}
        <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/assets/services/painting-service.webp"
              alt="Peintre décorateur Paris - peinture intérieure appartement haussmannien"
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/60 to-slate-900/30" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 pt-32 w-full">
            <Breadcrumbs items={[{ label: 'Peintre Décorateur Paris' }]} />

            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp} className="mb-6">
                <span className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/40 text-gold-300 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full backdrop-blur-sm">
                  <Paintbrush size={13} /> PEINTURE & DÉCORATION
                </span>
              </motion.div>

              <motion.h1 variants={fadeUp} className="font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 max-w-4xl">
                Peintre <span className="text-gold-400">Décorateur</span> à Paris —{' '}
                Finitions d'Exception
              </motion.h1>

              <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-200 max-w-2xl mb-10 leading-relaxed">
                Peinture intérieure, enduits décoratifs, béton ciré, à la chaux —
                nous habillons vos murs avec précision et sens du détail. Du T1 rénové
                à l'appartement de standing, chaque couche est posée pour durer.
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

        {/* ── AVANTAGES ── */}
        <section className="bg-slate-900 dark:bg-slate-950 py-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { icon: <Star size={22} />, value: 'Premium', label: 'peintures A+ COV' },
                { icon: <Palette size={22} />, value: '+500', label: 'teintes disponibles' },
                { icon: <CheckCircle size={22} />, value: '3 couches', label: 'minimum garanties' },
                { icon: <Sparkles size={22} />, value: 'Conseil', label: 'coloris inclus' },
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

        {/* ── CONTENU PRINCIPAL ── */}
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
                <span className="text-gold-600 dark:text-gold-400 text-sm font-bold uppercase tracking-widest">Expertise peinture</span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-3 mb-6">
                  La peinture, un métier de précision
                </h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  Chez D.A. BAT, la peinture n'est pas une étape secondaire. C'est le soin apporté
                  à la préparation des supports — rebouchage, enduit de lissage, ponçage — qui fait
                  la différence entre un résultat passable et une finition impeccable. Nos peintres
                  travaillent exclusivement avec des peintures professionnelles hautes performances,
                  lésives lavables et teintées en machine pour un résultat homogène.
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                  Nous intervenons sur tous types de supports : plâtre, béton, boiseries, radiateurs,
                  boiseries en aluminium. Du sol au plafond, chaque surface est traitée avec la même
                  exigence. Résultat : une peinture qui tient dans le temps, sans reprises.
                </p>
                <ul className="space-y-3">
                  {[
                    'Rebouchage et ragréage des fissures avant application',
                    'Impression isolante pour parfaite adhérence',
                    'Application au rouleau, pinceau ou airless selon les surfaces',
                    'Peintures certifiées A+ (très faibles émissions de COV)',
                    'Nettoyage et protection des sols inclus dans tous les chantiers',
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
                  { src: '/assets/gallery/real/photo_60_2026-03-03_12-40-16.jpg', alt: 'Salon peint en blanc mat effet velours' },
                  { src: '/assets/gallery/real/photo_3_2026-03-03_12-40-16.jpg', alt: 'Peinture sur carrelage salle de bain Paris' },
                  { src: '/assets/gallery/real/photo_25_2026-03-03_12-40-16.jpg', alt: 'Chambre peinte tons chauds appartement parisien' },
                  { src: '/assets/gallery/real/photo_35_2026-03-03_12-40-16.jpg', alt: 'Finitions blanc cassé peinture appartement' },
                ].map((img, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden shadow-lg aspect-square">
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── PRESTATIONS ── */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-14">
                <span className="text-gold-600 dark:text-gold-400 text-sm font-bold uppercase tracking-widest">Prestations</span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-3">
                  Peinture décorative à Paris — toutes finitions
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Paintbrush size={28} />,
                    title: 'Peinture classique',
                    items: [
                      'Peinture mate et velours pour murs et plafonds',
                      'Peinture satinée pour cuisines et salles de bain',
                      'Peinture glycérophtalique pour boiseries',
                      'Laque brillante sur portes et menuiseries',
                      'Peinture façade et thermolaquage',
                    ],
                  },
                  {
                    icon: <Layers size={28} />,
                    title: 'Enduits décoratifs',
                    items: [
                      'Béton ciré sur murs, sols et plans de travail',
                      'Stucco veneziano et marmorino',
                      'Enduit à la chaux teinté dans la masse',
                      'Tadelakt pour pièces humides',
                      'Terre argileuse et badigeon naturel',
                    ],
                  },
                  {
                    icon: <Droplets size={28} />,
                    title: 'Revêtements muraux',
                    items: [
                      'Pose papier peint vinyle et intissé',
                      'Papier peint panoramique et décors scéniques',
                      'Tapisserie de fibres naturelles (herbe de mer, sisal)',
                      'Pose de lambris et bardage bois intérieur',
                      'Tissu tendu sur châssis',
                    ],
                  },
                ].map((card, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700 hover:border-gold-300 dark:hover:border-gold-600 transition-colors"
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
        <section className="py-20 bg-white dark:bg-bg-primary">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-12">
                <span className="text-gold-600 dark:text-gold-400 text-sm font-bold uppercase tracking-widest">FAQ</span>
                <h2 className="font-serif text-3xl font-bold text-slate-900 dark:text-white mt-3">
                  Questions sur la peinture à Paris
                </h2>
              </motion.div>
              <div className="space-y-4">
                {[
                  {
                    q: 'Quel est le prix d\'une peinture d\'appartement à Paris ?',
                    a: '25 à 60 €/m² de surface peinte selon préparation et matériaux. Pour un 65m², prévoyez 3 500 à 7 000 €. Devis précis et gratuit remis sous 24h.',
                  },
                  {
                    q: 'Combien de temps faut-il pour peindre un appartement ?',
                    a: 'Pour un 65m², 5 à 8 jours selon l\'état des murs. Nous travaillons proprement, avec protection complète des sols et mobilier.',
                  },
                  {
                    q: 'Proposez-vous un conseil couleur lors du devis ?',
                    a: 'Oui, c\'est inclus. Nous vous proposons des palettes adaptées à la luminosité de vos pièces et pouvons réaliser des tests couleur avant lancement.',
                  },
                  {
                    q: 'Travaillez-vous avec des peintures écologiques ?',
                    a: 'Oui. Nous utilisons des peintures A+ (très faibles COV) de marques professionnelles. Nous proposons aussi des finitions 100% naturelles : chaux, terre argileuse, tadelakt.',
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
                Nos autres prestations
              </motion.h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { to: '/renovation-haussmannien-paris', label: 'Rénovation Haussmannien', desc: 'Parquets, moulures & boiseries' },
                  { to: '/renovation-salle-de-bain-paris', label: 'Rénovation Salle de Bain', desc: 'Douche italienne, carrelage & plomberie' },
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
