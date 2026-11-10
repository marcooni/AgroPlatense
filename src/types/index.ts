export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  subcategory?: string;
  brand?: string;
  image?: string;
  featured?: boolean;
  tags?: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  image?: string;
  tag: string;
  featured?: boolean;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  whatsappDisplay: string;
  email: string;
  address: string;
  city: string;
  department: string;
  country: string;
  googleMapsUrl: string;
  googleMapsEmbed: string;
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  social?: {
    facebook?: string;
    instagram?: string;
  };
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  contact: ContactInfo;
  seo: {
    keywords: string[];
    locale: string;
    region: string;
  };
}
