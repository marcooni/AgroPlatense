import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";

const items = [
  {
    title: "Atención directa",
    text: "Tu consulta llega a una persona del comercio, por WhatsApp o por teléfono.",
  },
  {
    title: "En la zona",
    text: `Estamos en ${siteConfig.locality}, departamento de ${siteConfig.department}.`,
  },
  {
    title: "Dos áreas, un solo comercio",
    text: "Insumos agropecuarios y productos para la industria láctea, con la misma atención.",
  },
  {
    title: "Un WhatsApp para cada consulta",
    text: "Industria láctea, insumos y malla tienen su propio número. El resto de las consultas, otro.",
  },
];

export function Pillars() {
  return (
    <section aria-labelledby="pilares" className="bg-leche-50 py-20 md:py-28">
      <Container>
        <h2 id="pilares" className="max-w-2xl text-3xl font-semibold md:text-5xl">
          Qué esperar cuando nos consultás
        </h2>
        <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <li key={it.title} className="border-t-4 border-hoja-500 pt-5">
              <h3 className="text-xl font-semibold">{it.title}</h3>
              <p className="mt-3 text-tinta-soft">{it.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
