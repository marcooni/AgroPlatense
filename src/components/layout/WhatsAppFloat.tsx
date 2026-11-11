"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { waLink } from "@/lib/whatsapp";

/**
 * Hay dos números (industria láctea/insumos/malla y otras consultas), así que
 * el botón abre una lista corta para elegir el correcto en un toque.
 */
export function WhatsAppFloat() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const { especializado, general } = siteConfig.whatsapp;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  const options = [
    { key: "especializado" as const, ...especializado },
    { key: "general" as const, ...general },
  ];

  return (
    <div
      ref={rootRef}
      className="fixed right-4 z-50 flex flex-col items-end gap-3 sm:right-6"
      style={{ bottom: "max(1rem, env(safe-area-inset-bottom))" }}
    >
      {open && (
        <div
          id="wa-opciones"
          role="group"
          aria-label="Elegí con quién hablar por WhatsApp"
          className="w-[min(20rem,calc(100vw-2rem))] rounded-2xl bg-white p-2 shadow-2xl ring-1 ring-black/10"
        >
          {options.map((o) => (
            <a
              key={o.key}
              href={waLink(o.key)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-14 flex-col justify-center rounded-xl px-4 py-2 hover:bg-leche-100"
            >
              <span className="font-semibold text-campo-900">{o.label}</span>
              <span className="text-sm text-tinta-soft">{o.display}</span>
              <span className="sr-only"> (se abre en una pestaña nueva)</span>
            </a>
          ))}
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="wa-opciones"
        className="inline-flex h-14 items-center gap-2.5 rounded-full bg-wa px-5 font-semibold text-white shadow-xl transition-[transform,background-color] duration-200 hover:bg-wa-hover active:scale-95"
      >
        {open ? <X size={24} aria-hidden /> : <MessageCircle size={24} aria-hidden />}
        <span>{open ? "Cerrar" : "WhatsApp"}</span>
      </button>
    </div>
  );
}
