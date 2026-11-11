import type { Metadata } from "next";
import { siteConfig } from "@/data/site-config";
import { PageHero } from "@/components/sections/PageHero";
import { ContactBand } from "@/components/sections/ContactBand";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "AGROPLATENSE es un comercio de Ecilda Paullier, San José, que vende insumos agropecuarios y productos para la industria láctea.",
  alternates: { canonical: "/nosotros" },
};

const values = [
  { title: "Cercanía", text: "Hablás directo con el comercio, sin intermediarios." },
  { title: "Claridad", text: "Te decimos lo que tenemos y lo que no, sin vueltas." },
  { title: "Compromiso con el sector", text: "Trabajamos para el productor y la industria láctea uruguaya." },
];

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        variant="campo"
        title="Un comercio de Ecilda Paullier para el campo y el tambo"
        lead={siteConfig.slogan}
      />

      <Container as="section" className="grid gap-12 py-20 md:py-28 lg:grid-cols-12">
        <div className="space-y-5 text-lg lg:col-span-7">
          <p>
            AGROPLATENSE es un comercio de {siteConfig.locality}, departamento de {siteConfig.department}.
            Vendemos insumos agropecuarios y productos para la industria láctea.
          </p>
          <p>
            Atendemos a productores rurales, empresas y clientes particulares que necesitan insumos
            y herramientas para el campo.
          </p>
          {siteConfig.story?.map((p) => <p key={p}>{p}</p>)}
        </div>

        <div className="lg:col-span-5">
          <h2 className="text-2xl font-semibold md:text-3xl">Cómo atendemos</h2>
          <ul className="mt-6 divide-y divide-leche-200 border-y border-leche-200">
            {values.map((v) => (
              <li key={v.title} className="py-5">
                <h3 className="text-xl font-semibold">{v.title}</h3>
                <p className="mt-1 text-tinta-soft">{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <ContactBand title="Hablemos" text="Escribinos y contanos qué necesitás." />
    </>
  );
}
