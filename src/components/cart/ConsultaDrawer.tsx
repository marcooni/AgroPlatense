"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ClipboardList, MessageCircle, Minus, Plus, Trash2, X } from "lucide-react";
import { buildMessages, consulta, useConsulta } from "@/lib/consulta";

const OPEN_EVENT = "consulta:open";

/** Abre el panel desde cualquier lugar (por ejemplo, al agregar un producto). */
export const openConsulta = () => window.dispatchEvent(new Event(OPEN_EVENT));

/** Botón del encabezado con contador. */
export function ConsultaButton({ className = "" }: { className?: string }) {
  const items = useConsulta();
  const total = items.reduce((n, i) => n + i.qty, 0);
  return (
    <button
      type="button"
      onClick={openConsulta}
      aria-label={total ? `Mi consulta, ${total} ${total === 1 ? "ítem" : "ítems"}` : "Mi consulta, vacía"}
      className={`relative inline-flex h-11 w-11 items-center justify-center rounded-lg text-campo-900 hover:bg-leche-100 ${className}`}
    >
      <ClipboardList size={24} aria-hidden />
      {total > 0 && (
        <span
          aria-hidden
          className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-maiz-400 px-1 text-xs font-bold text-campo-950"
        >
          {total > 99 ? "99+" : total}
        </span>
      )}
    </button>
  );
}

/** Panel lateral con la lista y el envío por WhatsApp. */
export function ConsultaDrawer() {
  const items = useConsulta();
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const messages = buildMessages(items);

  useEffect(() => {
    const onOpen = () => {
      lastFocus.current = document.activeElement as HTMLElement | null;
      setOpen(true);
    };
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function close() {
    setOpen(false);
    lastFocus.current?.focus();
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-labelledby="consulta-titulo">
      <button
        type="button"
        aria-label="Cerrar mi consulta"
        tabIndex={-1}
        onClick={close}
        className="absolute inset-0 animate-[fade-in_0.2s_ease-out] bg-campo-950/60 backdrop-blur-[2px]"
      />
      <aside className="absolute inset-y-0 right-0 flex w-full max-w-md animate-[slide-in_0.35s_var(--ease-out-soft)] flex-col bg-leche-50 shadow-2xl">
        <header className="flex items-center justify-between border-b border-leche-200 px-5 py-4">
          <h2 id="consulta-titulo" className="text-2xl font-semibold">
            Mi consulta
          </h2>
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            aria-label="Cerrar"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg hover:bg-leche-100"
          >
            <X size={24} aria-hidden />
          </button>
        </header>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
            <ClipboardList size={48} strokeWidth={1.25} aria-hidden className="text-hoja-600" />
            <p className="text-lg font-semibold">Todavía no agregaste nada</p>
            <p className="text-tinta-soft">
              Sumá productos o categorías y enviá todo en un único mensaje de WhatsApp.
            </p>
            <Link
              href="/productos"
              onClick={close}
              className="inline-flex min-h-12 items-center rounded-full bg-maiz-400 px-6 font-semibold text-campo-950 hover:bg-maiz-300"
            >
              Ver productos
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-leche-200 overflow-y-auto px-5">
              {items.map((i) => (
                <li key={i.key} className="flex items-center gap-3 py-4">
                  <div className="min-w-0 flex-1">
                    <Link href={i.href} onClick={close} className="block truncate font-semibold hover:text-hoja-600">
                      {i.name}
                    </Link>
                    {i.detail && <p className="truncate text-sm text-tinta-soft">{i.detail}</p>}
                  </div>
                  <div className="flex items-center rounded-full border-2 border-leche-200 bg-white">
                    <button
                      type="button"
                      onClick={() => (i.qty > 1 ? consulta.setQty(i.key, i.qty - 1) : consulta.remove(i.key))}
                      aria-label={`Quitar una unidad de ${i.name}`}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-leche-100"
                    >
                      <Minus size={16} aria-hidden />
                    </button>
                    <span className="w-7 text-center font-semibold tabular-nums" aria-live="polite">
                      {i.qty}
                    </span>
                    <button
                      type="button"
                      onClick={() => consulta.setQty(i.key, i.qty + 1)}
                      aria-label={`Agregar una unidad de ${i.name}`}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-leche-100"
                    >
                      <Plus size={16} aria-hidden />
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => consulta.remove(i.key)}
                    aria-label={`Eliminar ${i.name}`}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full text-tinta-soft hover:bg-leche-100 hover:text-red-700"
                  >
                    <Trash2 size={18} aria-hidden />
                  </button>
                </li>
              ))}
            </ul>

            <footer className="space-y-3 border-t border-leche-200 bg-white px-5 py-5">
              {messages.length > 1 && (
                <p className="text-sm text-tinta-soft">
                  Tu consulta se divide en dos mensajes, porque cada número atiende rubros distintos.
                </p>
              )}
              {messages.map((m) => (
                <a
                  key={m.channel}
                  href={m.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-wa px-6 py-3 font-semibold text-white transition-colors hover:bg-wa-hover"
                >
                  <MessageCircle size={20} aria-hidden />
                  {messages.length > 1 ? `Enviar: ${m.label}` : "Enviar por WhatsApp"}
                  <span className="sr-only"> (se abre en una pestaña nueva)</span>
                </a>
              ))}
              <button
                type="button"
                onClick={() => consulta.clear()}
                className="w-full py-2 text-sm font-semibold text-tinta-soft underline-offset-4 hover:underline"
              >
                Vaciar la lista
              </button>
            </footer>
          </>
        )}
      </aside>
    </div>
  );
}
