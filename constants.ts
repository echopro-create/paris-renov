import { ContentData } from './types';

export const content: ContentData = {
  common: {
    learnMore: "En savoir plus",
    getQuote: "Demander un devis pour ce service",
    whatWeOffer: "Ce que nous proposons :",
    detailedQuote: "Devis détaillé et gratuit",
    respectNorms: "Respect des normes en vigueur",
    expertBadge: "ENTREPRISE GÉNÉRALE DE BÂTIMENT",
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
    title: "D.A. BAT - Rénovation Générale",
    subtitle: "Entreprise générale de bâtiment. Travaux de rénovation, peinture, plomberie, électricité, maçonnerie, parquets et carrelage. Nous réalisons tous vos projets avec soin et une exigence absolue.",
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
    title: "Nos Services",
    subtitle: "Une expertise complète pour tous vos travaux de rénovation.",
    items: [
      {
        id: 'general',
        title: "Rénovation & Maçonnerie",
        description: "Travaux de rénovation générale : maçonnerie, création de cloisons, plâtrerie. Une prise en charge complète de votre chantier.",
        image: "/assets/services/service_renovation_generale.png"
      },
      {
        id: 'plastering',
        title: "Peinture & Décoration",
        description: "Peinture intérieure et extérieure, enduits décoratifs, papiers peints. Des finitions soignées pour sublimer vos espaces.",
        image: "/assets/services/service_platrerie.png"
      },
      {
        id: 'spaces',
        title: "Plomberie & Électricité",
        description: "Installation sanitaire complète, rénovation salle de bain, mise aux normes électrique. Tous travaux de fluides et réseaux.",
        image: "/assets/services/service_cuisine_bain.png"
      },
      {
        id: 'flooring',
        title: "Sols & Boiserie",
        description: "Pose de parquet, carrelage, boiseries sur mesure. Rénovation de sols anciens et pose de revêtements modernes.",
        image: "/assets/services/service_parquet.png"
      }
    ]
  },
  whyUs: {
    badge: "Exigence",
    title: "Pourquoi D.A. BAT ?",
    subtitle: "Votre satisfaction est notre priorité. Nous mettons notre savoir-faire au service de votre projet.",
    image: "/assets/why-us/haussmann-design.png",
    features: [
      { title: "Garantie Décennale", description: "Tous nos ouvrages sont couverts par une assurance décennale obligatoire.", icon: "ShieldCheck" },
      { title: "Devis Transparent", description: "Prix fermes et définitifs. Aucune surprise sur la facture finale.", icon: "FileText" },
      { title: "Respect des Délais", description: "Planning rigoureux et communication régulière sur l'avancement.", icon: "Clock" },
      { title: "Artisans Qualifiés", description: "Une équipe de compagnons expérimentés et passionnés par leur métier.", icon: "Award" }
    ],
    quote: "La confiance se construit sur la qualité de nos réalisations.",
    quoteAuthor: "— Alexei TCHOUDINOV, Gérant"
  },
  beforeAfter: {
    title: "Transformation",
    subtitle: "Faites glisser pour découvrir la métamorphose d'un salon Haussmannien.",
    beforeImage: "/assets/images/after_custom.png",
    afterImage: "/assets/images/before_custom.png",
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
    ],
    faq: [
      {
        question: "Combien de temps dure la phase de diagnostic ?",
        answer: "Le diagnostic initial prend généralement entre 30 minutes et 1 heure, selon la taille de votre bien et la complexité du projet."
      },
      {
        question: "Sous quel délai reçois-je mon devis ?",
        answer: "Nous nous engageons à vous transmettre un devis détaillé sous 48 à 72 heures après la visite technique."
      },
      {
        question: "Les délais de réalisation sont-ils garantis ?",
        answer: "Oui, les délais annoncés dans le planning sont fermes et définitifs. En cas de retard de notre fait, des pénalités s'appliquent."
      },
      {
        question: "Proposez-vous une garantie décennale ?",
        answer: "Absolument. Tous nos chantiers sont couverts par une assurance décennale qui garantit les ouvrages pendant 10 ans après la livraison."
      }
    ]
  },
  gallery: {
    badge: "RÉALISATIONS",
    title: "Nos Derniers Chantiers",
    subtitle: "Découvrez l'excellence de nos finitions à travers nos derniers chantiers parisiens.",
    items: [
      {
        src: "/assets/gallery/salon.png",
        alt: "Salon haussmannien rénové à Paris",
        title: "Salon Haussmannien",
        location: "Paris 8e",
        span: "md:col-span-2 md:row-span-2",
      },
      {
        src: "/assets/gallery/cuisine.png",
        alt: "Rénovation cuisine moderne et épurée",
        title: "Cuisine Moderne",
        location: "Neuilly",
        span: "md:col-span-2",
      },
      {
        src: "/assets/gallery/chambre.png",
        alt: "Chambre parentale haut de gamme",
        title: "Suite Parentale",
        location: "Paris 16e",
        span: "md:col-span-1",
      },
      {
        src: "/assets/gallery/salle-de-bain.png",
        alt: "Salle de bain en marbre et or",
        title: "Salle de Bain",
        location: "Paris 7e",
        span: "md:col-span-1",
      },
      {
        src: "/assets/gallery/dressing.png",
        alt: "Dressing sur mesure haut de gamme",
        title: "Dressing Sur Mesure",
        location: "Paris 17e",
        span: "md:col-span-2",
      },
      {
        src: "/assets/gallery/entree.png",
        alt: "Hall d'entrée prestigieux",
        title: "Entrée & Hall",
        location: "Paris 16e",
        span: "md:col-span-2",
      }
    ]
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
        text: "Un travail remarquable. D.A. BAT a transformé notre appartement avec un professionnalisme exemplaire.",
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
        text: "Notre parquet a retrouvé toute sa splendeur grâce à D.A. BAT. Un savoir-faire artisanal de qualité.",
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
      phone: "06 01 99 76 59",
      email: "tchoudinov@hotmail.fr",
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
    ctaSecondary: "06 01 99 76 59"
  },
  footer: {
    description: "D.A. BAT - Entreprise générale de bâtiment. Travaux de rénovation, peinture, plomberie, électricité, maçonnerie, boiserie, parquet et carrelage. Qualité, soin et exigence absolue.",
    navigation: "Navigation",
    services: "Savoir-faire",
    legal: "Mentions Légales",
    privacy: "Politique de Confidentialité",
    rights: "Tous droits réservés.",
    areas: "Paris & Île-de-France",
    designedBy: "Artisanat Français d'Excellence",
    legalBody: "D.A. BAT - Alexei TCHOUDINOV\nSiège social : 12 Avenue des Champs-Élysées, 75008 Paris\nDirecteur de la publication : Alexei TCHOUDINOV\nContact : tchoudinov@hotmail.fr",
    privacyBody: "Nous respectons votre vie privée. Les informations recueillies sur ce formulaire sont enregistrées dans un fichier informatisé par D.A. BAT pour la gestion de notre clientèle.\n\nElles sont conservées pendant 3 ans et sont destinées au service commercial.\n\nConformément à la loi « informatique et libertés », vous pouvez exercer votre droit d'accès aux données vous concernant et les faire rectifier en contactant : tchoudinov@hotmail.fr"
  },
  social: {
    instagram: "https://www.instagram.com/tchou_dnov/"
  }
};