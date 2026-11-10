import React from "react";
import SectionTag from "@/components/ui/SectionTag";
import { siteConfig } from "@/data/site-config";
import { CheckCircle2, MapPin, Handshake, Shield, Sparkles } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="empresa" className="py-20 bg-[#fbf9f5] text-stone-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Contenido Editorial */}
          <div className="lg:col-span-7 space-y-6">
            <SectionTag variant="green">
              <Sparkles className="w-3.5 h-3.5" />
              Nuestra Empresa
            </SectionTag>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#113117] tracking-tight leading-tight">
              Compromiso real con la producción agropecuaria y lechera
            </h2>

            <p className="text-stone-700 leading-relaxed text-base sm:text-lg">
              En <strong className="text-emerald-900 font-bold">AGROPLATENSE</strong> nos dedicamos a la provisión de insumos agropecuarios y soluciones integrales de equipamiento para la industria láctea. Establecidos en <strong className="text-stone-900">Ecilda Paullier</strong>, departamento de San José, somos el punto de referencia y cercanía para productores rurales, tambos y empresas de la cuenca lechera.
            </p>

            <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
              Nuestra propuesta combina un catálogo enfocado en las exigencias prácticas del campo con un asesoramiento técnico cercano. Entendemos los desafíos cotidianos del ordeñe, el cuidado de praderas, la sanidad del rodeo y el rendimiento operativo de cada establecimiento rural.
            </p>

            {/* Cuadrícula de valores institucionales */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-xs flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-800 shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-stone-900">Confianza y Respaldo</h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Productos seleccionados bajo rigurosos estándares de rendimiento agropecuario.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-xs flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-amber-50 text-amber-800 shrink-0">
                  <Handshake className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-stone-900">Atención Cercana</h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Trato directo y profesional para resolver las necesidades particulares de cada productor.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-xs flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-800 shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-stone-900">Especialistas en Tambo</h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Artículos específicos para salas de ordeñe, higiene alimentaria y sanidad de ubres.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-xs flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-amber-50 text-amber-800 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-stone-900">Ubicación Estratégica</h3>
                  <p className="text-xs text-stone-600 mt-1">
                    En el corazón lechero de San José, facilitando la logística y el abastecimiento ágil.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Composición Fotográfica Sectorial */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-stone-200 aspect-[4/5] sm:aspect-[3/4]">
              <img
                src="https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=format&fit=crop&w=1200&q=85"
                alt="Producción lechera y ganado en tambo uruguayo - AGROPLATENSE"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e2a14]/90 via-transparent to-transparent" />

              {/* Tarjeta Flotante en la Imagen */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg text-stone-900">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-500" />
                  {siteConfig.contact.city}, Uruguay
                </div>
                <p className="text-xs text-stone-700 font-medium">
                  Al servicio de productores lecheros, agrícolas y ganaderos de San José y toda la región.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
