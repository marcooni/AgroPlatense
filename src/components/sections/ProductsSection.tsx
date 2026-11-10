"use client";

import React, { useState, useMemo } from "react";
import { categories, products } from "@/data/products";
import {
  buildWhatsappLink,
  isSpecialtyWhatsappInquiry,
  siteConfig,
} from "@/data/site-config";
import SectionTag from "@/components/ui/SectionTag";
import {
  MessageSquare,
  Search,
  Tag,
  Sparkles,
  Filter,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

export default function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory =
        selectedCategory === "all" || p.category === selectedCategory;
      const matchesSearch =
        searchTerm.trim() === "" ||
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (p.tags && p.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase())));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <section id="productos" className="py-24 bg-[#f4f7f4] text-stone-900 border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado Principal */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <SectionTag variant="green" className="mb-3">
              <Tag className="w-3.5 h-3.5" />
              Catálogo Especializado
            </SectionTag>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-emerald-950 tracking-tight">
              Nuestras Líneas de Productos
            </h2>
            <p className="text-stone-600 mt-2 max-w-2xl text-base">
              Explore los suministros e insumos para su establecimiento. Puede filtrar por sector o buscar el insumo que necesita y consultar en un clic por disponibilidad.
            </p>
          </div>

          {/* Buscador Rápido con Estilo Moderno */}
          <div className="w-full md:w-80 relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-emerald-700/60" />
            <input
              type="text"
              placeholder="Buscar insumo, semilla, tambo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-2xl border border-stone-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-600 transition-all placeholder:text-stone-400 shadow-xs"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs bg-stone-100 hover:bg-stone-200 text-stone-600 px-1.5 py-0.5 rounded-full font-bold"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Barra de Filtros con Pills Claros */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-thin">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all whitespace-nowrap shrink-0 flex items-center gap-2 ${
              selectedCategory === "all"
                ? "bg-emerald-700 text-white shadow-md shadow-emerald-900/20"
                : "bg-white text-stone-700 hover:bg-emerald-50 hover:text-emerald-800 border border-stone-200/80 shadow-2xs"
            }`}
          >
            <Filter className="w-3.5 h-3.5" />
            Todas las líneas ({products.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all whitespace-nowrap shrink-0 ${
                selectedCategory === cat.id
                  ? "bg-emerald-700 text-white shadow-md shadow-emerald-900/20"
                  : "bg-white text-stone-700 hover:bg-emerald-50 hover:text-emerald-800 border border-stone-200/80 shadow-2xs"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Grilla con Nueva Arquitectura de Cards Premium */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center bg-white rounded-3xl border border-stone-200 p-8 shadow-xs">
            <p className="text-stone-500 font-medium text-base">No se encontraron productos coincidentes.</p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchTerm("");
              }}
              className="mt-3 text-sm font-bold text-emerald-800 hover:underline"
            >
              Restablecer filtros de búsqueda
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredProducts.map((product) => {
              const whatsappText = `Hola AGROPLATENSE, me interesa consultar disponibilidad y detalles técnicos del producto: "${product.name}"${product.brand ? ` [${product.brand}]` : ""}.`;
              const currentCategory = categories.find((c) => c.id === product.category);
              const isSpecialtyProduct =
                product.category === "industria-lactea" ||
                isSpecialtyWhatsappInquiry(
                  [
                    product.name,
                    product.description,
                    currentCategory?.name ?? "",
                    ...(product.tags ?? []),
                  ].join(" "),
                );
              const whatsappNumber = isSpecialtyProduct
                ? siteConfig.contact.whatsappSpecialty
                : siteConfig.contact.whatsapp;

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-3xl border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1 hover:border-emerald-500/50"
                >
                  {/* Encabezado Visual de la Card */}
                  <div className="relative aspect-[16/10] bg-stone-100 overflow-hidden">
                    <img
                      src={
                        product.image ||
                        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80"
                      }
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                    />

                    {/* Gradient Overlay sutil */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                    {/* Badge Categoría */}
                    <div className="absolute top-3.5 left-3.5">
                      <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-emerald-900 text-[11px] font-extrabold uppercase tracking-wider shadow-sm flex items-center gap-1.5 border border-stone-200/40">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                        {currentCategory?.name || "General"}
                      </span>
                    </div>

                    {/* Badge Destacado */}
                    {product.featured && (
                      <div className="absolute top-3.5 right-3.5">
                        <span className="px-2.5 py-1 rounded-full bg-amber-400 text-stone-950 text-[10px] font-black uppercase tracking-wider flex items-center gap-1 shadow-md">
                          <Sparkles className="w-3 h-3 text-stone-950" />
                          Destacado
                        </span>
                      </div>
                    )}

                    {/* Marca en la esquina inferior de la imagen */}
                    {product.brand && (
                      <div className="absolute bottom-3 left-3.5">
                        <span className="text-[11px] text-white/95 font-semibold bg-black/40 backdrop-blur-sm px-2.5 py-0.5 rounded-md border border-white/20">
                          {product.brand}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Cuerpo Informativo */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-black text-stone-900 group-hover:text-emerald-800 transition-colors leading-tight mb-2.5">
                        {product.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-3">
                        {product.description}
                      </p>

                      {/* Tags / Atributos del producto */}
                      {product.tags && product.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-4">
                          {product.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 rounded-md bg-stone-100 text-stone-600 text-[10px] font-semibold uppercase tracking-wider"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Footer de la Card con botón de WhatsApp y enlace directo */}
                    <div className="pt-5 mt-5 border-t border-stone-100 flex items-center gap-3">
                      <a
                        href={buildWhatsappLink(whatsappText, whatsappNumber)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all active:scale-[0.99]"
                      >
                        <MessageSquare className="w-4 h-4 text-emerald-100" />
                        <span>Consultar Insumo</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Banner de Consulta Global */}
        <div className="mt-16 rounded-3xl bg-white border border-stone-200/90 p-8 sm:p-10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-emerald-700" />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg text-stone-900">
                ¿Busca una variedad específica o insumo a pedido?
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
                Consúltenos por marcas específicas de semillas, químicos o repuestos de tambo.
              </p>
            </div>
          </div>
          <a
            href={buildWhatsappLink("Hola, estoy buscando un producto o repuesto específico para mi establecimiento.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider shrink-0 transition-colors shadow-xs"
          >
            Hacer consulta directa &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
