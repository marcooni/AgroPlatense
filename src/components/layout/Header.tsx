"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, MessageCircle, Menu, Phone, X } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { waLink } from "@/lib/whatsapp";
import { navLinks } from "@/data/navigation";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function Header() {
  const pathname = usePathname();
  // El layout se conserva entre rutas (Cache Components): el menú queda abierto
  // solo para la ruta en la que se abrió, así se cierra solo al navegar.
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const toggleRef = useRef<HTMLButtonElement>(null);
  // Submenú abierto (escritorio y móvil), asociado a la ruta para cerrarse al navegar.
  const [sub, setSub] = useState<{ path: string; href: string } | null>(null);
  const subOpen = (href: string) => sub?.path === pathname && sub.href === href;
  // Con mouse el hover ya abrió el submenú: el clic no debe cerrarlo. Con teclado/táctil alterna.
  const toggleSub = (href: string, e?: React.MouseEvent) =>
    setSub(subOpen(href) && !(e && e.detail > 0 && e.currentTarget.closest("li")?.matches(":hover")) ? null : { path: pathname, href });
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sub) return;
    const close = (e: Event) => {
      if (e instanceof KeyboardEvent && e.key !== "Escape") return;
      if (e instanceof MouseEvent && navRef.current?.contains(e.target as Node)) return;
      setSub(null);
    };
    document.addEventListener("keydown", close);
    document.addEventListener("mousedown", close);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("mousedown", close);
    };
  }, [sub]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenPath(null);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-leche-200 bg-leche-50">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-campo-900 focus:px-4 focus:py-2 focus:text-white"
      >
        Saltar al contenido
      </a>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 md:h-20 lg:px-8">
        <Link href="/" aria-label={`${siteConfig.name}, ${siteConfig.slogan}. Ir al inicio`} className="shrink-0">
          <Image
            src="/images/logo.png"
            alt=""
            width={934}
            height={237}
            priority
            sizes="200px"
            className="h-10 w-auto md:h-12"
          />
        </Link>

        <nav ref={navRef} aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-6 xl:gap-7">
            {navLinks.map((l) => (
              <li
                key={l.href}
                className="relative whitespace-nowrap"
                onMouseEnter={() => l.children && setSub({ path: pathname, href: l.href })}
                onMouseLeave={() => l.children && setSub(null)}
              >
                {l.children ? (
                  <div className="flex items-center">
                    <Link
                      href={l.href}
                      aria-current={isActive(l.href) ? "page" : undefined}
                      className="link-line py-1 text-[0.95rem] font-semibold text-campo-900"
                    >
                      {l.label}
                    </Link>
                    <button
                      type="button"
                      onClick={(e) => toggleSub(l.href, e)}
                      aria-expanded={subOpen(l.href)}
                      aria-controls={`sub-${l.href.slice(1)}`}
                      aria-label={`Categorías de ${l.label}`}
                      className="inline-flex h-11 w-8 items-center justify-center text-campo-900"
                    >
                      <ChevronDown
                        size={16}
                        aria-hidden
                        className={`transition-transform duration-200 ${subOpen(l.href) ? "rotate-180" : ""}`}
                      />
                    </button>
                    {subOpen(l.href) && (
                      <ul
                        id={`sub-${l.href.slice(1)}`}
                        className="absolute left-0 top-full z-50 min-w-64 rounded-xl border border-leche-200 bg-white py-2 shadow-lg"
                      >
                        {l.children.map((c) => (
                          <li key={c.href}>
                            <Link
                              href={c.href}
                              className="flex min-h-11 items-center px-5 font-semibold text-campo-900 hover:bg-leche-100 hover:text-hoja-600"
                            >
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={l.href}
                    aria-current={isActive(l.href) ? "page" : undefined}
                    className="link-line py-1 text-[0.95rem] font-semibold text-campo-900"
                  >
                    {l.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={`tel:${siteConfig.phone.number}`}
            className="hidden items-center gap-2 whitespace-nowrap text-[0.95rem] font-semibold text-campo-900 hover:text-hoja-600 2xl:inline-flex"
          >
            <Phone size={18} aria-hidden />
            {siteConfig.phone.display}
          </a>
          <ButtonLink
            href={waLink("especializado")}
            external
            variant="whatsapp"
            className="min-h-11 px-5 py-2.5 text-[0.95rem]"
          >
            <MessageCircle size={18} aria-hidden /> WhatsApp
          </ButtonLink>
        </div>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpenPath(open ? null : pathname)}
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-campo-900 hover:bg-leche-100 lg:hidden"
        >
          {open ? <X size={26} aria-hidden /> : <Menu size={26} aria-hidden />}
        </button>
      </div>

      {open && (
        <div
          id="menu-movil"
          className="fixed inset-x-0 bottom-0 top-16 z-30 overflow-y-auto bg-campo-900 px-4 pb-10 pt-6 sm:px-6 md:top-20 lg:hidden"
        >
          <nav aria-label="Móvil">
            <ul>
              {navLinks.map((l) => (
                <li key={l.href} className="border-b border-white/10">
                  <div className="flex items-center justify-between">
                    <Link
                      href={l.href}
                      aria-current={isActive(l.href) ? "page" : undefined}
                      className="flex min-h-14 flex-1 items-center font-display text-2xl text-white aria-[current=page]:text-maiz-400"
                    >
                      {l.label}
                    </Link>
                    {l.children && (
                      <button
                        type="button"
                        onClick={() => toggleSub(l.href)}
                        aria-expanded={subOpen(l.href)}
                        aria-controls={`msub-${l.href.slice(1)}`}
                        aria-label={`Categorías de ${l.label}`}
                        className="inline-flex h-14 w-14 items-center justify-center text-white"
                      >
                        <ChevronDown
                          size={24}
                          aria-hidden
                          className={`transition-transform duration-200 ${subOpen(l.href) ? "rotate-180" : ""}`}
                        />
                      </button>
                    )}
                  </div>
                  {l.children && subOpen(l.href) && (
                    <ul id={`msub-${l.href.slice(1)}`} className="pb-3 pl-4">
                      {l.children.map((c) => (
                        <li key={c.href}>
                          <Link href={c.href} className="flex min-h-12 items-center text-lg text-leche-100 hover:text-maiz-300">
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-8 flex flex-col gap-3">
            <ButtonLink href={waLink("especializado")} external variant="whatsapp" className="w-full">
              <MessageCircle size={20} aria-hidden /> Escribir por WhatsApp
            </ButtonLink>
            <ButtonLink href={`tel:${siteConfig.phone.number}`} variant="outline-light" className="w-full">
              <Phone size={20} aria-hidden /> Llamar al {siteConfig.phone.display}
            </ButtonLink>
          </div>
        </div>
      )}
    </header>
  );
}
