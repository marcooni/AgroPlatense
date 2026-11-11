import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ProductExplorer } from "@/components/sections/ProductExplorer";
import { ContactBand } from "@/components/sections/ContactBand";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Productos y categorías",
  description:
    "Categorías de insumos agropecuarios, industria láctea y ferretería de AGROPLATENSE. Buscá y consultá por WhatsApp.",
  alternates: { canonical: "/productos" },
};

export default function ProductosPage() {
  return (
    <>
      <PageHero
        variant="campo"
        title="Productos y categorías"
        lead="Buscá una categoría y consultá directo por WhatsApp."
      />
      <Container as="section" className="py-16 md:py-24">
        <ProductExplorer />
      </Container>
      <ContactBand />
    </>
  );
}
