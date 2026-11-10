import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Soluciones para el Campo y la Industria Láctea`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.seo.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} - Ecilda Paullier, San José`,
    description: siteConfig.description,
    images: [
      {
        url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "AGROPLATENSE - Campo e Industria Láctea en Ecilda Paullier",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Soluciones para el Campo y la Industria Láctea`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org LocalBusiness y Store para SEO local de Ecilda Paullier y San José
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address,
      addressLocality: siteConfig.contact.city,
      addressRegion: siteConfig.contact.department,
      addressCountry: "UY",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -34.35472,
      longitude: -57.05436,
    },
    hasMap: siteConfig.contact.googleMapsUrl,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "12:30",
      },
    ],
    priceRange: "$$",
    areaServed: [
      "Ecilda Paullier",
      "San José",
      "Colonia Valdense",
      "Nueva Helvecia",
      "Kiyú",
      "Libertad",
      "Uruguay",
    ],
  };

  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-[#fbf9f5] text-stone-800">
        {children}
      </body>
    </html>
  );
}
