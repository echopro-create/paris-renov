export interface SeoGalleryItem {
  src: string;
  alt: string;
  title: string;
  location: string;
}

export interface SeoPriceItem {
  label: string;
  value: string;
  detail: string;
}

export interface SeoFaqItem {
  q: string;
  a: string;
}

export interface SeoSectionCard {
  title: string;
  description: string;
  items: string[];
}

export interface SeoRelatedLink {
  to: string;
  label: string;
  desc: string;
}

export interface SeoPageConfig {
  slug: string;
  title: string;
  description: string;
  canonical: string;
  breadcrumbLabel: string;
  badge: string;
  headingStart: string;
  headingAccent: string;
  headingEnd?: string;
  heroCopy: string;
  heroImage: string;
  heroAlt: string;
  heroStats: Array<{ value: string; label: string }>;
  leadEyebrow: string;
  leadTitle: string;
  leadParagraphs: string[];
  leadBullets: string[];
  expertiseTitle: string;
  expertiseCards: SeoSectionCard[];
  galleryTitle: string;
  galleryItems: SeoGalleryItem[];
  pricingTitle: string;
  pricingItems: SeoPriceItem[];
  faqTitle: string;
  faq: SeoFaqItem[];
  relatedTitle: string;
  relatedLinks: SeoRelatedLink[];
}

