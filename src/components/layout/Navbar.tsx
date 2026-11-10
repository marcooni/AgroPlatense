"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { siteConfig, buildWhatsappLink, defaultWhatsappMessage } from "@/data/site-config";
import { Menu, X, Phone, MessageSquare, MapPin } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Empresa", href: "#empresa" },
    { name: "Productos", href: "#productos" },
    { name: "Industria Láctea", href: "#industria-lactea" },
    { name: "Novedades", href: "#novedades" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <>
      {/* Top Bar Informativa Superior */}
      <div className="bg-[#1b5e20] text-white text-xs py-2 px-4 hidden md:block border-b border-emerald-800 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 font-medium text-emerald-50">
              <MapPin className="w-3.5 h-3.5 text-amber-300" />
              {siteConfig.contact.city}, {siteConfig.contact.department} — Uruguay
            </span>
            <span className="text-emerald-300/40">•</span>
            <span className="text-emerald-100 font-medium tracking-wide">
              Horario: Lun a Vie 08:00 a 12:00 y 14:00 a 18:30 | Sáb 08:00 a 12:30
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="text-emerald-100 hover:text-white transition-colors flex items-center gap-1.5 font-medium"
            >
              <Phone className="w-3 h-3 text-amber-300" />
              {siteConfig.contact.phone}
            </a>
            <span className="text-emerald-300/40">•</span>
            <a
              href={buildWhatsappLink(defaultWhatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-200 hover:text-white font-bold flex items-center gap-1.5 transition-colors"
            >
              <MessageSquare className="w-3 h-3" />
              WhatsApp: {siteConfig.contact.whatsappDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar con fondo blanco ultra limpio y logo escalado nítido */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/98 backdrop-blur-md shadow-md py-2 border-b border-stone-200"
            : "bg-white shadow-xs py-3 border-b border-stone-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Oficial AGROPLATENSE (Aspect ratio 934x237 ~ 3.94:1) */}
            <a href="#inicio" className="flex items-center gap-3.5 group">
              <div className="relative h-12 w-48 sm:h-14 sm:w-56 flex items-center">
                <Image
                  src="/images/logo_transparent.png"
                  alt="AGROPLATENSE - Lideramos el Agro"
                  fill
                  className="object-contain object-left group-hover:scale-102 transition-transform duration-200"
                  priority
                />
              </div>
              <div className="hidden xl:flex flex-col border-l border-stone-200 pl-3.5 py-0.5">
                <span className="text-[11px] font-black text-emerald-800 uppercase tracking-widest leading-none">
                  Ecilda Paullier
                </span>
                <span className="text-[10px] text-stone-500 font-semibold tracking-wider uppercase mt-1">
                  San José · Uruguay
                </span>
              </div>
            </a>

            {/* Navegación Desktop */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-bold text-stone-700 hover:text-emerald-700 transition-colors py-1 relative group tracking-tight"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Botón CTA Comercial */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={buildWhatsappLink("Hola, quisiera realizar una consulta comercial.")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl shadow-xs hover:shadow-md flex items-center gap-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageSquare className="w-4 h-4 text-emerald-100" />
                <span>Consultar</span>
              </a>
            </div>

            {/* Mobile Toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-stone-700 p-2 rounded-lg hover:bg-stone-100 transition-colors"
                aria-label="Abrir menú de navegación"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in fade-in slide-in-from-top-2">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-bold text-stone-700 hover:bg-emerald-50 hover:text-emerald-800 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-3 border-t border-stone-200 mt-2">
              <a
                href={buildWhatsappLink(defaultWhatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm py-3 px-4 rounded-xl shadow-xs transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Contactar por WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
