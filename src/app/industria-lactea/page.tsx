import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { categoriesByArea, products } from "@/data/catalog";
import { waLink } from "@/lib/whatsapp";
import { productImages } from "@/lib/images";
import { PageHero } from "@/components/sections/PageHero";
import { CategoryRows } from "@/components/sections/CategoryRows";
import { ContactBand } from "@/components/sections/ContactBand";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";

export const metadata: Metadata = {
  title: "Industria láctea y tambos en Ecilda Paullier",
  description:
    "Productos y equipamiento para tambos y procesamiento de leche en Ecilda Paullier, San José. Consultá por WhatsApp.",
  alternates: { canonical: "/industria-lactea" },
};

const MESSAGE = "Hola, quisiera consultar por productos para la industria láctea en AGROPLATENSE.";

export default function IndustriaLacteaPage() {
  return (
    <>
      <PageHero
        variant="tambo"
        title="Industria láctea"
        lead="Productos y equipamiento para tambos y procesamiento de leche."
      >
        <ButtonLink href={waLink("especializado", MESSAGE)} external variant="primary">
          <MessageCircle size={20} aria-hidden /> Consultar por WhatsApp
        </ButtonLink>
      </PageHero>

      <Container as="section" className="py-20 md:py-28">
        <h2 className="max-w-2xl text-3xl font-semibold md:text-5xl">Categorías</h2>
        <p className="mt-4 max-w-xl text-lg text-tinta-soft">
          Elegí la categoría y consultanos por lo que necesitás.
        </p>
        <div className="mt-10">
          <CategoryRows categories={categoriesByArea("lacteo")} products={products} images={productImages()} />
        </div>
      </Container>

      <ContactBand
        title="Consultá por tu tambo"
        text="Contanos qué necesitás para el tambo o la planta y te respondemos por WhatsApp."
        message={MESSAGE}
      />
    </>
  );
}
