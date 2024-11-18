import Heading from "@/components/shared/ui/heading/heading";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import { HeadingIdProps } from "./howToCreateHjertekurv";

export function HjertekurvMalSection({ headingId }: HeadingIdProps) {
  return (
    <>
      <Heading id={headingId} headingLevel="h2">
        Malen er viktig
      </Heading>
      <Paragraph>
        Følg oss også gjerne på Instagram @julekurver for de siste
        oppdateringene, inspirasjon, og for å være en del av vårt voksende
        fellesskap. Del gjerne dine egne bilder med oss ved å bruke hashtaggen
        #BraidedHearts.
      </Paragraph>
    </>
  );
}
