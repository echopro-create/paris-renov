import { ContentData } from './types';

export const content: ContentData = {
  common: {
    learnMore: "En savoir plus",
    getQuote: "Demander un devis pour ce service",
    whatWeOffer: "Ce que nous proposons :",
    detailedQuote: "Devis détaillé et gratuit",
    respectNorms: "Respect des normes en vigueur",
    expertBadge: "ATELIER D'EXCELLENCE",
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
    process: "Process",
    gallery: "Réalisations",
    contact: "Contact",
    getQuote: "Devis Gratuit",
  },
  hero: {
    title: "L'Art de la Rénovation",
    subtitle: "Spécialiste en travaux de rénovation générale и rénovation intérieure. De la création des cloisons à la pose du parquet, nous sublimons vos espaces avec une exigence absolue.",
    ctaPrimary: "Demander un devis",
    ctaSecondary: "Voir nos réalisations",
    stats: [
      { label: "ANS D'EXPÉRIENCE", value: "15+" },
      { label: "PROJETS RÉALISÉS", value: "450+" },
      { label: "GARANTIE DÉCENNALE", value: "Oui" },
      { label: "DEVIS GRATUIT", value: "24h" },
    ],
  },
  trustBadges: {
    title: "Ils nous font confiance",
  },
  services: {
    title: "Nos Pôles d'Expertise",
    subtitle: "Votre partenaire d'excellence pour tous vos travaux de rénovation intérieure à Paris.",
    items: [
      {
        id: 'general',
        title: "Rénovation Générale",
        description: "Travaux de rénovation générale : peinture, plomberie, électricité, menuiserie, carrelage sol et murs.",
        image: "/assets/services/painting-service.webp",
        iconName: 'Paintbrush'
      },
      {
        id: 'plastering',
        title: "Plâtrerie & Aménagement",
        description: "Création des cloisons, plafonds suspendus et plâtrerie. Restructuration complète de vos espaces intérieurs.",
        image: "/assets/services/plastering-service.webp",
        iconName: 'Home'
      },
      {
        id: 'spaces',
        title: "Cuisines & Bains",
        description: "Restauration des salles de bains и cuisine. Une expertise technique pour vos pièces les plus exigeantes.",
        image: "/assets/services/bathroom-service.webp",
        iconName: 'Droplets'
      },
      {
        id: 'flooring',
        title: "Parquets & Sols",
        description: "Couverture des sols parquet, pose и restauration. Finitions artisanales pour un sol d'exception.",
        image: "/assets/services/parquet-service.webp",
        iconName: 'Layers'
      }
    ]
  },
  whyUs: {
    title: "L'Exigence de l'Atelier Alexei",
    subtitle: "Chaque projet est une œuvre unique, réalisée avec la rigueur et la passion qui définissent notre atelier.",
    features: [
      { title: "Garantie Décennale", desc: "Tous nos ouvrages sont couverts par une assurance décennale obligatoire.", icon: "ShieldCheck" },
      { title: "Devis Transparent", desc: "Prix fermes et définitifs. Aucune surprise sur la facture finale.", icon: "FileText" },
      { title: "Respect des Délais", desc: "Planning rigoureux et communication régulière sur l'avancement.", icon: "Clock" },
      { title: "Artisans Qualifiés", desc: "Une équipe de compagnons expérimentés et passionnés par leur métier.", icon: "Award" }
    ],
    quote: "L'excellence n'est pas un acte, c'est une habitude.",
    quoteAuthor: "— Alexei, Fondateur"
  },
  beforeAfter: {
    title: "Transformation",
    subtitle: "Faites glisser pour découvrir la métamorphose d'un salon Haussmannien.",
    labelBefore: "Avant",
    labelAfter: "Après"
  },
  process: {
    badge: "PROCESSUS",
    title: "Notre Processus d'Excellence",
    subtitle: "De la première visite à la livraison finale, chaque étape est pensée pour garantir votre satisfaction.",
    steps: [
      { number: "01", title: "Visite & Diagnostic", description: "Évaluation complète de votre bien, prise de mesures et analyse des contraintes techniques." },
      { number: "02", title: "Devis Détaillé", description: "Proposition chiffrée transparente avec choix des matériaux et planning prévisionnel." },
      { number: "03", title: "Réalisation", description: "Exécution des travaux par nos artisans qualifiés avec protection des lieux et suivi quotidien." },
      { number: "04", title: "Livraison", description: "Réception des travaux, nettoyage complet du chantier et remise des clés." }
    ]
  },
  gallery: {
    badge: "RÉALISATIONS",
    title: "Nos Derniers Chantiers",
    subtitle: "Découvrez l'excellence de nos finitions à travers nos derniers chantiers parisiens."
  },
  testimonials: {
    badge: "TÉMOIGNAGES",
    title: "Ce Que Disent Nos Clients",
    subtitle: "La satisfaction de nos clients est notre plus belle récompense.",
    items: [
      {
        id: 1,
        name: "Sophie Martin",
        location: "Paris 16e",
        text: "Un travail absolument remarquable. L'équipe d'Alexei a transformé notre appartement haussmannien avec un souci du détail impressionnant. Les finitions sont parfaites.",
        role: "Rénovation complète",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
      },
      {
        id: 2,
        name: "Jean-Philippe Laurent",
        location: "Neuilly-sur-Seine",
        text: "Professionnalisme exemplaire du début à la fin. Le devis était précis, les délais respectés et la qualité de la peinture est exceptionnelle. Je recommande vivement.",
        role: "Peinture & Décoration",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
      },
      {
        id: 3,
        name: "Camille Dubois",
        location: "Paris 7e",
        text: "Notre parquet en point de Hongrie a retrouvé toute sa splendeur grâce à l'Atelier Alexei. Un savoir-faire rare et une équipe à l'écoute. Merci pour cette belle transformation.",
        role: "Parquets & Sols",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
      }
    ]
  },
  contact: {
    badge: "DEVIS & CONTACT",
    title: "Discutons de Votre Projet",
    subtitle: "Contactez-nous pour une consultation personnalisée et un devis gratuit.",
    formHeading: "Demandez votre devis",
    formSubheading: "Réponse garantie sous 24h",
    form: {
      name: "Nom complet",
      email: "Email",
      phone: "Téléphone",
      type: "Type de projet",
      message: "Décrivez votre projet",
      submit: "Envoyer ma demande",
      submitting: "Envoi en cours...",
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
        painting: "Peinture & Décoration",
        plumbing: "Plâtrerie & Cloisons",
        flooring: "Parquets & Sols",
        other: "Autre"
      }
    },
    info: {
      address: "12 Avenue des Champs-Élysées, 75008 Paris",
      phone: "+33 6 01 99 76 59",
      email: "contact@atelier-alexei.fr",
      hours: "Lun - Ven: 8h00 - 19h00",
      labels: {
        phone: "Téléphone",
        email: "Email",
        address: "Adresse"
      }
    }
  },
  ctaBanner: {
    title: "Prêt à Transformer",
    titleHighlight: "Votre Intérieur?",
    subtitle: "Bénéficiez d'un devis gratuit et personnalisé pour votre projet de travaux de rénovation générale à Paris.",
    ctaPrimary: "Demander un devis gratuit",
    ctaSecondary: "+33 6 01 99 76 59"
  },
  footer: {
    description: "Expert en travaux de rénovation générale et intérieure : peinture, plomberie, électricité, menuiserie, carrelage et parquet. Excellence artisanale depuis 2008.",
    navigation: "Navigation",
    services: "Savoir-faire",
    legal: "Mentions Légales",
    privacy: "Politique de Confidentialité",
    rights: "Tous droits réservés.",
    areas: "Paris & Île-de-France",
    designedBy: "Artisanat Français d'Excellence",
    legalBody: "Atelier Alexei SAS\nSiège social : 12 Avenue des Champs-Élysées, 75008 Paris\nRCS Paris B 123 456 789\nCapital social : 50 000 €\nDirecteur de la publication : Alexei [Nom]\nHébergeur : Vercel Inc.",
    privacyBody: "Nous respectons votre vie privée. Les informations recueillies sur ce formulaire sont enregistrées dans un fichier informatisé par l'Atelier Alexei pour la gestion de notre clientèle.\n\nElles sont conservées pendant 3 ans et sont destinées au service commercial.\n\nConformément à la loi « informatique et libertés », vous pouvez exercer votre droit d'accès aux données vous concernant et les faire rectifier en contactant : contact@atelier-alexei.fr"
  }
};