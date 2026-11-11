/**
 * Catálogo por categorías. Las categorías y sus descripciones son generales
 * (no afirman marcas, stock ni certificaciones).
 *
 * Cuando el negocio entregue su listado real, cargarlo en `products`.
 * El explorador de /productos lo muestra automáticamente.
 */

export type AreaId = "agropecuario" | "lacteo" | "ferreteria";
export type Channel = "especializado" | "general";

export type Category = {
  id: string;
  name: string;
  area: AreaId;
  summary: string;
  /** Palabras que el visitante puede escribir en el buscador. */
  keywords: string[];
  /** Canal de WhatsApp que atiende esta categoría. */
  channel: Channel;
};

export type Product = {
  id: string;
  name: string;
  category: string; // Category.id
  description?: string;
  brand?: string;
  /** Ruta dentro de /public. Ej: "/images/productos/pezoneras.jpg" */
  image?: string;
};

export const categories: Category[] = [
  {
    id: "semillas",
    name: "Semillas",
    area: "agropecuario",
    summary: "Semillas para la siembra.",
    keywords: ["semillas","siembra","forraje"],
    channel: "especializado",
  },
  {
    id: "veterinaria",
    name: "Veterinaria",
    area: "agropecuario",
    summary: "Productos veterinarios para el cuidado de los animales.",
    keywords: ["veterinaria","sanidad","animales","vacunas"],
    channel: "especializado",
  },
  {
    id: "nutricion-animal",
    name: "Nutrición animal",
    area: "agropecuario",
    summary: "Alimentación y suplementos para el ganado.",
    keywords: ["nutrición","alimento","ración","suplemento","ganado"],
    channel: "especializado",
  },
  {
    id: "fertilizantes",
    name: "Fertilizantes",
    area: "agropecuario",
    summary: "Fertilizantes para cultivos y pasturas.",
    keywords: ["fertilizante","abono","urea","pasturas"],
    channel: "especializado",
  },
  {
    id: "alambrado",
    name: "Alambrado",
    area: "agropecuario",
    summary: "Alambres y mallas electrosoldadas para cercos.",
    keywords: ["alambrado","alambre","malla electrosoldada","cerco"],
    channel: "especializado",
  },
  {
    id: "malla-fardos",
    name: "Malla para fardos",
    area: "agropecuario",
    summary: "Hilo para fardo, malla para fardos y film.",
    keywords: ["fardo","hilo","malla","film","enfardado"],
    channel: "especializado",
  },
  {
    id: "equipamiento-accesorios",
    name: "Equipamiento y accesorios",
    area: "agropecuario",
    summary: "Equipos y accesorios para el trabajo agropecuario.",
    keywords: ["equipos","accesorios","equipamiento"],
    channel: "especializado",
  },
  {
    id: "establecimientos-rurales",
    name: "Establecimientos rurales",
    area: "agropecuario",
    summary: "Artículos para el funcionamiento de los establecimientos rurales.",
    keywords: ["establecimiento","rural","campo"],
    channel: "especializado",
  },
  {
    id: "almidones",
    name: "Almidones",
    area: "lacteo",
    summary: "Almidones para la industria láctea.",
    keywords: ["almidón","almidones","lácteo"],
    channel: "especializado",
  },
  {
    id: "leche-en-polvo",
    name: "Leche en polvo",
    area: "lacteo",
    summary: "Leche en polvo para la industria.",
    keywords: ["leche en polvo","leche","polvo"],
    channel: "especializado",
  },
  {
    id: "conservantes",
    name: "Conservantes",
    area: "lacteo",
    summary: "Conservantes para productos lácteos.",
    keywords: ["conservantes","aditivos","lácteo"],
    channel: "especializado",
  },
  {
    id: "envases",
    name: "Envases",
    area: "lacteo",
    summary: "Envases para productos lácteos.",
    keywords: ["envases","packaging","embalaje"],
    channel: "especializado",
  },
  {
    id: "ferreteria",
    name: "Ferretería",
    area: "ferreteria",
    summary: "Herramientas y artículos de ferretería.",
    keywords: ["ferretería","herramientas","repuestos","mantenimiento"],
    channel: "general",
  },
];

/** Vacío hasta recibir el catálogo real. No cargar productos de ejemplo. */
export const products: Product[] = [];

export const areas: Record<
  AreaId,
  { id: AreaId; name: string; href: string; short: string }
> = {
  agropecuario: {
    id: "agropecuario",
    name: "Agropecuario",
    href: "/agropecuario",
    short: "Insumos, equipamiento y artículos para establecimientos rurales.",
  },
  lacteo: {
    id: "lacteo",
    name: "Industria láctea",
    href: "/industria-lactea",
    short: "Productos y equipamiento para tambos y procesamiento de leche.",
  },
  ferreteria: {
    id: "ferreteria",
    name: "Ferretería",
    href: "/ferreteria",
    short: "Herramientas y artículos de ferretería.",
  },
};

export const categoriesByArea = (area: AreaId) =>
  categories.filter((c) => c.area === area);
