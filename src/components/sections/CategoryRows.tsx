import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  categoryPath,
  formatPrice,
  getCategory,
  productPath,
  productsOf,
  type Category,
  type Product,
} from "@/data/catalog";
import { AddToConsulta } from "@/components/cart/AddToConsulta";
import { CategoryIcon } from "@/components/ui/CategoryIcon";

export function Thumb({
  src,
  alt,
  categoryId,
  priority,
  sizes = "(min-width:1280px) 25vw, (min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw",
}: {
  src?: string;
  alt: string;
  categoryId: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-leche-100 to-leche-200">
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:scale-[1.05]"
        />
      ) : (
        <div
          aria-hidden
          className="flex h-full items-center justify-center text-hoja-600/60 transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:scale-110"
        >
          <CategoryIcon id={categoryId} size={64} />
        </div>
      )}
    </div>
  );
}

const card =
  "reveal group relative flex flex-col overflow-hidden rounded-2xl border border-leche-200 bg-white transition-[box-shadow,transform,border-color] duration-300 hover:-translate-y-1 hover:border-hoja-300 hover:shadow-xl";

export function CategoryCard({
  category: c,
  image,
  priority,
}: {
  category: Category;
  image?: string;
  priority?: boolean;
}) {
  const count = productsOf(c.id).length;
  return (
    <li id={c.id} className={`${card} scroll-mt-28`}>
      <Thumb src={image} alt="" categoryId={c.id} priority={priority} />
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-semibold">
          <Link href={categoryPath(c.id)} className="after:absolute after:inset-0 after:content-['']">
            {c.name}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-tinta-soft">{c.summary}</p>
        <div className="mt-5 flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1 font-semibold text-hoja-600">
            {count > 0 ? `Ver ${count} ${count === 1 ? "producto" : "productos"}` : "Ver detalle"}
            <ArrowUpRight
              size={18}
              aria-hidden
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </span>
          <div className="relative z-10">
            <AddToConsulta
              id={c.id}
              name={c.name}
              channel={c.channel}
              href={categoryPath(c.id)}
              compact
              iconOnly
            />
          </div>
        </div>
      </div>
    </li>
  );
}

export function ProductCard({
  product: p,
  image,
  priority,
}: {
  product: Product;
  image?: string;
  priority?: boolean;
}) {
  const channel = getCategory(p.category)?.channel ?? "especializado";
  return (
    <li className={card}>
      <Thumb src={p.image ?? image} alt="" categoryId={p.category} priority={priority} />
      {p.featured && (
        <span className="absolute left-3 top-3 rounded-full bg-maiz-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-campo-950">
          Destacado
        </span>
      )}
      <div className="flex flex-1 flex-col p-5">
        {p.brand && <p className="text-sm font-semibold uppercase tracking-wide text-hoja-600">{p.brand}</p>}
        <h3 className="text-lg font-semibold">
          <Link href={productPath(p)} className="after:absolute after:inset-0 after:content-['']">
            {p.name}
          </Link>
        </h3>
        {p.description && <p className="mt-2 line-clamp-2 flex-1 text-tinta-soft">{p.description}</p>}
        <div className="mt-5 flex items-center justify-between gap-3">
          <span className="font-semibold">
            {p.price ? (
              <>
                {formatPrice(p.price)}
                {p.priceUnit && <span className="text-sm font-normal text-tinta-soft"> {p.priceUnit}</span>}
              </>
            ) : (
              <span className="text-tinta-soft">Consultar precio</span>
            )}
          </span>
          <div className="relative z-10">
            <AddToConsulta
              id={`${p.category}/${p.id}`}
              name={p.name}
              channel={channel}
              href={productPath(p)}
              compact
              iconOnly
            />
          </div>
        </div>
      </div>
    </li>
  );
}

/**
 * Categorías como tarjetas que llevan a su página de detalle. Los productos
 * cargados en data/catalog.ts aparecen como tarjetas debajo, con su propio detalle.
 */
export function CategoryRows({
  categories,
  products = [],
  images = {},
}: {
  categories: Category[];
  products?: Product[];
  images?: Record<string, string>;
  headingLevel?: 2 | 3;
}) {
  const withProducts = categories.filter((c) => products.some((p) => p.category === c.id));
  return (
    <>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categories.map((c, i) => (
          <CategoryCard key={c.id} category={c} image={images[c.id]} priority={i < 4} />
        ))}
      </ul>

      {withProducts.map((c) => (
        <section key={c.id} aria-label={`Productos de ${c.name}`} className="mt-14">
          <h3 className="text-2xl font-semibold">{c.name}</h3>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products
              .filter((p) => p.category === c.id)
              .map((p) => (
                <ProductCard key={p.id} product={p} image={images[p.id]} />
              ))}
          </ul>
        </section>
      ))}
    </>
  );
}
