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
  title: "Ferretería en Ecilda Paullier",
  description:
    "Herramientas y artículos de ferretería en Ecilda Paullier, San José. Consultá por WhatsApp.",
  alternates: { canonical: "/ferreteria" },
};

const MESSAGE = "Hola, quisiera consultar por ferretería en AGROPLATENSE.";

export default function FerreteriaPage() {
  return (
    <>
      <PageHero
        variant="campo"
        title="Ferretería"
        lead="Herramientas y artículos de ferretería."
      >
        <ButtonLink href={waLink("general", MESSAGE)} external variant="primary">
          <MessageCircle size={20} aria-hidden /> Consultar por WhatsApp
        </ButtonLink>
      </PageHero>

      <Container as="section" className="py-20 md:py-28">
        <h2 className="max-w-2xl text-3xl font-semibold md:text-5xl">Categorías</h2>
        <p className="mt-4 max-w-xl text-lg text-tinta-soft">
          Elegí la categoría y consultanos por lo que necesitás.
        </p>
        <div className="mt-10">
          <CategoryRows categories={categoriesByArea("ferreteria")} products={products} images={productImages()} />
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
