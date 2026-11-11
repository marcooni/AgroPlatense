import { cn } from "@/lib/utils";

/**
 * Ilustración decorativa propia (no es una fotografía).
 * - "campo": surcos en perspectiva hacia el horizonte con un sol.
 * - "tambo": líneas onduladas, como el nivel de la leche en un tanque.
 * Se dibuja con currentColor: el color se define desde className del padre.
 */
export function Landscape({
  variant,
  className,
  animated = false,
}: {
  variant: "campo" | "tambo";
  className?: string;
  /** Solo el hero anima el dibujado de los surcos. */
  animated?: boolean;
}) {
  if (variant === "campo") {
    const horizon = 190;
    const rows = Array.from({ length: 19 }, (_, k) => k - 9);
    return (
      <svg
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        focusable="false"
        className={cn("h-full w-full", className)}
      >
        <circle
          cx="800"
          cy={horizon - 4}
          r="78"
          className={cn("fill-maiz-400", animated && "sol")}
        />
        <rect x="0" y={horizon} width="1200" height={600 - horizon} className="fill-campo-900" />
        <line x1="0" x2="1200" y1={horizon} y2={horizon} stroke="currentColor" strokeWidth="2" opacity="0.5" />
        {rows.map((i, idx) => (
          <path
            key={i}
            d={`M600 ${horizon} L${600 + i * 170} 620`}
            pathLength={1}
            stroke="currentColor"
            strokeWidth={idx % 3 === 0 ? 3 : 1.6}
            strokeLinecap="round"
            fill="none"
            opacity={idx % 3 === 0 ? 0.9 : 0.5}
            className={animated ? "surco" : undefined}
            style={animated ? ({ "--i": idx } as React.CSSProperties) : undefined}
          />
        ))}
        {[290, 370, 470].map((y) => (
          <line key={y} x1="0" x2="1200" y1={y} y2={y} stroke="currentColor" strokeWidth="1" opacity="0.18" />
        ))}
      </svg>
    );
  }

  const waves = Array.from({ length: 13 }, (_, k) => k);
  return (
    <svg
      viewBox="0 0 1200 760"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
      className={cn("h-full w-full", className)}
    >
      {waves.map((k) => {
        const y = 90 + k * 52;
        const a = 14 + (k % 4) * 5;
        return (
          <path
            key={k}
            d={`M-20 ${y} C 180 ${y - a}, 380 ${y + a}, 600 ${y} S 1020 ${y - a}, 1220 ${y}`}
            fill="none"
            stroke="currentColor"
            strokeWidth={k % 4 === 0 ? 2.4 : 1.2}
            opacity={0.25 + (k % 4) * 0.12}
          />
        );
      })}
    </svg>
  );
}
