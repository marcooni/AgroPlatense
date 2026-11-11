import { siteConfig } from "@/data/site-config";
import type { Channel } from "@/data/catalog";

export const DEFAULT_MESSAGE =
  "Hola, me comunico desde la web de AGROPLATENSE. Quisiera hacer una consulta.";

export function waLink(channel: Channel, message: string = DEFAULT_MESSAGE) {
  const { number } = siteConfig.whatsapp[channel];
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export const categoryMessage = (name: string) =>
  `Hola, quisiera consultar por productos de "${name}" en AGROPLATENSE.`;

export const productMessage = (name: string) =>
  `Hola, quisiera consultar disponibilidad de "${name}" en AGROPLATENSE.`;
