import type { SeoFaqItem, SeoRelatedLink } from './seoPageConfigs';

export interface SeoArticleSection {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface SeoArticleFact {
  label: string;
  value: string;
}

export interface SeoArticleImage {
  src: string;
  alt: string;
  caption: string;
}

export interface SeoArticleConfig {
  slug: string;
  title: string;
  description: string;
  canonical: string;
  breadcrumbLabel: string;
  badge: string;
  heading: string;
  heroCopy: string;
  heroImage: string;
  heroAlt: string;
  datePublished: string;
  dateModified: string;
  readingTime: string;
  quickFacts: SeoArticleFact[];
  intro: string[];
  sections: SeoArticleSection[];
  images: SeoArticleImage[];
  faqTitle: string;
  faq: SeoFaqItem[];
  serviceLinksTitle: string;
  serviceLinks: SeoRelatedLink[];
  articleLinksTitle: string;
  articleLinks: SeoRelatedLink[];
}

const SITE_URL = 'https://da-bat.com';
const UPDATED_AT = '2026-04-29';

export const seoArticleConfigs: Record<string, SeoArticleConfig> = {
  prixRenovationAppartementParis: {
    slug: '/prix-renovation-appartement-paris',
    title: 'Prix Rénovation Appartement Paris | Budget au m² & Devis | D.A. BAT',
    description:
      "Guide des prix de rénovation d'appartement à Paris : budget au m², postes qui font varier le coût, arbitrages utiles et méthode de devis détaillé.",
    canonical: `${SITE_URL}/prix-renovation-appartement-paris`,
    breadcrumbLabel: 'Prix rénovation appartement Paris',
    badge: 'GUIDE BUDGET',
    heading: "Prix d'une rénovation d'appartement à Paris : comprendre le budget avant de lancer les travaux",
    heroCopy:
      "À Paris, deux appartements de même surface peuvent coûter très différemment à rénover. L'état des réseaux, la copropriété, les pièces d'eau, les sols et le niveau de finition pèsent souvent plus que la surface seule.",
    heroImage: '/images/hero-bg-apartment.webp',
    heroAlt: "Appartement parisien rénové pour illustrer le prix d'une rénovation à Paris",
    datePublished: '2026-04-29',
    dateModified: UPDATED_AT,
    readingTime: '7 min',
    quickFacts: [
      { label: 'Rafraîchissement', value: '300-600 EUR/m²' },
      { label: 'Rénovation partielle', value: '600-1 200 EUR/m²' },
      { label: 'Rénovation complète', value: '1 200-2 500 EUR/m²' },
      { label: 'Devis', value: 'après visite technique' },
    ],
    intro: [
      "Chercher un prix moyen au mètre carré est utile pour cadrer un projet, mais ce n'est pas suffisant pour décider. Une rénovation parisienne dépend du bâti, de l'accès, de la copropriété, de la densité des réseaux et du niveau de finition attendu.",
      "Ce guide donne des repères concrets pour préparer une visite, comparer des devis et éviter les mauvaises économies. Les fourchettes restent indicatives : un chiffrage fiable se fait toujours après diagnostic du logement.",
    ],
    sections: [
      {
        id: 'niveaux-budget',
        title: 'Les trois niveaux de budget les plus fréquents',
        paragraphs: [
          "Un rafraîchissement concerne surtout les peintures, les petites reprises de supports, quelques sols et la remise au propre des pièces sèches. Il ne transforme pas le plan et ne règle pas les réseaux vieillissants.",
          "Une rénovation partielle touche une cuisine, une salle de bain, une chambre ou une zone technique. Elle demande plus de coordination, car les interfaces entre plomberie, électricité, carrelage et peinture doivent être anticipées.",
          "Une rénovation complète reprend le logement comme un ensemble : réseaux, supports, cloisons, sols, cuisine, salle de bain et finitions. C'est le scénario le plus coûteux, mais aussi celui qui limite les reprises successives.",
        ],
        bullets: [
          'Un prix bas sans visite cache souvent des exclusions.',
          'Les pièces humides pèsent davantage que les chambres ou salons.',
          'La qualité des supports détermine le résultat final de la peinture.',
        ],
      },
      {
        id: 'postes-cout',
        title: 'Les postes qui font monter le coût',
        paragraphs: [
          "La plomberie et l'électricité sont souvent les postes les plus sous-estimés. Déplacer une cuisine ou une salle d'eau peut imposer des parcours de réseaux plus complexes, des pentes d'évacuation et des reprises de cloisons.",
          "Les sols anciens, les murs irréguliers et les plafonds fissurés ajoutent aussi du temps. Avant de poser un matériau visible, il faut préparer ce qui ne se voit plus une fois le chantier terminé.",
        ],
        bullets: [
          'Dépose et évacuation en immeuble occupé.',
          'Mise aux normes électrique et reprise du tableau.',
          "Création ou déplacement d'arrivées et évacuations d'eau.",
          'Ratissage, enduits et corrections des murs.',
          'Pose de parquet, carrelage, cuisine et finitions sur mesure.',
        ],
      },
      {
        id: 'copropriete-acces',
        title: "Pourquoi Paris coûte parfois plus cher qu'une ville voisine",
        paragraphs: [
          "À Paris, l'accès au chantier compte beaucoup : étages élevés, ascenseur étroit, stationnement, horaires de copropriété, protection des parties communes et évacuation des gravats. Ces contraintes ne sont pas décoratives, elles changent le temps réel de travail.",
          "Un bon devis doit donc préciser le périmètre et les conditions d'intervention. Sinon, le chantier démarre avec des angles morts et se corrige en cours de route, souvent au mauvais moment.",
        ],
      },
      {
        id: 'devis-fiable',
        title: 'Comment obtenir un devis vraiment comparable',
        paragraphs: [
          "Comparer deux totaux ne suffit pas. Il faut comparer les lots inclus, la préparation des supports, les matériaux, les protections, les évacuations, les délais, les garanties et les hypothèses prises pour les réseaux.",
          "Chez D.A. BAT, la visite sert à comprendre le logement avant de promettre un prix. Le devis doit aider à décider, pas seulement donner un chiffre.",
        ],
        bullets: [
          'Demander un chiffrage lot par lot.',
          'Vérifier les exclusions et les options.',
          'Identifier les postes à arbitrer avant signature.',
          'Prévoir une marge pour les surprises du bâti ancien.',
        ],
      },
    ],
    images: [
      {
        src: '/assets/gallery/real/photo_60_2026-03-03_12-40-16.jpg',
        alt: 'Salon rénové dans un appartement parisien',
        caption: 'Les pièces sèches coûtent moins cher que les zones techniques, mais la préparation des supports reste décisive.',
      },
      {
        src: '/assets/gallery/real/photo_40_2026-03-03_12-40-16.jpg',
        alt: 'Salle de bain rénovée avec carrelage grand format',
        caption: "Les pièces d'eau concentrent plomberie, étanchéité, carrelage, ventilation et finitions.",
      },
    ],
    faqTitle: 'Questions fréquentes sur les prix',
    faq: [
      {
        q: 'Peut-on chiffrer une rénovation sans visiter le logement ?',
        a: "On peut donner une fourchette indicative, mais pas un devis fiable. L'état des réseaux, des murs, des sols et les contraintes d'accès changent fortement le coût.",
      },
      {
        q: 'Pourquoi deux devis au m² peuvent-ils être très différents ?',
        a: "Parce qu'ils n'incluent pas toujours le même périmètre : préparation des supports, qualité des matériaux, évacuation, protection, coordination et garanties.",
      },
      {
        q: "Quel poste faut-il éviter de sacrifier pour baisser le prix ?",
        a: "Les réseaux et la préparation des supports. Une finition visible peut être arbitrée, mais une plomberie, une électricité ou un support mal traité entraîne souvent des reprises coûteuses.",
      },
      {
        q: 'Le devis D.A. BAT est-il gratuit ?',
        a: 'Oui. La demande de devis est gratuite et sert à cadrer le périmètre réel des travaux avant engagement.',
      },
    ],
    serviceLinksTitle: 'Pages utiles pour chiffrer votre projet',
    serviceLinks: [
      { to: '/renovation-appartement-paris', label: 'Rénovation appartement', desc: 'Le périmètre complet d’un chantier tous corps d’état.' },
      { to: '/renovation-cuisine-paris', label: 'Cuisine', desc: 'Un poste clé quand les réseaux et l’implantation changent.' },
      { to: '/renovation-salle-de-bain-paris', label: 'Salle de bain', desc: 'Étanchéité, plomberie, carrelage et finitions en pièce humide.' },
      { to: '/devis-renovation-paris', label: 'Devis rénovation', desc: 'Demander une visite et un chiffrage détaillé.' },
    ],
    articleLinksTitle: 'Guides complémentaires',
    articleLinks: [
      { to: '/delai-renovation-appartement-paris', label: 'Délais travaux', desc: 'Comprendre le planning réaliste d’un chantier parisien.' },
      { to: '/renovation-paris-questions-copropriete', label: 'Copropriété', desc: 'Anticiper les contraintes d’immeuble avant le chantier.' },
    ],
  },

  delaiRenovationAppartementParis: {
    slug: '/delai-renovation-appartement-paris',
    title: 'Délai Rénovation Appartement Paris | Planning Travaux | D.A. BAT',
    description:
      "Combien de temps prévoir pour rénover un appartement à Paris ? Planning par étape, facteurs de retard et méthode pour sécuriser les délais.",
    canonical: `${SITE_URL}/delai-renovation-appartement-paris`,
    breadcrumbLabel: 'Délai rénovation appartement Paris',
    badge: 'PLANNING TRAVAUX',
    heading: "Combien de temps prévoir pour rénover un appartement à Paris ?",
    heroCopy:
      "Le bon délai n'est pas seulement une durée en semaines. C'est un enchaînement propre entre diagnostic, commandes, dépose, réseaux, supports, finitions et réception.",
    heroImage: '/assets/gallery/real/photo_35_2026-03-03_12-40-16.jpg',
    heroAlt: 'Appartement rénové à Paris pour illustrer le délai de travaux',
    datePublished: '2026-04-29',
    dateModified: UPDATED_AT,
    readingTime: '6 min',
    quickFacts: [
      { label: 'Studio', value: '2-6 semaines' },
      { label: 'Appartement 50-90 m²', value: '6-12 semaines' },
      { label: 'Pièces humides', value: 'à planifier tôt' },
      { label: 'Risque principal', value: 'réseaux et supports' },
    ],
    intro: [
      "Un chantier parisien se gagne avant le démarrage. Les délais les plus fiables viennent d'un périmètre clair, d'un ordre logique des lots et d'une bonne anticipation des contraintes de copropriété.",
      "Ce guide explique les étapes qui structurent le planning et les points qui font vraiment varier la durée d'une rénovation.",
    ],
    sections: [
      {
        id: 'planning-type',
        title: 'Un planning type pour une rénovation complète',
        paragraphs: [
          "La première phase concerne la visite, le diagnostic et le chiffrage. Elle permet de figer le périmètre, les options et les postes à arbitrer avant de mobiliser les équipes.",
          "Viennent ensuite la dépose, les reprises de plomberie et d'électricité, les cloisons, la préparation des supports, les sols, les pièces techniques et les finitions. Inverser cet ordre crée presque toujours des reprises.",
        ],
        bullets: [
          'Diagnostic et arbitrages avant commande.',
          'Dépose et protection des parties communes.',
          'Réseaux avant fermeture des cloisons.',
          'Supports avant peinture, carrelage et parquet.',
          'Réception avec vérification des finitions.',
        ],
      },
      {
        id: 'facteurs-retard',
        title: 'Ce qui retarde le plus souvent un chantier',
        paragraphs: [
          "Les retards viennent rarement d'un seul poste. Ils apparaissent quand une décision de plan n'est pas tranchée, quand un matériau arrive tard, ou quand une surprise technique est découverte après fermeture d'une zone.",
          "Les immeubles parisiens ajoutent aussi des contraintes pratiques : horaires de bruit, ascenseur, livraison, stockage, évacuation des gravats et protection des parties communes.",
        ],
        bullets: [
          'Choix de cuisine ou carrelage validé trop tard.',
          'Support plus abîmé que prévu après dépose.',
          'Réseau impossible à déplacer comme prévu.',
          'Accès chantier ou règles de copropriété mal anticipés.',
        ],
      },
      {
        id: 'studio-petite-surface',
        title: 'Studio et petite surface : plus court, mais pas toujours simple',
        paragraphs: [
          "Un studio peut être rénové plus vite, mais la densité technique est forte. Cuisine, salle d'eau, rangement, prises et éclairage se concentrent dans peu de mètres carrés.",
          "Le planning dépend donc moins de la surface que du nombre de lots à reprendre. Une petite salle d'eau complète peut demander plus de coordination qu'une grande pièce sèche.",
        ],
      },
      {
        id: 'tenir-delai',
        title: 'Comment sécuriser le délai avant le démarrage',
        paragraphs: [
          "La meilleure méthode consiste à décider tôt ce qui doit être décidé : implantation, matériaux, appareils sanitaires, niveau de finition, accès et règles d'immeuble.",
          "D.A. BAT travaille avec un seul interlocuteur pour limiter les zones floues entre les lots. C'est souvent ce qui fait la différence entre un planning théorique et un chantier tenu.",
        ],
      },
    ],
    images: [
      {
        src: '/assets/gallery/real/photo_25_2026-03-03_12-40-16.jpg',
        alt: 'Petite surface rénovée à Paris',
        caption: 'Les petites surfaces demandent un planning serré, car chaque intervention dépend des autres.',
      },
      {
        src: '/assets/gallery/real/photo_10_2026-03-03_12-40-16.jpg',
        alt: 'Cuisine rénovée dans un appartement parisien',
        caption: 'Les choix de cuisine doivent être validés tôt pour ne pas bloquer les réseaux.',
      },
    ],
    faqTitle: 'Questions fréquentes sur les délais',
    faq: [
      {
        q: 'Combien de temps dure une rénovation complète ?',
        a: 'Pour un appartement de 50 à 90 m², il faut souvent prévoir 6 à 12 semaines selon l’état initial, les pièces techniques et le niveau de finition.',
      },
      {
        q: 'Un studio peut-il être rénové en moins d’un mois ?',
        a: 'Oui dans certains cas, mais seulement si les choix sont validés tôt et si les réseaux ne réservent pas de surprise importante.',
      },
      {
        q: 'Quand faut-il commander les matériaux ?',
        a: 'Le plus tôt possible après validation du devis, surtout pour cuisine, carrelage, robinetterie, parquet et éléments sur mesure.',
      },
      {
        q: 'La copropriété peut-elle ralentir le chantier ?',
        a: 'Oui. Horaires, accès, ascenseur, protection des parties communes et évacuation doivent être intégrés au planning.',
      },
    ],
    serviceLinksTitle: 'Pages liées au planning',
    serviceLinks: [
      { to: '/renovation-appartement-paris', label: 'Rénovation complète', desc: 'Coordonner tous les lots dans le bon ordre.' },
      { to: '/renovation-studio-paris', label: 'Studio', desc: 'Optimiser une petite surface avec un planning court.' },
      { to: '/plomberie-electricite-paris', label: 'Réseaux', desc: 'Les lots techniques structurent le calendrier.' },
      { to: '/devis-renovation-paris', label: 'Demander un devis', desc: 'Cadrer le périmètre et le délai après visite.' },
    ],
    articleLinksTitle: 'À lire aussi',
    articleLinks: [
      { to: '/prix-renovation-appartement-paris', label: 'Prix rénovation', desc: 'Comprendre les fourchettes de budget au m².' },
      { to: '/renovation-paris-questions-copropriete', label: 'Copropriété', desc: 'Préparer les règles d’immeuble avant travaux.' },
    ],
  },

  renovationAppartementAvantApres: {
    slug: '/renovation-appartement-paris-avant-apres',
    title: 'Rénovation Appartement Paris Avant Après | Exemples | D.A. BAT',
    description:
      "Exemples de rénovation d'appartement à Paris : avant/après, pièces transformées, arbitrages techniques et finitions qui valorisent le bien.",
    canonical: `${SITE_URL}/renovation-appartement-paris-avant-apres`,
    breadcrumbLabel: 'Rénovation avant après Paris',
    badge: 'RÉALISATIONS',
    heading: 'Rénovation d’appartement à Paris : ce que montrent vraiment les avant/après',
    heroCopy:
      "Un avant/après utile ne montre pas seulement une belle finition. Il révèle les problèmes corrigés : lumière, circulation, réseaux, supports, pièces humides et cohérence des matériaux.",
    heroImage: '/assets/gallery/real/photo_60_2026-03-03_12-40-16.jpg',
    heroAlt: 'Appartement parisien rénové en exemple avant après',
    datePublished: '2026-04-29',
    dateModified: UPDATED_AT,
    readingTime: '6 min',
    quickFacts: [
      { label: 'Objectif', value: 'valoriser le bien' },
      { label: 'Preuve utile', value: 'détails techniques' },
      { label: 'Pièces clés', value: 'cuisine + bain' },
      { label: 'Finitions', value: 'supports préparés' },
    ],
    intro: [
      "Les photos avant/après attirent l'œil, mais elles doivent surtout aider à comprendre le travail réalisé. Une rénovation réussie se lit dans les détails : alignements, joints, lumière, reprises de murs, cohérence des sols et intégration des réseaux.",
      "Cette page explique comment analyser une transformation et quels signaux regarder avant de confier un chantier.",
    ],
    sections: [
      {
        id: 'lecture-avant-apres',
        title: 'Lire un avant/après au-delà de la décoration',
        paragraphs: [
          "La décoration peut masquer une rénovation légère. Il faut regarder si le plan a gagné en fluidité, si les volumes sont plus lisibles et si les pièces techniques ont été traitées en profondeur.",
          "Un bon chantier se voit aussi dans ce qui ne saute pas aux yeux : murs préparés, raccords propres, réseaux bien positionnés, seuils cohérents et finitions régulières.",
        ],
        bullets: [
          'Les lignes de sol et les plinthes sont-elles propres ?',
          'La lumière naturelle est-elle mieux utilisée ?',
          'La cuisine et la salle de bain semblent-elles vraiment repensées ?',
          'Les matériaux correspondent-ils à l’usage réel du logement ?',
        ],
      },
      {
        id: 'pieces-humides',
        title: 'Cuisine et salle de bain : les transformations les plus visibles',
        paragraphs: [
          "Une cuisine rénovée change souvent l’usage de tout l’appartement. Mais l’image finale dépend de décisions techniques prises avant la pose : arrivées d’eau, évacuation, prises spécialisées, éclairage et ventilation.",
          "La salle de bain demande la même rigueur. Étanchéité, pente, robinetterie, carrelage et éclairage doivent être traités comme un ensemble.",
        ],
      },
      {
        id: 'supports-finitions',
        title: 'Pourquoi les supports font la différence',
        paragraphs: [
          "Dans un appartement ancien, repeindre sans reprendre les supports donne rarement un résultat durable. Les fissures, bosses, anciennes reprises et différences de matière ressortent vite.",
          "La préparation avant peinture ou pose de revêtement est donc un vrai poste de valeur. Elle conditionne l’aspect final et la tenue dans le temps.",
        ],
      },
      {
        id: 'preuve-confiance',
        title: 'Les preuves à demander avant de signer',
        paragraphs: [
          "Avant de choisir une entreprise, les photos doivent être complétées par une discussion concrète : périmètre du chantier, difficultés rencontrées, durée, matériaux, garanties et coordination.",
          "D.A. BAT privilégie une lecture chantier plutôt qu’une simple promesse esthétique. L’objectif est de livrer un appartement cohérent, pas seulement photogénique.",
        ],
      },
    ],
    images: [
      {
        src: '/assets/gallery/real/photo_60_2026-03-03_12-40-16.jpg',
        alt: 'Salon rénové après travaux dans un appartement parisien',
        caption: 'Un séjour réussi dépend autant de la préparation des murs que du choix des finitions.',
      },
      {
        src: '/assets/gallery/real/photo_9_2026-03-03_12-40-16.jpg',
        alt: 'Salle de bain rénovée avec douche italienne',
        caption: 'Les pièces humides sont les meilleurs révélateurs de la qualité d’exécution.',
      },
    ],
    faqTitle: 'Questions fréquentes sur les avant/après',
    faq: [
      {
        q: 'Un avant/après suffit-il pour juger une entreprise ?',
        a: 'Non. Il faut aussi comprendre le périmètre réel des travaux, les contraintes du chantier, les matériaux et les garanties.',
      },
      {
        q: 'Pourquoi certaines rénovations paraissent belles mais vieillissent mal ?',
        a: 'Souvent parce que les supports, les réseaux ou l’étanchéité ont été traités trop vite avant les finitions visibles.',
      },
      {
        q: 'Quels espaces donnent le plus de valeur à un appartement ?',
        a: 'La cuisine, la salle de bain, les sols et la qualité générale des murs/plafonds ont un impact fort sur la perception du bien.',
      },
      {
        q: 'D.A. BAT peut-il reprendre un appartement déjà mal rénové ?',
        a: 'Oui, après diagnostic. Il faut identifier ce qui peut être conservé et ce qui doit être repris pour éviter de multiplier les rustines.',
      },
    ],
    serviceLinksTitle: 'Voir les services liés',
    serviceLinks: [
      { to: '/renovation-appartement-paris', label: 'Rénovation appartement', desc: 'Transformer un logement dans son ensemble.' },
      { to: '/renovation-cuisine-paris', label: 'Cuisine', desc: 'Réorganiser une pièce clé du quotidien.' },
      { to: '/renovation-salle-de-bain-paris', label: 'Salle de bain', desc: 'Traiter plomberie, étanchéité et carrelage.' },
      { to: '/peintre-decorateur-paris', label: 'Peinture', desc: 'Obtenir des finitions propres sur supports préparés.' },
    ],
    articleLinksTitle: 'Guides complémentaires',
    articleLinks: [
      { to: '/prix-renovation-appartement-paris', label: 'Budget', desc: 'Relier le rendu attendu au niveau de travaux.' },
      { to: '/renovation-appartement-haut-de-gamme-paris', label: 'Haut de gamme', desc: 'Comprendre ce qui distingue une finition premium.' },
    ],
  },

  renovationPetiteSurfaceParis: {
    slug: '/renovation-petite-surface-paris',
    title: 'Rénovation Petite Surface Paris | Studio & Investissement | D.A. BAT',
    description:
      'Guide pour rénover une petite surface à Paris : studio, cuisine compacte, salle d’eau, rangements, budget et logique d’investissement locatif.',
    canonical: `${SITE_URL}/renovation-petite-surface-paris`,
    breadcrumbLabel: 'Rénovation petite surface Paris',
    badge: 'STUDIO & PETITE SURFACE',
    heading: 'Rénover une petite surface à Paris : chaque mètre carré doit travailler',
    heroCopy:
      "Dans un studio ou un petit deux-pièces, les erreurs de plan se voient immédiatement. Une rénovation utile commence par les usages, pas par les matériaux.",
    heroImage: '/assets/gallery/real/photo_25_2026-03-03_12-40-16.jpg',
    heroAlt: 'Petite surface rénovée à Paris',
    datePublished: '2026-04-29',
    dateModified: UPDATED_AT,
    readingTime: '6 min',
    quickFacts: [
      { label: 'Surface fréquente', value: '15-35 m²' },
      { label: 'Postes clés', value: 'cuisine + bain' },
      { label: 'Objectif', value: 'usage fluide' },
      { label: 'Locatif', value: 'finitions robustes' },
    ],
    intro: [
      "Rénover une petite surface parisienne demande une discipline particulière. Ajouter des idées ne suffit pas : il faut hiérarchiser ce qui compte vraiment pour vivre, louer, ranger, cuisiner et entretenir facilement.",
      "Ce guide détaille les arbitrages qui donnent de la valeur à un studio sans surcharger le budget.",
    ],
    sections: [
      {
        id: 'plan-usage',
        title: 'Commencer par le plan et les usages',
        paragraphs: [
          "Le plan doit répondre à des gestes simples : entrer, poser ses affaires, cuisiner, dormir, se laver, travailler et ranger. Si une circulation bloque, tout le logement paraît plus petit.",
          "La rénovation doit donc supprimer les angles morts, clarifier les zones et placer les prises, éclairages et rangements là où ils servent vraiment.",
        ],
        bullets: [
          'Éviter les meubles trop profonds.',
          'Conserver une circulation claire.',
          'Prévoir les usages avant les finitions.',
          'Réduire les ruptures visuelles inutiles.',
        ],
      },
      {
        id: 'cuisine-salle-eau',
        title: "Cuisine compacte et salle d'eau : les deux postes structurants",
        paragraphs: [
          "La cuisine compacte doit être pensée avec les réseaux, les prises, le plan de travail et l’électroménager. Une implantation mal cadrée rend le logement moins agréable et plus difficile à louer.",
          "La salle d'eau concentre les contraintes d’étanchéité, d’évacuation, de ventilation et de rangement. Elle doit être simple, durable et facile à nettoyer.",
        ],
      },
      {
        id: 'investissement',
        title: 'Rénover pour louer : arbitrer sans appauvrir',
        paragraphs: [
          "Pour un investissement locatif, le bon choix n’est pas toujours le plus haut de gamme. Il faut viser des matériaux robustes, réparables et cohérents avec la valeur locative.",
          "Une petite surface bien rénovée doit donner une impression immédiate de propreté, de logique et de confort. C’est ce qui aide à réduire les objections lors des visites.",
        ],
      },
      {
        id: 'budget',
        title: 'Les erreurs qui coûtent cher dans une petite surface',
        paragraphs: [
          "Multiplier les sur-mesures sans stratégie peut faire exploser le budget. À l’inverse, économiser sur les réseaux ou l’étanchéité est rarement une bonne décision.",
          "Le bon équilibre consiste à investir dans ce qui structure l’usage : plan, lumière, prises, cuisine, salle d’eau, sols et rangements essentiels.",
        ],
      },
    ],
    images: [
      {
        src: '/assets/gallery/real/photo_30_2026-03-03_12-40-16.jpg',
        alt: 'Rangements intégrés dans une petite surface',
        caption: 'Dans une petite surface, le rangement doit être prévu avant les finitions.',
      },
      {
        src: '/assets/gallery/real/photo_3_2026-03-03_12-40-16.jpg',
        alt: "Salle d'eau rénovée dans une petite surface",
        caption: "La salle d'eau doit rester sobre, durable et facile à entretenir.",
      },
    ],
    faqTitle: 'Questions fréquentes sur les petites surfaces',
    faq: [
      {
        q: 'Faut-il faire du sur-mesure dans un studio ?',
        a: 'Oui quand il résout un vrai problème d’usage. Non s’il complique le chantier sans améliorer la circulation ou le rangement.',
      },
      {
        q: 'Quelle pièce traiter en priorité ?',
        a: "La cuisine et la salle d'eau, car elles concentrent les réseaux, l’usage quotidien et la perception de qualité du logement.",
      },
      {
        q: 'Une petite surface coûte-t-elle moins cher au m² ?',
        a: 'Pas toujours. Les postes techniques sont concentrés dans peu de mètres carrés, ce qui peut augmenter le coût relatif au m².',
      },
      {
        q: 'Pouvez-vous rénover pour une mise en location rapide ?',
        a: 'Oui, en cadrant le périmètre, les matériaux et le délai dès la visite pour éviter les choix tardifs.',
      },
    ],
    serviceLinksTitle: 'Services pour petite surface',
    serviceLinks: [
      { to: '/renovation-studio-paris', label: 'Rénovation studio', desc: 'La page dédiée aux studios parisiens.' },
      { to: '/renovation-cuisine-paris', label: 'Cuisine compacte', desc: 'Implantation, réseaux et finitions.' },
      { to: '/plomberie-electricite-paris', label: 'Réseaux techniques', desc: 'Électricité et plomberie adaptées au plan.' },
      { to: '/devis-renovation-paris', label: 'Devis', desc: 'Cadrer budget et délai après visite.' },
    ],
    articleLinksTitle: 'Guides complémentaires',
    articleLinks: [
      { to: '/prix-renovation-appartement-paris', label: 'Prix au m²', desc: 'Comprendre pourquoi les petites surfaces sont spécifiques.' },
      { to: '/delai-renovation-appartement-paris', label: 'Délais', desc: 'Organiser un chantier court sans blocage.' },
    ],
  },

  renovationAppartementHautDeGammeParis: {
    slug: '/renovation-appartement-haut-de-gamme-paris',
    title: 'Rénovation Appartement Haut de Gamme Paris | Finitions | D.A. BAT',
    description:
      'Rénovation haut de gamme à Paris : finitions, matériaux, parquet, peinture, salle de bain, cuisine et coordination tous corps d’état.',
    canonical: `${SITE_URL}/renovation-appartement-haut-de-gamme-paris`,
    breadcrumbLabel: 'Rénovation haut de gamme Paris',
    badge: 'FINITION PREMIUM',
    heading: 'Rénovation haut de gamme à Paris : la qualité se joue dans les détails',
    heroCopy:
      "Un rendu premium ne vient pas seulement de matériaux chers. Il vient d'un support préparé, d'une coordination propre et d'une cohérence entre architecture, usage et finitions.",
    heroImage: '/assets/gallery/real/photo_35_2026-03-03_12-40-16.jpg',
    heroAlt: 'Appartement parisien avec finitions haut de gamme',
    datePublished: '2026-04-29',
    dateModified: UPDATED_AT,
    readingTime: '7 min',
    quickFacts: [
      { label: 'Priorité', value: 'préparation' },
      { label: 'Lots visibles', value: 'sols + peinture' },
      { label: 'Lots cachés', value: 'réseaux fiables' },
      { label: 'Approche', value: 'cohérence globale' },
    ],
    intro: [
      "La rénovation haut de gamme ne se résume pas au choix d’un carrelage ou d’un parquet. Elle demande une chaîne d’exécution régulière, depuis la dépose jusqu’aux dernières reprises.",
      "Dans un appartement parisien, cette exigence doit aussi respecter le bâti : moulures, parquets anciens, proportions, lumière et contraintes d’immeuble.",
    ],
    sections: [
      {
        id: 'definition-premium',
        title: 'Ce qui distingue une rénovation premium',
        paragraphs: [
          "La première différence se voit dans les supports. Un mur bien préparé, un plafond régulier, une plinthe bien posée et un raccord discret changent la perception générale du logement.",
          "La seconde différence vient de la coordination. Les lots techniques doivent être pensés avant les finitions, sinon le haut de gamme devient une succession de corrections.",
        ],
        bullets: [
          'Supports repris avant finition.',
          'Matériaux cohérents avec le bâti.',
          'Alignements et détails de pose maîtrisés.',
          'Interfaces cuisine, salle de bain et sols anticipées.',
        ],
      },
      {
        id: 'parquet-peinture',
        title: 'Parquet, peinture et lumière : les marqueurs visibles',
        paragraphs: [
          "Le parquet donne immédiatement le niveau d’un appartement. Pose, rénovation, ponçage, vitrification et raccords doivent être compatibles avec l’usage et le style du logement.",
          "La peinture haut de gamme dépend moins de la marque du pot que de la préparation. Ratissage, enduits, ponçage et reprises conditionnent le rendu final.",
        ],
      },
      {
        id: 'pieces-techniques',
        title: 'Cuisine et salle de bain : premium ne veut pas dire fragile',
        paragraphs: [
          "Une salle de bain premium doit rester pratique, étanche et durable. Le choix de la robinetterie, du carrelage et des éclairages doit suivre la logique technique.",
          "Même chose pour la cuisine : l’implantation, les prises, les arrivées d’eau, la ventilation et les supports doivent être prêts avant la pose des éléments visibles.",
        ],
      },
      {
        id: 'choisir-entreprise',
        title: 'Choisir une entreprise pour un projet exigeant',
        paragraphs: [
          "Le bon interlocuteur doit savoir parler budget, planning, détails techniques et finitions. Un projet premium supporte mal l’improvisation entre artisans non coordonnés.",
          "D.A. BAT intervient comme entreprise tous corps d’état afin de garder une lecture globale du chantier et des responsabilités.",
        ],
      },
    ],
    images: [
      {
        src: '/assets/gallery/real/photo_35_2026-03-03_12-40-16.jpg',
        alt: 'Finitions haut de gamme dans un appartement rénové',
        caption: 'La régularité des supports donne de la valeur aux matériaux visibles.',
      },
      {
        src: '/assets/gallery/real/photo_45_2026-03-03_12-40-16.jpg',
        alt: 'Parquet ancien rénové dans un appartement parisien',
        caption: 'Le parquet ancien demande une approche technique autant qu’esthétique.',
      },
    ],
    faqTitle: 'Questions fréquentes sur le haut de gamme',
    faq: [
      {
        q: 'Qu’est-ce qui coûte le plus dans une rénovation haut de gamme ?',
        a: 'Souvent le temps de préparation, la qualité des finitions, les matériaux, les pièces techniques et la coordination précise entre les lots.',
      },
      {
        q: 'Faut-il conserver les éléments anciens ?',
        a: 'Quand ils ont une vraie valeur et peuvent être restaurés proprement, oui. Le bon arbitrage se fait après diagnostic.',
      },
      {
        q: 'Peut-on faire haut de gamme sans tout remplacer ?',
        a: 'Oui. Un projet réussi peut conserver certains éléments et moderniser les réseaux, les pièces humides et les finitions.',
      },
      {
        q: 'D.A. BAT gère-t-il plusieurs corps de métier ?',
        a: 'Oui. L’entreprise coordonne les lots nécessaires pour éviter les ruptures entre technique et finition.',
      },
    ],
    serviceLinksTitle: 'Services liés aux finitions premium',
    serviceLinks: [
      { to: '/renovation-haussmannien-paris', label: 'Haussmannien', desc: 'Préserver moulures, parquets et proportions.' },
      { to: '/pose-parquet-paris', label: 'Parquet', desc: 'Pose, rénovation et finitions des sols bois.' },
      { to: '/peintre-decorateur-paris', label: 'Peinture décorative', desc: 'Supports préparés et finitions soignées.' },
      { to: '/renovation-salle-de-bain-paris', label: 'Salle de bain', desc: 'Pièce technique avec rendu premium.' },
    ],
    articleLinksTitle: 'Guides complémentaires',
    articleLinks: [
      { to: '/renovation-appartement-paris-avant-apres', label: 'Avant/après', desc: 'Lire les transformations au-delà des photos.' },
      { to: '/prix-renovation-appartement-paris', label: 'Budget', desc: 'Relier niveau de finition et coût réel.' },
    ],
  },

  renovationParisCopropriete: {
    slug: '/renovation-paris-questions-copropriete',
    title: 'Rénovation Paris & Copropriété | Règles Travaux | D.A. BAT',
    description:
      'Travaux de rénovation en copropriété à Paris : horaires, parties communes, bruit, gravats, autorisations et préparation du chantier.',
    canonical: `${SITE_URL}/renovation-paris-questions-copropriete`,
    breadcrumbLabel: 'Rénovation et copropriété à Paris',
    badge: 'CHANTIER EN IMMEUBLE',
    heading: 'Rénover en copropriété à Paris : les points à anticiper avant les travaux',
    heroCopy:
      "Un chantier dans un immeuble parisien ne se limite pas à l'appartement. Accès, bruit, gravats, protection des parties communes et règles de copropriété conditionnent le bon déroulement.",
    heroImage: '/assets/gallery/real/photo_45_2026-03-03_12-40-16.jpg',
    heroAlt: 'Appartement ancien rénové dans un immeuble parisien',
    datePublished: '2026-04-29',
    dateModified: UPDATED_AT,
    readingTime: '6 min',
    quickFacts: [
      { label: 'À vérifier', value: 'règlement immeuble' },
      { label: 'À protéger', value: 'parties communes' },
      { label: 'À anticiper', value: 'bruit + gravats' },
      { label: 'À cadrer', value: 'accès chantier' },
    ],
    intro: [
      "Beaucoup de retards viennent d’un sujet non technique : l’immeuble. Une rénovation peut être bien pensée sur plan et devenir compliquée si les règles de copropriété ne sont pas anticipées.",
      "Ce guide aide à préparer un chantier propre, lisible et compatible avec la vie de l’immeuble.",
    ],
    sections: [
      {
        id: 'regles',
        title: 'Lire les règles avant de démarrer',
        paragraphs: [
          "Chaque copropriété peut imposer des horaires, des règles de bruit, des conditions de livraison, d’évacuation ou de protection. Ces éléments doivent être connus avant le planning définitif.",
          "Les travaux qui touchent à la structure, aux évacuations collectives ou à l’aspect extérieur demandent une vigilance particulière. Le périmètre doit être clarifié avant intervention.",
        ],
      },
      {
        id: 'parties-communes',
        title: 'Protéger les parties communes',
        paragraphs: [
          "Escaliers, ascenseur, couloirs, hall et paliers doivent être protégés. Ce temps de protection fait partie du chantier et évite les conflits inutiles avec les voisins ou le syndic.",
          "L’évacuation des gravats doit aussi être organisée. À Paris, l’accès et le stationnement peuvent peser sur le coût et le délai.",
        ],
        bullets: [
          'Protection des sols et parois de passage.',
          'Organisation des livraisons.',
          'Nettoyage régulier des zones communes.',
          'Évacuation des gravats par étapes.',
        ],
      },
      {
        id: 'bruit-horaires',
        title: 'Bruit, horaires et voisinage',
        paragraphs: [
          "Les phases bruyantes doivent être planifiées avec attention : dépose, percement, découpe, reprises de supports. Les annoncer et les limiter dans le temps aide à maintenir un chantier accepté.",
          "Une entreprise organisée sait distinguer les tâches bruyantes des tâches silencieuses pour optimiser les journées autorisées.",
        ],
      },
      {
        id: 'lots-techniques',
        title: 'Lots techniques et copropriété',
        paragraphs: [
          "Plomberie, évacuations, ventilation et électricité peuvent toucher des zones sensibles. Avant de déplacer une pièce d’eau ou une cuisine, il faut vérifier la faisabilité technique et les contraintes de l’immeuble.",
          "D.A. BAT intègre ces contraintes dans la visite pour éviter de découvrir trop tard qu’une solution prévue sur plan n’est pas réaliste sur site.",
        ],
      },
    ],
    images: [
      {
        src: '/assets/gallery/real/photo_45_2026-03-03_12-40-16.jpg',
        alt: 'Appartement ancien rénové en copropriété parisienne',
        caption: 'Dans l’ancien, les contraintes d’immeuble doivent être intégrées dès le diagnostic.',
      },
      {
        src: '/assets/gallery/real/photo_8_2026-03-03_12-40-16.jpg',
        alt: "Salle d'eau rénovée avec contraintes de réseaux",
        caption: "Les pièces d'eau doivent respecter les contraintes techniques de l’immeuble.",
      },
    ],
    faqTitle: 'Questions fréquentes sur la copropriété',
    faq: [
      {
        q: 'Faut-il prévenir la copropriété avant des travaux ?',
        a: 'Oui, surtout pour les travaux bruyants, les livraisons, l’évacuation des gravats et les interventions susceptibles de toucher aux parties communes ou aux réseaux.',
      },
      {
        q: 'Peut-on déplacer une salle de bain en appartement ?',
        a: 'Parfois, mais il faut vérifier les évacuations, les pentes, les gaines et les règles de l’immeuble avant de valider le plan.',
      },
      {
        q: 'Qui protège les parties communes ?',
        a: 'L’entreprise doit prévoir les protections nécessaires dans son organisation de chantier.',
      },
      {
        q: 'La copropriété change-t-elle le prix ?',
        a: 'Elle peut le faire si l’accès, les horaires, les protections ou l’évacuation demandent plus de temps et de logistique.',
      },
    ],
    serviceLinksTitle: 'Services concernés',
    serviceLinks: [
      { to: '/renovation-appartement-ancien-paris', label: 'Appartement ancien', desc: 'Traiter le bâti et les contraintes d’immeuble.' },
      { to: '/maconnerie-cloisons-platrerie-paris', label: 'Cloisons & plâtrerie', desc: 'Redistribution intérieure et supports.' },
      { to: '/plomberie-electricite-paris', label: 'Plomberie & électricité', desc: 'Réseaux à coordonner avec l’existant.' },
      { to: '/devis-renovation-paris', label: 'Visite technique', desc: 'Identifier les contraintes avant chiffrage.' },
    ],
    articleLinksTitle: 'Guides complémentaires',
    articleLinks: [
      { to: '/delai-renovation-appartement-paris', label: 'Délais', desc: 'Comprendre l’impact de l’immeuble sur le planning.' },
      { to: '/prix-renovation-appartement-paris', label: 'Prix', desc: 'Relier contraintes d’accès et budget.' },
    ],
  },
};

export const seoArticles = Object.values(seoArticleConfigs);
