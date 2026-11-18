import {
  Box,
  Droplets,
  Fence,
  FlaskConical,
  Hammer,
  Milk,
  Package,
  Sprout,
  Stethoscope,
  Tractor,
  Warehouse,
  Wheat,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  semillas: Sprout,
  veterinaria: Stethoscope,
  "nutricion-animal": Wheat,
  fertilizantes: FlaskConical,
  alambrado: Fence,
  "malla-fardos": Package,
  "equipamiento-accesorios": Tractor,
  "establecimientos-rurales": Warehouse,
  almidones: Droplets,
  "leche-en-polvo": Milk,
  conservantes: FlaskConical,
  envases: Box,
  ferreteria: Hammer,
};

export function CategoryIcon({
  id,
  size = 48,
  className,
}: {
  id: string;
  size?: number;
  className?: string;
}) {
  const Icon = icons[id] ?? Wrench;
  return <Icon size={size} strokeWidth={1.5} aria-hidden className={className} />;
}
