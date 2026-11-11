import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "whatsapp" | "outline-light" | "outline-dark";

const base =
  "inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-6 py-3 text-base font-semibold leading-none transition-[transform,background-color,color,border-color] duration-200 active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary: "bg-maiz-400 text-campo-950 hover:bg-maiz-300",
  whatsapp: "bg-wa text-white hover:bg-wa-hover",
  "outline-light":
    "border-2 border-white/70 text-white hover:border-white hover:bg-white/10",
  "outline-dark":
    "border-2 border-campo-800 text-campo-900 hover:bg-campo-900 hover:text-white",
};

type Props = {
  href: string;
  variant?: Variant;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

export function ButtonLink({
  href,
  variant = "primary",
  external,
  className,
  children,
  onClick,
}: Props) {
  const cls = cn(base, variants[variant], className);
  if (external || /^(tel|mailto):/.test(href)) {
    const newTab = /^https?:/.test(href);
    return (
      <a
        href={href}
        {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className={cls}
        onClick={onClick}
      >
        {children}
        {newTab && <span className="sr-only"> (se abre en una pestaña nueva)</span>}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} onClick={onClick}>
      {children}
    </Link>
  );
}
