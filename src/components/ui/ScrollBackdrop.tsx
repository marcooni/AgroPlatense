"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

/**
 * Fondo de la fachada que acompaña el scroll: queda fijo (sticky) mientras
 * se recorre el hero; la imagen se acerca hacia la puerta y se oscurece
 * para que el texto siempre contraste. Con "reducir movimiento" queda quieta.
 */
export function ScrollBackdrop() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const section = el?.closest("section");
    if (!el || !section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = section.getBoundingClientRect();
      const span = Math.max(1, r.height - window.innerHeight);
      const p = Math.min(1, Math.max(0, -r.top / span));
      el.style.setProperty("--p", p.toFixed(3));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10">
      <div ref={ref} className="sticky top-0 h-svh overflow-hidden bg-campo-950" style={{ ["--p" as string]: 0 }}>
        <Image
          src="/images/fachada.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_45%] will-change-transform"
          style={{
            transform: "scale(calc(1 + var(--p) * 0.35))",
            transformOrigin: "48% 62%",
          }}
        />
        <div
          className="absolute inset-0 bg-campo-950"
          style={{ opacity: "calc(0.15 + var(--p) * 0.6)" }}
        />
        <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-campo-950 via-campo-950/70 to-transparent" />
      </div>
    </div>
  );
}
