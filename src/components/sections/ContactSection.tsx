"use client";

import React, { useState } from "react";
import { siteConfig, buildWhatsappLink } from "@/data/site-config";
import SectionTag from "@/components/ui/SectionTag";
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    rubro: "Productor Lechero / Tambo",
    consulta: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nombre.trim() || !formData.consulta.trim()) {
      alert("Por favor complete su nombre y el mensaje de consulta.");
      return;
    }

    // Armado estructurado y profesional del mensaje para WhatsApp
    const message = `*CONSULTA WEB - AGROPLATENSE*
• *Nombre / Establecimiento:* ${formData.nombre.trim()}
• *Teléfono:* ${formData.telefono.trim() || "No especificado"}
• *Actividad / Rubro:* ${formData.rubro}
• *Consulta:*
${formData.consulta.trim()}`;

    // Dispara el enlace real hacia WhatsApp
    const whatsappUrl = buildWhatsappLink(message);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setFormSubmitted(true);
  };

  return (
    <section id="contacto" className="py-20 bg-stone-50 text-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="max-w-3xl mb-14">
          <SectionTag variant="green" className="mb-3">
            <MapPin className="w-3.5 h-3.5" />
            Atención al Productor
          </SectionTag>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0e2a14] tracking-tight">
            Canales de Contacto y Ubicación
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Estamos ubicados en Ecilda Paullier, San José. Contáctenos para coordinar pedidos, solicitar presupuestos o recibir asistencia técnica directa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Columna Izquierda: Información Directa de Contacto y Mapa */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-8 shadow-xs space-y-6">
              <h3 className="text-xl font-bold text-stone-900 border-b border-stone-100 pb-3">
                Información del Comercio
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-emerald-700" />
                  </div>
                  <div>
                    <strong className="block text-stone-900 font-semibold">Dirección Comercial</strong>
                    <span className="text-stone-600">
                      {siteConfig.contact.address}, {siteConfig.contact.city}, Departamento de {siteConfig.contact.department}, {siteConfig.contact.country}.
                    </span>
                    <div className="mt-1">
                      <a
                        href={siteConfig.contact.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-emerald-800 font-bold hover:underline inline-flex items-center gap-1"
                      >
                        Abrir ubicación en Google Maps &rarr;
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <MessageSquare className="w-4 h-4 text-emerald-700" />
                  </div>
                  <div>
                    <strong className="block text-stone-900 font-semibold">Canal de WhatsApp Comercial</strong>
                    <a
                      href={buildWhatsappLink("Hola AGROPLATENSE, quisiera hacer una consulta.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-800 font-bold text-base hover:underline"
                    >
                      {siteConfig.contact.whatsappDisplay}
                    </a>
                    <span className="block text-xs text-stone-500 mt-0.5">
                      Respuesta ágil durante el horario comercial
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-emerald-700" />
                  </div>
                  <div>
                    <strong className="block text-stone-900 font-semibold">Teléfono Fijo</strong>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-stone-700 hover:text-emerald-900 transition-colors font-medium"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-emerald-700" />
                  </div>
                  <div>
                    <strong className="block text-stone-900 font-semibold">Correo Electrónico</strong>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-stone-700 hover:text-emerald-900 transition-colors font-medium"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-amber-700" />
                  </div>
                  <div>
                    <strong className="block text-stone-900 font-semibold">Horarios de Atención</strong>
                    <p className="text-stone-600 text-xs mt-0.5">{siteConfig.contact.hours.weekdays}</p>
                    <p className="text-stone-600 text-xs">{siteConfig.contact.hours.saturday}</p>
                    <p className="text-stone-500 text-xs">{siteConfig.contact.hours.sunday}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapa de Google Integrado */}
            <div className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-xs">
              <div className="p-4 bg-stone-100/70 border-b border-stone-200 flex items-center justify-between text-xs">
                <span className="font-bold text-stone-800 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                  Mapa de Google: Ecilda Paullier
                </span>
                <a
                  href={siteConfig.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-800 font-bold hover:underline"
                >
                  Ver pantalla completa
                </a>
              </div>
              <div className="h-64 sm:h-72 w-full bg-stone-200">
                <iframe
                  title="Ubicación AGROPLATENSE en Ecilda Paullier"
                  src={siteConfig.contact.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario de Consulta Directo a WhatsApp */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-8 shadow-md">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-stone-900">Formulario de Consulta Comercial</h3>
                <p className="text-stone-600 text-xs sm:text-sm mt-1">
                  Complete los datos a continuación. Al presionar el botón se abrirá WhatsApp con su mensaje predeterminado listo para enviar.
                </p>
              </div>

              {formSubmitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">¡Mensaje preparado para WhatsApp!</p>
                    <p className="text-emerald-700/90 mt-0.5">
                      Si su navegador no abrió WhatsApp automáticamente, puede contactarnos directamente al {siteConfig.contact.whatsappDisplay}.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="nombre" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Nombre o Establecimiento <span className="text-amber-600">*</span>
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    required
                    placeholder="Ej. Martín Pérez / Tambo El Trébol"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700/40 focus:border-emerald-700 transition-all placeholder:text-stone-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="telefono" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Teléfono de Contacto
                    </label>
                    <input
                      id="telefono"
                      type="tel"
                      placeholder="Ej. 099 123 456"
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700/40 focus:border-emerald-700 transition-all placeholder:text-stone-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="rubro" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Rubro / Actividad
                    </label>
                    <select
                      id="rubro"
                      value={formData.rubro}
                      onChange={(e) => setFormData({ ...formData, rubro: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700/40 focus:border-emerald-700 transition-all bg-white"
                    >
                      <option value="Productor Lechero / Tambo">Productor Lechero / Tambo</option>
                      <option value="Productor Ganadero / Agrícola">Productor Ganadero / Agrícola</option>
                      <option value="Industria Láctea / Procesadora">Industria Láctea / Procesadora</option>
                      <option value="Establecimiento Rural">Establecimiento Rural</option>
                      <option value="Particular / Otros">Particular / Otros</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="consulta" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Consulta o Insumos de Interés <span className="text-amber-600">*</span>
                  </label>
                  <textarea
                    id="consulta"
                    required
                    rows={4}
                    placeholder="Describa qué insumos, productos de ordeñe o presupuestos necesita cotizar..."
                    value={formData.consulta}
                    onChange={(e) => setFormData({ ...formData, consulta: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700/40 focus:border-emerald-700 transition-all placeholder:text-stone-400"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-md hover:shadow-emerald-900/40 transition-all active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4 text-amber-300" />
                    <span>Enviar Consulta a WhatsApp</span>
                  </button>
                  <p className="text-[11px] text-stone-500 text-center mt-2.5 flex items-center justify-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                    Atención personalizada directa sin intermediarios ni demoras.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
