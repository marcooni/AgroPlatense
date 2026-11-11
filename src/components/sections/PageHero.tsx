import { Landscape } from "@/components/ui/Landscape";
import { Container } from "@/components/ui/Container";

export function PageHero({
  title,
  lead,
  variant = "campo",
  children,
}: {
  title: string;
  lead: string;
  variant?: "campo" | "tambo";
  children?: React.ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-campo-900 text-white">
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 -z-10 w-full text-hoja-500/60 md:w-3/5"
      >
        <Landscape variant={variant} />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-campo-900 via-campo-900/85 to-campo-900/10"
      />
      <Container className="py-16 md:py-24">
        <h1 className="max-w-3xl text-4xl font-semibold sm:text-5xl md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-xl text-lg text-leche-200">{lead}</p>
        {children && <div className="mt-8 flex flex-col gap-3 sm:flex-row">{children}</div>}
      </Container>
    </section>
  );
}
