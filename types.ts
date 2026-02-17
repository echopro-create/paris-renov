import { ReactNode } from 'react';

export type Language = 'fr' | 'ru';

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

export interface ContentData {
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
    form: {
      name: string;
      email: string;
      phone: string;
      type: string;
      message: string;
      submit: string;
      submitting: string;
      success: string;
    };
    info: {
      address: string;
      phone: string;
      email: string;
      hours: string;
    };
  };
  footer: {
    legal: string;
    privacy: string;
    rights: string;
    areas: string;
  };
}