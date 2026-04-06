import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ClipboardList, Phone, ArrowRight,
  Clock, Euro, MessageSquare, ChevronRight, Star, Shield
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollToTop from '../components/ScrollToTop';

const SEO_DATA = {
  title: 'Devis Rénovation Appartement Paris — Gratuit Sous 24h | D.A. BAT',
  description:
    'Demandez votre devis rénovation appartement à Paris. Réponse garantie sous 24h. Prix rénovation au m², estimation travaux, conseil personnalisé gratuit. D.A. BAT — tous corps d\'état.',
  canonical: 'https://da-bat.com/devis-renovation-paris',
};

const JSON_LD = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Devis Rénovation Appartement Paris',
    provider: {
      '@type': 'GeneralContractor',
      name: 'D.A. BAT',
      url: 'https://da-bat.com',
      telephone: '+33601997659',
    },
    areaServed: { '@type': 'City', name: 'Paris' },
    description:
      'Devis gratuit rénovation appartement Paris sous 24h. Estimation travaux, conseil personnalisé, prix au m². Rénovation complète tous corps d\'état.',
    url: 'https://da-bat.com/devis-renovation-paris',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
      description: 'Devis gratuit et sans engagement',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quel est le prix d\'une rénovation d\'appartement à Paris au m² ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Les prix de rénovation à Paris varient selon l\'ampleur des travaux : rafraîchissement (peinture + sols) : 300-600 €/m² ; rénovation partielle (cuisine ou SDB) : 600-1 200 €/m² ; rénovation complète tous corps d\'état : 1 200-2 500 €/m². Ces fourchettes incluent la main d\'œuvre et les matériaux standards.',
        },
      },
      {
        '@type': 'Question',
        name: 'Le devis de rénovation est-il vraiment gratuit ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui, le devis est totalement gratuit et sans engagement. Nous nous déplaçons chez vous pour une visite de 45 minutes, évaluons l\'état du bien et vous remettons un devis détaillé sous 24h après la visite.',
        },
      },
      {
        '@type': 'Question',
        name: 'Comment se déroule une rénovation avec D.A. BAT ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '1) Prise de contact et visite gratuite. 2) Remise du devis sous 24h avec planning. 3) Signature et acompte de 30%. 4) Début des travaux à la date convenue. 5) Suivi de chantier avec reporting hebdomadaire. 6) Réception contradictoire et levée de réserves en 48h. 7) Garantie décennale sur tous les ouvrages.',
        },
      },
      {
        '@type': 'Question',
        name: 'Proposez-vous des facilités de paiement ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui. Notre calendrier de paiement standard est : 30% à la commande, 40% à mi-chantier, 30% à la livraison. Nous acceptons également le crédit travaux via nos partenaires bancaires pour les chantiers de plus de 5 000 €.',
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
        name: 'Devis Rénovation Paris',
        item: 'https://da-bat.com/devis-renovation-paris',
      },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

