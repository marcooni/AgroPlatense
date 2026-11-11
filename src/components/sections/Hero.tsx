import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { waLink } from "@/lib/whatsapp";
import { ScrollBackdrop } from "@/components/ui/ScrollBackdrop";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function Hero() {
  return (
    <section className="relative isolate bg-campo-950 text-white">
      <ScrollBackdrop />
      <Container className="flex min-h-[125svh] flex-col pb-24 pt-[max(8rem,calc(100svh-33rem))] md:pt-[max(8rem,calc(100svh-29rem))]">
        <p className="mb-5 text-base font-semibold text-maiz-300">
          {siteConfig.locality}, {siteConfig.department}
        </p>
        <h1 className="max-w-3xl text-[2.6rem] font-semibold leading-[1.02] sm:text-6xl md:text-7xl">
          Insumos para el campo y el tambo
        </h1>
        <p className="mt-6 max-w-xl text-lg text-leche-100 md:text-xl">
          AGROPLATENSE vende insumos agropecuarios y productos para la industria láctea.
          Elegí la categoría y escribinos.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink
            href={waLink("especializado", "Hola, quisiera hacer una consulta a AGROPLATENSE.")}
            external
            variant="primary"
          >
            <MessageCircle size={20} aria-hidden /> Consultar por WhatsApp
          </ButtonLink>
          <ButtonLink href="/productos" variant="outline-light">
            Ver categorías
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
