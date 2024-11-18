import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import Heading from "@/components/shared/ui/heading/heading";
import { HeadingIdProps } from "./howToCreateHjertekurv";

export default function WhatYouNeedSection({ headingId }: HeadingIdProps) {
  return (
    <>
      <Heading id={headingId} headingLevel="h2">
        Dette trenger du
      </Heading>
      <Paragraph>
        For å sette i gang med å lage julekurver, trenger du ikke mye utstyr
        uteover det som du allerede har i huset. Du trenger følgende:
      </Paragraph>
      <ul className="custom-ul">
        <li>Glanspapir</li>
        <li>
          Saks (det holder med en vanlig saks, men hvis du vil kan du også bruke
          en bølgesaks eller en takkesaks på ”vingene” av hjertet for å få en
          fin effekt)
        </li>
        <li>Limstift</li>
        <li>Papp for å lage en mal å klippe etter</li>
        <li>Linjal eller målebånd</li>
      </ul>
    </>
  );
}
