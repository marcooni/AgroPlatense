"use client";

import { useId, useMemo, useState } from "react";
import { MessageCircle, Search, X } from "lucide-react";
import { areas, categories, products, type AreaId } from "@/data/catalog";
import { normalize, cn } from "@/lib/utils";
import { waLink } from "@/lib/whatsapp";
import { CategoryRows } from "@/components/sections/CategoryRows";
import { ButtonLink } from "@/components/ui/ButtonLink";

type Filter = "todas" | AreaId;

const filters: { id: Filter; label: string }[] = [
  { id: "todas", label: "Todas" },
  { id: "agropecuario", label: areas.agropecuario.name },
  { id: "lacteo", label: areas.lacteo.name },
  { id: "ferreteria", label: areas.ferreteria.name },
];

export function ProductExplorer() {
  const inputId = useId();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("todas");

  const { visibleCategories, visibleProducts } = useMemo(() => {
    const q = normalize(query);
    const inArea = categories.filter((c) => filter === "todas" || c.area === filter);
    if (!q) return { visibleCategories: inArea, visibleProducts: products };

    const matchedProducts = products.filter((p) =>
      normalize([p.name, p.brand, p.description].filter(Boolean).join(" ")).includes(q),
    );
    const cats = inArea.filter(
      (c) =>
        normalize([c.name, c.summary, ...c.keywords].join(" ")).includes(q) ||
        matchedProducts.some((p) => p.category === c.id),
    );
    return { visibleCategories: cats, visibleProducts: matchedProducts };
  }, [query, filter]);

  const count = visibleCategories.length;

  return (
    <div>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="w-full lg:max-w-md">
          <label htmlFor={inputId} className="mb-2 block font-semibold">
            Buscar una categoría
          </label>
          <div className="relative">
            <Search
              size={20}
              aria-hidden
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-tinta-soft"
            />
            <input
              id={inputId}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ej: semillas, leche en polvo, alambrado"
              autoComplete="off"
              className="min-h-12 w-full rounded-full border-2 border-leche-200 bg-white py-3 pl-12 pr-12 text-base placeholder:text-tinta-soft/70 focus:border-hoja-600 focus:outline-none"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Borrar búsqueda"
                className="absolute right-1.5 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-tinta-soft hover:bg-leche-100"
              >
                <X size={18} aria-hidden />
              </button>
            )}
          </div>
        </div>

        <div role="group" aria-label="Filtrar por área" className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
              className={cn(
                "min-h-11 rounded-full border-2 px-5 font-semibold transition-colors duration-200",
                filter === f.id
                  ? "border-campo-900 bg-campo-900 text-white"
                  : "border-leche-200 bg-white text-campo-900 hover:border-campo-900",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <p role="status" aria-live="polite" className="mt-6 text-sm text-tinta-soft">
        {count === 1 ? "1 categoría" : `${count} categorías`}
        {query && ` para “${query}”`}
      </p>

      <div className="mt-4">
        {count > 0 ? (
          <CategoryRows categories={visibleCategories} products={visibleProducts} headingLevel={2} />
        ) : (
          <div className="rounded-2xl bg-leche-100 p-8 md:p-10">
            <h2 className="text-2xl font-semibold">No encontramos “{query}” en las categorías</h2>
            <p className="mt-3 max-w-xl text-tinta-soft">
              Puede que igual lo tengamos. Escribinos y lo consultamos, o probá con otra palabra.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                href={waLink("especializado", `Hola, estoy buscando "${query}". ¿Lo tienen disponible?`)}
                external
                variant="whatsapp"
              >
                <MessageCircle size={20} aria-hidden /> Consultar por WhatsApp
              </ButtonLink>
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setFilter("todas");
                }}
                className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-campo-800 px-6 font-semibold text-campo-900 hover:bg-campo-900 hover:text-white"
              >
                Ver todas las categorías
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
