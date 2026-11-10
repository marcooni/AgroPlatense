import React from "react";
import { cn } from "@/lib/utils";

interface SectionTagProps {
  children: React.ReactNode;
  variant?: "green" | "gold" | "white" | "dark";
  className?: string;
}

export default function SectionTag({
  children,
  variant = "green",
  className,
}: SectionTagProps) {
  const styles = {
    green: "bg-emerald-100/90 text-emerald-900 border-emerald-300/80",
    gold: "bg-amber-100/90 text-amber-900 border-amber-300/80",
    white: "bg-white/20 text-white border-white/30 backdrop-blur-md",
    dark: "bg-stone-800 text-stone-200 border-stone-700",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border shadow-xs transition-colors",
        styles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
