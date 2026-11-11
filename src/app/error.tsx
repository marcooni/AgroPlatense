"use client";

import { Container } from "@/components/ui/Container";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <Container className="py-28 text-center">
      <h1 className="text-4xl font-semibold md:text-5xl">Algo salió mal</h1>
      <p className="mx-auto mt-5 max-w-md text-lg text-tinta-soft">
        No pudimos mostrar esta página. Probá de nuevo o escribinos por WhatsApp.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 inline-flex min-h-12 items-center rounded-full bg-maiz-400 px-6 font-semibold text-campo-950 hover:bg-maiz-300"
      >
        Reintentar
      </button>
    </Container>
  );
}
