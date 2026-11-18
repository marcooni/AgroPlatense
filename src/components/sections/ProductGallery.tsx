"use client";

import { useState } from "react";
import Image from "next/image";
import { CategoryIcon } from "@/components/ui/CategoryIcon";
import { cn } from "@/lib/utils";

/** Imagen principal con miniaturas. Sin fotos, muestra el ícono de la categoría. */
export function ProductGallery({
  images,
  name,
  categoryId,
}: {
  images: string[];
  name: string;
  categoryId: string;
}) {
  const [active, setActive] = useState(0);

  return (
    <div className="space-y-3">
      <div className="relative aspect-square overflow-hidden rounded-3xl border border-leche-200 bg-gradient-to-br from-leche-100 to-leche-200">
        {images.length > 0 ? (
          <Image
            key={images[active]}
            src={images[active]}
            alt={name}
            fill
            priority
            unoptimized={/^https?:/.test(images[active])}
            sizes="(min-width:1024px) 50vw, 100vw"
            className="animate-[fade-in_0.3s_ease-out] object-cover"
          />
        ) : (
          <div aria-hidden className="flex h-full items-center justify-center text-hoja-600/50">
            <CategoryIcon id={categoryId} size={120} />
          </div>
        )}
      </div>
      {images.length > 1 && (
        <ul className="flex gap-3 overflow-x-auto" aria-label="Fotos del producto">
          {images.map((src, i) => (
            <li key={src}>
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Ver foto ${i + 1} de ${images.length}`}
                aria-current={i === active}
                className={cn(
                  "relative block h-20 w-20 overflow-hidden rounded-xl border-2 transition-colors",
                  i === active ? "border-campo-900" : "border-leche-200 hover:border-hoja-300",
                )}
              >
                <Image src={src} alt="" fill sizes="80px" unoptimized={/^https?:/.test(src)} className="object-cover" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
