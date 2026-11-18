import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories, categoryPath } from "@/data/catalog";
import { CategoryIcon } from "@/components/ui/CategoryIcon";
import { Container } from "@/components/ui/Container";

/** Otras categorías del mismo rubro, para seguir explorando. */
export function RelatedCategories({ currentId, area }: { currentId: string; area: string }) {
  const related = categories.filter((c) => c.area === area && c.id !== currentId).slice(0, 4);
  if (!related.length) return null;
  return (
    <Container as="section" className="pb-20">
      <h2 className="text-2xl font-semibold md:text-3xl">Seguí explorando</h2>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {related.map((c) => (
          <li key={c.id}>
            <Link
              href={categoryPath(c.id)}
              className="group flex h-full items-center gap-4 rounded-2xl border border-leche-200 bg-white p-4 transition-[border-color,box-shadow] duration-200 hover:border-hoja-300 hover:shadow-lg"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-leche-100 text-hoja-600">
                <CategoryIcon id={c.id} size={28} />
              </span>
              <span className="flex-1 font-semibold">{c.name}</span>
              <ArrowRight
                size={18}
                aria-hidden
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
