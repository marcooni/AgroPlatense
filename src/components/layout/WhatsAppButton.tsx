"use client";

import React, { useState, useEffect } from "react";
import { siteConfig, buildWhatsappLink, defaultWhatsappMessage } from "@/data/site-config";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Retardo suave para entrada tras carga inicial
    const timer = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <aside
      aria-label="Atención al cliente por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center group animate-fade-in"
    >
      {/* Tooltip comercial descriptivo en desktop */}
      <span className="hidden sm:inline-block mr-3 px-3.5 py-1.5 bg-stone-900/90 text-white text-xs font-semibold rounded-full shadow-lg border border-stone-700/60 transition-all opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 duration-200 pointer-events-none">
        Consultas comerciales inmediatas
      </span>

      <a
        href={buildWhatsappLink(defaultWhatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 relative border-2 border-emerald-300/40"
        aria-label="Contactar a AGROPLATENSE vía WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-400 rounded-full border-2 border-[#14391c] animate-pulse" />
        <MessageCircle className="w-7 h-7" />
      </a>
    </aside>
  );
}
