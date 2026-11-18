import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MessageCircle } from "lucide-react";
import {
  areas,
  categories,
  categoryPath,
  getCategory,
  productsOf,
} from "@/data/catalog";
import { siteConfig } from "@/data/site-config";
import { categoryMessage, waLink } from "@/lib/whatsapp";
import { productImages } from "@/lib/images";
import { PageHero } from "@/components/sections/PageHero";
import { Breadcrumb } from "@/components/sections/Breadcrumb";
import { ProductCard, Thumb } from "@/components/sections/CategoryRows";
import { RelatedCategories } from "@/components/sections/RelatedCategories";
import { ContactBand } from "@/components/sections/ContactBand";
import { AddToConsulta } from "@/components/cart/AddToConsulta";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function generateStaticParams() {
  return categories.map((c) => ({ categoria: c.id }));
}

export async function generateMetadata({
  params,
}: PageProps<"/productos/[categoria]">): Promise<Metadata> {
  const { categoria } = await params;
  const c = getCategory(categoria);
  if (!c) return {};
  return {
    title: `${c.name} en Ecilda Paullier`,
    description: `${c.summary} Consultá disponibilidad y precio de ${c.name.toLowerCase()} en AGROPLATENSE por WhatsApp.`,
    alternates: { canonical: categoryPath(c.id) },
  };
}

export default function CategoriaPage({ params }: PageProps<"/productos/[categoria]">) {
  return (
    <Suspense fallback={<div className="min-h-[60vh]" aria-busy="true" />}>
      <CategoriaContent params={params} />
    </Suspense>
  );
}

async function CategoriaContent({
  params,
}: {
  params: PageProps<"/productos/[categoria]">["params"];
}) {
  const { categoria } = await params;
  const c = getCategory(categoria);
  if (!c) notFound();

  const area = areas[c.area];
  const list = productsOf(c.id);
  const images = productImages();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: c.name,
    description: c.summary,
    url: `${siteConfig.url}${categoryPath(c.id)}`,
    isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Productos", item: `${siteConfig.url}/productos` },
        { "@type": "ListItem", position: 2, name: c.name },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <PageHero variant={c.area === "lacteo" ? "tambo" : "campo"} title={c.name} lead={c.summary}>
        <ButtonLink href={waLink(c.channel, categoryMessage(c.name))} external variant="primary">
          <MessageCircle size={20} aria-hidden /> Consultar por WhatsApp
        </ButtonLink>
      </PageHero>

      <Container className="pt-6 text-tinta-soft">
        <Breadcrumb
          items={[
            { label: "Productos", href: "/productos" },
            { label: area.name, href: area.href },
            { label: c.name },
          ]}
        />
      </Container>

      <Container as="section" className="py-12 md:py-16">
        {list.length > 0 ? (
          <>
            <h2 className="text-3xl font-semibold md:text-4xl">
              {list.length === 1 ? "1 producto" : `${list.length} productos`}
            </h2>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {list.map((p, i) => (
                <ProductCard key={p.id} product={p} image={images[p.id]} priority={i < 4} />
              ))}
            </ul>
          </>
        ) : (
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl">
              <Thumb
                src={images[c.id]}
                alt={c.name}
                categoryId={c.id}
                priority
                sizes="(min-width:1024px) 50vw, 100vw"
              />
            </div>
            <div>
              <h2 className="text-3xl font-semibold md:text-4xl">Consultanos por {c.name.toLowerCase()}</h2>
              <p className="mt-4 max-w-xl text-lg text-tinta-soft">
                Contanos qué necesitás y te confirmamos disponibilidad, presentaciones y precio. Podés sumar esta
                categoría a tu consulta junto con otros productos y enviar todo en un solo mensaje.
              </p>
              <ul className="mt-6 space-y-2 text-tinta-soft">
                {["Respuesta directa por WhatsApp", `Atención en ${siteConfig.locality}, ${siteConfig.department}`].map(
                  (t) => (
                    <li key={t} className="flex items-center gap-3">
                      <span aria-hidden className="h-2 w-2 rounded-full bg-maiz-400" />
                      {t}
                    </li>
                  ),
                )}
              </ul>
              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <AddToConsulta id={c.id} name={c.name} channel={c.channel} href={categoryPath(c.id)} withQuantity />
              </div>
            </div>
          </div>
        )}
      </Container>

      <RelatedCategories currentId={c.id} area={c.area} />
      <ContactBand
        title={`¿Buscás algo de ${c.name.toLowerCase()}?`}
        text="Escribinos con el nombre del producto y te decimos si lo tenemos."
        message={categoryMessage(c.name)}
        primary={c.channel}
      />
    </>
  );
}
