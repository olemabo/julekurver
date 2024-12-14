"use client";

import HowToSection from "@/components/shared/howTo/howTo";
import Heading from "@/components/shared/ui/heading/heading";
import Link from "@/components/shared/ui/link/link";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";

export default function HvordanLageKurver() {
  return (
    <div style={{ marginBottom: "48px" }}>
      <Heading headingLevel="h2">Hvordan lage kurven</Heading>
      <Paragraph style={{ marginBottom: "36px" }}>
        Det er ikke mye som skal til for å komme igang med å lage en kurv. Her
        kommer en kort punktliste på hvordan du kan lage kurven din. Dersom du
        ikke har flettet mye før eller trenger oppfriskning kan du følge en mer
        detaljert oppskrift på{" "}
        <Link linkTitle="Lag kurver siden" href="/no/hvordan-lage-kurver" />{" "}
        vår.
      </Paragraph>
      <HowToSection number={1} isDarkRed>
        Last ned og skriv ut malen ovenfor. En vanlig malstørrelse er ca. 8 x 12
        cm, men du kan justere størrelsen etter behov.
      </HowToSection>

      <HowToSection number={2} isDarkRed>
        Velg to forskjellige farger på ønsket papir (glanspapir er anbefalt).
        Tegn over malen på papiret og brett papiret i to. Bunnen av malen skal
        være langs den lukkede siden av papiret. Klipp ut kurven.
      </HowToSection>

      <HowToSection number={3} isDarkRed>
        Flett hjertene ved å dra strimlene annenhver gang utenpå og inni
        hverandre.
      </HowToSection>

      <HowToSection number={4} isDarkRed>
        Klipp ut en hank lim dem fast inne i hjertene.
      </HowToSection>
    </div>
  );
}
