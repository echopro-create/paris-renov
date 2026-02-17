import { ContentData } from './types';

export const content: ContentData = {
  common: {
    learnMore: "En savoir plus",
    getQuote: "Demander un devis pour ce service",
    whatWeOffer: "Ce que nous proposons :",
    detailedQuote: "Devis détaillé et gratuit",
    respectNorms: "Respect des normes en vigueur",
    expertBadge: "Premium Renovations Paris",
    viewAll: "Voir tous les projets",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    portfolio: "Portfolio",
    workflow: "Workflow",
    metamorphose: "Métamorphose",
    dragToCompare: "Glissez pour comparer",
    clientReviews: "Avis Clients",
    contactBadge: "Contact",
    whatsappTooltip: "Discuter sur WhatsApp",
    callAriaLabel: "Appeler maintenant",
    whatsappAriaLabel: "Contacter sur WhatsApp"
  },
  nav: {
    home: "Accueil",
    services: "Services",
    whyUs: "Expertise",
    process: "Méthode",
    gallery: "Réalisations",
    contact: "Contact",
    getQuote: "Devis Gratuit",
  },
  hero: {
    title: "Rénovation d'Excellence à Paris",
    subtitle: "Artisans experts en rénovation complète et aménagement intérieur. Transformez votre espace de vie avec le savoir-faire français, du gros œuvre aux finitions les plus raffinées.",
    ctaPrimary: "Estimer mon projet",
    ctaSecondary: "Voir nos réalisations",
    stats: [
      { label: "Années d'expérience", value: "15+" },
      { label: "Projets réalisés", value: "500+" },
      { label: "Satisfaction client", value: "100%" },
    ],
  },
  trustBadges: {
    title: "Ils nous font confiance",
  },
  services: {
    title: "Nos Pôles d'Expertise",
    subtitle: "Un accompagnement complet pour tous vos besoins en rénovation : peinture, plomberie, électricité, menuiserie et carrelage.",
    items: [
      {
        id: 'painting',
        title: "Peinture & Menuiserie",
        description: "Application de peintures haut de gamme, travaux de menuiserie sur mesure et finitions décoratives soignées.",
        benefits: ["Finitions impeccables", "Matériaux écologiques", "Meubles sur mesure"],
        iconName: 'Paintbrush'
      },
      {
        id: 'plumbing',
        title: "Salles de Bain & Cuisines",
        description: "Rénovation complète de vos pièces d'eau et cuisines. Plomberie, électricité et pose d'équipements.",
        benefits: ["Normes NF", "Réseaux électriques", "Étanchéité garantie"],
        iconName: 'Droplets'
      },
      {
        id: 'flooring',
        title: "Sols & Carrelages",
        description: "Pose de parquets (massifs, point de Hongrie) et carrelages professionnels pour sols et murs.",
        benefits: ["Restauration d'ancien", "Pose de précision", "Pierre & Céramique"],
        iconName: 'Layers'
      },
      {
        id: 'renovation',
        title: "Gros Œuvre & Plâtrerie",
        description: "Création de cloisons, faux plafonds et travaux de plâtrerie. Restructuration complète de vos espaces.",
        benefits: ["Isolation phonique", "Doublage thermique", "Optimisation d'espace"],
        iconName: 'Home'
      }
    ]
  },
  whyUs: {
    title: "L'Art de la Précision",
    subtitle: "Nous ne faisons pas que rénover, nous transcendons votre patrimoine parisien avec une rigueur absolue.",
    features: [
      { title: "Garantie Décennale", desc: "Tous nos ouvrages sont couverts par une assurance décennale obligatoire.", icon: "ShieldCheck" },
      { title: "Devis Transparent", desc: "Prix fermes et définitifs. Aucune surprise sur la facture finale.", icon: "Award" },
      { title: "Respect des Délais", desc: "Planning rigoureux et rapports hebdomadaires sur l'avancement.", icon: "Clock" },
      { title: "Expertise Locale", desc: "Connaissance parfaite des normes parisiennes et règlements de copropriété.", icon: "MapPin" }
    ]
  },
  beforeAfter: {
    title: "Transformation",
    subtitle: "Faites glisser pour découvrir la métamorphose d'un salon Haussmannien.",
    labelBefore: "Avant",
    labelAfter: "Après"
  },
  process: {
    title: "Notre Processus",
    subtitle: "Une méthodologie éprouvée pour une rénovation sans stress.",
    steps: [
      { number: "01", title: "Premier Contact", description: "Visite sur place pour évaluer vos besoins et prendre les mesures." },
      { number: "02", title: "Devis Détaillé", description: "Réception d'un chiffrage précis et transparent sous 48h." },
      { number: "03", title: "Planification", description: "Validation du planning et choix des matériaux de qualité." },
      { number: "04", title: "Réalisation", description: "Exécution des travaux avec protection des lieux et nettoyage final." }
    ]
  },
  gallery: {
    title: "Nos Réalisations",
    subtitle: "Découvrez l'excellence de nos finitions à travers nos derniers chantiers parisiens."
  },
  testimonials: {
    title: "Avis Clients",
    subtitle: "La satisfaction de nos clients est notre plus belle récompense.",
    items: [
      {
        id: 1,
        name: "Marc Dubreuil",
        location: "Paris 16e",
        text: "Une équipe professionnelle et méticuleuse. La rénovation de mon appartement haussmannien a été réalisée dans les délais avec une qualité de finition exceptionnelle.",
        role: "Propriétaire"
      },
      {
        id: 2,
        name: "Sophie Laurent",
        location: "Neuilly-sur-Seine",
        text: "Excellent travail pour la rénovation complète de notre cuisine et salle de bain. Les artisans sont discrets, propres et très compétents.",
        role: "Particulier"
      }
    ]
  },
  contact: {
    title: "Discutons de votre projet",
    subtitle: "Contactez-nous pour une consultation personnalisée.",
    form: {
      name: "Nom complet",
      email: "Email professionnel",
      phone: "Téléphone mobile",
      type: "Nature du projet",
      message: "Détails de votre demande",
      submit: "Obtenir mon estimation",
      submitting: "Traitement en cours...",
      success: "Merci ! Nous vous recontacterons sous 24h.",
      errors: {
        name: "Le nom est requis",
        email: "L'email est requis",
        emailInvalid: "Email invalide",
        phone: "Le téléphone est requis",
        message: "Le message est requis"
      },
      options: {
        full: "Rénovation Complète",
        painting: "Peinture",
        plumbing: "Plomberie",
        flooring: "Sols",
        other: "Autre"
      }
    },
    info: {
      address: "12 Avenue des Champs-Élysées, 75008 Paris",
      phone: "+33 6 01 99 76 59",
      email: "contact@parisrenov.fr",
      hours: "Lun - Ven: 8h00 - 19h00",
      labels: {
        phone: "Téléphone",
        email: "Email",
        address: "Adresse"
      }
    }
  },
  footer: {
    description: "Votre partenaire de confiance pour tous travaux de rénovation à Paris et en Île-de-France. Excellence, précision et savoir-faire français depuis 2008.",
    navigation: "Navigation",
    services: "Services",
    legal: "Mentions Légales",
    privacy: "Politique de Confidentialité",
    rights: "Tous droits réservés.",
    areas: "Zones d'intervention : Paris (75), Hauts-de-Seine (92), Val-de-Marne (94)",
    designedBy: "Savoir-faire et Précision.",
    legalBody: "ParisRenov SAS\nSiège social : 12 Avenue des Champs-Élysées, 75008 Paris\nRCS Paris B 123 456 789\nCapital social : 50 000 €\nDirecteur de la publication : Jean Dupont\nHébergeur : Vercel Inc.",
    privacyBody: "Nous respectons votre vie privée. Les informations recueillies sur ce formulaire sont enregistrées dans un fichier informatisé par ParisRenov pour la gestion de notre clientèle.\n\nElles sont conservées pendant 3 ans et sont destinées au service commercial.\n\nConformément à la loi « informatique et libertés », vous pouvez exercer votre droit d'accès aux données vous concernant et les faire rectifier en contactant : contact@parisrenov.fr"
  }
};