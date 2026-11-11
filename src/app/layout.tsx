import type { Metadata, Viewport } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/figtree";
import "./globals.css";
import { siteConfig } from "@/data/site-config";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";

export const viewport: Viewport = {
  themeColor: "#16261a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Insumos agropecuarios e industria láctea en Ecilda Paullier`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_UY",
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
};

/** Datos estructurados: solo campos confirmados en site-config. */
function businessJsonLd() {
  const { phone, address, social } = siteConfig;
  const sameAs = [social.facebook, social.instagram].filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@type": "Store",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.png`,
    image: `${siteConfig.url}/og.jpg`,
    telephone: phone.number,
    ...(siteConfig.email && { email: siteConfig.email }),
    address: {
      "@type": "PostalAddress",
      ...(address && { streetAddress: address }),
      addressLocality: siteConfig.locality,
      addressRegion: siteConfig.department,
      addressCountry: siteConfig.countryCode,
    },
    areaServed: [siteConfig.locality, siteConfig.department],
    hasMap: siteConfig.mapsUrl,
    ...(sameAs.length && { sameAs }),
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-UY">
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessJsonLd()).replace(/</g, "\\u003c"),
          }}
        />
        <Header />
        <main id="contenido" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
