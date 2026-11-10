import type { Product, Category } from "@/types";

export const categories: Category[] = [
  {
    id: "insumos-agropecuarios",
    name: "Insumos Agropecuarios",
    description:
      "Semillas forrajeras, fertilizantes, correctores de suelo y fitosanitarios para el máximo rendimiento de sus cultivos.",
    icon: "Sprout",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "industria-lactea",
    name: "Industria Láctea",
    description:
      "Soluciones integrales para tambos: pezoneras, pulsadores, mangueras sanitarias, selladores y equipos de medición.",
    icon: "Milk",
    image: "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "establecimientos-rurales",
    name: "Establecimientos Rurales",
    description:
      "Alambres, aisladores para cercas eléctricas, bebederos térmicos, flotantes y equipamiento de manejo para ganado.",
    icon: "Fence",
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "equipamiento-accesorios",
    name: "Equipamiento y Accesorios",
    description:
      "Bombas de agua, motobombas, generadores, tanques, comederos y herramientas técnicas de alta durabilidad.",
    icon: "Tractor",
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "higiene-limpieza",
    name: "Higiene y Limpieza",
    description:
      "Detergentes alcalinos y ácidos para sistemas CIP, sanitizantes de pezones pre y post ordeñe aprobados.",
    icon: "ShieldCheck",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "repuestos-herramientas",
    name: "Repuestos y Herramientas",
    description:
      "Kits de recambio para ordeñadoras, válvulas, acoples rápidos, ferretería rural pesada y consumibles de taller.",
    icon: "Wrench",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
  },
];

export const products: Product[] = [
  // Industria Láctea
  {
    id: "prod-lac-01",
    name: "Sellador de Pezones Barrera con Ácido Láctico",
    description:
      "Desinfectante de alta adherencia y acondicionador dérmico para post-ordeñe. Protección prolongada contra mastitis ambiental y contagiosa.",
    category: "industria-lactea",
    brand: "Línea Profesional Tambo",
    image: "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=format&fit=crop&w=800&q=80",
    featured: true,
    tags: ["tambo", "higiene", "mastitis", "sanidad"],
  },
  {
    id: "prod-lac-02",
    name: "Juegos de Pezoneras Siliconadas de Alta Vida Útil",
    description:
      "Pezoneras de extracción suave formuladas para preservar la salud de los cuartos, ordeñe parejo y bajo deslizamiento.",
    category: "industria-lactea",
    brand: "Repuestos Tambo",
    image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=800&q=80",
    featured: true,
    tags: ["ordeñe", "pezoneras", "repuestos", "tambo"],
  },
  {
    id: "prod-lac-03",
    name: "Detergente Alcalino Clorado de Lavado CIP",
    description:
      "Formulado específicamente para eliminación total de grasas y proteínas en tuberías de leche y enfriadores de tanque.",
    category: "higiene-limpieza",
    brand: "Sanidad Láctea",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?auto=format&fit=crop&w=800&q=80",
    featured: true,
    tags: ["limpieza cip", "tambo", "desinfección"],
  },
  {
    id: "prod-lac-04",
    name: "Detergente Desincrustante Ácido",
    description:
      "Disuelve eficazmente la piedra de leche y depósitos minerales en equipos de ordeñe mecánicos e intercambiadores de placas.",
    category: "higiene-limpieza",
    brand: "Sanidad Láctea",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?auto=format&fit=crop&w=800&q=80",
    featured: false,
    tags: ["limpieza", "acido", "sarro"],
  },

  // Insumos Agropecuarios
  {
    id: "prod-agr-01",
    name: "Mezclas Forrajeras y Semillas de Raigrás",
    description:
      "Semillas certificadas de alto potencial forrajero, rápida implantación y excelente digestibilidad para rodeos lecheros.",
    category: "insumos-agropecuarios",
    brand: "Genética Pastoril",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    featured: true,
    tags: ["pasturas", "forrajes", "semillas", "lecheria"],
  },
  {
    id: "prod-agr-02",
    name: "Fertilizantes Granulados y Enmiendas Cálcicas",
    description:
      "Formulaciones balanceadas NPK, fosfatadas y correctores de acidez para optimizar la productividad de praderas y verdeos.",
    category: "insumos-agropecuarios",
    brand: "Nutrición Vegetal",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80",
    featured: true,
    tags: ["fertilizantes", "nutricion", "suelo"],
  },
  {
    id: "prod-agr-03",
    name: "Fitosanitarios y Protección de Cultivos",
    description:
      "Herbicidas selectivos, fungicidas e insecticidas de amplio espectro con asesoramiento técnico para su correcta aplicación.",
    category: "insumos-agropecuarios",
    brand: "Protección Agro",
    image: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=800&q=80",
    featured: false,
    tags: ["fitosanitarios", "defensivos", "cultivos"],
  },

  // Establecimientos Rurales
  {
    id: "prod-rur-01",
    name: "Electrificadores y Accesorios para Cerco Eléctrico",
    description:
      "Equipos solares y duales (220V/12V), aisladores reforzados contra radiación UV y alambres galvanizados de alta resistencia.",
    category: "establecimientos-rurales",
    brand: "Cercado Rural",
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=800&q=80",
    featured: true,
    tags: ["cerco electrico", "boyero", "campo"],
  },
  {
    id: "prod-rur-02",
    name: "Bebederos y Flotantes de Alto Caudal",
    description:
      "Bebederos de polietileno virgen anti-algas con válvulas reforzadas para suministro continuo y fresco de agua a rodeos.",
    category: "establecimientos-rurales",
    brand: "Hidro Campo",
    image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=800&q=80",
    featured: false,
    tags: ["agua", "bebederos", "ganado"],
  },

  // Equipamiento y Repuestos
  {
    id: "prod-equ-01",
    name: "Bombas Sanitarias de Trasvase de Leche",
    description:
      "Construcción íntegra en acero inoxidable AISI 304/316, bajo batido y diseño higiénico desmontable para tambo.",
    category: "equipamiento-accesorios",
    brand: "Lactotech",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    featured: false,
    tags: ["bombas", "inox", "leche"],
  },
  {
    id: "prod-rep-01",
    name: "Kits de Empaquetaduras y Mangueras Sanitarias Alimentarias",
    description:
      "Mangueras transparentes no tóxicas resistentes a temperaturas de lavado y acoples rápidos de repuesto inmediato.",
    category: "repuestos-herramientas",
    brand: "Servicio Técnico",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80",
    featured: false,
    tags: ["repuestos", "mangueras", "ordeñe"],
  },
];