export const seoPageConfigs: Record<string, SeoPageConfig> = {
  renovationAppartement: {
    slug: '/renovation-appartement-paris',
    title: "Rénovation Appartement Paris | Entreprise Tous Corps d'Etat | D.A. BAT",
    description:
      "Rénovation d'appartement à Paris par une entreprise tous corps d'etat. Redistribution, plomberie, electricite, peinture, sols et finitions premium. Devis gratuit sous 24h.",
    canonical: 'https://da-bat.com/renovation-appartement-paris',
    breadcrumbLabel: "Rénovation Appartement Paris",
    badge: "RENOVATION COMPLETE",
    headingStart: "Rénovation",
    headingAccent: "Appartement",
    headingEnd: "à Paris",
    heroCopy:
      "Vous achetez un bien à refaire ou vous modernisez votre residence principale ? D.A. BAT pilote votre renovation complete a Paris, du curage aux finitions, avec un seul interlocuteur et un devis detaille sous 24h.",
    heroImage: '/images/hero-bg-apartment.webp',
    heroAlt: "Renovation complete d'appartement a Paris par D.A. BAT",
    heroStats: [
      { value: '24h', label: 'devis detaille' },
      { value: '6-12 sem.', label: 'chantier complet' },
      { value: 'Tous lots', label: 'coordination' },
      { value: '450+', label: 'projets livres' },
    ],
    leadEyebrow: 'Renovation globale',
    leadTitle: "Un chantier complet, lisible et maitrise de la visite a la livraison",
    leadParagraphs: [
      "Nous intervenons sur les appartements parisiens anciens, haussmanniens et contemporains avec une approche de contractant general : analyse du bien, arbitrage budget, phasage des travaux et suivi quotidien du chantier.",
      "L'objectif n'est pas seulement de refaire un appartement. Il s'agit de reprendre les reseaux, optimiser les volumes, corriger les supports, choisir des materiaux adaptes a l'usage et livrer un bien coherent, valorise et pret a vivre.",
    ],
    leadBullets: [
      "Diagnostic technique du bien et identification des contraintes de copropriete",
      "Coordination plomberie, electricite, maconnerie, peinture, sols et menuiserie",
      "Planning ferme avec jalons par etape et compte-rendu de chantier",
      "Aide au choix des materiaux selon budget, usage locatif ou residence principale",
      "Reception de chantier avec levee des reserves et garantie decennale",
    ],
    expertiseTitle: "Ce que comprend une renovation complete d'appartement a Paris",
    expertiseCards: [
      {
        title: 'Etudes & preparation',
        description:
          "Nous cadrons le chantier avant le premier coup de marteau pour limiter les surprises en phase travaux.",
        items: [
          'Visite technique et releves sur site',
          'Definition du programme de travaux et des priorites',
          'Chiffrage lot par lot avec variantes de budget',
        ],
      },
      {
        title: 'Reprise des lots techniques',
        description:
          "Les reseaux et supports sont remis a niveau avant les finitions afin d'assurer la durabilite du chantier.",
        items: [
          'Mise aux normes electriques et reprise du tableau',
          "Redistribution plomberie, evacuation et alimentation d'eau",
          'Creation de cloisons, doublages et reprises de maconnerie',
        ],
      },
      {
        title: 'Finitions & valorisation',
        description:
          "Nous finalisons l'appartement avec des materiaux adaptes a la vie parisienne et a la destination du bien.",
        items: [
          'Peinture, enduits et traitement des plafonds',
          'Pose de parquet, carrelage et habillages',
          'Cuisine, salle de bain et finitions decoratives',
        ],
      },
    ],
    galleryTitle: "Typologies de projets que nous renovons a Paris",
    galleryItems: [
      {
        src: '/assets/gallery/real/photo_60_2026-03-03_12-40-16.jpg',
        alt: "Salon d'appartement renove a Paris",
        title: 'Appartement familial',
        location: 'Paris intramuros',
      },
      {
        src: '/assets/gallery/real/photo_50_2026-03-03_12-40-16.jpg',
        alt: 'Cuisine ouverte renovee dans un appartement parisien',
        title: 'Cuisine ouverte',
        location: 'Ile-de-France',
      },
      {
        src: '/assets/gallery/real/photo_40_2026-03-03_12-40-16.jpg',
        alt: 'Salle de bain renovee dans appartement parisien',
        title: 'Piece humide reprise',
        location: 'Paris 16e',
      },
      {
        src: '/assets/gallery/real/photo_25_2026-03-03_12-40-16.jpg',
        alt: 'Piece sous combles renovee a Paris',
        title: 'Volume atypique',
        location: 'Paris rive gauche',
      },
    ],
    pricingTitle: "Budgets indicatifs pour une renovation d'appartement a Paris",
    pricingItems: [
      {
        label: 'Rafraichissement',
        value: '300-600 EUR/m2',
        detail: 'Peinture, reprise legere des sols, remise au propre des pieces seches.',
      },
      {
        label: 'Renovation partielle',
        value: '600-1 200 EUR/m2',
        detail: 'Une ou deux pieces techniques, quelques reprises de reseaux et finitions.',
      },
      {
        label: 'Renovation complete',
        value: '1 200-2 500 EUR/m2',
        detail: 'Reprise globale des lots techniques, redistribution et finitions completes.',
      },
    ],
    faqTitle: "Questions sur la renovation d'appartement a Paris",
    faq: [
      {
        q: "Combien de temps dure une renovation complete d'appartement a Paris ?",
        a: "Pour un appartement de 50 a 90 m2, comptez en general 6 a 12 semaines selon l'etat initial, la presence de lots techniques a reprendre et la complexite de la copropriete.",
      },
      {
        q: "Pouvez-vous gerer un appartement vide juste apres acquisition ?",
        a: "Oui. C'est meme l'un de nos cas les plus frequents : visite technique apres compromis ou juste apres signature, arbitrage budget, lancement rapide du chantier et livraison avant emménagement ou mise en location.",
      },
      {
        q: "Travaillez-vous lot par lot ou en offre globale ?",
        a: "Nous privilegions l'offre globale, car elle permet de mieux coordonner les interfaces entre cloisons, reseaux, sols et finitions. C'est le moyen le plus fiable pour tenir les delais et limiter les reprises.",
      },
      {
        q: "Intervenez-vous dans les coproprietes parisiennes avec contraintes ?",
        a: "Oui. Nous integrons les horaires, acces, evacuations, protection des parties communes et validations necessaires pour que le chantier reste compatible avec les exigences de l'immeuble.",
      },
    ],
    relatedTitle: 'Services complementaires',
    relatedLinks: [
      { to: '/renovation-appartement-ancien-paris', label: 'Appartement ancien', desc: 'Reprendre un bien ancien sans perdre sa valeur architecturale.' },
      { to: '/renovation-cuisine-paris', label: 'Renovation cuisine', desc: 'Cuisine fermee ou ouverte, implantation, plomberie et finitions.' },
      { to: '/renovation-salle-de-bain-paris', label: 'Salle de bain', desc: 'Douche italienne, etancheite, carrelage et plomberie.' },
      { to: '/devis-renovation-paris', label: 'Devis renovation', desc: 'Visite sur place et estimation detaillee sous 24h.' },
    ],
  },
  renovationCuisine: {
    slug: '/renovation-cuisine-paris',
    title: 'Rénovation Cuisine Paris | Cuisine Ouverte, Pose & Réseaux | D.A. BAT',
    description:
      "Renovation de cuisine a Paris : depose, implantation, plomberie, electricite, credence, sol et finitions. Cuisine ouverte ou fermee, devis gratuit sous 24h.",
    canonical: 'https://da-bat.com/renovation-cuisine-paris',
    breadcrumbLabel: 'Rénovation Cuisine Paris',
    badge: 'CUISINE SUR MESURE',
    headingStart: 'Rénovation',
    headingAccent: 'Cuisine',
    headingEnd: 'à Paris',
    heroCopy:
      "Cuisine fermee a moderniser, cuisine a ouvrir sur le sejour, implantation a reprendre ou reseaux a refaire : nous renovons les cuisines parisiennes avec une approche complete, propre et coordonnee.",
    heroImage: '/assets/gallery/real/photo_10_2026-03-03_12-40-16.jpg',
    heroAlt: 'Cuisine renovee a Paris par D.A. BAT',
    heroStats: [
      { value: '8-15 jours', label: 'renovation standard' },
      { value: 'Sur mesure', label: 'implantation' },
      { value: 'Tous lots', label: 'reseaux + finitions' },
      { value: '24h', label: 'devis gratuit' },
    ],
    leadEyebrow: 'Cuisine parisienne',
    leadTitle: "Un projet de cuisine reussi depend autant de l'implantation que de l'execution",
    leadParagraphs: [
      "A Paris, la cuisine est souvent une piece contrainte : petits volumes, gaines techniques, murs irreguliers, distribution a optimiser, copropriete exigeante. Une belle renovation passe donc par une bonne lecture du plan avant toute commande.",
      "Nous reprenons l'ensemble du lot cuisine : depose, preparation des supports, plomberie, electricite, ventilation, credence, sol, peinture et coordination de la pose des meubles et appareils.",
    ],
    leadBullets: [
      'Etude de limplantation selon les usages et les contraintes de gaines',
      'Preparation des alimentations eau, evacuation et prises specialisees',
      'Mise a niveau des murs, plafonds et sols avant pose',
      'Coordination plan de travail, credence, electromenager et eclairage',
      'Finitions propres pour cuisine fermee, semi-ouverte ou totalement ouverte',
    ],
    expertiseTitle: 'Notre perimetre sur une renovation de cuisine a Paris',
    expertiseCards: [
      {
        title: 'Conception de l espace',
        description: "Nous adaptons l'implantation a la surface, au mobilier et au mode de vie des occupants.",
        items: [
          'Cuisine lineaire, en L ou avec ilot',
          'Ouverture sur sejour si faisable',
          'Optimisation des rangements et des circulations',
        ],
      },
      {
        title: 'Lots techniques',
        description: 'Une cuisine fiable repose sur des reseaux correctement dimensionnes et positions.',
        items: [
          'Reprise alimentation eau chaude / eau froide',
          'Prises plan de travail et circuits specialises',
          'Eclairage fonctionnel, hotte et ventilation',
        ],
      },
      {
        title: 'Revêtements & pose',
        description: 'Nous traitons les surfaces visibles pour une cuisine durable et simple a entretenir.',
        items: [
          'Carrelage de sol, credence et joints soignes',
          'Peinture lavable et reprise des plafonds',
          'Coordination meubles, plan de travail et finitions',
        ],
      },
    ],
    galleryTitle: 'Exemples de cuisines renovees et reconfigurees',
    galleryItems: [
      {
        src: '/assets/gallery/real/photo_10_2026-03-03_12-40-16.jpg',
        alt: 'Cuisine avec ilot renovee',
        title: 'Cuisine avec ilot',
        location: 'Paris ouest',
      },
      {
        src: '/assets/gallery/real/photo_50_2026-03-03_12-40-16.jpg',
        alt: 'Cuisine minimaliste avec finitions claires',
        title: 'Cuisine minimaliste',
        location: 'Paris centre',
      },
      {
        src: '/assets/gallery/real/photo_60_2026-03-03_12-40-16.jpg',
        alt: 'Piece de vie avec cuisine ouverte renovee',
        title: 'Ouverture sur sejour',
        location: 'Ile-de-France',
      },
      {
        src: '/assets/gallery/real/photo_30_2026-03-03_12-40-16.jpg',
        alt: 'Cuisine integree dans petit appartement parisien',
        title: 'Implantation compacte',
        location: 'Paris rive droite',
      },
    ],
    pricingTitle: 'Budgets indicatifs pour une cuisine a Paris',
    pricingItems: [
      {
        label: 'Cuisine legerement reprise',
        value: '8 000-12 000 EUR',
        detail: 'Depose, ajustements reseaux, revetements et pose standard.',
      },
      {
        label: 'Cuisine complete',
        value: '12 000-20 000 EUR',
        detail: 'Lots techniques repris, nouveaux meubles et finitions coordonnees.',
      },
      {
        label: 'Cuisine premium / ouverte',
        value: '20 000-35 000 EUR',
        detail: 'Reconfiguration forte, mobilier plus haut de gamme et details sur mesure.',
      },
    ],
    faqTitle: 'Questions sur la renovation de cuisine a Paris',
    faq: [
      {
        q: "Pouvez-vous ouvrir une cuisine sur le salon ?",
        a: "Oui, lorsque la configuration et la structure du logement le permettent. Nous verifions la nature de la cloison, les reseaux existants et les contraintes de copropriete avant de definir le bon scenario.",
      },
      {
        q: "Combien de temps faut-il pour refaire une cuisine ?",
        a: "Une renovation standard demande souvent 8 a 15 jours ouvrés. Si la piece est entierement repensee ou ouverte sur le sejour, le delai peut augmenter selon les reprises techniques et la pose du mobilier.",
      },
      {
        q: "Travaillez-vous avec nos cuisinistes ou nos meubles deja commandes ?",
        a: "Oui. Nous pouvons preparer les lots techniques et les supports en amont, puis coordonner la pose finale avec votre cuisiniste ou vos fournisseurs.",
      },
      {
        q: "Quels revetements conseillez-vous pour une cuisine parisienne ?",
        a: "Nous recommandons des surfaces faciles d'entretien et resistantes a l'usage : carrelage, peintures lessivables, credences adaptees a la chaleur et plans de travail coherents avec votre budget et vos habitudes.",
      },
    ],
    relatedTitle: 'Pages liees',
    relatedLinks: [
      { to: '/renovation-appartement-paris', label: 'Renovation appartement', desc: "Quand la cuisine s'inscrit dans un chantier global de redistribution." },
      { to: '/plomberie-electricite-paris', label: 'Plomberie & electricite', desc: 'Reprise des reseaux et mise aux normes en piece technique.' },
      { to: '/renovation-studio-paris', label: 'Renovation studio', desc: 'Implantations compactes et optimisation des petits espaces.' },
      { to: '/devis-renovation-paris', label: 'Demander un devis', desc: 'Visite, relevés et estimation detaillee sous 24h.' },
    ],
  },
  plomberieElectricite: {
    slug: '/plomberie-electricite-paris',
    title: 'Plomberie Électricité Paris | Mise aux Normes & Réseaux | D.A. BAT',
    description:
      "Plomberie et electricite en renovation a Paris. Mise aux normes, tableau electrique, circuits, alimentation, evacuation, appareils sanitaires et coordination tous corps d'etat.",
    canonical: 'https://da-bat.com/plomberie-electricite-paris',
    breadcrumbLabel: 'Plomberie & Électricité Paris',
    badge: 'LOTS TECHNIQUES',
    headingStart: 'Plomberie',
    headingAccent: '& Électricité',
    headingEnd: 'à Paris',
    heroCopy:
      "Un reseau mal pense ruine un chantier, meme lorsque les finitions sont belles. Nous reprenons les installations electriques et sanitaires des appartements parisiens pour livrer un bien fiable, conforme et pret a durer.",
    heroImage: '/assets/gallery/real/photo_8_2026-03-03_12-40-16.jpg',
    heroAlt: 'Travaux de plomberie et electricite a Paris',
    heroStats: [
      { value: 'NF C 15-100', label: 'mise aux normes' },
      { value: 'Tests', label: 'etancheite & fonctionnement' },
      { value: '1 pilote', label: 'coordination chantier' },
      { value: '24h', label: 'devis detaille' },
    ],
    leadEyebrow: 'Infrastructure du logement',
    leadTitle: "Les reseaux sont la colonne vertebrale d'une renovation durable",
    leadParagraphs: [
      "Dans l'ancien parisien, les installations techniques sont souvent heterogenes : ajouts successifs, tableaux sous-dimensionnes, canalisations vieillissantes, evacuation complexe, circuits cuisines et salles de bain a repenser.",
      "Nous intervenons en coordination avec les autres lots pour que plomberie et electricite soient traites au bon moment, sans reprise inutile une fois les doublages, carrelages ou meubles poses.",
    ],
    leadBullets: [
      'Tableau electrique, protections et circuits specialises',
      'Prises, interrupteurs, luminaires et alimentation des appareils',
      "Alimentation eau, evacuation, nourrices et robinetterie",
      'Preparation des reseaux avant pose de cuisine ou salle de bain',
      'Tests de fonctionnement et finitions propres avant livraison',
    ],
    expertiseTitle: 'Interventions courantes sur les reseaux a Paris',
    expertiseCards: [
      {
        title: 'Electricite',
        description: "Nous fiabilisons l'installation avant les finitions pour eviter les reprises et les surcouts.",
        items: [
          'Depose des anciens circuits et reprise du tableau',
          'Circuits prises, eclairages, chauffe-eau et gros electromenager',
          'Positionnement des appareillages selon le plan d amenagement',
        ],
      },
      {
        title: 'Plomberie',
        description: "Nous adaptons les reseaux a la nouvelle implantation et aux equipements choisis.",
        items: [
          'Reprise des alimentations et evacuations',
          'Preparation cuisine, salle de bain et WC',
          "Tests d'etancheite et finitions avant fermeture des supports",
        ],
      },
      {
        title: 'Coordination de chantier',
        description: "Les lots techniques sont traites en lien direct avec cloisons, carrelage, peinture et mobilier.",
        items: [
          'Passages en cloisons et doublages',
          'Synchronisation avec carrelage et meubles sur mesure',
          'Pilotage global par un seul interlocuteur',
        ],
      },
    ],
    galleryTitle: 'Applications typiques des lots techniques en renovation',
    galleryItems: [
      {
        src: '/assets/gallery/real/photo_8_2026-03-03_12-40-16.jpg',
        alt: 'Douche italienne avec plomberie reprise',
        title: 'Salle de bain complete',
        location: 'Paris 7e',
      },
      {
        src: '/assets/gallery/real/photo_3_2026-03-03_12-40-16.jpg',
        alt: 'WC suspendu et reseaux sanitaires renoves',
        title: 'Sanitaires et evacuations',
        location: 'Paris 11e',
      },
      {
        src: '/assets/gallery/real/photo_10_2026-03-03_12-40-16.jpg',
        alt: 'Cuisine avec circuits electriques et plomberie renoves',
        title: 'Cuisine technique',
        location: 'Paris centre',
      },
      {
        src: '/assets/gallery/real/photo_40_2026-03-03_12-40-16.jpg',
        alt: 'Salle d eau avec electricite et plomberie refaites',
        title: 'Piece humide reprise',
        location: 'Ile-de-France',
      },
    ],
    pricingTitle: 'Repères budget pour lots techniques',
    pricingItems: [
      {
        label: 'Mise a niveau partielle',
        value: 'A partir de 2 500 EUR',
        detail: 'Quelques circuits ou alimentations a reprendre dans une piece ciblee.',
      },
      {
        label: 'Cuisine ou salle de bain',
        value: '4 000-8 000 EUR',
        detail: 'Preparation complete des reseaux selon nouvelle implantation.',
      },
      {
        label: 'Appartement complet',
        value: 'Selon etat du bien',
        detail: 'Chiffrage apres visite pour coordonner reseaux, cloisons et finitions.',
      },
    ],
    faqTitle: "Questions sur la plomberie et l'electricite a Paris",
    faq: [
      {
        q: "Pouvez-vous reprendre uniquement les lots techniques sans chantier complet ?",
        a: "Oui, selon le projet. Nous intervenons aussi sur des lots techniques cibles, mais nous verifions toujours les interfaces avec les autres revetements pour eviter des reprises couteuses apres coup.",
      },
      {
        q: "Faites-vous la mise aux normes electriques d'un appartement ?",
        a: "Oui. Nous reprenons le tableau, les protections, les circuits et le positionnement des appareillages selon les besoins du logement et les exigences de la renovation.",
      },
      {
        q: "Pouvez-vous deplacer les arrivées et evacuations d'eau ?",
        a: "Oui, dans la limite des contraintes techniques du bien. Nous etudions les pentes, les parcours et les possibilites de raccordement avant validation du plan.",
      },
      {
        q: "Quand faut-il traiter plomberie et electricite dans le chantier ?",
        a: "Avant les fermetures de cloisons, la pose de carrelage, la cuisine et les finitions. C'est pourquoi nous integrons toujours ces lots au calendrier general du chantier.",
      },
    ],
    relatedTitle: 'Continuer votre parcours',
    relatedLinks: [
      { to: '/renovation-cuisine-paris', label: 'Cuisine', desc: 'Preparation des reseaux avant pose des meubles et appareils.' },
      { to: '/renovation-salle-de-bain-paris', label: 'Salle de bain', desc: 'Douche, vasque, etancheite et appareillages en piece humide.' },
      { to: '/renovation-appartement-paris', label: 'Renovation complete', desc: "Quand les lots techniques s'inscrivent dans un projet global." },
      { to: '/devis-renovation-paris', label: 'Devis gratuit', desc: 'Diagnostic et chiffrage selon le perimetre exact du chantier.' },
    ],
  },
  maconnerieCloisonsPlatrerie: {
    slug: '/maconnerie-cloisons-platrerie-paris',
    title: 'Maçonnerie Cloisons Plâtrerie Paris | Redistribution Intérieure | D.A. BAT',
    description:
      "Maconnnerie interieure, cloisons et platrerie a Paris. Redistribution des volumes, doublages, faux plafonds, reprises de supports et preparation avant finitions.",
    canonical: 'https://da-bat.com/maconnerie-cloisons-platrerie-paris',
    breadcrumbLabel: 'Maçonnerie Cloisons Plâtrerie Paris',
    badge: 'REDISTRIBUTION INTERIEURE',
    headingStart: 'Maçonnerie',
    headingAccent: 'Cloisons & Plâtrerie',
    headingEnd: 'à Paris',
    heroCopy:
      "Pour ouvrir une piece, corriger des murs irreguliers, recreer des volumes ou preparer un appartement avant peinture et pose de sols, la qualite des supports est decisive. Nous traitons les cloisons et la platrerie avec une logique de chantier complet.",
    heroImage: '/assets/gallery/real/photo_35_2026-03-03_12-40-16.jpg',
    heroAlt: 'Travaux de cloisons et platrerie a Paris',
    heroStats: [
      { value: '2-6 sem.', label: 'selon redistribution' },
      { value: 'Supports nets', label: 'prets a peindre' },
      { value: 'Doublages', label: 'murs et plafonds' },
      { value: '1 equipe', label: 'coordination' },
    ],
    leadEyebrow: 'Structure interieure legere',
    leadTitle: "Des volumes bien penses commencent par des supports justes",
    leadParagraphs: [
      "Dans beaucoup d'appartements parisiens, les murs ne sont ni plans ni homogènes. Les anciennes distributions ont parfois ajoute des cloisons peu lisibles, des faux-aplombs, des reprises successives et des plafonds fatigues.",
      "Nous remettons l'enveloppe interieure au bon niveau : demolition de cloisons non porteuses, creation de nouvelles distributions, doublages, faux plafonds, rebouchage, enduits et preparation des supports avant peinture ou carrelage.",
    ],
    leadBullets: [
      'Creation ou suppression de cloisons non porteuses',
      'Doublages muraux et corrections d aplomb',
      'Faux plafonds, retombees techniques et habillage des gaines',
      'Preparation des supports avant peinture, cuisine ou salle de bain',
      'Coordination avec electricite, plomberie et menuiserie interieure',
    ],
    expertiseTitle: 'Travaux frequents sur cloisons et platrerie',
    expertiseCards: [
      {
        title: 'Redistribution',
        description: "Nous adaptons la circulation du logement aux usages reels, sans bricolage ni rustines.",
        items: [
          'Ouverture de piece et redecoupage des espaces',
          'Creation de suite parentale ou coin bureau',
          'Preparation avant cuisine ouverte ou salle de bain agrandie',
        ],
      },
      {
        title: 'Supports',
        description: 'La regularite des murs et plafonds conditionne la qualite finale des finitions.',
        items: [
          'Rebouchage, ratissage et enduits de preparation',
          'Doublages pour murs fatigues ou heterogenes',
          'Plafonds repris avant mise en peinture',
        ],
      },
      {
        title: 'Interfaces techniques',
        description: 'Les cloisons servent aussi a integrer proprement les reseaux et les contraintes du plan.',
        items: [
          'Passages electriques et alimentations encastrees',
          'Habillage des canalisations et gaines',
          'Anticipation des finitions et menuiseries',
        ],
      },
    ],
    galleryTitle: 'Situations courantes apres redistribution interieure',
    galleryItems: [
      {
        src: '/assets/gallery/real/photo_35_2026-03-03_12-40-16.jpg',
        alt: 'Finitions premium apres travaux de platrerie',
        title: 'Supports prepares',
        location: 'Paris 8e',
      },
      {
        src: '/assets/gallery/real/photo_60_2026-03-03_12-40-16.jpg',
        alt: 'Sejour renove apres redistribution des volumes',
        title: 'Piece de vie restructuree',
        location: 'Paris 15e',
      },
      {
        src: '/assets/gallery/real/photo_30_2026-03-03_12-40-16.jpg',
        alt: 'Chambre avec rangements integres apres travaux de cloisons',
        title: 'Cloisons et rangements',
        location: 'Paris 17e',
      },
      {
        src: '/assets/gallery/real/photo_25_2026-03-03_12-40-16.jpg',
        alt: 'Volume sous pente corrige par travaux de platrerie',
        title: 'Volume atypique corrige',
        location: 'Paris rive gauche',
      },
    ],
    pricingTitle: 'Repères pour la redistribution interieure',
    pricingItems: [
      {
        label: 'Corrections localisees',
        value: 'Sur devis',
        detail: 'Reprises de supports, ratissage, petites modifications de cloisons.',
      },
      {
        label: 'Redistribution de zone',
        value: 'Selon surfaces',
        detail: 'Creation / depose de cloisons, preparation complete des supports.',
      },
      {
        label: 'Appartement complet',
        value: 'Chiffrage lot par lot',
        detail: 'Coordination avec reseaux, finitions et menuiserie interieure.',
      },
    ],
    faqTitle: 'Questions sur la maconnerie interieure et la platrerie',
    faq: [
      {
        q: "Pouvez-vous abattre une cloison pour ouvrir la cuisine ou le salon ?",
        a: "Oui pour les cloisons non porteuses, apres verification sur site. Si un doute existe sur la nature de l'ouvrage, nous l'identifions avant toute demolition.",
      },
      {
        q: "Pourquoi reprendre les murs avant peinture ?",
        a: "Parce qu'une belle peinture ne compense pas un support irregulier. Le ratissage, les enduits et les corrections d'aplomb conditionnent directement la qualite visuelle finale.",
      },
      {
        q: "Intervenez-vous aussi sur faux plafonds et habillages techniques ?",
        a: "Oui. Nous realisons faux plafonds, retombees, coffrages et habillages pour integrer proprement reseaux et contraintes techniques.",
      },
      {
        q: "Ce type de travaux peut-il etre realise seul ?",
        a: "Oui, mais il est souvent plus pertinent de le traiter avec electricite, plomberie et finitions afin d'eviter de refaire deux fois les memes zones.",
      },
    ],
    relatedTitle: 'A voir aussi',
    relatedLinks: [
      { to: '/renovation-appartement-paris', label: 'Renovation appartement', desc: 'Quand la redistribution est integree a un chantier complet.' },
      { to: '/renovation-cuisine-paris', label: 'Renovation cuisine', desc: 'Ouverture de cuisine et interfaces avec les reseaux.' },
      { to: '/renovation-appartement-ancien-paris', label: 'Appartement ancien', desc: 'Reprise de supports dans les biens parisiens de caractere.' },
      { to: '/devis-renovation-paris', label: 'Devis travaux', desc: 'Visite technique et scenarios de redistribution.' },
    ],
  },
  renovationAppartementAncien: {
    slug: '/renovation-appartement-ancien-paris',
    title: 'Rénovation Appartement Ancien Paris | Bâti Ancien & Finitions | D.A. BAT',
    description:
      "Renovation d'appartement ancien a Paris. Reprise des reseaux, murs, plafonds, sols et finitions avec respect du bati ancien. Devis detaille sous 24h.",
    canonical: 'https://da-bat.com/renovation-appartement-ancien-paris',
    breadcrumbLabel: 'Rénovation Appartement Ancien Paris',
    badge: 'BATI ANCIEN',
    headingStart: 'Rénovation',
    headingAccent: 'Appartement Ancien',
    headingEnd: 'à Paris',
    heroCopy:
      "Un appartement ancien demande plus qu'un rafraichissement. Il faut comprendre le bati, reprendre les reseaux avec discernement, corriger les supports sans banaliser le lieu et arbitrer ce qui se restaure, ce qui se remplace et ce qui se valorise.",
    heroImage: '/assets/gallery/real/photo_45_2026-03-03_12-40-16.jpg',
    heroAlt: 'Appartement ancien renove a Paris',
    heroStats: [
      { value: 'Avant 1948', label: 'biens frequents' },
      { value: 'Réseaux', label: 'repris proprement' },
      { value: 'Patrimoine', label: 'valorise' },
      { value: '24h', label: 'devis detaille' },
    ],
    leadEyebrow: 'Ancien parisien',
    leadTitle: "Renover l'ancien sans l'aplatir ni le fragiliser",
    leadParagraphs: [
      "Les appartements anciens cumulent souvent plusieurs sujets : electricite vieillissante, plomberie heterogene, sols fatigués, murs irreguliers, plafonds fissures, volumes peu lisibles et interventions anterieures de qualite inegale.",
      "Notre approche consiste a remettre le bien au niveau actuel de confort tout en preservant les atouts qui lui donnent sa valeur : proportions, parquet, menuiseries, moulures, hauteur sous plafond, lumiere et lecture des volumes.",
    ],
    leadBullets: [
      'Diagnostic du bati et arbitrage conservation / remplacement',
      'Reprise des reseaux sans degrader inutilement les elements de caractere',
      'Correction des murs et plafonds avant finitions',
      'Coordination des lots dans des immeubles occupes ou en copropriete',
      'Finitions coherentes avec un bien ancien, non standardise',
    ],
    expertiseTitle: "Ce que nous traitons sur un appartement ancien a Paris",
    expertiseCards: [
      {
        title: 'Pathologies frequentes',
        description: 'Nous identifions les sujets courants avant de lancer les finitions.',
        items: [
          'Murs creux ou supports heterogenes',
          'Plafonds fissures ou reprises anciennes visibles',
          'Installations electriques et sanitaires obsoletes',
        ],
      },
      {
        title: 'Mise a niveau technique',
        description: 'Le confort moderne doit etre introduit sans brutaliser le logement.',
        items: [
          'Reprises electriques et plomberie par zones',
          'Preparation pour cuisine et salle de bain neuves',
          'Traitement des interfaces sols / murs / menuiseries',
        ],
      },
      {
        title: 'Valorisation du bien',
        description: "Nous cherchons le bon equilibre entre remise a neuf et respect de l'identite du lieu.",
        items: [
          'Conservation des volumes et circulations pertinentes',
          'Travail des finitions pour ne pas aplatir le caractere',
          'Choix de materiaux adaptes a la valeur du bien',
        ],
      },
    ],
    galleryTitle: "Inspirations pour un appartement ancien renove",
    galleryItems: [
      {
        src: '/assets/gallery/real/photo_45_2026-03-03_12-40-16.jpg',
        alt: 'Parquet ancien renove dans appartement parisien',
        title: 'Parquet ancien',
        location: 'Paris historique',
      },
      {
        src: '/assets/gallery/real/photo_35_2026-03-03_12-40-16.jpg',
        alt: 'Finitions haut de gamme dans appartement ancien',
        title: 'Finitions de caractere',
        location: 'Paris 8e',
      },
      {
        src: '/assets/gallery/real/photo_60_2026-03-03_12-40-16.jpg',
        alt: 'Salon renove avec esprit ancien preserve',
        title: 'Piece de reception',
        location: 'Paris 9e',
      },
      {
        src: '/assets/gallery/real/photo_25_2026-03-03_12-40-16.jpg',
        alt: 'Volume ancien optimise apres renovation',
        title: 'Volume optimise',
        location: 'Paris rive droite',
      },
    ],
    pricingTitle: "Comment raisonner le budget d'un appartement ancien",
    pricingItems: [
      {
        label: 'Remise au propre',
        value: 'A partir de 400 EUR/m2',
        detail: 'Quand les reseaux restent en place et que le bati est sain.',
      },
      {
        label: 'Reprise technique partielle',
        value: '800-1 500 EUR/m2',
        detail: 'Quand plusieurs lots sont a reprendre dans un logement ancien.',
      },
      {
        label: 'Renovation lourde',
        value: 'Selon etat du bien',
        detail: "Le chiffrage depend surtout de l'etat reel du bati et des reseaux.",
      },
    ],
    faqTitle: "Questions sur la renovation d'appartement ancien",
    faq: [
      {
        q: "Quelle difference entre appartement ancien et haussmannien ?",
        a: "Le haussmannien est une categorie particuliere du bati ancien parisien. Un appartement ancien peut etre plus modeste, plus heterogene ou avoir deja subi plusieurs transformations. La logique de renovation reste cependant proche : observer, trier et valoriser.",
      },
      {
        q: "Faut-il tout remplacer dans un appartement ancien ?",
        a: "Non. Le bon travail consiste justement a distinguer ce qui doit etre remplace pour des raisons techniques de ce qui merite d'etre restaure, conserve ou simplement remis en valeur.",
      },
      {
        q: "Intervenez-vous sur des biens avec parquet, moulures ou boiseries ?",
        a: "Oui. Nous intervenons regulierement sur des appartements ou certaines composantes meritent d'etre preservees pendant que les reseaux, les pieces humides et les finitions sont modernises.",
      },
      {
        q: "Le devis est-il plus complexe sur l'ancien ?",
        a: "Oui, car l'ancien reserve davantage d'inconnues. C'est pourquoi nous accordons une grande importance a la visite technique et a la lecture du bien avant chiffrage.",
      },
    ],
    relatedTitle: 'Approfondir votre projet',
    relatedLinks: [
      { to: '/renovation-haussmannien-paris', label: 'Haussmannien', desc: 'Pour les biens avec parquet point de Hongrie, moulures et boiseries.' },
      { to: '/renovation-appartement-paris', label: 'Renovation complete', desc: 'Quand le chantier porte sur l ensemble du logement.' },
      { to: '/pose-parquet-paris', label: 'Parquet', desc: 'Pose, renovation, poncage et vitrification des sols bois.' },
      { to: '/devis-renovation-paris', label: 'Devis gratuit', desc: 'Visite technique pour chiffrer le bon niveau de reprise.' },
    ],
  },
  renovationStudio: {
    slug: '/renovation-studio-paris',
    title: 'Rénovation Studio Paris | Optimisation Petite Surface | D.A. BAT',
    description:
      "Renovation de studio a Paris. Optimisation de petite surface, cuisine compacte, salle d'eau, rangements, reseaux et finitions pour residence ou investissement locatif.",
    canonical: 'https://da-bat.com/renovation-studio-paris',
    breadcrumbLabel: 'Rénovation Studio Paris',
    badge: 'PETITES SURFACES',
    headingStart: 'Rénovation',
    headingAccent: 'Studio',
    headingEnd: 'à Paris',
    heroCopy:
      "Dans un studio parisien, chaque centimetre compte. Nous renovons les petites surfaces avec une logique tres concrete : rendre le bien plus confortable, plus lisible, plus rentable a l'usage et plus facile a meubler ou a louer.",
    heroImage: '/assets/gallery/real/photo_25_2026-03-03_12-40-16.jpg',
    heroAlt: 'Renovation de studio a Paris',
    heroStats: [
      { value: '15-35 m2', label: 'surface frequente' },
      { value: '2-6 sem.', label: 'chantier type' },
      { value: 'Optimisation', label: 'volumes et rangements' },
      { value: '24h', label: 'devis detaille' },
    ],
    leadEyebrow: 'Petite surface',
    leadTitle: "Un studio se reussit par les arbitrages, pas par l'accumulation",
    leadParagraphs: [
      "Une petite surface supporte mal les erreurs de plan. Une cuisine mal placee, un placard trop profond, une salle d'eau mal pensee ou des prises au mauvais endroit se paient tres vite a l'usage.",
      "Nous travaillons donc avec une logique d'optimisation : clarifier les circulations, simplifier les reseaux, integrer des rangements utiles et choisir des finitions qui resistent bien a la rotation locative ou a une occupation quotidienne intensive.",
    ],
    leadBullets: [
      'Cuisine compacte et fonctionnelle adaptee a la surface',
      "Salle d'eau optimisee avec rangements et circulation fluide",
      'Prises, eclairages et circuits penses pour petits espaces',
      'Finitions robustes, faciles a entretenir et a relouer',
      'Lecture budget / rentabilite pour residence ou investissement',
    ],
    expertiseTitle: "Comment nous optimisons un studio parisien",
    expertiseCards: [
      {
        title: 'Plan & usages',
        description: "Nous hiérarchisons les fonctions essentielles du bien : dormir, cuisiner, ranger, travailler.",
        items: [
          'Circulations nettes sans perte de place',
          'Mobilier et electro-menager compatibles avec le volume',
          'Angles morts transformes en rangements utiles',
        ],
      },
      {
        title: 'Pieces techniques',
        description: "La cuisine et la salle d'eau concentrent l'essentiel des arbitrages techniques et budgetaires.",
        items: [
          'Cuisine compacte et ergonomique',
          "Salle d'eau sobre, durable et facile a entretenir",
          'Reseaux prepares pour limiter les reprises futures',
        ],
      },
      {
        title: 'Destination du bien',
        description: "Le niveau de finition n'est pas le meme pour une residence principale et un investissement.",
        items: [
          'Choix des materiaux selon usage et usure attendue',
          'Arbitrage budget / valeur locative / delai',
          'Lecture globale avant remise en location ou occupation',
        ],
      },
    ],
    galleryTitle: 'Exemples de petites surfaces optimisees',
    galleryItems: [
      {
        src: '/assets/gallery/real/photo_25_2026-03-03_12-40-16.jpg',
        alt: 'Studio mansarde optimise apres renovation',
        title: 'Surface atypique',
        location: 'Paris centre',
      },
      {
        src: '/assets/gallery/real/photo_30_2026-03-03_12-40-16.jpg',
        alt: 'Petit espace nuit avec rangements integres',
        title: 'Rangements integres',
        location: 'Paris 10e',
      },
      {
        src: '/assets/gallery/real/photo_10_2026-03-03_12-40-16.jpg',
        alt: 'Cuisine compacte renovee dans studio parisien',
        title: 'Cuisine compacte',
        location: 'Paris rive gauche',
      },
      {
        src: '/assets/gallery/real/photo_3_2026-03-03_12-40-16.jpg',
        alt: "Salle d'eau de petite surface renovee",
        title: "Salle d'eau optimisee",
        location: 'Ile-de-France',
      },
    ],
    pricingTitle: 'Repères budget pour un studio a Paris',
    pricingItems: [
      {
        label: 'Rafraichissement complet',
        value: 'Selon perimetre',
        detail: 'Peinture, sols, cuisine simple et remise au propre generale.',
      },
      {
        label: 'Studio optimise',
        value: 'Budget raisonne',
        detail: 'Reseaux repris, plan plus fonctionnel, finitions robustes.',
      },
      {
        label: 'Investissement locatif',
        value: 'Sur devis',
        detail: 'Chiffrage selon objectif de remise sur le marche et niveau de prestation.',
      },
    ],
    faqTitle: 'Questions sur la renovation de studio a Paris',
    faq: [
      {
        q: "Pouvez-vous optimiser un studio sans gros travaux structurels ?",
        a: "Oui. Dans beaucoup de cas, une meilleure implantation de la cuisine, des rangements plus justes, une salle d'eau repensee et des reseaux repositionnes suffisent a transformer l'usage.",
      },
      {
        q: "Ce type de chantier est-il interessant pour un investissement locatif ?",
        a: "Oui, a condition de raisonner avec discipline sur le budget, la durabilite des finitions et la lisibilite du bien. L'objectif est d'ameliorer l'usage sans surinvestir la ou le locataire ne le valorisera pas.",
      },
      {
        q: "Combien de temps faut-il pour refaire un studio ?",
        a: "Selon la surface et la part des lots techniques, comptez souvent entre 2 et 6 semaines pour un chantier proprement coordonne.",
      },
      {
        q: "Intervenez-vous aussi sur cuisine et salle d'eau dans un studio ?",
        a: "Oui. Ce sont meme les postes les plus structurants dans une petite surface. Nous les traitons en priorite pour gagner en fonctionnalite et en durabilite.",
      },
    ],
    relatedTitle: 'Pages utiles',
    relatedLinks: [
      { to: '/renovation-cuisine-paris', label: 'Cuisine', desc: 'Pour les implantations compactes et la reprise des reseaux.' },
      { to: '/renovation-appartement-paris', label: 'Renovation appartement', desc: 'Quand le studio demande une reprise plus globale.' },
      { to: '/plomberie-electricite-paris', label: 'Reseaux techniques', desc: 'Lots techniques critiques sur petites surfaces.' },
      { to: '/devis-renovation-paris', label: 'Demander un devis', desc: 'Visite, arbitrage budget et plan d action rapide.' },
    ],
  },
};

export const seoPages = Object.values(seoPageConfigs);
