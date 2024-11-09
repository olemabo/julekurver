"use client";

import HowToSection from "@/components/shared/howTo/howTo";
import Heading from "@/components/shared/ui/heading/heading";

export default function HvordanLageKurver() {
  return (
    <div style={{ marginBottom: "48px" }}>
      <Heading headingLevel="h2">Hvordan lage kurv</Heading>
      <div>
        <HowToSection
          number={1}
          description={"Last ned og skriv ut malen ovenfor. "}
        />
        <HowToSection
          number={2}
          description={
            "Brett de ønskede delene av designpapiret og legg den nederste rette delen av de store buede malene mot brettene. Klipp så buen langs malen. Ved bretten skal papiret ikke klippes."
          }
        />
        <HowToSection number={3} description="Flett hjertene." />
        <HowToSection
          number={4}
          description={
            "Klipp hankene etter malen, bøy dem på midten og lim dem fast inne i hjertene."
          }
        />
      </div>
    </div>
  );
}
