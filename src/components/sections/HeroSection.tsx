import React from "react";
import Image from "next/image";
import { siteConfig, buildWhatsappLink } from "@/data/site-config";
import SectionTag from "@/components/ui/SectionTag";
import { ArrowRight, MessageSquare, CheckCircle2, ShieldCheck, MapPin } from "lucide-react";

export default function HeroSection() {
  const consultWhatsappMsg =
    "Hola AGROPLATENSE, quisiera recibir información sobre insumos agropecuarios y equipamiento para tambos.";

  return (
    <section id="inicio" className="relative bg-emerald-900 text-white overflow-hidden">
      {/* Fondo Fotográfico de Campo con Iluminación Fiel */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=85"
          alt="Campo agropecuario y producción lechera en Uruguay - AGROPLATENSE"
          className="w-full h-full object-cover object-center opacity-30 scale-102"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/92 via-emerald-900/80 to-emerald-800/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Columna de Texto Principal */}
          <div className="lg:col-span-8">
            {/* Badge de localización y sector */}
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <SectionTag variant="white">
                <MapPin className="w-3.5 h-3.5 text-amber-300" />
                Ecilda Paullier · San José
              </SectionTag>
              <span className="text-xs text-emerald-100 font-bold tracking-wider uppercase">
                Lideramos el Agro
              </span>
            </div>

            {/* Título Principal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12] mb-6">
              Soluciones para el campo y la{" "}
              <span className="text-amber-300 inline-block underline decoration-amber-400/40 decoration-4">
                industria láctea
              </span>
            </h1>

            {/* Subtítulo */}
            <p className="text-lg sm:text-xl text-emerald-50 leading-relaxed font-normal mb-8 max-w-2xl">
              En <strong className="text-white font-extrabold">AGROPLATENSE</strong> acompañamos al sector productivo con insumos, equipamiento y soluciones para el trabajo agropecuario y la industria láctea.
            </p>

            {/* Botones de Acción */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a
                href="#productos"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-emerald-950 font-black text-sm uppercase tracking-wider shadow-lg hover:shadow-amber-400/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Conocé nuestros productos</span>
                <ArrowRight className="w-4 h-4 text-emerald-950" />
              </a>

              <a
                href={buildWhatsappLink(consultWhatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white hover:bg-emerald-50 text-emerald-900 font-black text-sm uppercase tracking-wider shadow-md hover:shadow-white/20 transition-all transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-4 h-4 text-emerald-700" />
                <span>Contactanos por WhatsApp</span>
              </a>
            </div>

            {/* Pilares Clave */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-emerald-700/60 text-sm">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-amber-300 shrink-0" />
                <span className="text-emerald-50 font-semibold">Insumos Certificados</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-amber-300 shrink-0" />
                <span className="text-emerald-50 font-semibold">Especialistas en Tambo</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-amber-300 shrink-0" />
                <span className="text-emerald-50 font-semibold">Atención en Ecilda</span>
              </div>
            </div>
          </div>

          {/* Columna Visual con el Logo Oficial Presentado */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="bg-white rounded-3xl p-8 border border-white/60 shadow-2xl flex flex-col items-center text-center max-w-sm w-full">
              <div className="relative h-24 w-64 mb-4">
                <Image
                  src="/images/logo_full.png"
                  alt="AGROPLATENSE - Lideramos el Agro"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <p className="text-xs text-stone-600 font-medium leading-relaxed">
                Comercio especializado en insumos agropecuarios y equipamiento para la producción lechera en Ecilda Paullier.
              </p>
              <div className="mt-5 pt-3 border-t border-stone-100 w-full flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                <span className="text-[11px] font-black uppercase tracking-wider text-emerald-900">
                  San José · Uruguay
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
