import Heading from "@/components/shared/ui/heading/heading";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import {
  fletteHjertekurvHeadingId,
  HeadingIdProps,
} from "./howToCreateHjertekurv";
import Link from "next/link";

export function HjertekurvMalSection({ headingId }: HeadingIdProps) {
  return (
    <>
      <Heading id={headingId} headingLevel="h2">
        Malen er viktig
      </Heading>
      <Paragraph>
        Du må nå bestemme deg for hvilken kurv du ønsker å flette. Du kan finne
        din ønskede mal blant alle malene på nettsiden vår her:{" "}
        <Link href="/no/hjertekurver">maler</Link>. Dersom du ikke kan
        flettekunsten fra før eller trenger en oppfriskning kan vi anbefale å
        starte på en relativ enkel{" "}
        <Link href="/no/hjertekurver/standard-kurv-3x3">9-felts-kurv</Link>, som
        også er brukt i{" "}
        <Link href={`#${fletteHjertekurvHeadingId}`}>flette-eksempelet</Link>{" "}
        under.
      </Paragraph>
    </>
  );
}
