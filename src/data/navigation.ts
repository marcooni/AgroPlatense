import { categoriesByArea } from "@/data/catalog";

export type NavLink = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

const sub = (area: Parameters<typeof categoriesByArea>[0]) =>
  categoriesByArea(area).map((c) => ({ href: `/productos#${c.id}`, label: c.name }));

export const navLinks: NavLink[] = [
  { href: "/", label: "Inicio" },
  { href: "/agropecuario", label: "Agropecuario", children: sub("agropecuario") },
  { href: "/industria-lactea", label: "Industria láctea", children: sub("lacteo") },
  { href: "/ferreteria", label: "Ferretería" },
  { href: "/productos", label: "Productos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];
