import { Hero } from "@/components/sections/Hero";
import { AreaGateways } from "@/components/sections/AreaGateways";
import { Pillars } from "@/components/sections/Pillars";
import { ContactBand } from "@/components/sections/ContactBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AreaGateways />
      <Pillars />
      <ContactBand />
    </>
  );
}
