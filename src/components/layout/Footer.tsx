import Image from "next/image";
import Link from "next/link";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { waLink } from "@/lib/whatsapp";
import { navLinks } from "@/data/navigation";

export function Footer() {
  const { whatsapp, phone, address, email, hours, social } = siteConfig;
  const place = [address, siteConfig.locality, siteConfig.department, siteConfig.country]
    .filter(Boolean)
    .join(", ");

  return (
    <footer className="bg-campo-950 pb-28 text-leche-200 md:pb-0">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-12 lg:px-8">
        <div className="md:col-span-5">
          <div className="inline-block rounded-xl bg-white p-3">
            <Image
              src="/images/logo-tagline.png"
              alt={`${siteConfig.name}, ${siteConfig.slogan}`}
              width={1000}
              height={237}
              sizes="240px"
              className="h-14 w-auto"
            />
          </div>
          <p className="mt-6 max-w-md text-leche-200/90">
            Insumos agropecuarios y productos para la industria láctea, en {siteConfig.locality},{" "}
            {siteConfig.department}.
          </p>
          {(social.facebook || social.instagram) && (
            <ul className="mt-6 flex gap-5 font-semibold">
              {social.facebook && (
                <li>
                  <a href={social.facebook} target="_blank" rel="noopener noreferrer" className="link-line">
                    Facebook
                  </a>
                </li>
              )}
              {social.instagram && (
                <li>
                  <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="link-line">
                    Instagram
                  </a>
                </li>
              )}
            </ul>
          )}
        </div>

        <nav aria-label="Secciones" className="md:col-span-3">
          <h2 className="font-display text-lg text-white">Secciones</h2>
          <ul className="mt-4 space-y-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="inline-flex min-h-11 items-center hover:text-maiz-300">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <h2 className="font-display text-lg text-white">Contacto</h2>
          <ul className="mt-4 space-y-3">
            <li className="flex gap-3">
              <MessageCircle size={20} className="mt-0.5 shrink-0 text-maiz-400" aria-hidden />
              <span>
                <a href={waLink("especializado")} target="_blank" rel="noopener noreferrer" className="font-semibold text-white hover:text-maiz-300">
                  {whatsapp.especializado.display}
                </a>
                <span className="block text-sm">{whatsapp.especializado.label}</span>
              </span>
            </li>
            <li className="flex gap-3">
              <MessageCircle size={20} className="mt-0.5 shrink-0 text-maiz-400" aria-hidden />
              <span>
                <a href={waLink("general")} target="_blank" rel="noopener noreferrer" className="font-semibold text-white hover:text-maiz-300">
                  {whatsapp.general.display}
                </a>
                <span className="block text-sm">{whatsapp.general.label}</span>
              </span>
            </li>
            <li className="flex gap-3">
              <Phone size={20} className="mt-0.5 shrink-0 text-maiz-400" aria-hidden />
              <a href={`tel:${phone.number}`} className="font-semibold text-white hover:text-maiz-300">
                {phone.display}
              </a>
            </li>
            {email && (
              <li className="flex gap-3">
                <Mail size={20} className="mt-0.5 shrink-0 text-maiz-400" aria-hidden />
                <a href={`mailto:${email}`} className="hover:text-maiz-300">{email}</a>
              </li>
            )}
            <li className="flex gap-3">
              <MapPin size={20} className="mt-0.5 shrink-0 text-maiz-400" aria-hidden />
              <span>{place}</span>
            </li>
            {hours && (
              <li className="flex gap-3">
                <Clock size={20} className="mt-0.5 shrink-0 text-maiz-400" aria-hidden />
                <span>
                  {hours.map((h) => (
                    <span key={h.label} className="block">
                      {h.label}: {h.value}
                    </span>
                  ))}
                </span>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-6 text-sm text-leche-200/80 sm:px-6 lg:px-8">
          © {siteConfig.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
