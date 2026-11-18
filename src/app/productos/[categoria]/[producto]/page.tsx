import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, MessageCircle, Phone, ShieldCheck, Truck } from "lucide-react";
import {
  areas,
  categoryPath,
  formatPrice,
  getCategory,
  getProduct,
  productPath,
  products,
} from "@/data/catalog";
import { siteConfig } from "@/data/site-config";
import { productMessage, waLink } from "@/lib/whatsapp";
import { productImages } from "@/lib/images";
import { Breadcrumb } from "@/components/sections/Breadcrumb";
import { ProductGallery } from "@/components/sections/ProductGallery";
import { ProductCard } from "@/components/sections/CategoryRows";
import { ContactBand } from "@/components/sections/ContactBand";
import { AddToConsulta } from "@/components/cart/AddToConsulta";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";

export async function generateMetadata({
  params,
}: PageProps<"/productos/[categoria]/[producto]">): Promise<Metadata> {
  const { categoria, producto } = await params;
  const p = getProduct(categoria, producto);
  if (!p) return {};
  return {
    title: `${p.name}${p.brand ? ` · ${p.brand}` : ""}`,
    description:
      p.description ?? `Consultá disponibilidad y precio de ${p.name} en AGROPLATENSE, Ecilda Paullier.`,
    alternates: { canonical: productPath(p) },
  };
}

export default function ProductoPage({ params }: PageProps<"/productos/[categoria]/[producto]">) {
  // Sin generateStaticParams los parámetros son datos de ejecución: van tras Suspense.
  return (
    <Suspense fallback={<div className="min-h-[60vh]" aria-busy="true" />}>
      <ProductoContent params={params} />
    </Suspense>
  );
}

async function ProductoContent({
  params,
}: {
  params: PageProps<"/productos/[categoria]/[producto]">["params"];
}) {
  const { categoria, producto } = await params;
  const c = getCategory(categoria);
  const p = getProduct(categoria, producto);
  if (!c || !p) notFound();

  const images = productImages();
  const gallery = [images[p.id] ?? p.image, ...(p.gallery ?? [])].filter((s): s is string => Boolean(s));
  const related = products.filter((x) => x.category === c.id && x.id !== p.id).slice(0, 4);
  const area = areas[c.area];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    ...(p.description && { description: p.description }),
    ...(p.brand && { brand: { "@type": "Brand", name: p.brand } }),
    ...(gallery.length && { image: gallery.map((g) => (/^https?:/.test(g) ? g : `${siteConfig.url}${g}`)) }),
    category: c.name,
    url: `${siteConfig.url}${productPath(p)}`,
    ...(p.price && {
      offers: {
        "@type": "Offer",
        priceCurrency: "UYU",
        price: p.price,
        url: `${siteConfig.url}${productPath(p)}`,
        seller: { "@type": "Organization", name: siteConfig.name },
      },
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Container className="pt-6 text-tinta-soft">
        <Breadcrumb
          items={[
            { label: "Productos", href: "/productos" },
            { label: area.name, href: area.href },
            { label: c.name, href: categoryPath(c.id) },
            { label: p.name },
          ]}
        />
      </Container>

      <Container as="section" className="grid gap-10 py-8 md:py-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <ProductGallery images={gallery} name={p.name} categoryId={c.id} />
          {p.imageCredit && gallery[0] === p.imageCredit.url && (
            <p className="mt-3 text-xs text-tinta-soft">
              Foto de referencia: {p.imageCredit.author} ·{" "}
              <a href={p.imageCredit.page} target="_blank" rel="noopener noreferrer" className="underline">
                {p.imageCredit.license}, Wikimedia Commons
              </a>
            </p>
          )}
        </div>

        <div className="lg:sticky lg:top-28 lg:self-start">
          {p.brand && <p className="font-semibold uppercase tracking-wide text-hoja-600">{p.brand}</p>}
          <h1 className="text-4xl font-semibold md:text-5xl">{p.name}</h1>
          {p.description && <p className="mt-5 text-lg text-tinta-soft">{p.description}</p>}

          <p className="mt-6 text-3xl font-semibold">
            {p.price ? (
              <>
                {formatPrice(p.price)}
                {p.priceUnit && <span className="text-base font-normal text-tinta-soft"> {p.priceUnit}</span>}
              </>
            ) : (
              <span className="text-2xl text-tinta-soft">Consultar precio</span>
            )}
          </p>

          <div className="mt-8 border-t border-leche-200 pt-8">
            <AddToConsulta
              id={`${c.id}/${p.id}`}
              name={p.name}
              channel={c.channel}
              href={productPath(p)}
              presentations={p.presentations}
              withQuantity
            />
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={waLink(c.channel, productMessage(p.name))} external variant="whatsapp">
                <MessageCircle size={20} aria-hidden /> Consultar por WhatsApp
              </ButtonLink>
              <ButtonLink href={`tel:${siteConfig.phone.number}`} variant="outline-dark">
                <Phone size={20} aria-hidden /> Llamar
              </ButtonLink>
            </div>
          </div>

          <ul className="mt-8 grid gap-3 text-sm text-tinta-soft sm:grid-cols-2">
            <li className="flex items-center gap-3 rounded-xl bg-leche-100 p-3">
              <ShieldCheck size={20} aria-hidden className="shrink-0 text-hoja-600" />
              Te confirmamos disponibilidad antes de comprar
            </li>
            <li className="flex items-center gap-3 rounded-xl bg-leche-100 p-3">
              <Truck size={20} aria-hidden className="shrink-0 text-hoja-600" />
              Atención en {siteConfig.locality}, {siteConfig.department}
            </li>
          </ul>
        </div>
      </Container>

      {(p.highlights?.length || p.specs?.length) && (
        <Container as="section" className="grid gap-12 pb-16 md:grid-cols-2">
          {p.highlights?.length ? (
            <div>
              <h2 className="text-2xl font-semibold md:text-3xl">Características</h2>
              <ul className="mt-5 space-y-3">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-3">
                    <Check size={20} aria-hidden className="mt-0.5 shrink-0 text-hoja-600" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          {p.specs?.length ? (
            <div>
              <h2 className="text-2xl font-semibold md:text-3xl">Ficha técnica</h2>
              <dl className="mt-5 divide-y divide-leche-200 rounded-2xl border border-leche-200 bg-white">
                {p.specs.map((s) => (
                  <div key={s.label} className="grid grid-cols-3 gap-4 px-5 py-3">
                    <dt className="font-semibold text-tinta-soft">{s.label}</dt>
                    <dd className="col-span-2">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ) : null}
        </Container>
      )}

      {related.length > 0 && (
        <Container as="section" className="pb-20">
          <h2 className="text-2xl font-semibold md:text-3xl">Más de {c.name.toLowerCase()}</h2>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((r) => (
              <ProductCard key={r.id} product={r} image={images[r.id]} />
            ))}
          </ul>
        </Container>
      )}

      <ContactBand
        title="¿Tenés dudas sobre este producto?"
        text="Escribinos y te asesoramos."
        message={productMessage(p.name)}
        primary={c.channel}
      />
    </>
  );
}
