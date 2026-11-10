import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "AGROPLATENSE",
  tagline: "Soluciones para el campo y la industria láctea",
  description:
    "En AGROPLATENSE acompañamos al sector productivo con insumos, equipamiento y soluciones para el trabajo agropecuario y la industria láctea. Ubicados en Ecilda Paullier, San José, Uruguay.",
  url: "https://agroplatense.com.uy", // Configuración base editable

  contact: {
    phone: "+598 4349 2000", // Teléfono de contacto comercial
    whatsapp: "59899123456", // Número WhatsApp comercial sin signos para API de enlace directo
    whatsappDisplay: "+598 99 123 456", // Visualización legible
    email: "contacto@agroplatense.com.uy",
    address: "Ruta 1 y Acceso a Ecilda Paullier",
    city: "Ecilda Paullier",
    department: "San José",
    country: "Uruguay",
    googleMapsUrl: "https://share.google/PZzrmAQLGfmBREoId",
    googleMapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13143.766127457788!2d-57.05436!3d-34.35472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a201c13d7401c9%3A0xb3e120d58852e9a2!2sEcilda%20Paullier%2C%20San%20Jos%C3%A9%20Department!5e0!3m2!1sen!2suy!4v1700000000000",
    hours: {
      weekdays: "Lunes a Viernes: 08:00 a 12:00 y 14:00 a 18:30 hs",
      saturday: "Sábados: 08:00 a 12:30 hs",
      sunday: "Domingos: Cerrado",
    },
    social: {
      facebook: "https://facebook.com/agroplatense",
      instagram: "https://instagram.com/agroplatense",
    },
  },

  seo: {
    keywords: [
      "AGROPLATENSE",
      "Agropecuaria en Ecilda Paullier",
      "Insumos agropecuarios San José Uruguay",
      "Equipamiento para industria láctea Uruguay",
      "Insumos para tambos Uruguay",
      "Productos para establecimientos lecheros",
      "Sanidad animal y tambo San José",
      "Repuestos de ordeñe San José",
    ],
    locale: "es_UY",
    region: "UY-SJ",
  },
};

export const defaultWhatsappMessage =
  "Hola, me comunico desde el sitio web de AGROPLATENSE. Quisiera consultar sobre sus productos y soluciones.";

export const buildWhatsappLink = (message: string) => {
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
};
