import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import type { Channel } from "@/data/catalog";
import { waLink } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function ContactBand({
  title = "Escribinos y te atendemos",
  text = "Contanos qué necesitás. Elegí el WhatsApp según el tipo de consulta.",
  message,
  primary = "especializado",
}: {
  title?: string;
  text?: string;
  message?: string;
  primary?: Channel;
}) {
  const channels: Channel[] = primary === "especializado" ? ["especializado", "general"] : ["general", "especializado"];
  return (
    <section aria-labelledby="contacto-banda" className="bg-campo-900 py-20 text-white md:py-24">
      <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 id="contacto-banda" className="text-3xl font-semibold md:text-5xl">
            {title}
          </h2>
          <p className="mt-4 max-w-md text-lg text-leche-200">{text}</p>
        </div>
        <div className="flex flex-col gap-4">
          {channels.map((c, i) => {
            const ch = siteConfig.whatsapp[c];
            return (
              <ButtonLink
                key={c}
                href={waLink(c, message)}
                external
                variant={i === 0 ? "primary" : "outline-light"}
                className="h-auto justify-between px-6 py-4 text-left"
              >
                <span>
                  <span className="block">{ch.label}</span>
                  <span className="block text-sm font-medium opacity-80">{ch.display}</span>
                </span>
                <MessageCircle size={22} aria-hidden />
              </ButtonLink>
            );
          })}
          <a
            href={`tel:${siteConfig.phone.number}`}
            className="inline-flex min-h-12 items-center gap-2.5 self-start font-semibold hover:text-maiz-300"
          >
            <Phone size={20} aria-hidden /> Llamar al {siteConfig.phone.display}
          </a>
        </div>
      </Container>
    </section>
  );
}
