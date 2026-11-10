import React from "react";
import { buildWhatsappLink, siteConfig } from "@/data/site-config";
import SectionTag from "@/components/ui/SectionTag";
import { ShieldCheck, MessageSquare, ArrowRight, Gauge, Droplets, CheckCircle2 } from "lucide-react";

export default function DairySection() {
  const whatsappDairyMsg =
    "Hola AGROPLATENSE, quisiera recibir asesoramiento y catálogo especializado para tambo e industria láctea.";

  const dairyPillars = [
    {
      title: "Salas de Ordeñe y Vacío",
      desc: "Pezoneras siliconadas de bajo deslizamiento, pulsadores, mangueras no tóxicas y accesorios para evitar pérdidas de vacío y caídas.",
      icon: Gauge,
    },
    {
      title: "Higiene y Sistemas CIP",
      desc: "Detergentes alcalinos clorados y desincrustantes ácidos de alta concentración para limpieza en circuito cerrado de tanques y líneas de leche.",
      icon: Droplets,
    },
    {
      title: "Sanidad de Pezones y Ubre",
      desc: "Selladores barrera post-ordeñe formulados para climas húmedos y fríos con emolientes que protegen el esfínter contra la mastitis ambiental.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="industria-lactea" className="py-24 bg-[#0a1e0f] text-white relative overflow-hidden">
      {/* Fondo Ambientado con Instalaciones Lácteas / Tambo Moderno */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=format&fit=crop&w=2000&q=80"
          alt="Instalaciones de tambo e industria láctea - AGROPLATENSE"
          className="w-full h-full object-cover opacity-20 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1e0f] via-[#0a1e0f]/95 to-[#0e2613]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado Principal Especializado */}
        <div className="max-w-3xl mb-16">
          <SectionTag variant="gold" className="mb-4">
            Área Especializada
          </SectionTag>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Equipamiento e Insumos para la{" "}
            <span className="text-amber-400">Industria Láctea y Tambos</span>
          </h2>
          <p className="text-emerald-100/90 text-base sm:text-lg mt-4 leading-relaxed">
            La lechería es el corazón productivo de nuestra región. En <strong className="text-white">AGROPLATENSE</strong> dedicamos una sección técnica exclusiva al aprovisionamiento continuo de tambos, salas de ordeñe y plantas procesadoras, garantizando inocuidad, sanidad y productividad diaria.
          </p>
        </div>

        {/* Pilares Técnicos de la Industria Láctea */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {dairyPillars.map((p) => {
            const IconComponent = p.icon;
            return (
              <div
                key={p.title}
                className="bg-emerald-950/60 border border-emerald-800/80 rounded-2xl p-6 backdrop-blur-sm shadow-xl hover:border-amber-400/60 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-400/30 text-amber-400 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-stone-950 transition-all">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2.5">{p.title}</h3>
                <p className="text-sm text-emerald-200/80 leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Bloque Destacado con Galería Sectorial y Llamado a la Acción */}
        <div className="rounded-3xl bg-gradient-to-r from-emerald-900/60 via-[#103318]/80 to-emerald-950/80 border border-emerald-700/40 p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                Respaldo Integral en San José y Cuenca Lechera
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                ¿Necesita reponer insumos para la rutina de ordeñe de hoy?
              </h3>
              <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
                Disponemos de stock en selladores de pezones, pezoneras homologadas, filtros de leche, repuestos para pulsadores y químicos para lavado térmico CIP.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-emerald-200 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Entrega y coordinación ágil en Ecilda Paullier y zonas aledañas.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Asesoramiento en dosificación química y protocolos de desinfección.</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4 justify-center">
              <a
                href={buildWhatsappLink(
                  whatsappDairyMsg,
                  siteConfig.contact.whatsappSpecialty,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:shadow-amber-500/30 transition-all text-center"
              >
                <MessageSquare className="w-4 h-4 text-stone-950" />
                <span>Consultar Área Láctea</span>
              </a>

              <a
                href="#contacto"
                className="px-6 py-4 rounded-xl bg-emerald-800/80 hover:bg-emerald-700 text-white font-bold text-sm uppercase tracking-wider border border-emerald-500/40 flex items-center justify-center gap-2 transition-all text-center"
              >
                <span>Ver Datos de Ubicación</span>
                <ArrowRight className="w-4 h-4 text-emerald-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
