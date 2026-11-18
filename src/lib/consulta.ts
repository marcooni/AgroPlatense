"use client";

import { useSyncExternalStore } from "react";
import type { Channel } from "@/data/catalog";
import { siteConfig } from "@/data/site-config";

/**
 * "Mi consulta": lista de productos/categorías que la persona arma y envía
 * en un solo mensaje de WhatsApp. Se guarda en localStorage (sin backend).
 */
export type ConsultaItem = {
  key: string; // id único: categoría o categoría/producto[/presentación]
  name: string;
  channel: Channel;
  qty: number;
  detail?: string; // presentación elegida
  href: string;
};

const STORAGE_KEY = "agroplatense:consulta:v1";
const EMPTY: ConsultaItem[] = [];

let items: ConsultaItem[] = EMPTY;
let loaded = false;
const listeners = new Set<() => void>();

function load() {
  if (loaded || typeof window === "undefined") return;
  loaded = true;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    if (Array.isArray(parsed)) items = parsed.filter((i) => i && typeof i.key === "string");
  } catch {
    /* almacenamiento bloqueado: la lista funciona solo en esta pestaña */
  }
}

function commit(next: ConsultaItem[]) {
  items = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    /* ignorar */
  }
  listeners.forEach((l) => l());
}

function subscribe(cb: () => void) {
  load();
  listeners.add(cb);
  const onStorage = (e: StorageEvent) => {
    if (e.key !== STORAGE_KEY) return;
    try {
      items = e.newValue ? JSON.parse(e.newValue) : EMPTY;
    } catch {
      items = EMPTY;
    }
    cb();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", onStorage);
  };
}

const getSnapshot = () => {
  load();
  return items;
};
const getServerSnapshot = () => EMPTY;

export function useConsulta() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export const consulta = {
  add(item: Omit<ConsultaItem, "qty"> & { qty?: number }) {
    load();
    const qty = Math.max(1, item.qty ?? 1);
    const found = items.find((i) => i.key === item.key);
    commit(
      found
        ? items.map((i) => (i.key === item.key ? { ...i, qty: Math.min(999, i.qty + qty) } : i))
        : [...items, { ...item, qty }],
    );
  },
  setQty(key: string, qty: number) {
    commit(items.map((i) => (i.key === key ? { ...i, qty: Math.min(999, Math.max(1, qty)) } : i)));
  },
  remove(key: string) {
    commit(items.filter((i) => i.key !== key));
  },
  clear() {
    commit(EMPTY);
  },
};

/** Un mensaje por canal de WhatsApp (cada número atiende rubros distintos). */
export function buildMessages(list: ConsultaItem[]) {
  const channels: Channel[] = ["especializado", "general"];
  return channels
    .map((channel) => {
      const group = list.filter((i) => i.channel === channel);
      if (!group.length) return null;
      const lines = group.map(
        (i) => `• ${i.name}${i.detail ? ` (${i.detail})` : ""} × ${i.qty}`,
      );
      const text = [
        "Hola, quisiera consultar disponibilidad y precio de:",
        ...lines,
        "",
        "Consulta armada desde la web de AGROPLATENSE.",
      ].join("\n");
      const { number, label } = siteConfig.whatsapp[channel];
      return {
        channel,
        label,
        count: group.length,
        href: `https://wa.me/${number}?text=${encodeURIComponent(text)}`,
      };
    })
    .filter((m): m is NonNullable<typeof m> => m !== null);
}
