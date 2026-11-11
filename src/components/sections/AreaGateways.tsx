import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { areas, categoriesByArea, type AreaId } from "@/data/catalog";
import { categoryMessage, waLink } from "@/lib/whatsapp";
import { Landscape } from "@/components/ui/Landscape";
import { ButtonLink } from "@/components/ui/ButtonLink";

type Panel = Exclude<AreaId, "ferreteria">;
const panels: Panel[] = ["agropecuario", "lacteo"];
const styles: Record<Panel, { panel: string; art: string; link: string; variant: "campo" | "tambo" }> = {
  agropecuario: {
    panel: "bg-campo-800 text-white",
    art: "text-hoja-500/35",
    link: "hover:text-maiz-300",
    variant: "campo",
  },
  lacteo: {
    panel: "bg-maiz-400 text-campo-950",
    art: "text-campo-900/25",
    link: "hover:underline",
    variant: "tambo",
  },
};

export function AreaGateways() {
  return (
    <section aria-label="Áreas de AGROPLATENSE" className="grid md:grid-cols-2">
      {panels.map((id) => {
        const area = areas[id];
        const s = styles[id];
        const cats = categoriesByArea(id);
        return (
          <div key={id} className={`relative isolate overflow-hidden ${s.panel}`}>
            <div aria-hidden="true" className={`absolute inset-0 -z-10 ${s.art}`}>
              <Landscape variant={s.variant} />
            </div>
            <div className="flex h-full flex-col px-4 py-14 sm:px-8 md:px-10 md:py-20 lg:px-16">
              <h2 className="text-4xl font-semibold md:text-5xl">
                <Link href={area.href} className="group inline-flex items-center gap-2">
                  {area.name}
                  <ArrowUpRight
                    aria-hidden
                    className="h-8 w-8 transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </Link>
              </h2>
              <p className="mt-4 max-w-md text-lg opacity-90">{area.short}</p>
              <ul className="mt-8 max-w-md divide-y divide-current/20 border-y border-current/20">
                {cats.map((c) => (
                  <li key={c.id}>
                    <Link
                      href={`/productos#${c.id}`}
                      className={`flex min-h-12 items-center justify-between gap-4 py-2 font-semibold ${s.link}`}
                    >
                      {c.name}
                      <ArrowUpRight size={18} aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink
                  href={waLink("especializado", categoryMessage(area.name))}
                  external
                  variant={id === "agropecuario" ? "primary" : "outline-dark"}
                >
                  <MessageCircle size={20} aria-hidden /> Consultar {area.name.toLowerCase()}
                </ButtonLink>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
