import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { waLink } from "@/lib/whatsapp";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contactá a AGROPLATENSE por WhatsApp, teléfono o formulario. Estamos en Ecilda Paullier, San José, Uruguay.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  const { whatsapp, phone, address, email, hours } = siteConfig;
  const place = [address, siteConfig.locality, siteConfig.department, siteConfig.country]
    .filter(Boolean)
    .join(", ");

  return (
    <>
      <PageHero
        variant="tambo"
        title="Contacto"
        lead="Escribinos por WhatsApp, llamanos o completá el formulario."
      />

      <Container as="section" className="grid gap-14 py-20 md:py-28 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="text-2xl font-semibold md:text-3xl">Datos de contacto</h2>
          <ul className="mt-6 space-y-6">
            {(["especializado", "general"] as const).map((k) => (
              <li key={k} className="flex gap-4">
                <MessageCircle size={22} className="mt-1 shrink-0 text-wa" aria-hidden />
                <div>
                  <p className="font-semibold">WhatsApp: {whatsapp[k].label}</p>
                  <a
                    href={waLink(k)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center text-lg font-semibold text-wa hover:underline"
                  >
                    {whatsapp[k].display}
                    <span className="sr-only"> (se abre en una pestaña nueva)</span>
                  </a>
                </div>
              </li>
            ))}
            <li className="flex gap-4">
              <Phone size={22} className="mt-1 shrink-0 text-hoja-600" aria-hidden />
              <div>
                <p className="font-semibold">Teléfono</p>
                <a
                  href={`tel:${phone.number}`}
                  className="inline-flex min-h-11 items-center text-lg font-semibold hover:underline"
                >
                  {phone.display}
                </a>
              </div>
            </li>
            {email && (
              <li className="flex gap-4">
                <Mail size={22} className="mt-1 shrink-0 text-hoja-600" aria-hidden />
                <div>
                  <p className="font-semibold">Correo</p>
                  <a href={`mailto:${email}`} className="inline-flex min-h-11 items-center hover:underline">
                    {email}
                  </a>
                </div>
              </li>
            )}
            <li className="flex gap-4">
              <MapPin size={22} className="mt-1 shrink-0 text-hoja-600" aria-hidden />
              <div>
                <p className="font-semibold">Ubicación</p>
                <p>{place}</p>
              </div>
            </li>
            {hours && (
              <li className="flex gap-4">
                <Clock size={22} className="mt-1 shrink-0 text-hoja-600" aria-hidden />
                <div>
                  <p className="font-semibold">Horarios</p>
                  {hours.map((h) => (
                    <p key={h.label}>
                      {h.label}: {h.value}
                    </p>
                  ))}
                </div>
              </li>
            )}
          </ul>
        </div>

        <div className="lg:col-span-7">
          <h2 className="text-2xl font-semibold md:text-3xl">Enviá tu consulta</h2>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </Container>

      <section aria-labelledby="mapa" className="bg-leche-100 py-16 md:py-20">
        <Container>
          <h2 id="mapa" className="text-2xl font-semibold md:text-3xl">
            Dónde estamos
          </h2>
          <div className="mt-6 aspect-[4/3] overflow-hidden rounded-2xl bg-leche-200 sm:aspect-[16/7]">
            <iframe
              title={`Mapa de ${siteConfig.locality}, ${siteConfig.department}`}
              src={siteConfig.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
            />
          </div>
          <a
            href={siteConfig.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-11 items-center font-semibold text-campo-900 underline"
          >
            Abrir en Google Maps
            <span className="sr-only"> (se abre en una pestaña nueva)</span>
          </a>
        </Container>
      </section>
    </>
  );
}
