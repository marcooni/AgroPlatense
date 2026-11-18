import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site-config";
import { categories, categoryPath, productPath, products } from "@/data/catalog";

const routes: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/agropecuario", priority: 0.9 },
  { path: "/industria-lactea", priority: 0.9 },
  { path: "/ferreteria", priority: 0.8 },
  { path: "/productos", priority: 0.8 },
  { path: "/nosotros", priority: 0.6 },
  { path: "/contacto", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const detail = [
    ...categories.map((c) => ({ path: categoryPath(c.id), priority: 0.7 })),
    ...products.map((p) => ({ path: productPath(p), priority: 0.6 })),
  ];
  return [...routes, ...detail].map(({ path, priority }) => ({
    url: `${siteConfig.url}${path}`,
    priority,
  }));
}
