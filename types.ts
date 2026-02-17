import { ReactNode } from 'react';



export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  iconName: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  role?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  type: string;
  message: string;
  submit: string;
  submitting: string;
  success: string;
  errors: {
    name: string;
    email: string;
    emailInvalid: string;
    phone: string;
    message: string;
  };
  options: {
    full: string;
    painting: string;
    plumbing: string;
    flooring: string;
    other: string;
  };
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: string;
  labels: {
    phone: string;
    email: string;
    address: string;
  };
}

export interface FooterData {
  description: string;
  navigation: string;
  services: string;
  legal: string;
  privacy: string;
  rights: string;
  areas: string;
  designedBy: string;
  legalBody: string;
  privacyBody: string;
}

export interface CommonData {
  learnMore: string;
  getQuote: string;
  whatWeOffer: string;
  detailedQuote: string;
  respectNorms: string;
  expertBadge: string;
  viewAll: string;
  openMenu: string;
  closeMenu: string;
  portfolio: string;
  workflow: string;
  metamorphose: string;
  dragToCompare: string;
  clientReviews: string;
  contactBadge: string;
  whatsappTooltip: string;
  callAriaLabel: string;
  whatsappAriaLabel: string;
}

export interface ContentData {
  common: CommonData;
  nav: {
    home: string;
    services: string;
    whyUs: string;
    process: string;
    gallery: string;
    contact: string;
    getQuote: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { label: string; value: string }[];
  };
  trustBadges: {
    title: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: ServiceItem[];
  };
  whyUs: {
    title: string;
    subtitle: string;
    features: { title: string; desc: string; icon: string }[];
  };
  beforeAfter: {
    title: string;
    subtitle: string;
    labelBefore: string;
    labelAfter: string;
  };
  process: {
    title: string;
    subtitle: string;
    steps: ProcessStep[];
  };
  gallery: {
    title: string;
    subtitle: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: Testimonial[];
  };
  contact: {
    title: string;
    subtitle: string;
    form: ContactForm;
    info: ContactInfo;
  };
  footer: FooterData;
}