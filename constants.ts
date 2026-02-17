import { ContentData, Language } from './types';
import { 
  Paintbrush, 
  Wrench, 
  Droplets, 
  Hammer, 
  Ruler, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Phone, 
  Mail,
  Home,
  Layers,
  Award
} from 'lucide-react';

export const CONTENT: Record<Language, ContentData> = {
  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      whyUs: "Expertise",
      process: "Processus",
      gallery: "Réalisations",
      contact: "Contact",
      getQuote: "Devis Gratuit",
    },
    hero: {
      title: "Rénovation d'Exception à Paris",
      subtitle: "Expert en travaux de rénovation générale et rénovation intérieur. Nous transformons votre espace avec l'excellence de l'artisanat français, du gros œuvre aux finitions.",
      ctaPrimary: "Demander un devis gratuit",
      ctaSecondary: "Voir nos réalisations",
      stats: [
        { label: "Années d'expérience", value: "15+" },
        { label: "Projets réalisés", value: "500+" },
        { label: "Garantie Décennale", value: "100%" },
      ],
    },
    trustBadges: {
      title: "Ils nous font confiance",
    },
    services: {
      title: "Nos Services",
      subtitle: "Une expertise complète : Peinture, plomberie, électricité, menuiserie et carrelage sol et murs.",
      items: [
        {
          id: 'painting',
          title: "Peinture & Menuiserie",
          description: "Application de peintures haut de gamme, menuiserie sur mesure et finitions décoratives soignées.",
          benefits: ["Finitions parfaites", "Peintures écologiques", "Menuiserie intégrée"],
          iconName: 'Paintbrush'
        },
        {
          id: 'plumbing',
          title: "Cuisines & Salles de bains",
          description: "Restauration des salles de bains et cuisines de A à Z. Plomberie, électricité et installation sanitaire.",
          benefits: ["Normes françaises", "Réseaux électriques", "Étanchéité garantie"],
          iconName: 'Droplets'
        },
        {
          id: 'flooring',
          title: "Sols & Carrelage",
          description: "Couverture de sols parquet (massif, Hongrie) et pose experte de carrelage sol et murs.",
          benefits: ["Restauration ancien", "Pose précise", "Pierre & Céramique"],
          iconName: 'Layers'
        },
        {
          id: 'renovation',
          title: "Rénovation Structurelle",
          description: "Création des cloisons, plafonds suspendus et plâtrerie. Restructuration complète de l'espace.",
          benefits: ["Isolation phonique", "Doublage murs", "Agencement"],
          iconName: 'Home'
        }
      ]
    },
    whyUs: {
      title: "L'Art de la Précision",
      subtitle: "Nous ne faisons pas que rénover, nous sublimons votre patrimoine immobilier parisien avec une rigueur absolue.",
      features: [
        { title: "Garantie Décennale", desc: "Tous nos travaux sont couverts par une assurance décennale complète.", icon: "ShieldCheck" },
        { title: "Devis Transparent", desc: "Prix fixes et détaillés. Aucune surprise à la facturation.", icon: "Award" },
        { title: "Respect des Délais", desc: "Planning rigoureux et suivi de chantier hebdomadaire.", icon: "Clock" },
        { title: "Expertise Locale", desc: "Connaissance parfaite du bâti parisien et des copropriétés.", icon: "MapPin" }
      ]
    },
    beforeAfter: {
      title: "La Transformation",
      subtitle: "Glissez pour voir la métamorphose d'un salon haussmannien.",
      labelBefore: "Avant",
      labelAfter: "Après"
    },
    process: {
      title: "Notre Processus",
      subtitle: "Une méthodologie éprouvée pour des travaux sans stress.",
      steps: [
        { number: "01", title: "Premier RDV", description: "Visite sur place pour évaluer les travaux et comprendre vos besoins." },
        { number: "02", title: "Devis Détaillé", description: "Réception d'une estimation précise et transparente sous 48h." },
        { number: "03", title: "Planification", description: "Validation du calendrier et sélection des matériaux de qualité." },
        { number: "04", title: "Réalisation", description: "Exécution des travaux avec protection des lieux et nettoyage." }
      ]
    },
    gallery: {
      title: "Nos Réalisations",
      subtitle: "Découvrez la qualité de nos finitions à travers nos derniers chantiers parisiens."
    },
    testimonials: {
      title: "Témoignages",
      subtitle: "La satisfaction de nos clients est notre meilleure publicité.",
      items: [
        { id: 1, name: "Sophie Martin", location: "Paris 7ème", text: "Un travail remarquable sur notre appartement Haussmannien. Les délais ont été tenus et les finitions sont impeccables.", role: "Propriétaire" },
        { id: 2, name: "Jean-Pierre Dubois", location: "Boulogne-Billancourt", text: "Équipe très professionnelle et discrète. La rénovation de la salle de bain est magnifique. Je recommande vivement.", role: "Investisseur" },
        { id: 3, name: "Elena Volkov", location: "Paris 16ème", text: "Excellente communication et qualité de service. Ils ont su s'adapter à nos demandes spécifiques.", role: "Architecte d'intérieur" }
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
        success: "Merci ! Nous vous recontacterons sous 24h."
      },
      info: {
        address: "12 Avenue des Champs-Élysées, 75008 Paris",
        phone: "+33 6 01 99 76 59",
        email: "contact@parisrenov.fr",
        hours: "Lun - Ven: 8h00 - 19h00"
      }
    },
    footer: {
      legal: "Mentions Légales",
      privacy: "Politique de Confidentialité",
      rights: "Tous droits réservés.",
      areas: "Zones d'intervention : Paris (75), Hauts-de-Seine (92), Val-de-Marne (94)"
    }
  },
  ru: {
    nav: {
      home: "Главная",
      services: "Услуги",
      whyUs: "Преимущества",
      process: "Процесс",
      gallery: "Проекты",
      contact: "Контакты",
      getQuote: "Бесплатная смета",
    },
    hero: {
      title: "Ремонт Премиум-Класса в Париже",
      subtitle: "Эксперты по капитальному и внутреннему ремонту. Преобразите ваше жилое пространство с французским мастерством, от черновых работ до финишной отделки.",
      ctaPrimary: "Заказать бесплатную смету",
      ctaSecondary: "Смотреть портфолио",
      stats: [
        { label: "Лет опыта", value: "15+" },
        { label: "Реализованных проектов", value: "500+" },
        { label: "Гарантия качества", value: "100%" },
      ],
    },
    trustBadges: {
      title: "Нам доверяют",
    },
    services: {
      title: "Наши Услуги",
      subtitle: "Полный спектр услуг: малярные работы, сантехника, электрика, столярные работы и укладка плитки.",
      items: [
        {
          id: 'painting',
          title: "Малярные и Столярные работы",
          description: "Нанесение премиальных красок, столярные работы на заказ и тщательная декоративная отделка.",
          benefits: ["Безупречная отделка", "Экологичные материалы", "Встроенная мебель"],
          iconName: 'Paintbrush'
        },
        {
          id: 'plumbing',
          title: "Ванные и Кухни",
          description: "Реставрация ванных комнат и кухонь под ключ. Сантехника, электрика и установка оборудования.",
          benefits: ["Французские стандарты", "Электросети", "Гидроизоляция"],
          iconName: 'Droplets'
        },
        {
          id: 'flooring',
          title: "Полы и Плитка",
          description: "Укладка паркета (массив, елочка) и профессиональная укладка плитки на пол и стены.",
          benefits: ["Реставрация старого", "Точная укладка", "Камень и Керамика"],
          iconName: 'Layers'
        },
        {
          id: 'renovation',
          title: "Капитальный ремонт",
          description: "Возведение перегородок, подвесные потолки и штукатурные работы. Полная перепланировка пространства.",
          benefits: ["Звукоизоляция", "Выравнивание стен", "Зонирование"],
          iconName: 'Home'
        }
      ]
    },
    whyUs: {
      title: "Искусство Точности",
      subtitle: "Мы не просто делаем ремонт, мы совершенствуем вашу парижскую недвижимость с абсолютной точностью.",
      features: [
        { title: "Десятилетняя гарантия", desc: "Все работы застрахованы обязательной десятилетней гарантией.", icon: "ShieldCheck" },
        { title: "Прозрачная смета", desc: "Фиксированные цены. Никаких сюрпризов при оплате.", icon: "Award" },
        { title: "Соблюдение сроков", desc: "Строгий график и еженедельные отчеты о ходе работ.", icon: "Clock" },
        { title: "Местная экспертиза", desc: "Знание парижских стандартов и правил кондоминиумов.", icon: "MapPin" }
      ]
    },
    beforeAfter: {
      title: "Трансформация",
      subtitle: "Потяните слайдер, чтобы увидеть преображение османовской гостиной.",
      labelBefore: "До",
      labelAfter: "После"
    },
    process: {
      title: "Наш Процесс",
      subtitle: "Проверенная методология для ремонта без стресса.",
      steps: [
        { number: "01", title: "Первая встреча", description: "Выезд на объект для оценки работ и обсуждения ваших пожеланий." },
        { number: "02", title: "Детальная смета", description: "Получение точного и прозрачного расчета в течение 48 часов." },
        { number: "03", title: "Планирование", description: "Утверждение графика и выбор качественных материалов." },
        { number: "04", title: "Реализация", description: "Выполнение работ с защитой помещения и финальной уборкой." }
      ]
    },
    gallery: {
      title: "Наши Проекты",
      subtitle: "Оцените качество нашей отделки на примерах недавних парижских объектов."
    },
    testimonials: {
      title: "Отзывы",
      subtitle: "Довольство клиентов — наша лучшая реклама.",
      items: [
        { id: 1, name: "Софи Мартен", location: "Париж 7-й", text: "Замечательная работа в нашей квартире. Сроки соблюдены, отделка безупречна.", role: "Владелец" },
        { id: 2, name: "Жан-Пьер Дюбуа", location: "Булонь-Бийанкур", text: "Очень профессиональная команда. Ремонт ванной комнаты выполнен великолепно. Рекомендую.", role: "Инвестор" },
        { id: 3, name: "Елена Волкова", location: "Париж 16-й", text: "Отличная коммуникация и качество. Они смогли адаптироваться к нашим сложным запросам.", role: "Дизайнер интерьера" }
      ]
    },
    contact: {
      title: "Обсудим ваш проект",
      subtitle: "Свяжитесь с нами для индивидуальной консультации.",
      form: {
        name: "ФИО",
        email: "Email",
        phone: "Телефон",
        type: "Тип работ",
        message: "Описание проекта",
        submit: "Отправить запрос",
        submitting: "Отправка...",
        success: "Спасибо! Мы свяжемся с вами в течение 24 часов."
      },
      info: {
        address: "12 Avenue des Champs-Élysées, 75008 Paris",
        phone: "+33 6 01 99 76 59",
        email: "contact@parisrenov.fr",
        hours: "Пн - Пт: 8:00 - 19:00"
      }
    },
    footer: {
      legal: "Юридическая информация",
      privacy: "Конфиденциальность",
      rights: "Все права защищены.",
      areas: "Зоны обслуживания: Париж (75), О-де-Сен (92), Валь-де-Марн (94)"
    }
  }
};