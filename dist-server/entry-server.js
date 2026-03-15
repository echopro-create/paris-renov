import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import React, { createContext, useState, useEffect, useCallback, useContext, useRef, Component } from "react";
import ReactDOMServer from "react-dom/server";
import { Sun, Moon, X, Menu, ChevronRight, Award, Users, ShieldCheck, Clock, Check, ClipboardList, FileText, Hammer, Key, ChevronDown, ArrowRight, Phone, Instagram, Mail, MapPin, MessageCircle, ArrowUp, AlertTriangle, RefreshCw, WifiOff } from "lucide-react";
import { AnimatePresence, motion, useScroll, useTransform, useInView } from "framer-motion";
const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {
  }
});
function ThemeProvider({ children }) {
  const isSSR = typeof window === "undefined";
  const [userOverride, setUserOverride] = useState(() => {
    if (isSSR) return false;
    return localStorage.getItem("theme") !== null;
  });
  const [theme, setTheme] = useState(() => {
    if (isSSR) return "light";
    const stored = localStorage.getItem("theme");
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      if (!userOverride) {
        setTheme(e.matches ? "dark" : "light");
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [userOverride]);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
    if (userOverride) {
      localStorage.setItem("theme", theme);
    }
  }, [theme, userOverride]);
  const toggleTheme = useCallback(() => {
    setUserOverride(true);
    setTheme((prev) => prev === "light" ? "dark" : "light");
  }, []);
  return /* @__PURE__ */ jsx(ThemeContext.Provider, { value: { theme, toggleTheme }, children });
}
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};
function useSmoothScroll() {
  useEffect(() => {
    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };
    const smoothScrollTo = (start, end, duration = 800) => {
      const change = end - start;
      const startTime = performance.now();
      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeInOutCubic(progress);
        window.scrollTo(0, start + change * easedProgress);
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    };
    const handleClick = (e) => {
      const target = e.target;
      const anchor = target.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      e.preventDefault();
      const targetId = href.slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const start = window.pageYOffset;
        const end = targetElement.getBoundingClientRect().top + start;
        smoothScrollTo(start, end, 800);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
}
const content = {
  common: {
    expertBadge: "ENTREPRISE GÉNÉRALE DE BÂTIMENT",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    metamorphose: "Métamorphose",
    dragToCompare: "Glissez pour comparer",
    clientReviews: "Avis Clients",
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
    getQuote: "Devis Gratuit"
  },
  hero: {
    subtitle: "Entreprise tous corps d'état à Paris. Travaux de rénovation d'appartements anciens et haussmanniens : peinture, plomberie, électricité, maçonnerie, parquets et carrelage. Nous réalisons tous vos projets avec soin et une exigence absolue.",
    ctaPrimary: "Demander un devis",
    ctaSecondary: "Voir nos réalisations",
    stats: [
      { label: "ANS D'EXPÉRIENCE", value: "15+" },
      { label: "PROJETS RÉALISÉS", value: "450+" },
      { label: "GARANTIE DÉCENNALE", value: "Oui" },
      { label: "DEVIS GRATUIT", value: "24h" }
    ]
  },
  services: {
    title: "Nos Services",
    subtitle: "Une expertise complète pour tous vos travaux de rénovation.",
    items: [
      {
        id: "general",
        title: "Rénovation & Maçonnerie",
        description: "Travaux de rénovation générale d'appartements anciens et haussmanniens à Paris et Île-de-France : maçonnerie, création de cloisons, plâtrerie. Entreprise tous corps d'état pour une prise en charge complète de votre chantier.",
        image: "/assets/services/service_renovation_generale.webp",
        alt: "Rénovation complète d'appartement et maçonnerie à Paris"
      },
      {
        id: "plastering",
        title: "Peinture & Décoration",
        description: "Peinture intérieure et extérieure, enduits décoratifs, papiers peints. Des finitions soignées pour sublimer vos appartements parisiens.",
        image: "/assets/services/service_platrerie.webp",
        alt: "Peinture intérieure et décoration murale soignée"
      },
      {
        id: "spaces",
        title: "Plomberie & Électricité",
        description: "Installation sanitaire complète, rénovation salle de bain, mise aux normes électrique. Tous travaux de fluides et réseaux pour votre habitat.",
        image: "/assets/services/service_cuisine_bain.webp",
        alt: "Installation plomberie et mise aux normes électrique"
      },
      {
        id: "flooring",
        title: "Sols & Boiserie",
        description: "Pose de parquet, carrelage, boiseries sur mesure. Rénovation de sols anciens (Point de Hongrie) et pose de revêtements modernes.",
        image: "/assets/services/service_parquet.webp",
        alt: "Pose de parquet et rénovation de sols anciens à Paris"
      }
    ]
  },
  whyUs: {
    badge: "Exigence",
    title: "Pourquoi D.A. BAT ?",
    subtitle: "Contractant général pour vos travaux de rénovation. Votre satisfaction est notre priorité.",
    image: "/assets/why-us/haussmann-design.webp",
    features: [
      { title: "Garantie Décennale", description: "Tous nos ouvrages sont couverts par une assurance décennale obligatoire.", icon: "ShieldCheck" },
      { title: "Devis Transparent", description: "Prix fermes et définitifs. Aucune surprise sur la facture finale.", icon: "FileText" },
      { title: "Respect des Délais", description: "Planning rigoureux et communication régulière sur l'avancement.", icon: "Clock" },
      { title: "Artisans Qualifiés", description: "Une équipe de compagnons expérimentés et passionnés par leur métier.", icon: "Award" }
    ]
  },
  beforeAfter: {
    title: "Transformation",
    subtitle: "Faites glisser pour découvrir la métamorphose d'un salon Haussmannien.",
    beforeImage: "/assets/images/after_custom.webp",
    afterImage: "/assets/images/before_custom.webp",
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
    subtitle: "Découvrez l'excellence de nos finitions à travers nos derniers chantiers.",
    filters: ["Tout", "Salle de bain", "Cuisine", "Chambre & Salon"],
    items: [
      {
        src: "/assets/gallery/real/photo_9_2026-03-03_12-40-16.jpg",
        alt: "Salle de bain moderne avec finitions soignées",
        title: "Salle de Bain Moderne",
        location: "Île-de-France",
        category: "Salle de bain",
        span: "md:col-span-2 md:row-span-2"
      },
      {
        src: "/assets/gallery/real/photo_8_2026-03-03_12-40-16.jpg",
        alt: "Rénovation salle d'eau avec douche italienne",
        title: "Douche Italienne Épurée",
        location: "Île-de-France",
        category: "Salle de bain",
        span: "md:col-span-2"
      },
      {
        src: "/assets/gallery/real/photo_15_2026-03-03_12-40-16.jpg",
        alt: "Douche italienne avec carrelage beige",
        title: "Douche à l'Italienne",
        location: "Île-de-France",
        category: "Salle de bain",
        span: "md:col-span-1"
      },
      {
        src: "/assets/gallery/real/photo_40_2026-03-03_12-40-16.jpg",
        alt: "Salle de bain complète rénovée",
        title: "Rénovation Complète SDB",
        location: "Île-de-France",
        category: "Salle de bain",
        span: "md:col-span-1"
      },
      {
        src: "/assets/gallery/real/photo_10_2026-03-03_12-40-16.jpg",
        alt: "Plan de travail cuisine avec îlot bois",
        title: "Cuisine avec Îlot",
        location: "Île-de-France",
        category: "Cuisine",
        span: "md:col-span-2"
      },
      {
        src: "/assets/gallery/real/photo_50_2026-03-03_12-40-16.jpg",
        alt: "Cuisine minimaliste avec parquet",
        title: "Cuisine Minimaliste",
        location: "Île-de-France",
        category: "Cuisine",
        span: "md:col-span-2"
      },
      {
        src: "/assets/gallery/real/photo_30_2026-03-03_12-40-16.jpg",
        alt: "Chambre avec parquet et dressing miroir",
        title: "Chambre & Dressing",
        location: "Île-de-France",
        category: "Chambre & Salon",
        span: "md:col-span-2"
      },
      {
        src: "/assets/gallery/real/photo_25_2026-03-03_12-40-16.jpg",
        alt: "Espace mansardé lumineux avec velux",
        title: "Rénovation Mansarde",
        location: "Île-de-France",
        category: "Chambre & Salon",
        span: "md:col-span-2"
      },
      {
        src: "/assets/gallery/real/photo_3_2026-03-03_12-40-16.jpg",
        alt: "WC avec pose d'une installation sanitaire",
        title: "Sanitaire & WC",
        location: "Île-de-France",
        category: "Salle de bain",
        span: "md:col-span-2"
      },
      {
        src: "/assets/gallery/real/photo_60_2026-03-03_12-40-16.jpg",
        alt: "Pièce rénovée avec balcon et radiateur",
        title: "Salon Rénové",
        location: "Île-de-France",
        category: "Chambre & Salon",
        span: "md:col-span-2"
      },
      {
        src: "/assets/gallery/real/photo_35_2026-03-03_12-40-16.jpg",
        alt: "Détail finition salle de bain haut de gamme",
        title: "Finitions Premium",
        location: "Île-de-France",
        category: "Salle de bain",
        span: "md:col-span-2"
      },
      {
        src: "/assets/gallery/real/photo_45_2026-03-03_12-40-16.jpg",
        alt: "Rénovation chambre avec parquet massif",
        title: "Parquet & Boiserie",
        location: "Île-de-France",
        category: "Chambre & Salon",
        span: "md:col-span-2"
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
        name: "Inès Ferreira",
        location: "Paris 16e",
        text: "Un travail remarquable. D.A. BAT a transformé notre appartement avec un professionnalisme exemplaire.",
        role: "Rénovation complète",
        avatar: "/assets/testimonials/avatar-ines.jpg"
      },
      {
        id: 2,
        name: "Rémi Blanchard",
        location: "Neuilly-sur-Seine",
        text: "Professionnalisme exemplaire du début à la fin. Le devis était précis, les délais respectés et la qualité de la peinture est exceptionnelle. Je recommande vivement.",
        role: "Peinture & Décoration",
        avatar: "/assets/testimonials/avatar-remi.jpg"
      },
      {
        id: 3,
        name: "Thibault Morel",
        location: "Paris 7e",
        text: "Notre parquet a retrouvé toute sa splendeur grâce à D.A. BAT. Un savoir-faire artisanal de qualité.",
        role: "Parquets & Sols",
        avatar: "/assets/testimonials/avatar-thibault.jpg"
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
      address: "Paris et Île-de-France",
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
    description: "D.A. BAT - Entreprise générale de bâtiment, tous corps d'état. Rénovation d'appartements anciens et haussmanniens : peinture, plomberie, électricité, maçonnerie, boiserie, parquet et carrelage. Qualité, soin et exigence absolue.",
    navigation: "Navigation",
    services: "Savoir-faire",
    legal: "Mentions Légales",
    privacy: "Politique de Confidentialité",
    rights: "Tous droits réservés.",
    designedBy: "Travaux Soignés, Clients Satisfaits",
    legalBody: "D.A. BAT - Alexei TCHOUDINOV\nSiège social : 12 Avenue des Champs-Élysées, 75008 Paris\nDirecteur de la publication : Alexei TCHOUDINOV\nContact : tchoudinov@hotmail.fr",
    privacyBody: "Nous respectons votre vie privée. Les informations recueillies sur ce formulaire sont enregistrées dans un fichier informatisé par D.A. BAT pour la gestion de notre clientèle.\n\nElles sont conservées pendant 3 ans et sont destinées au service commercial.\n\nConformément à la loi « informatique et libertés », vous pouvez exercer votre droit d'accès aux données vous concernant et les faire rectifier en contactant : tchoudinov@hotmail.fr"
  },
  social: {
    instagram: "https://www.instagram.com/tchou_dnov/"
  }
};
function useActiveSection(sectionIds, threshold = 0.5) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || "");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -35% 0px",
        // Adjust for better UX
        threshold
      }
    );
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });
    return () => {
      observer.disconnect();
    };
  }, [sectionIds, threshold]);
  return activeSection;
}
function Logo({
  iconSize = 48,
  nameClassName = "font-serif text-2xl lg:text-3xl font-extrabold tracking-widest leading-none",
  taglineClassName = "text-[9px] uppercase tracking-[0.3em] text-gold-500 font-bold mt-2",
  variant = "auto"
}) {
  const textColorClass = variant === "light" ? "text-white" : variant === "dark" ? "text-slate-900 dark:text-white" : "text-slate-900 dark:text-white";
  return /* @__PURE__ */ jsxs("div", { className: "relative flex items-center gap-4", children: [
    /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center group-hover:scale-110 transition-transform duration-700", children: /* @__PURE__ */ jsxs(
      "svg",
      {
        width: iconSize,
        height: iconSize,
        viewBox: "0 0 40 40",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: "text-gold-500 filter drop-shadow-sm",
        role: "img",
        "aria-label": "D.A. BAT — Logo balcon Haussmannien",
        children: [
          /* @__PURE__ */ jsx("title", { children: "D.A. BAT" }),
          /* @__PURE__ */ jsx("path", { d: "M5 25H35V30H5V25Z", fill: "currentColor", fillOpacity: "0.1" }),
          /* @__PURE__ */ jsx("path", { d: "M8 12V25M14 12V25M20 12V25M26 12V25M32 12V25", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round" }),
          /* @__PURE__ */ jsx("path", { d: "M5 12H35", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round" }),
          /* @__PURE__ */ jsx("path", { d: "M5 25H35", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round" }),
          /* @__PURE__ */ jsx("path", { d: "M5 30H35", stroke: "currentColor", strokeWidth: "1", strokeLinecap: "round", className: "opacity-40" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col border-l border-gold-500/30 pl-4 py-1", children: [
      /* @__PURE__ */ jsx("span", { className: `${nameClassName} ${textColorClass}`, children: "D.A. BAT" }),
      /* @__PURE__ */ jsx("span", { className: taglineClassName, children: "Votre Projet, Notre Savoir-Faire" })
    ] })
  ] });
}
function Navbar() {
  const { nav, common } = content;
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const activeSection = useActiveSection(["hero", "services", "why-us", "process", "gallery", "testimonials", "contact"]);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      if (currentScrollY > lastScrollY.current && currentScrollY > 100 && !isOpen) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsVisible(true);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
  const navLinks = [
    { label: nav.services, href: "#services", id: "services" },
    { label: nav.whyUs, href: "#why-us", id: "why-us" },
    { label: nav.gallery, href: "#gallery", id: "gallery" },
    { label: common.clientReviews, href: "#testimonials", id: "testimonials" },
    { label: nav.process, href: "#process", id: "process" }
  ];
  const mobileNavLinks = [
    { label: nav.home, href: "#hero" },
    ...navLinks.map((link) => ({ label: link.label, href: link.href })),
    { label: nav.contact, href: "#contact" }
  ];
  return /* @__PURE__ */ jsxs(
    "nav",
    {
      className: `fixed w-full z-50 transition-all duration-500 transform ${isVisible ? "translate-y-0" : "-translate-y-full"} ${isScrolled ? "bg-white/70 dark:bg-bg-primary/80 backdrop-blur-xl shadow-2xl border-b border-white/20 dark:border-neutral-800/50 py-4 lg:py-6" : "bg-transparent py-5 lg:py-8"}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 flex justify-between items-center", children: [
          /* @__PURE__ */ jsx("a", { href: "#hero", className: "flex items-center gap-3 group", onClick: (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }, children: /* @__PURE__ */ jsx(
            Logo,
            {
              iconSize: 40,
              nameClassName: `font-serif text-xl sm:text-2xl lg:text-4xl font-extrabold tracking-[0.2em] leading-none`,
              taglineClassName: "hidden sm:block text-[9px] lg:text-[11px] uppercase tracking-[0.2em] text-gold-500 font-bold mt-1.5 whitespace-nowrap",
              variant: isScrolled ? "dark" : "light"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "hidden lg:flex items-center gap-1", children: [
            navLinks.map((link) => /* @__PURE__ */ jsxs(
              "a",
              {
                href: link.href,
                className: `relative px-4 py-2 text-sm font-medium tracking-wide transition-colors uppercase ${isScrolled ? activeSection === link.id ? "text-gold-600 dark:text-gold-500" : "text-slate-700 dark:text-slate-300 hover:text-gold-600 dark:hover:text-gold-400" : activeSection === link.id ? "text-gold-300" : "text-white hover:text-gold-200"}`,
                "aria-current": activeSection === link.id ? "page" : void 0,
                children: [
                  link.label,
                  activeSection === link.id && /* @__PURE__ */ jsx("span", { className: `absolute -bottom-1 left-0 right-0 h-0.5 ${isScrolled ? "bg-gold-600 dark:bg-gold-400" : "bg-white"}` })
                ]
              },
              link.href
            )),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: toggleTheme,
                className: `p-2.5 rounded-full transition-all focus-ring ${isScrolled ? "bg-slate-100 dark:bg-neutral-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-neutral-700" : "bg-white/10 backdrop-blur-sm text-white hover:bg-white/20"}`,
                "aria-label": theme === "dark" ? "Passer au thème clair" : "Passer au thème sombre",
                "aria-pressed": theme === "dark",
                children: theme === "dark" ? /* @__PURE__ */ jsx(Sun, { size: 18 }) : /* @__PURE__ */ jsx(Moon, { size: 18 })
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "#contact",
                className: `px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus-ring ${isScrolled ? "bg-slate-900 dark:bg-gold-500 text-white dark:text-slate-900 hover:bg-gold-600 dark:hover:bg-gold-400" : "bg-white text-slate-900 hover:bg-slate-100"}`,
                children: "Contact"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "lg:hidden flex items-center gap-4", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: toggleTheme,
                className: `p-2 rounded-full transition-colors focus-ring ${isScrolled ? "bg-slate-100 dark:bg-neutral-800 text-slate-900 dark:text-white" : "bg-white/10 backdrop-blur-sm text-white"}`,
                "aria-label": theme === "dark" ? "Passer au thème clair" : "Passer au thème sombre",
                "aria-pressed": theme === "dark",
                children: theme === "dark" ? /* @__PURE__ */ jsx(Sun, { size: 20 }) : /* @__PURE__ */ jsx(Moon, { size: 20 })
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setIsOpen(!isOpen),
                className: `p-2 transition-colors focus-ring ${isScrolled ? "text-slate-900 dark:text-white" : "text-white"}`,
                "aria-label": isOpen ? common.closeMenu : common.openMenu,
                "aria-expanded": isOpen,
                "aria-controls": "mobile-menu",
                children: isOpen ? /* @__PURE__ */ jsx(X, { size: 24, className: "text-slate-900 dark:text-white" }) : /* @__PURE__ */ jsx(Menu, { size: 24 })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxs(
          motion.div,
          {
            id: "mobile-menu",
            initial: { opacity: 0, x: "100%" },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: "100%" },
            transition: { type: "spring", damping: 25, stiffness: 200 },
            className: "fixed inset-0 z-50 bg-white/98 dark:bg-bg-primary/98 backdrop-blur-2xl lg:hidden",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": "Menu principal",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-neutral-800 bg-white dark:bg-bg-primary", children: [
                /* @__PURE__ */ jsx("span", { className: "font-serif text-lg font-bold text-slate-900 dark:text-white", children: "D.A. BAT" }),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => setIsOpen(false),
                    className: "p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus-ring",
                    "aria-label": common.closeMenu,
                    children: /* @__PURE__ */ jsx(X, { size: 24, className: "text-slate-900 dark:text-white" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "pt-20 px-6 flex flex-col gap-4 overflow-y-auto h-full pb-32", children: [
                mobileNavLinks.map((link, i) => /* @__PURE__ */ jsx(
                  motion.a,
                  {
                    href: link.href,
                    onClick: () => setIsOpen(false),
                    initial: { opacity: 0, x: 20 },
                    animate: { opacity: 1, x: 0 },
                    transition: { delay: 0.05 * i },
                    className: "text-lg font-medium text-slate-800 dark:text-white py-3 border-b border-slate-100 dark:border-slate-700 hover:text-gold-600 dark:hover:text-gold-400 transition-colors focus-ring",
                    children: link.label
                  },
                  link.label
                )),
                /* @__PURE__ */ jsx(
                  motion.a,
                  {
                    href: "#contact",
                    onClick: () => setIsOpen(false),
                    initial: { opacity: 0, y: 10 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.3 },
                    className: "mt-4 w-full text-center bg-gold-500 text-white dark:text-slate-900 py-4 rounded-full font-semibold text-lg hover:bg-gold-400 transition-colors focus-ring",
                    children: nav.getQuote
                  }
                )
              ] })
            ]
          }
        ) })
      ]
    }
  );
}
function optimizeUnsplashUrl(url, options = {}) {
  const {
    width = 800,
    height,
    quality = 80,
    format = "webp",
    crop = "center"
  } = options;
  if (!url.includes("unsplash.com")) {
    return url;
  }
  const match = url.match(/photo-([a-zA-Z0-9_-]+)/);
  if (!match) return url;
  const params = new URLSearchParams({
    w: width.toString(),
    q: quality.toString(),
    fm: format,
    fit: "max"
  });
  if (height) {
    params.set("h", height.toString());
  }
  const baseUrl = url.split("?")[0];
  return `${baseUrl}?${params.toString()}`;
}
function getSrcSet(baseParams, sizes = [400, 800, 1200, 1600]) {
  return sizes.map((size) => `${baseParams}&w=${size} ${size}w`).join(", ");
}
const SkeletonImage = ({
  src,
  alt,
  className = "",
  containerClassName = "",
  width = 800,
  height,
  quality = 80,
  priority = false,
  optimize = true,
  sizes
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const optimizedSrc = optimize ? optimizeUnsplashUrl(src, { width, height, quality }) : src;
  const srcSet = optimize && src.includes("unsplash.com") ? getSrcSet(optimizedSrc.split("?")[1] || "") : void 0;
  return /* @__PURE__ */ jsxs("div", { className: `relative overflow-hidden bg-gray-200 dark:bg-slate-800 ${containerClassName}`, children: [
    !isLoaded && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 z-10", children: /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 animate-shimmer",
        style: { backgroundSize: "1000px 100%", animationDuration: "2s", animationIterationCount: "infinite" }
      }
    ) }),
    /* @__PURE__ */ jsx(
      "img",
      {
        src: optimizedSrc,
        srcSet,
        sizes: sizes || (width <= 400 ? "(max-width: 640px) 100vw, 400px" : "(max-width: 1024px) 50vw, 33vw"),
        alt,
        width,
        height,
        onLoad: () => setIsLoaded(true),
        loading: priority ? "eager" : "lazy",
        fetchPriority: priority ? "high" : "auto",
        decoding: "async",
        className: `${className} transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`
      }
    )
  ] });
};
function Hero() {
  const { hero, common } = content;
  const sectionRef = useRef(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  useEffect(() => {
    setPrefersReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  const bgScale = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [1, 1] : [1, 1.15]);
  const bgY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, 150]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.4], prefersReducedMotion ? [0, 0] : [0, -80]);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const statIcons = [
    /* @__PURE__ */ jsx(Award, { className: "w-5 h-5" }, "award"),
    /* @__PURE__ */ jsx(Users, { className: "w-5 h-5" }, "users"),
    /* @__PURE__ */ jsx(ShieldCheck, { className: "w-5 h-5" }, "shield"),
    /* @__PURE__ */ jsx(Clock, { className: "w-5 h-5" }, "clock")
  ];
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "hero",
      ref: sectionRef,
      className: "relative min-h-screen flex items-center justify-center overflow-hidden",
      children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "absolute inset-0 will-change-transform",
            style: { scale: bgScale, y: bgY },
            children: /* @__PURE__ */ jsx(
              SkeletonImage,
              {
                src: "/images/hero-bg-apartment.webp",
                alt: "Appartement parisien rénové - D.A. BAT",
                containerClassName: "w-full h-full",
                className: "w-full h-full object-cover",
                priority: true,
                optimize: false
              }
            )
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/65" }),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            style: { opacity: contentOpacity, y: contentY },
            className: "relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pt-24 sm:pt-20 pb-32 sm:pb-24 text-center",
            children: [
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: isInView ? { opacity: 1, y: 0 } : {},
                  transition: { duration: 0.8, delay: 0.2 },
                  className: "mb-6",
                  children: /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2.5 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-gold-400/40 bg-black/20 backdrop-blur-sm", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-gold-500 animate-pulse" }),
                    /* @__PURE__ */ jsx("span", { className: "text-gold-400 text-[11px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase", children: common.expertBadge })
                  ] })
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.h1,
                {
                  initial: { opacity: 0, y: 30 },
                  animate: isInView ? { opacity: 1, y: 0 } : {},
                  transition: { duration: 1, delay: 0.4 },
                  className: "font-serif text-[clamp(2rem,5.5vw,4rem)] font-bold leading-[1.05] mb-5 tracking-tight text-white [text-shadow:_0_2px_20px_rgba(0,0,0,0.85),_0_4px_40px_rgba(0,0,0,0.5)]",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "block text-[0.6em] font-sans font-light tracking-[0.15em] uppercase text-white/80 mb-3 [text-shadow:_0_2px_16px_rgba(0,0,0,0.9)]", children: "Entreprise de Rénovation à Paris" }),
                    "Rénovation Générale",
                    " ",
                    /* @__PURE__ */ jsx("span", { className: "italic text-gold-400 drop-shadow-[0_0_30px_rgba(212,175,55,0.3)]", children: "d'Appartements." }),
                    /* @__PURE__ */ jsx("span", { className: "sr-only", children: " — Peinture, Plomberie, Électricité, Parquets en Île-de-France. Devis gratuit." })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.p,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: isInView ? { opacity: 1, y: 0 } : {},
                  transition: { duration: 0.8, delay: 0.6 },
                  className: "text-base md:text-lg text-white mb-6 md:mb-8 leading-relaxed max-w-xl mx-auto font-light text-balance px-2 [text-shadow:_0_1px_12px_rgba(0,0,0,0.7)]",
                  children: [
                    hero.subtitle.split("exigence absolue")[0],
                    /* @__PURE__ */ jsx("span", { className: "text-gold-400 font-medium", children: "exigence absolue" }),
                    "."
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: isInView ? { opacity: 1, y: 0 } : {},
                  transition: { duration: 0.8, delay: 0.8 },
                  className: "flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6",
                  children: [
                    /* @__PURE__ */ jsxs(
                      "a",
                      {
                        href: "#contact",
                        "aria-label": "Contacter pour un devis gratuit",
                        className: "group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]",
                        children: [
                          /* @__PURE__ */ jsx("span", { className: "absolute inset-0 bg-gradient-to-r from-gold-500 to-gold-600 transition-all duration-300 group-hover:from-gold-600 group-hover:to-gold-500" }),
                          /* @__PURE__ */ jsx("span", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" }),
                          /* @__PURE__ */ jsx("span", { className: "relative text-white", children: hero.ctaPrimary }),
                          /* @__PURE__ */ jsx(ChevronRight, { className: "relative w-5 h-5 text-white transition-transform group-hover:translate-x-1" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "a",
                      {
                        href: "#gallery",
                        "aria-label": "Voir nos réalisations",
                        className: "inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 border border-white/20 text-white rounded-full font-medium text-sm hover:bg-white/10 transition-all active:bg-white/15",
                        children: hero.ctaSecondary
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            animate: isInView ? { opacity: 1, y: 0 } : {},
            transition: { duration: 0.8, delay: 1 },
            className: "absolute bottom-6 left-1/2 -translate-x-1/2 z-20 w-full max-w-3xl px-4",
            children: /* @__PURE__ */ jsx("div", { className: "bg-white/8 backdrop-blur-lg border border-white/10 rounded-xl grid grid-cols-2 md:grid-cols-4 overflow-hidden", children: hero.stats.map((stat, i) => {
              const isNumeric = /^[0-9+]+$/.test(stat.value);
              const showBorderMobile = i % 2 === 0;
              const showBorderDesktop = i !== hero.stats.length - 1;
              return /* @__PURE__ */ jsxs(
                "div",
                {
                  className: `px-1.5 py-2 sm:px-3 sm:py-3 text-center flex flex-col items-center justify-center ${showBorderMobile ? "border-r border-white/10" : ""} ${showBorderDesktop ? "md:border-r md:border-white/10" : "md:border-r-0"}`,
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "text-gold-400/60 mb-1 sm:mb-1.5 [&>svg]:w-3 [&>svg]:h-3 sm:[&>svg]:w-3.5 sm:[&>svg]:h-3.5", children: statIcons[i] }),
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: `${isNumeric ? "text-base sm:text-xl font-serif font-semibold" : "text-[13px] sm:text-base font-sans font-medium"} text-white leading-none mb-1 sm:mb-1.5`,
                        children: stat.value
                      }
                    ),
                    /* @__PURE__ */ jsx("div", { className: "text-[9px] sm:text-xs text-white/50 font-medium tracking-wider uppercase leading-tight md:truncate max-w-full", children: stat.label })
                  ]
                },
                i
              );
            }) })
          }
        )
      ]
    }
  );
}
function Services() {
  const { services } = content;
  return /* @__PURE__ */ jsx("section", { id: "services", className: "py-24 md:py-32 bg-white dark:bg-bg-primary", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.6 },
        className: "text-center mb-16 pt-12",
        children: [
          /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 dark:bg-gold-500/20 mb-6", children: /* @__PURE__ */ jsx("span", { className: "text-gold-600 dark:text-gold-400 text-xs font-semibold tracking-[0.2em] uppercase", children: "SERVICES" }) }),
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4", children: services.title }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto", children: services.subtitle })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-8", children: services.items.map((service, index) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.5, delay: index * 0.15 },
        whileHover: {
          y: -8,
          transition: { duration: 0.3, ease: "easeOut" }
        },
        className: "group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-gold-500/30 transition-all duration-500 cursor-pointer",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "aspect-[4/5] relative overflow-hidden", children: [
            /* @__PURE__ */ jsx(
              SkeletonImage,
              {
                src: service.image,
                alt: service.alt,
                containerClassName: "w-full h-full",
                className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
                width: 600,
                height: 750,
                quality: 85,
                priority: index < 2,
                sizes: "(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" }),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                style: {
                  backgroundSize: "200% 100%",
                  animation: "shine 1.5s infinite"
                }
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "absolute bottom-0 left-0 right-0 py-3 px-4 text-white backdrop-blur-sm bg-gradient-to-t from-black/80 via-black/20 to-transparent border-t border-white/10 flex flex-col justify-end text-center transition-all duration-500 group-hover:bg-black/60 group-hover:backdrop-blur-md", children: [
            /* @__PURE__ */ jsx("div", { className: "min-h-[3.5rem] flex items-center justify-center", children: /* @__PURE__ */ jsx("h3", { className: "font-serif text-xl font-bold group-hover:text-gold-300 transition-colors leading-tight drop-shadow-lg", children: service.title }) }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-rows-[1fr] md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out", children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-200 leading-relaxed pt-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100", children: service.description }) }) })
          ] })
        ]
      },
      service.id
    )) })
  ] }) });
}
function WhyUs() {
  const { whyUs } = content;
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: true });
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = 15;
      const duration = 2e3;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView]);
  return /* @__PURE__ */ jsx("section", { id: "why-us", className: "py-24 md:py-32 bg-gray-50 dark:bg-bg-secondary relative overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-16 items-center", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: -30 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        className: "order-2 lg:order-1",
        children: [
          /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/5 mb-8", children: /* @__PURE__ */ jsx("span", { className: "text-gold-600 text-xs font-semibold tracking-[0.2em] uppercase", children: whyUs.badge }) }),
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-8 leading-tight", children: whyUs.title }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-600 dark:text-slate-300 text-lg mb-12 leading-relaxed", children: whyUs.subtitle }),
          /* @__PURE__ */ jsx("div", { className: "space-y-8", children: whyUs.features.map((feature, index) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 0.5, delay: index * 0.1 },
              className: "group",
              children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-6 pb-8 border-b border-slate-200 dark:border-slate-700 group-last:border-0 relative", children: [
                /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-0 h-[1px] bg-gold-500 transition-all duration-700 group-hover:w-full" }),
                /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-12 h-12 rounded-full border border-slate-200 dark:border-neutral-700 bg-white dark:bg-bg-primary flex items-center justify-center text-gold-500 group-hover:border-gold-500 group-hover:text-gold-600 transition-colors duration-300", children: /* @__PURE__ */ jsx(Check, { className: "w-5 h-5" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h3", { className: "font-serif text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-gold-600 transition-colors", children: feature.title }),
                  /* @__PURE__ */ jsx("p", { className: "text-slate-500 dark:text-slate-400 text-sm leading-relaxed", children: feature.description })
                ] })
              ] })
            },
            index
          )) })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: 30 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        className: "order-1 lg:order-2 relative",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "relative aspect-[4/5] overflow-hidden rounded-sm", children: [
            /* @__PURE__ */ jsx(
              SkeletonImage,
              {
                src: whyUs.image,
                alt: "Détail architectural",
                containerClassName: "w-full h-full",
                className: "w-full h-full object-cover hover:scale-105 transition-transform duration-1000",
                width: 800,
                height: 1e3,
                quality: 85
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-60" })
          ] }),
          /* @__PURE__ */ jsx("div", { ref: counterRef, className: "absolute -bottom-8 -left-8 w-48 h-48 bg-white dark:bg-bg-primary p-4 hidden md:block", children: /* @__PURE__ */ jsx("div", { className: "w-full h-full border border-gold-500/30 flex items-center justify-center p-6 text-center", children: /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("span", { className: "block text-3xl font-serif font-bold text-gold-600 mb-1", children: [
              count,
              "+"
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400", children: "Années d'Expérience" })
          ] }) }) })
        ]
      }
    )
  ] }) }) });
}
function Process() {
  const { process } = content;
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const icons = [ClipboardList, FileText, Hammer, Key];
  return /* @__PURE__ */ jsx("section", { id: "process", className: "py-24 md:py-32 bg-gray-50 dark:bg-bg-secondary relative overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 relative z-10", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        className: "text-center mb-20",
        children: [
          /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-400/30 bg-gold-500/5 mb-6", children: /* @__PURE__ */ jsx("span", { className: "text-gold-400 text-xs font-semibold tracking-[0.2em] uppercase", children: process.badge }) }),
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6", children: process.title }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed", children: process.subtitle })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-4 gap-8", children: process.steps.map((step, index) => {
      const Icon = icons[index];
      return /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: index * 0.1 },
          className: "relative group",
          children: [
            index < process.steps.length - 1 && /* @__PURE__ */ jsx("div", { className: "hidden md:block absolute top-[2.5rem] left-1/2 w-full h-[1px] bg-gradient-to-r from-gold-500/20 via-gold-500/60 to-gold-500/20 -z-10 transform translate-x-1/2" }),
            /* @__PURE__ */ jsxs("div", { className: "relative bg-white dark:bg-bg-primary border border-slate-200 dark:border-gold-500/20 rounded-xl p-8 hover:border-gold-400 dark:hover:border-gold-500/50 transition-colors duration-500 h-full flex flex-col items-center text-center shadow-sm dark:shadow-none", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute top-4 right-4 text-xs font-mono text-gold-600/50 dark:text-gold-500/40 border border-gold-500/20 px-2 py-1 rounded", children: step.number }),
              /* @__PURE__ */ jsx("div", { className: "w-20 h-20 rounded-full bg-slate-100 dark:bg-neutral-800 border border-slate-200 dark:border-gold-500/30 flex items-center justify-center text-gold-600 dark:text-gold-400 mb-6 group-hover:scale-105 group-hover:bg-slate-50 dark:group-hover:bg-neutral-700 transition-all duration-300 shadow-[0_0_15px_-3px_rgba(212,175,55,0.1)]", children: /* @__PURE__ */ jsx(Icon, { className: "w-8 h-8" }) }),
              /* @__PURE__ */ jsx("h3", { className: "font-serif text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-gold-700 dark:group-hover:text-gold-200 transition-colors", children: step.title }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-600 dark:text-slate-200 leading-relaxed opacity-90", children: step.description })
            ] })
          ]
        },
        step.number
      );
    }) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-24 max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          className: "text-center mb-12",
          children: [
            /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4", children: "Questions Fréquentes" }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-500 dark:text-slate-400", children: "Tout ce que vous devez savoir sur notre processus" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "space-y-4", children: process.faq.map((item, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: index * 0.1 },
          className: "bg-white dark:bg-bg-primary/60 border border-slate-200 dark:border-neutral-800 rounded-xl overflow-hidden shadow-sm dark:shadow-none",
          children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                id: `faq-button-${index}`,
                "aria-controls": `faq-content-${index}`,
                onClick: () => setOpenFaqIndex(openFaqIndex === index ? null : index),
                className: "w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-neutral-800/60 transition-colors focus-ring",
                "aria-expanded": openFaqIndex === index,
                children: [
                  /* @__PURE__ */ jsx("span", { className: "font-semibold text-slate-900 dark:text-white pr-8", children: item.question }),
                  /* @__PURE__ */ jsx(
                    ChevronDown,
                    {
                      className: `w-5 h-5 text-gold-400 flex-shrink-0 transition-transform duration-300 ${openFaqIndex === index ? "rotate-180" : ""}`
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                id: `faq-content-${index}`,
                role: "region",
                "aria-labelledby": `faq-button-${index}`,
                className: `overflow-hidden transition-all duration-300 ${openFaqIndex === index ? "max-h-48" : "max-h-0"}`,
                children: /* @__PURE__ */ jsx("p", { className: "px-6 pb-5 text-slate-600 dark:text-slate-400 leading-relaxed", children: item.answer })
              }
            )
          ]
        },
        index
      )) })
    ] }),
    /* @__PURE__ */ jsx(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": process.faq.map((item) => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })
        }
      }
    )
  ] }) });
}
function CTABanner() {
  const { ctaBanner } = content;
  return /* @__PURE__ */ jsxs("section", { className: "py-24 md:py-32 bg-[#0e0e0e] relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 pointer-events-none", children: /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-3xl" }) }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          children: [
            /* @__PURE__ */ jsxs("h2", { className: "font-serif text-3xl md:text-5xl font-bold text-white mb-6", children: [
              ctaBanner.title,
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-gold-400", children: ctaBanner.titleHighlight })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-300 mb-10 max-w-2xl mx-auto", children: ctaBanner.subtitle })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "#contact",
            className: "group inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-slate-900 rounded-full font-semibold text-base hover:bg-gold-400 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5",
            children: [
              ctaBanner.ctaPrimary,
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: `tel:${ctaBanner.ctaSecondary.replace(/\s/g, "")}`,
            "aria-label": `Appeler le ${ctaBanner.ctaSecondary}`,
            className: "inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white rounded-full font-medium text-base hover:bg-white/10 transition-all",
            children: [
              /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4" }),
              ctaBanner.ctaSecondary
            ]
          }
        )
      ] })
    ] })
  ] });
}
function Footer() {
  var _a;
  const { footer, nav, contact } = content;
  const [modalContent, setModalContent] = useState(null);
  const dialogRef = useRef(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (modalContent) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.close();
      document.body.style.overflow = "unset";
    }
  }, [modalContent]);
  const handleClose = () => {
    setModalContent(null);
  };
  const navLinks = [
    { label: nav.services, href: "#services" },
    { label: nav.gallery, href: "#gallery" },
    { label: nav.process, href: "#process" },
    { label: nav.whyUs, href: "#why-us" },
    { label: nav.contact, href: "#contact" }
  ];
  const savoirFaire = [
    "Peinture & Décoration",
    "Plâtrerie & Cloisons",
    "Parquets & Sols"
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("footer", { className: "bg-slate-100 dark:bg-bg-primary text-slate-900 dark:text-white pt-16 pb-8 border-t border-gold-500/20", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-4 gap-12 pb-12 border-b border-slate-200 dark:border-slate-800", children: [
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-1", children: [
          /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2 mb-4", children: /* @__PURE__ */ jsx(
            Logo,
            {
              iconSize: 48,
              nameClassName: "font-serif text-2xl lg:text-3xl font-extrabold tracking-widest leading-none",
              taglineClassName: "text-[9px] uppercase tracking-[0.3em] text-gold-500 font-bold mt-2",
              variant: "dark"
            }
          ) }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6", children: footer.description }),
          /* @__PURE__ */ jsx("div", { className: "flex gap-3", children: /* @__PURE__ */ jsx(
            motion.a,
            {
              href: (_a = content.social) == null ? void 0 : _a.instagram,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "w-9 h-9 rounded-full bg-slate-200 dark:bg-neutral-800 flex items-center justify-center hover:bg-gold-500/20 transition-colors",
              "aria-label": "Suivez-nous sur Instagram",
              whileHover: { scale: 1.1 },
              whileTap: { scale: 0.95 },
              children: /* @__PURE__ */ jsx(Instagram, { className: "w-4 h-4 text-slate-500 dark:text-slate-400 hover:text-gold-400" })
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold uppercase tracking-wider mb-4", children: footer.navigation }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: navLinks.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: link.href, className: "text-sm text-slate-500 dark:text-slate-400 hover:text-gold-500 dark:hover:text-gold-400 transition-colors", children: link.label }) }, link.href)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold uppercase tracking-wider mb-4", children: footer.services }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
            savoirFaire.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-500 dark:text-slate-400", children: item }) }, item)),
            /* @__PURE__ */ jsx("li", { className: "pt-2", children: /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setModalContent({ title: footer.legal, body: footer.legalBody }),
                className: "text-sm text-slate-500 dark:text-slate-400 hover:text-gold-500 dark:hover:text-gold-400 transition-colors",
                children: footer.legal
              }
            ) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setModalContent({ title: footer.privacy, body: footer.privacyBody }),
                className: "text-sm text-slate-500 dark:text-slate-400 hover:text-gold-500 dark:hover:text-gold-400 transition-colors",
                children: footer.privacy
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold uppercase tracking-wider mb-4", children: "Contact" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4 text-gold-400" }),
              /* @__PURE__ */ jsx("a", { href: `tel:${contact.info.phone.replace(/\s/g, "")}`, className: "text-sm text-slate-500 dark:text-slate-400 hover:text-gold-500 dark:hover:text-gold-400 transition-colors", children: contact.info.phone })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4 text-gold-400" }),
              /* @__PURE__ */ jsx("a", { href: `mailto:${contact.info.email}`, className: "text-sm text-slate-500 dark:text-slate-400 hover:text-gold-500 dark:hover:text-gold-400 transition-colors", children: contact.info.email })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(MapPin, { className: "w-4 h-4 text-gold-400 mt-0.5" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-500 dark:text-slate-400", children: contact.info.address })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "pt-8 flex flex-col md:flex-row items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-xs text-slate-500", children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " D.A. BAT. ",
          footer.rights
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: footer.designedBy })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(
      "dialog",
      {
        ref: dialogRef,
        className: "bg-transparent p-4 w-full h-full max-w-none max-h-none backdrop:bg-black/60 z-50 open:flex items-center justify-center m-0 fixed inset-0",
        onClick: (e) => {
          if (e.target === dialogRef.current) {
            handleClose();
          }
        },
        onCancel: handleClose,
        children: modalContent && /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-bg-primary rounded-2xl max-w-lg w-full p-8 max-h-[80vh] overflow-y-auto border border-slate-200 dark:border-neutral-800 shadow-2xl relative", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-serif text-xl font-bold text-slate-900 dark:text-white", children: modalContent.title }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: handleClose,
                className: "w-8 h-8 rounded-full bg-slate-100 dark:bg-neutral-800 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-neutral-700 transition-colors",
                "aria-label": "Fermer",
                children: /* @__PURE__ */ jsx(X, { className: "w-4 h-4 text-slate-900 dark:text-white" })
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line", children: modalContent.body })
        ] })
      }
    )
  ] });
}
function WhatsAppButton() {
  const { common } = content;
  return /* @__PURE__ */ jsxs("div", { className: "fixed bottom-6 right-6 z-[60] flex flex-col gap-3 items-center", children: [
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "tel:+33601997659",
        className: "md:hidden w-14 h-14 bg-white text-slate-900 rounded-full flex items-center justify-center shadow-lg hover:bg-slate-50 transition-all active:scale-95 border border-slate-200",
        "aria-label": common.callAriaLabel,
        children: /* @__PURE__ */ jsx(Phone, { size: 22, className: "fill-slate-900" })
      }
    ),
    /* @__PURE__ */ jsxs(
      "a",
      {
        href: "https://wa.me/33601997659",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:bg-[#128C7E] transition-all hover:scale-110 active:scale-95 group",
        "aria-label": common.whatsappAriaLabel,
        children: [
          /* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 duration-1000" }),
          /* @__PURE__ */ jsx(MessageCircle, { size: 28, className: "fill-white text-white relative z-10" }),
          /* @__PURE__ */ jsxs("span", { className: "hidden md:block absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap top-1/2 -translate-y-1/2 border border-slate-100", children: [
            common.whatsappTooltip,
            /* @__PURE__ */ jsx("span", { className: "absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-white transform rotate-45 border-t border-r border-slate-100" })
          ] })
        ]
      }
    )
  ] });
}
function SkeletonLoader({ type }) {
  if (type === "gallery") {
    return /* @__PURE__ */ jsx("section", { className: "py-24 md:py-32 bg-white dark:bg-slate-900", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-200 dark:bg-slate-700 mb-6 w-32 h-6 animate-pulse" }),
        /* @__PURE__ */ jsx("div", { className: "h-10 bg-slate-200 dark:bg-slate-700 rounded-lg w-64 mx-auto mb-4 animate-pulse" }),
        /* @__PURE__ */ jsx("div", { className: "h-5 bg-slate-200 dark:bg-slate-700 rounded w-48 mx-auto animate-pulse" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]", children: [1, 2, 3, 4].map((i) => /* @__PURE__ */ jsx("div", { className: "bg-slate-200 dark:bg-slate-700 rounded-2xl animate-pulse" }, i)) })
    ] }) });
  }
  if (type === "testimonials") {
    return /* @__PURE__ */ jsx("section", { className: "py-24 md:py-32 bg-slate-50 dark:bg-slate-800", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-200 dark:bg-slate-700 mb-6 w-40 h-6 animate-pulse" }),
        /* @__PURE__ */ jsx("div", { className: "h-10 bg-slate-200 dark:bg-slate-700 rounded-lg w-72 mx-auto mb-4 animate-pulse" }),
        /* @__PURE__ */ jsx("div", { className: "h-5 bg-slate-200 dark:bg-slate-700 rounded w-56 mx-auto animate-pulse" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg animate-pulse", children: [
        /* @__PURE__ */ jsx("div", { className: "flex gap-1 mb-4", children: [1, 2, 3, 4, 5].map((s) => /* @__PURE__ */ jsx("div", { className: "w-4 h-4 bg-slate-200 dark:bg-slate-700 rounded-full" }, s)) }),
        /* @__PURE__ */ jsx("div", { className: "h-4 bg-slate-200 dark:bg-slate-700 rounded w-full mb-2 animate-pulse" }),
        /* @__PURE__ */ jsx("div", { className: "h-4 bg-slate-200 dark:bg-slate-700 rounded w-3/4 mb-4 animate-pulse" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-700", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-full" }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsx("div", { className: "h-4 bg-slate-200 dark:bg-slate-700 rounded w-24 mb-2 animate-pulse" }),
            /* @__PURE__ */ jsx("div", { className: "h-3 bg-slate-200 dark:bg-slate-700 rounded w-16 animate-pulse" })
          ] })
        ] })
      ] }, i)) })
    ] }) });
  }
  if (type === "contact") {
    return /* @__PURE__ */ jsx("section", { className: "py-24 md:py-32 bg-white dark:bg-slate-900", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-200 dark:bg-slate-700 mb-6 w-40 h-6 animate-pulse" }),
        /* @__PURE__ */ jsx("div", { className: "h-10 bg-slate-200 dark:bg-slate-700 rounded-lg w-64 mx-auto mb-4 animate-pulse" }),
        /* @__PURE__ */ jsx("div", { className: "h-5 bg-slate-200 dark:bg-slate-700 rounded w-52 mx-auto animate-pulse" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-5 gap-12", children: [
        /* @__PURE__ */ jsx("div", { className: "lg:col-span-2 space-y-6", children: [1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 p-5 rounded-xl bg-slate-50 dark:bg-slate-800 animate-pulse", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-xl" }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsx("div", { className: "h-4 bg-slate-200 dark:bg-slate-700 rounded w-20 mb-2" }),
            /* @__PURE__ */ jsx("div", { className: "h-4 bg-slate-200 dark:bg-slate-700 rounded w-32" })
          ] })
        ] }, i)) }),
        /* @__PURE__ */ jsx("div", { className: "lg:col-span-3", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 animate-pulse", children: [
          /* @__PURE__ */ jsx("div", { className: "h-8 bg-slate-200 dark:bg-slate-700 rounded w-48 mb-4" }),
          /* @__PURE__ */ jsx("div", { className: "h-4 bg-slate-200 dark:bg-slate-700 rounded w-32 mb-6" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsx("div", { className: "h-12 bg-slate-200 dark:bg-slate-700 rounded-xl" }),
            /* @__PURE__ */ jsx("div", { className: "h-12 bg-slate-200 dark:bg-slate-700 rounded-xl" }),
            /* @__PURE__ */ jsx("div", { className: "h-12 bg-slate-200 dark:bg-slate-700 rounded-xl" }),
            /* @__PURE__ */ jsx("div", { className: "h-24 bg-slate-200 dark:bg-slate-700 rounded-xl" }),
            /* @__PURE__ */ jsx("div", { className: "h-12 bg-slate-200 dark:bg-slate-700 rounded-xl" })
          ] })
        ] }) })
      ] })
    ] }) });
  }
  if (type === "beforeafter") {
    return /* @__PURE__ */ jsx("section", { className: "py-24 bg-white dark:bg-slate-900", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
        /* @__PURE__ */ jsx("div", { className: "h-5 bg-slate-200 dark:bg-slate-700 rounded w-32 mx-auto mb-3 animate-pulse" }),
        /* @__PURE__ */ jsx("div", { className: "h-10 bg-slate-200 dark:bg-slate-700 rounded-lg w-48 mx-auto mb-4 animate-pulse" }),
        /* @__PURE__ */ jsx("div", { className: "h-5 bg-slate-200 dark:bg-slate-700 rounded w-64 mx-auto animate-pulse" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative max-w-5xl mx-auto rounded-2xl overflow-hidden aspect-[16/9] bg-slate-200 dark:bg-slate-700 animate-pulse" })
    ] }) });
  }
  return null;
}
function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const scrollToTop = () => {
    const start = window.pageYOffset;
    const end = 0;
    const change = end - start;
    const duration = 800;
    const startTime = performance.now();
    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);
      window.scrollTo(0, start + change * easedProgress);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  };
  return /* @__PURE__ */ jsx(AnimatePresence, { children: isVisible && /* @__PURE__ */ jsx(
    motion.button,
    {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.8 },
      whileHover: { scale: 1.1 },
      whileTap: { scale: 0.9 },
      onClick: scrollToTop,
      className: "fixed bottom-6 left-6 md:left-auto md:right-6 md:bottom-[7.5rem] z-[60] w-12 h-12 md:w-14 md:h-14 bg-gold-500 text-slate-900 rounded-full shadow-lg hover:bg-gold-400 transition-colors flex items-center justify-center focus-ring",
      "aria-label": "Retour en haut",
      children: /* @__PURE__ */ jsx(ArrowUp, { size: 22, className: "stroke-[2.5]" })
    }
  ) });
}
class ErrorBoundary extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      hasError: false,
      error: null
    };
    this.handleRetry = () => {
      this.setState({ hasError: false, error: null });
      window.location.reload();
    };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return /* @__PURE__ */ jsxs("div", { className: "w-full min-h-[400px] flex flex-col items-center justify-center p-8 text-center bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800", children: [
        /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mb-6", children: /* @__PURE__ */ jsx(AlertTriangle, { className: "w-8 h-8 text-red-500" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-serif font-bold text-slate-900 dark:text-white mb-2", children: "Une erreur est survenue" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-600 dark:text-slate-400 max-w-md mb-8", children: "Nous n'avons pas pu charger cette section. Cela peut être dû à une connexion instable." }),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: this.handleRetry,
            className: "inline-flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-600 text-white rounded-full transition-colors font-medium text-sm",
            children: [
              /* @__PURE__ */ jsx(RefreshCw, { className: "w-4 h-4" }),
              "Recharger la page"
            ]
          }
        )
      ] });
    }
    return this.props.children;
  }
}
function OfflineIndicator() {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  return /* @__PURE__ */ jsx(AnimatePresence, { children: isOffline && /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { y: 100, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: 100, opacity: 0 },
      className: "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-slate-900 dark:bg-slate-800 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 border border-slate-700/50",
      children: [
        /* @__PURE__ */ jsx(WifiOff, { size: 18, className: "text-red-400" }),
        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Vous êtes hors ligne. Mode lecture seul activé." })
      ]
    }
  ) });
}
function registerSW(options = {}) {
  const {
    immediate = false,
    onNeedRefresh,
    onOfflineReady,
    onRegistered,
    onRegisteredSW,
    onRegisterError
  } = options;
  let wb;
  let registerPromise;
  const updateServiceWorker = async (_reloadPage = true) => {
    await registerPromise;
  };
  async function register() {
    if ("serviceWorker" in navigator) {
      wb = await import("./assets/workbox-window.prod.es5-rIX2nHU4.js").then(({ Workbox }) => {
        return new Workbox("/sw.js", { scope: "/", type: "classic" });
      }).catch((e) => {
        onRegisterError == null ? void 0 : onRegisterError(e);
        return void 0;
      });
      if (!wb)
        return;
      {
        {
          wb.addEventListener("activated", (event) => {
            if (event.isUpdate || event.isExternal)
              window.location.reload();
          });
          wb.addEventListener("installed", (event) => {
            if (!event.isUpdate) {
              onOfflineReady == null ? void 0 : onOfflineReady();
            }
          });
        }
      }
      wb.register({ immediate }).then((r) => {
        if (onRegisteredSW)
          onRegisteredSW("/sw.js", r);
        else
          onRegistered == null ? void 0 : onRegistered(r);
      }).catch((e) => {
        onRegisterError == null ? void 0 : onRegisterError(e);
      });
    }
  }
  registerPromise = register();
  return updateServiceWorker;
}
function useRegisterSW(options = {}) {
  const {
    immediate = true,
    onNeedRefresh,
    onOfflineReady,
    onRegistered,
    onRegisteredSW,
    onRegisterError
  } = options;
  const [needRefresh, setNeedRefresh] = useState(false);
  const [offlineReady, setOfflineReady] = useState(false);
  const [updateServiceWorker] = useState(() => {
    return registerSW({
      immediate,
      onOfflineReady() {
        setOfflineReady(true);
        onOfflineReady == null ? void 0 : onOfflineReady();
      },
      onNeedRefresh() {
        setNeedRefresh(true);
        onNeedRefresh == null ? void 0 : onNeedRefresh();
      },
      onRegistered,
      onRegisteredSW,
      onRegisterError
    });
  });
  return {
    needRefresh: [needRefresh, setNeedRefresh],
    offlineReady: [offlineReady, setOfflineReady],
    updateServiceWorker
  };
}
function PWAUpdateToast() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker
  } = useRegisterSW({
    onRegistered(r) {
      console.log("SW Registered: " + r);
    },
    onRegisterError(error) {
      console.log("SW registration error", error);
    }
  });
  const close = () => {
    setOfflineReady(false);
    setNeedRefresh(false);
  };
  return /* @__PURE__ */ jsx(AnimatePresence, { children: (offlineReady || needRefresh) && /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { y: -100, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: -100, opacity: 0 },
      className: "fixed top-20 right-4 z-[70] max-w-xs w-full bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 p-4 flex flex-col gap-3",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-slate-900 dark:text-white text-sm", children: offlineReady ? "Prêt pour le mode hors ligne" : "Mise à jour disponible" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500 dark:text-slate-400 mt-1", children: offlineReady ? "L'application est prête à être utilisée sans internet." : "Une nouvelle version est disponible. Mettez à jour pour voir les changements." })
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: close,
              className: "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200",
              children: /* @__PURE__ */ jsx(X, { size: 18 })
            }
          )
        ] }),
        needRefresh && /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => updateServiceWorker(true),
            className: "w-full bg-gold-500 hover:bg-gold-600 text-white text-sm font-bold py-2 rounded-lg flex items-center justify-center gap-2 transition-colors",
            children: [
              /* @__PURE__ */ jsx(RefreshCw, { size: 16 }),
              "Mettre à jour"
            ]
          }
        )
      ]
    }
  ) });
}
const BeforeAfter = React.lazy(() => import("./assets/BeforeAfter-DP5qJvaO.js"));
const Gallery = React.lazy(() => import("./assets/Gallery-uHU8H7Qb.js"));
const Testimonials = React.lazy(() => import("./assets/Testimonials-lzZS3TJ5.js"));
const Contact = React.lazy(() => import("./assets/Contact-COFi3rry.js"));
const App = () => {
  useSmoothScroll();
  return /* @__PURE__ */ jsx(ErrorBoundary, { children: /* @__PURE__ */ jsxs(ThemeProvider, { children: [
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "#main-content",
        className: "sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:top-4 focus-visible:left-4 bg-gold-500 text-slate-900 px-6 py-3 rounded-lg z-[100] focus-ring font-semibold",
        children: "Aller au contenu principal"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-bg-primary text-text-primary selection:bg-gold-200 selection:text-slate-900", children: [
      /* @__PURE__ */ jsx(Navbar, {}),
      /* @__PURE__ */ jsxs("main", { id: "main-content", children: [
        /* @__PURE__ */ jsx(Hero, {}),
        /* @__PURE__ */ jsx(Services, {}),
        /* @__PURE__ */ jsx(ErrorBoundary, { children: /* @__PURE__ */ jsx(React.Suspense, { fallback: /* @__PURE__ */ jsx(SkeletonLoader, { type: "beforeafter" }), children: /* @__PURE__ */ jsx(BeforeAfter, {}) }) }),
        /* @__PURE__ */ jsx(Process, {}),
        /* @__PURE__ */ jsx(WhyUs, {}),
        /* @__PURE__ */ jsx(ErrorBoundary, { children: /* @__PURE__ */ jsx(React.Suspense, { fallback: /* @__PURE__ */ jsx(SkeletonLoader, { type: "gallery" }), children: /* @__PURE__ */ jsx(Gallery, {}) }) }),
        /* @__PURE__ */ jsx(ErrorBoundary, { children: /* @__PURE__ */ jsx(React.Suspense, { fallback: /* @__PURE__ */ jsx(SkeletonLoader, { type: "testimonials" }), children: /* @__PURE__ */ jsx(Testimonials, {}) }) }),
        /* @__PURE__ */ jsx(ErrorBoundary, { children: /* @__PURE__ */ jsx(React.Suspense, { fallback: /* @__PURE__ */ jsx(SkeletonLoader, { type: "contact" }), children: /* @__PURE__ */ jsx(Contact, {}) }) }),
        /* @__PURE__ */ jsx(CTABanner, {})
      ] }),
      /* @__PURE__ */ jsx(Footer, {}),
      /* @__PURE__ */ jsx(WhatsAppButton, {}),
      /* @__PURE__ */ jsx(ScrollToTop, {}),
      /* @__PURE__ */ jsx(OfflineIndicator, {}),
      /* @__PURE__ */ jsx(PWAUpdateToast, {})
    ] })
  ] }) });
};
function render() {
  return ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(App, {}) })
  );
}
export {
  SkeletonImage as S,
  content as c,
  render
};
