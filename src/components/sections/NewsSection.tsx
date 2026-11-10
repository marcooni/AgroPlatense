import React from "react";
import { newsItems } from "@/data/news";
import { formatDate } from "@/lib/utils";
import { buildWhatsappLink } from "@/data/site-config";
import SectionTag from "@/components/ui/SectionTag";
import { Bell, Calendar, ArrowRight, MessageSquare } from "lucide-react";

export default function NewsSection() {
  return (
    <section id="novedades" className="py-20 bg-[#fbf9f5] text-stone-900 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <SectionTag variant="green" className="mb-3">
            <Bell className="w-3.5 h-3.5" />
            Actualizaciones del Comercio
          </SectionTag>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0e2a14] tracking-tight">
            Novedades y Promociones
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Manténgase informado sobre campañas de temporada, disponibilidad de insumos recién ingresados y ofertas vigentes.
          </p>
        </div>

        {/* Grilla de Novedades */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => {
            const newsWhatsappText = `Hola AGROPLATENSE, vi la publicación "${item.title}" y quisiera consultar detalles y condiciones.`;

            return (
              <article
                key={item.id}
                className="bg-white rounded-2xl border border-stone-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group hover:border-emerald-600/50"
              >
                {/* Imagen del artículo */}
                <div className="relative aspect-[16/9] bg-stone-200 overflow-hidden">
                  <img
                    src={
                      item.image ||
                      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80"
                    }
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md bg-[#0e2a14]/90 backdrop-blur-sm text-amber-300 text-[10px] font-bold uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Contenido Editorial */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-stone-400 font-medium mb-2.5">
                      <Calendar className="w-3.5 h-3.5 text-stone-400" />
                      <time dateTime={item.date}>{formatDate(item.date)}</time>
                    </div>

                    <h3 className="font-extrabold text-lg text-stone-900 group-hover:text-emerald-900 transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-stone-600 text-sm mt-3 leading-relaxed">
                      {item.excerpt}
                    </p>
                  </div>

                  {/* Botón de Consulta */}
                  <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between">
                    <a
                      href={buildWhatsappLink(newsWhatsappText)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold uppercase tracking-wider text-emerald-800 hover:text-emerald-700 flex items-center gap-1.5 group-hover:gap-2 transition-all"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-amber-500" />
                      <span>Consultar por esta novedad</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
