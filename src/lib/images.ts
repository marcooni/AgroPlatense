import { readdirSync } from "node:fs";
import path from "node:path";

/** Imágenes subidas a public/images/productos, indexadas por nombre sin extensión. */
export function productImages(): Record<string, string> {
  const dir = path.join(process.cwd(), "public", "images", "productos");
  try {
    return Object.fromEntries(
      readdirSync(dir)
        .filter((f) => /\.(webp|jpe?g|png|avif)$/i.test(f))
        .map((f) => [f.replace(/\.[^.]+$/, ""), `/images/productos/${f}`]),
    );
  } catch {
    return {};
  }
}
