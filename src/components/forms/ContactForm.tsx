"use client";

import { useRef, useState, type FormEvent } from "react";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import type { Channel } from "@/data/catalog";
import { waLink } from "@/lib/whatsapp";

const topics: { value: string; label: string; channel: Channel }[] = [
  { value: "Insumos agropecuarios", label: "Insumos agropecuarios", channel: "especializado" },
  { value: "Industria láctea", label: "Industria láctea", channel: "especializado" },
  { value: "Malla", label: "Malla", channel: "especializado" },
  { value: "Otra consulta", label: "Otra consulta", channel: "general" },
];

type Field = "name" | "phone" | "message";
type Errors = Partial<Record<Field, string>>;

const fieldClass =
  "mt-2 min-h-12 w-full rounded-xl border-2 border-leche-200 bg-white px-4 py-3 text-base focus:border-hoja-600 focus:outline-none aria-[invalid=true]:border-red-700";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [ready, setReady] = useState<{ url: string; display: string } | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const topic = String(data.get("topic") ?? topics[0].value);
    const message = String(data.get("message") ?? "").trim();

    const next: Errors = {};
    if (name.length < 2) next.name = "Escribí tu nombre.";
    if (phone && phone.replace(/\D/g, "").length < 8)
      next.phone = "Revisá el teléfono: tiene que tener al menos 8 números.";
    if (message.length < 10) next.message = "Contanos qué necesitás, con al menos 10 caracteres.";

    setErrors(next);
    setReady(null);
    const firstInvalid = (["name", "phone", "message"] as Field[]).find((f) => next[f]);
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    const channel = topics.find((t) => t.value === topic)?.channel ?? "general";
    const lines = ["*Consulta desde la web de AGROPLATENSE*", `Nombre: ${name}`];
    if (phone) lines.push(`Teléfono: ${phone}`);
    lines.push(`Tema: ${topic}`, "", message);
    const text = lines.join("\n");

    const url = waLink(channel, text);
    window.open(url, "_blank", "noopener,noreferrer");
    setReady({ url, display: siteConfig.whatsapp[channel].display });
  }

  const err = (f: Field) =>
    errors[f] ? (
      <p id={`${f}-error`} className="mt-2 text-sm font-medium text-red-700">
        {errors[f]}
      </p>
    ) : null;

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-6">
      <div>
        <label htmlFor="name" className="font-semibold">
          Nombre o establecimiento
        </label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={fieldClass}
        />
        {err("name")}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="font-semibold">
            Teléfono <span className="font-normal text-tinta-soft">(opcional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={fieldClass}
          />
          {err("phone")}
        </div>
        <div>
          <label htmlFor="topic" className="font-semibold">
            Tipo de consulta
          </label>
          <select id="topic" name="topic" className={fieldClass} defaultValue={topics[0].value}>
            {topics.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="font-semibold">
          Consulta
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={fieldClass}
        />
        {err("message")}
      </div>

      <button
        type="submit"
        className="inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-full bg-wa px-6 py-3 text-base font-semibold text-white transition-[transform,background-color] duration-200 hover:bg-wa-hover active:scale-[0.98] sm:w-auto"
      >
        <MessageCircle size={20} aria-hidden /> Enviar por WhatsApp
      </button>
      <p className="text-sm text-tinta-soft">
        Se abre WhatsApp con tu consulta escrita. El mensaje se envía cuando lo confirmás allí.
      </p>

      <div role="status" aria-live="polite">
        {ready && (
          <div className="flex gap-3 rounded-xl bg-leche-100 p-4 text-campo-900">
            <CheckCircle2 size={22} className="mt-0.5 shrink-0 text-hoja-600" aria-hidden />
            <p>
              Abrimos WhatsApp con tu consulta para el {ready.display}. Si no se abrió,{" "}
              <a href={ready.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
                abrila desde acá
              </a>
              .
            </p>
          </div>
        )}
      </div>
    </form>
  );
}
