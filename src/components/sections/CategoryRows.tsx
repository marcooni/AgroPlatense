import Image from "next/image";
import { MessageCircle } from "lucide-react";
import type { Category, Product } from "@/data/catalog";
import { categoryMessage, productMessage, waLink } from "@/lib/whatsapp";

/**
 * Filas de categoría (no tarjetas): nombre, descripción y consulta directa.
 * Si hay productos cargados en data/catalog.ts, se listan debajo de su categoría.
 */
export function CategoryRows({
  categories,
  products = [],
  headingLevel = 3,
}: {
  categories: Category[];
  products?: Product[];
  headingLevel?: 2 | 3;
}) {
  const H = `h${headingLevel}` as "h2" | "h3";
  return (
    <ul className="divide-y divide-leche-200 border-y border-leche-200">
      {categories.map((c) => {
        const items = products.filter((p) => p.category === c.id);
        return (
          <li key={c.id} id={c.id} className="scroll-mt-28 py-8 md:py-10">
            <div className="grid gap-6 md:grid-cols-12 md:items-center">
              <H className="text-2xl font-semibold md:col-span-5 md:text-3xl">{c.name}</H>
              <p className="text-tinta-soft md:col-span-4">{c.summary}</p>
              <div className="md:col-span-3 md:justify-self-end">
                <a
                  href={waLink(c.channel, categoryMessage(c.name))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-wa px-5 font-semibold text-wa transition-colors duration-200 hover:bg-wa hover:text-white"
                >
                  <MessageCircle size={18} aria-hidden /> Consultar
                  <span className="sr-only"> por {c.name} (se abre en una pestaña nueva)</span>
                </a>
              </div>
            </div>
            {items.length > 0 && (
              <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((p) => (
                  <li key={p.id} className="flex flex-col">
                    {p.image && (
                      <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-leche-100">
                        <Image
                          src={p.image}
                          alt={p.name}
                          fill
                          sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 100vw"
                          className="object-cover"
                        />
                      </div>
                    )}
                    <h4 className="mt-3 text-lg font-semibold">{p.name}</h4>
                    {p.brand && <p className="text-sm text-tinta-soft">Marca: {p.brand}</p>}
                    {p.description && <p className="mt-1 text-tinta-soft">{p.description}</p>}
                    <a
                      href={waLink(c.channel, productMessage(p.name))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex min-h-11 items-center gap-2 font-semibold text-wa hover:underline"
                    >
                      <MessageCircle size={18} aria-hidden /> Consultar disponibilidad
                      <span className="sr-only"> de {p.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
}
