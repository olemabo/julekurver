import Heading from "@/components/shared/ui/heading/heading";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import {
  fletteHjertekurvHeadingId,
  HeadingIdProps,
} from "./howToCreateHjertekurv";
import Link from "next/link";
import FlettetilleggPopover from "@/components/shared/content/popover/FlettetilleggPopover";

export function HjertekurvMalSection({ headingId }: HeadingIdProps) {
  return (
    <>
      <Heading id={headingId} headingLevel="h2">
        Malen er viktig
      </Heading>
      <Paragraph>
        Før du begynner å flette, må du velge en mal. På vår nettside finner du
        et stort utvalg <Link href="/no/hjertekurver">maler</Link>, inkludert en
        enkel{" "}
        <Link href="/no/hjertekurver/standard-kurv-3x3">9-felts-kurv</Link> som
        vi anbefaler for nybegynnere eller som en rask oppfriskning. Denne
        brukes også i flettingen i{" "}
        <Link href={`#${fletteHjertekurvHeadingId}`}>eksempelet</Link> nedenfor.
      </Paragraph>

      {/* <Heading headingLevel="h3">
        Hvorfor er malen viktig?
      </Heading> */}
      <Paragraph>
        Malen er essensiell for å lage en vellykket hjertekurv. Den sikrer at
        kurven får riktig form, og at strimlene passer nøyaktig sammen under
        flettingen. Uten en presis mal kan det være utfordrende å oppnå et
        symmetrisk og jevnt resultat, spesielt for kurver med komplekse design.
      </Paragraph>

      {/* <Heading headingLevel="h3">
        Tips til hvordan overføre malen til papiret
      </Heading>
      <Paragraph>
        For å få malen over på papiret, kan du enten printe den ut direkte på papiret du vil bruke, eller bruke et kalkerpapir for å overføre designet. 
        Hvis du ikke har mulighet til å printe, kan du legge malen oppå papiret og bruke en blyant til forsiktig å tegne omrisset ved å trykke gjennom med spissen. 
        Pass på å ikke lage for hard strek, slik at merkene ikke synes på den ferdige kurven.
      </Paragraph> */}

      {/* <Heading headingLevel="h3">
        Velg riktig størrelse på malen
      </Heading> */}
      <Paragraph>
        Størrelsen på malen avhenger av bruken. Mindre kurver er flotte som pynt
        eller små gaver, mens større kurver kan romme mer og brukes som
        dekorative elementer. For standard kurver kan du starte med et kvadrat
        på <b>8x8 cm</b> og tilpasse etter behov. Husk å legge til et
        <FlettetilleggPopover />
        for å unngå at kurven blir for stram under flettingen.
      </Paragraph>
    </>
  );
}
