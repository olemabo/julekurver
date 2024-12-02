import Heading from "@/components/shared/ui/heading/heading";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import {
  fletteHjertekurvHeadingId,
  HeadingIdProps,
} from "./howToCreateHjertekurv";

export function HjertekurvMalSection({ headingId }: HeadingIdProps) {
  return (
    <>
      <Heading id={headingId} headingLevel="h2">
        Malen er viktig
      </Heading>
      <Paragraph>
        Du må nå bestemme deg for hvilken kurv du ønsker å flette. Du kan finne
        din ønskede mal blant alle malene på nettsiden vår her:{" "}
        <a href="/no/hjertekurver">maler</a>. Dersom du ikke kan flettekunsten
        fra før eller trenger en oppfriskning kan vi anbefale å starte på en
        relativ enkel{" "}
        <a href="/no/hjertekurver/standard-kurv-3x3">9-felts-kurv</a>, som også
        er brukt i{" "}
        <a href={`#${fletteHjertekurvHeadingId}`}>flette-eksempelet</a> under.
      </Paragraph>
    </>
  );
}
