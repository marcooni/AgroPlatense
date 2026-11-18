"use client";

import { useState } from "react";
import { Check, Minus, Plus, ClipboardPlus } from "lucide-react";
import type { Channel } from "@/data/catalog";
import { consulta, useConsulta } from "@/lib/consulta";
import { openConsulta } from "@/components/cart/ConsultaDrawer";
import { cn } from "@/lib/utils";

type Props = {
  id: string;
  name: string;
  channel: Channel;
  href: string;
  presentations?: string[];
  /** Muestra selector de cantidad (detalle de producto). */
  withQuantity?: boolean;
  compact?: boolean;
  /** Botón redondo solo con ícono (tarjetas). */
  iconOnly?: boolean;
  className?: string;
};

/** Agrega a "Mi consulta". En el detalle permite elegir presentación y cantidad. */
export function AddToConsulta({
  id,
  name,
  channel,
  href,
  presentations,
  withQuantity,
  compact,
  iconOnly,
  className,
}: Props) {
  const items = useConsulta();
  const [qty, setQty] = useState(1);
  const [pres, setPres] = useState(presentations?.[0]);
  const [justAdded, setJustAdded] = useState(false);

  const key = pres ? `${id}::${pres}` : id;
  const inList = items.find((i) => i.key === key);

  function add() {
    consulta.add({ key, name, channel, href, detail: pres, qty });
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1800);
    if (withQuantity) openConsulta();
  }

  return (
    <div className={cn("space-y-4", className)}>
      {presentations && presentations.length > 0 && (
        <fieldset>
          <legend className="mb-2 text-sm font-semibold">Presentación</legend>
          <div className="flex flex-wrap gap-2">
            {presentations.map((p) => (
              <label key={p} className="cursor-pointer">
                <input
                  type="radio"
                  name={`pres-${id}`}
                  value={p}
                  checked={pres === p}
                  onChange={() => setPres(p)}
                  className="peer sr-only"
                />
                <span className="inline-flex min-h-11 items-center rounded-full border-2 border-leche-200 bg-white px-4 font-semibold transition-colors peer-checked:border-campo-900 peer-checked:bg-campo-900 peer-checked:text-white peer-focus-visible:outline peer-focus-visible:outline-[3px] peer-focus-visible:outline-offset-2 peer-focus-visible:outline-maiz-400">
                  {p}
                </span>
              </label>
            ))}
          </div>
        </fieldset>
      )}

      <div className="flex flex-wrap items-center gap-3">
        {withQuantity && (
          <div className="flex items-center rounded-full border-2 border-leche-200 bg-white">
            <button
              type="button"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              aria-label="Menos cantidad"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full hover:bg-leche-100"
            >
              <Minus size={18} aria-hidden />
            </button>
            <span className="w-8 text-center font-semibold tabular-nums" aria-live="polite">
              {qty}
            </span>
            <button
              type="button"
              onClick={() => setQty((q) => Math.min(999, q + 1))}
              aria-label="Más cantidad"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full hover:bg-leche-100"
            >
              <Plus size={18} aria-hidden />
            </button>
          </div>
        )}
        <button
          type="button"
          onClick={add}
          className={cn(
            "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-[transform,background-color,color] duration-200 active:scale-[0.97]",
            iconOnly ? "h-11 w-11" : compact ? "min-h-11 px-4" : "min-h-12 px-6",
            justAdded
              ? "bg-hoja-600 text-white"
              : "bg-maiz-400 text-campo-950 hover:bg-maiz-300",
          )}
          {...(iconOnly ? { "aria-label": `Agregar ${name} a mi consulta`, title: "Agregar a mi consulta" } : {})}
        >
          {justAdded ? <Check size={18} aria-hidden /> : <ClipboardPlus size={18} aria-hidden />}
          {!iconOnly &&
            (justAdded ? "Agregado" : inList ? `Agregar otro (${inList.qty})` : "Agregar a mi consulta")}
        </button>
      </div>
      <span role="status" className="sr-only">
        {justAdded ? `${name} agregado a mi consulta` : ""}
      </span>
    </div>
  );
}
