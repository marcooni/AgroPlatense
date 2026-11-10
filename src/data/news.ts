import type { NewsItem } from "@/types";

export const newsItems: NewsItem[] = [
  {
    id: "news-01",
    title: "Campaña de Implantación de Pasturas y Verdeos de Invierno",
    excerpt:
      "Ya disponemos de semillas forrajeras fiscalizadas y fertilizantes arrancadores para la planificación forrajera de la temporada lechera.",
    content:
      "Consulte por nuestras recomendaciones técnicas para lotes en rotación y análisis de germinación adaptados a los suelos de San José y alrededores.",
    date: "2026-11-05",
    tag: "Temporada",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: "news-02",
    title: "Plan Integral de Prevención de Mastitis en Tambo",
    excerpt:
      "Nuevas fórmulas de selladores barrera y desinfectantes aprobados para asegurar la sanidad del pezón y mantener bajos recuentos de células somáticas.",
    content:
      "La calidad de leche comienza en la rutina de ordeñe. Descubra nuestra línea de selladores con emolientes especiales para bajas temperaturas.",
    date: "2026-10-28",
    tag: "Industria Láctea",
    image: "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: "news-03",
    title: "Mantenimiento Preventivo de Salas y Líneas de Ordeñe",
    excerpt:
      "Recambio programado de pezoneras y revisión de pulsadores para evitar estrés en el rodeo y caídas en el vacío de ordeñe.",
    content:
      "Contamos con repuestos originales de marcas líderes y accesorios de alta compatibilidad para salas en espina de pescado y brete a la par.",
    date: "2026-10-14",
    tag: "Servicio Técnico",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
];
