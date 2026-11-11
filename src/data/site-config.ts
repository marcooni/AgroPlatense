/**
 * ÚNICO lugar donde se editan los datos del negocio.
 *
 * Regla: solo se publica lo que el negocio confirmó. Todo campo en `null`
 * se oculta del sitio (no se muestra "a confirmar" al público) y no entra
 * en los datos estructurados de SEO. Para activarlo, completar el valor.
 */

export type WhatsappChannel = {
  /** Solo dígitos, formato internacional. Ej: 59899655317 */
  number: string;
  /** Texto para mostrar. Ej: +598 99 655 317 */
  display: string;
  /** Qué tipo de consultas atiende este número. */
  label: string;
};

export const siteConfig = {
  name: "AGROPLATENSE",
  slogan: "Lideramos el Agro",
  tagline: "Insumos para el campo y el tambo",
  description:
    "AGROPLATENSE vende insumos agropecuarios y productos para la industria láctea en Ecilda Paullier, San José, Uruguay. Consultas directas por WhatsApp.",

  /** Definir NEXT_PUBLIC_SITE_URL en producción (sitemap, canonical, Open Graph). */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  locality: "Ecilda Paullier",
  department: "San José",
  country: "Uruguay",
  countryCode: "UY",

  // ── Confirmado ────────────────────────────────────────────────
  phone: { number: "+59843492000", display: "+598 4349 2000" },

  whatsapp: {
    /** Industria láctea, insumos y malla. */
    especializado: {
      number: "59899655317",
      display: "+598 99 655 317",
      label: "Industria láctea, insumos y malla",
    },
    /** Resto de las consultas. */
    general: {
      number: "59891265438",
      display: "+598 91 265 438",
      label: "Otras consultas",
    },
  } satisfies Record<string, WhatsappChannel>,

  // Enlace de Google Maps provisto por el negocio.
  mapsUrl: "https://share.google/PZzrmAQLGfmBREoId",
  // Vista de localidad. Reemplazar por el "Insertar mapa" de Google Maps
  // cuando esté confirmada la dirección exacta.
  mapsEmbed:
    "https://www.google.com/maps?q=Ecilda+Paullier,+San+Jos%C3%A9,+Uruguay&output=embed",

  // ── Pendiente de confirmar con el negocio (null = oculto) ─────
  address: null as string | null, // calle y número
  email: null as string | null,
  hours: null as { label: string; value: string }[] | null,
  social: {
    facebook: null as string | null,
    instagram: null as string | null,
  },
  /** Historia de la empresa: lista de párrafos. Se muestra en /nosotros si existe. */
  story: null as string[] | null,
} as const;

export type SiteConfig = typeof siteConfig;
