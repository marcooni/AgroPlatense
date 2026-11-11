import Image from "next/image";
import { ImageIcon, MessageCircle } from "lucide-react";
import type { Category, Product } from "@/data/catalog";
import { categoryMessage, productMessage, waLink } from "@/lib/whatsapp";

function Thumb({ src, alt }: { src?: string; alt: string }) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden bg-leche-100">
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width:1024px) 25vw, (min-width:640px) 45vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      ) : (
        <div aria-hidden className="flex h-full items-center justify-center text-leche-200">
          <ImageIcon size={48} strokeWidth={1.5} />
        </div>
      )}
    </div>
  );
}

const consult =
  "inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-wa px-4 font-semibold text-wa transition-colors duration-200 hover:bg-wa hover:text-white";

/**
 * Categorías como tarjetas (imagen, nombre, descripción, consulta por WhatsApp).
 * Los productos cargados en data/catalog.ts aparecen como tarjetas debajo.
 * Las imágenes se toman de public/images/productos/<id>.<ext> (ver LEEME.txt).
 */
export function CategoryRows({
  categories,
  products = [],
  images = {},
  headingLevel = 3,
}: {
  categories: Category[];
  products?: Product[];
  images?: Record<string, string>;
  headingLevel?: 2 | 3;
}) {
  const H = `h${headingLevel}` as "h2" | "h3";
  const withProducts = categories.filter((c) => products.some((p) => p.category === c.id));
  return (
    <>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categories.map((c) => (
          <li
            key={c.id}
            id={c.id}
            className="group flex scroll-mt-28 flex-col overflow-hidden rounded-2xl border border-leche-200 bg-white transition-shadow duration-200 hover:shadow-lg"
          >
            <Thumb src={images[c.id]} alt={c.name} />
            <div className="flex flex-1 flex-col p-5">
              <H className="text-xl font-semibold">{c.name}</H>
              <p className="mt-2 flex-1 text-tinta-soft">{c.summary}</p>
              <a
                href={waLink(c.channel, categoryMessage(c.name))}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-5 self-start ${consult}`}
              >
                <MessageCircle size={18} aria-hidden /> Consultar
                <span className="sr-only"> por {c.name} (se abre en una pestaña nueva)</span>
              </a>
            </div>
          </li>
        ))}
      </ul>

      {withProducts.map((c) => (
        <section key={c.id} aria-label={`Productos de ${c.name}`} className="mt-14">
          <h3 className="text-2xl font-semibold">{c.name}</h3>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products
              .filter((p) => p.category === c.id)
              .map((p) => (
                <li
                  key={p.id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-leche-200 bg-white transition-shadow duration-200 hover:shadow-lg"
                >
                  <Thumb src={p.image ?? images[p.id]} alt={p.name} />
                  <div className="flex flex-1 flex-col p-5">
                    <h4 className="text-lg font-semibold">{p.name}</h4>
                    {p.brand && <p className="text-sm text-tinta-soft">Marca: {p.brand}</p>}
                    {p.description && <p className="mt-2 flex-1 text-tinta-soft">{p.description}</p>}
                    <a
                      href={waLink(c.channel, productMessage(p.name))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-5 self-start ${consult}`}
                    >
                      <MessageCircle size={18} aria-hidden /> Consultar
                      <span className="sr-only"> disponibilidad de {p.name} (se abre en una pestaña nueva)</span>
                    </a>
                  </div>
                </li>
              ))}
          </ul>
        </section>
      ))}
    </>
  );
}