export default function DevisRenovation() {
  return (
    <>
      <SEOHead {...SEO_DATA} jsonLd={JSON_LD} />
      <div className="min-h-screen bg-bg-primary text-text-primary selection:bg-gold-200 selection:text-slate-900">
        <Navbar />

        {/* ── HERO ── */}
        <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/assets/images/after_custom.webp"
              alt="Appartement rénové à Paris - demandez votre devis gratuit"
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/60 to-slate-900/30" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 pt-32 w-full">
            <Breadcrumbs items={[{ label: 'Devis Rénovation Paris' }]} />

            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp} className="mb-6">
                <span className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/40 text-gold-300 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full backdrop-blur-sm">
                  <ClipboardList size={13} /> DEVIS GRATUIT & SANS ENGAGEMENT
                </span>
              </motion.div>

              <motion.h1 variants={fadeUp} className="font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 max-w-4xl">
                Devis <span className="text-gold-400">Rénovation</span> Appartement
                à Paris — Gratuit Sous 24h
              </motion.h1>

              <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-200 max-w-2xl mb-10 leading-relaxed">
                Un projet de rénovation à Paris ? Contactez-nous pour une visite gratuite.
                Nous évaluons votre bien sur place et vous remettons un devis détaillé poste par
                poste en moins de 24h. Sans engagement, sans frais cachés.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <a
                  href="tel:0601997659"
                  className="inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-400 text-slate-900 font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-gold-500/30 hover:-translate-y-0.5"
                >
                  <Phone size={18} /> 06 01 99 76 59
                </a>
                <a
                  href="mailto:tchoudinov@hotmail.fr"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold px-8 py-4 rounded-full transition-all backdrop-blur-sm"
                >
                  <MessageSquare size={16} /> Envoyer un email
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── GARANTIES ── */}
        <section className="bg-slate-900 dark:bg-slate-950 py-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { icon: <Clock size={22} />, value: '24h', label: 'délai de remise du devis' },
                { icon: <Euro size={22} />, value: 'Gratuit', label: 'sans engagement' },
                { icon: <Shield size={22} />, value: 'Décennale', label: 'garantie sur tous ouvrages' },
                { icon: <Star size={22} />, value: '5/5', label: 'satisfaction clients' },
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

        {/* ── PROCESSUS DEVIS ── */}
        <section className="py-20 bg-white dark:bg-bg-primary">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="text-center mb-14">
                <span className="text-gold-600 dark:text-gold-400 text-sm font-bold uppercase tracking-widest">Comment ça marche ?</span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-3">
                  De la prise de contact à la livraison
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mt-4 max-w-2xl mx-auto">
                  Nous avons simplifié le processus au maximum pour que votre projet de rénovation
                  se déroule sans stress, de la première visite jusqu'à la remise des clés.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    step: '01',
                    icon: <Phone size={24} />,
                    title: 'Prise de contact',
                    desc: 'Appelez-nous ou envoyez un email. Nous fixons la date de visite dans les 48h. Aucun déplacement ne vous sera facturé.',
                  },
                  {
                    step: '02',
                    icon: <ClipboardList size={24} />,
                    title: 'Visite gratuite',
                    desc: 'Un expert D.A. BAT visite votre bien : évaluation complète de l\'état, mesurages, définition du programme de travaux selon vos souhaits.',
                  },
                  {
                    step: '03',
                    icon: <Euro size={24} />,
                    title: 'Devis sous 24h',
                    desc: 'Vous recevez un devis détaillé poste par poste avec planning, matériaux proposés et garanties. Vous êtes libre d\'accepter ou non.',
                  },
                  {
                    step: '04',
                    icon: <Star size={24} />,
                    title: 'Travaux & livraison',
                    desc: 'Chantier géré de A à Z. Reporting hebdomadaire, ajustements documentés, réception contradictoire et levée de réserves en 48h.',
                  },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700 hover:border-gold-300 dark:hover:border-gold-600 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-5xl font-extrabold text-gold-200 dark:text-gold-900/60 font-serif leading-none">{s.step}</span>
                      <span className="text-gold-500">{s.icon}</span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white mb-3">{s.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{s.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── PRIX AU M2 ── */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="text-center mb-12">
                <span className="text-gold-600 dark:text-gold-400 text-sm font-bold uppercase tracking-widest">Tarifs indicatifs</span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-3">
                  Prix rénovation appartement Paris au m²
                </h2>
                <p className="text-slate-500 dark:text-slate-400 mt-3 text-sm">* Ces fourchettes sont indicatives. Seule une visite permet un chiffrage précis.</p>
              </motion.div>

              <div className="space-y-4">
                {[
                  {
                    label: 'Rafraîchissement (peinture + sols)',
                    price: '300 — 600 €/m²',
                    desc: 'Peinture intérieure complète, ponçage et vitrification parquet, petites réparations.',
                    color: 'border-l-green-400',
                  },
                  {
                    label: 'Rénovation légère (cuisine ou SDB)',
                    price: '600 — 1 200 €/m²',
                    desc: 'Réfection d\'une pièce : carrelage, plomberie, électricité, peinture, nouveaux équipements.',
                    color: 'border-l-blue-400',
                  },
                  {
                    label: 'Rénovation intermédiaire (plusieurs pièces)',
                    price: '1 200 — 1 800 €/m²',
                    desc: 'Rénovation partielle : distribution conservée, plusieurs corps de métier, matériaux mi-gamme.',
                    color: 'border-l-amber-400',
                  },
                  {
                    label: 'Rénovation complète tous corps d\'état',
                    price: '1 800 — 2 500 €/m²',
                    desc: 'Restructuration totale : distribution, réseaux, matériaux haut de gamme, finitions premium.',
                    color: 'border-l-gold-500',
                  },
                ].map((row, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className={`bg-white dark:bg-slate-800 rounded-2xl p-6 border-l-4 ${row.color} shadow-sm`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white">{row.label}</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{row.desc}</p>
                      </div>
                      <span className="font-bold text-gold-600 dark:text-gold-400 whitespace-nowrap text-lg">{row.price}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── CONTACT RAPIDE ── */}
        <section className="py-20 bg-white dark:bg-bg-primary">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.span variants={fadeUp} className="text-gold-600 dark:text-gold-400 text-sm font-bold uppercase tracking-widest">
                Prêt à commencer ?
              </motion.span>
              <motion.h2 variants={fadeUp} className="font-serif text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-3 mb-6">
                Demandez votre devis maintenant
              </motion.h2>
              <motion.p variants={fadeUp} className="text-slate-600 dark:text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                Appelez-nous directement ou envoyez-nous un message. Nous répondons
                dans les 2h en semaine et fixons une date de visite à votre convenance.
                Aucune avance, aucun frais de déplacement.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:0601997659"
                  className="inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-400 text-slate-900 font-bold px-10 py-5 rounded-full text-lg transition-all shadow-lg hover:shadow-gold-500/30 hover:-translate-y-0.5"
                >
                  <Phone size={20} /> 06 01 99 76 59
                </a>
                <Link
                  to="/#contact"
                  className="inline-flex items-center gap-2 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-900 font-bold px-10 py-5 rounded-full text-lg transition-all shadow-lg hover:-translate-y-0.5"
                >
                  Formulaire de contact <ArrowRight size={18} />
                </Link>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-slate-500 dark:text-slate-400">
                {[
                  '✓ Devis gratuit et sans engagement',
                  '✓ Réponse sous 24h',
                  '✓ Visite à domicile gratuite',
                  '✓ Garantie décennale',
                ].map((item, i) => (
                  <span key={i} className="font-medium">{item}</span>
                ))}
              </motion.div>
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
                  Questions sur le devis rénovation à Paris
                </h2>
              </motion.div>
              <div className="space-y-4">
                {[
                  {
                    q: 'Quel est le prix d\'une rénovation d\'appartement à Paris au m² ?',
                    a: 'Rafraîchissement : 300-600 €/m². Rénovation légère : 600-1 200 €/m². Rénovation complète : 1 800-2 500 €/m². Ces fourchettes incluent matériaux et main d\'œuvre. Seule une visite permet un devis précis.',
                  },
                  {
                    q: 'Le devis de rénovation est-il vraiment gratuit ?',
                    a: 'Oui, totalement gratuit et sans engagement. Visite sur place + devis détaillé remis sous 24h. Aucun frais de déplacement.',
                  },
                  {
                    q: 'Comment se déroule une rénovation avec D.A. BAT ?',
                    a: 'Visite → devis 24h → signature → travaux avec reporting hebdomadaire → réception contradictoire → levée de réserves en 48h → garantie décennale.',
                  },
                  {
                    q: 'Proposez-vous des facilités de paiement ?',
                    a: 'Oui : 30% à la commande, 40% à mi-chantier, 30% à la livraison. Crédit travaux possible via partenaires bancaires pour chantiers > 5 000 €.',
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
                Nos services à Paris
              </motion.h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { to: '/renovation-haussmannien-paris', label: 'Rénovation Haussmannien', desc: 'Parquets anciens, moulures & boiseries' },
                  { to: '/peintre-decorateur-paris', label: 'Peintre Décorateur', desc: 'Peinture & enduits décoratifs' },
                  { to: '/renovation-salle-de-bain-paris', label: 'Rénovation Salle de Bain', desc: 'Douche italienne & carrelage' },
                  { to: '/pose-parquet-paris', label: 'Pose de Parquet', desc: 'Parquet massif & Point de Hongrie' },
                ].map((link, i) => (
                  <motion.div key={i} variants={fadeUp}>
                    <Link
                      to={link.to}
                      className="flex flex-col gap-1 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-gold-400 dark:hover:border-gold-500 transition-colors group"
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

        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </div>
    </>
  );
}
