import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; href?: string };

export function Breadcrumb({ items, className = "" }: { items: Crumb[]; className?: string }) {
  return (
    <nav aria-label="Ruta de navegación" className={className}>
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        {items.map((c, i) => (
          <li key={c.label} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight size={14} aria-hidden className="opacity-60" />}
            {c.href ? (
              <Link href={c.href} className="underline-offset-4 hover:underline">
                {c.label}
              </Link>
            ) : (
              <span aria-current="page" className="font-semibold">
                {c.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
