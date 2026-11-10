import { MetadataRoute } from "next";
import { siteConfig } from "@/data/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date('2026-11-10T00:00:00.000Z'),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteConfig.url}/#productos`,
      lastModified: new Date('2026-11-10T00:00:00.000Z'),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/#industria-lactea`,
      lastModified: new Date('2026-11-10T00:00:00.000Z'),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/#empresa`,
      lastModified: new Date('2026-11-10T00:00:00.000Z'),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/#contacto`,
      lastModified: new Date('2026-11-10T00:00:00.000Z'),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}

