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
  title: "Insumos agropecuarios en Ecilda Paullier",
  description:
    "Insumos agropecuarios, equipamiento y artículos para establecimientos rurales en Ecilda Paullier, San José. Consultá por WhatsApp.",
  alternates: { canonical: "/agropecuario" },
};

const MESSAGE = "Hola, quisiera consultar por insumos agropecuarios en AGROPLATENSE.";

export default function AgropecuarioPage() {
  return (
    <>
      <PageHero
        variant="campo"
        title="Insumos agropecuarios"
        lead="Insumos, equipamiento y artículos para el trabajo del campo y el funcionamiento de los establecimientos rurales."
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
          <CategoryRows categories={categoriesByArea("agropecuario")} products={products} images={productImages()} />
        </div>
      </Container>

      <ContactBand
        title="¿No ves lo que buscás?"
        text="Escribinos con el nombre del producto y te decimos si lo tenemos."
        message={MESSAGE}
      />
    </>
  );
}
