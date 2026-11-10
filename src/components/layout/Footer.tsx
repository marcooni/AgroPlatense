import React from "react";
import Image from "next/image";
import { siteConfig, buildWhatsappLink, defaultWhatsappMessage } from "@/data/site-config";
import { MapPin, Phone, Mail, Clock, MessageSquare, ChevronRight } from "lucide-react";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#0f2e14] text-emerald-100 border-t border-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Columna 1: Logo Oficial con contenedor blanco de máximo contraste */}
          <div className="space-y-4">
            <div className="bg-white px-3 py-2 rounded-2xl inline-block shadow-md">
              <div className="relative h-12 w-48">
                <Image
                  src="/images/logo_full.png"
                  alt="AGROPLATENSE - Lideramos el Agro"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>
            <p className="text-sm text-emerald-200/90 leading-relaxed pt-1">
              Comercialización de insumos agropecuarios, equipamientos y soluciones especializadas para tambos y la industria láctea del Uruguay. Cercanía, confianza y asesoramiento en el campo.
            </p>
            <div className="pt-1">
              <a
                href={siteConfig.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-amber-300 hover:text-white font-bold transition-colors"
              >
                <MapPin className="w-3.5 h-3.5" />
                Ver ubicación en Google Maps &rarr;
              </a>
            </div>
          </div>

          {/* Columna 2: Navegación Rápida */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 border-b border-emerald-800/80 pb-2">
              Secciones
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Inicio", href: "#inicio" },
                { name: "Empresa", href: "#empresa" },
                { name: "Catálogo de Productos", href: "#productos" },
                { name: "Especial: Industria Láctea", href: "#industria-lactea" },
                { name: "Novedades y Promociones", href: "#novedades" },
                { name: "Contacto y Consultas", href: "#contacto" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="flex items-center gap-1.5 text-emerald-200/80 hover:text-amber-300 transition-colors py-0.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Información de Contacto */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 border-b border-emerald-800/80 pb-2">
              Atención y Contacto
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-300 mt-1 shrink-0" />
                <span>
                  {siteConfig.contact.address}, {siteConfig.contact.city}, {siteConfig.contact.department}, Uruguay.
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-300 shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-amber-300 shrink-0" />
                <a
                  href={buildWhatsappLink(defaultWhatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-300 hover:underline font-bold"
                >
                  WhatsApp: {siteConfig.contact.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-300 shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Horarios de Atención */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 border-b border-emerald-800/80 pb-2">
              Horario Comercial
            </h4>
            <div className="space-y-3 text-sm text-emerald-100">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-300 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-white">Lunes a Viernes:</p>
                  <p className="text-xs text-emerald-200">{siteConfig.contact.hours.weekdays.replace("Lunes a Viernes: ", "")}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-emerald-300 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-white">Sábados:</p>
                  <p className="text-xs text-emerald-200">{siteConfig.contact.hours.saturday.replace("Sábados: ", "")}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-white">Domingos:</p>
                  <p className="text-xs text-emerald-300/70">{siteConfig.contact.hours.sunday.replace("Domingos: ", "")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Barra Inferior */}
        <div className="mt-12 pt-6 border-t border-emerald-900 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-300/80 gap-3">
          <p>© {currentYear} {siteConfig.name} - Lideramos el Agro. Todos los derechos reservados. Ecilda Paullier, San José, Uruguay.</p>
          <p className="text-[11px] text-emerald-400 font-medium">
            Insumos agropecuarios y equipamiento para la producción lechera.
          </p>
        </div>
      </div>
    </footer>
  );
}
