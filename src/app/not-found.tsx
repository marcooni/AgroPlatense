import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";

export default function NotFound() {
  return (
    <Container className="py-28 text-center">
      <h1 className="text-4xl font-semibold md:text-6xl">No encontramos esa página</h1>
      <p className="mx-auto mt-5 max-w-md text-lg text-tinta-soft">
        La dirección puede estar mal escrita o la página ya no existe.
      </p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <ButtonLink href="/" variant="primary">Ir al inicio</ButtonLink>
        <ButtonLink href="/contacto" variant="outline-dark">Contacto</ButtonLink>
      </div>
    </Container>
  );
}
