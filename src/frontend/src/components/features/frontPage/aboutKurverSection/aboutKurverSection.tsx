import Image from "next/image";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import { lightTheme } from "@/constants/displayTheme";

import "./aboutKurverSection.scss";
import Heading from "@/components/shared/ui/heading/heading";
import Button from "@/components/shared/ui/button/button";
import Link from "next/link";

export default function AboutKurverSection() {
  const paragraphMaxWidth = 480;
  const paragraphStyle = {
    fontFamily: "var(--font-alegreya-sans-light)",
    fontSize: "18px",
    maxWidth: paragraphMaxWidth,
  };

  return (
    <div className="about-kurver-container">
      <Image
        alt="Logo av flettet hjertekurv"
        height={350}
        width={335}
        priority
        src={"/images/pages/frontpage/frontpage_hjertekurv-cropped.svg"}
      />
      <div className="text-container">
        <Heading theme={lightTheme} headingLevel="h2">
          Lidenskap for hjertekurver
        </Heading>
        <Paragraph
          maxWidth={paragraphMaxWidth}
          style={paragraphStyle}
          theme={lightTheme}
        >
          Denne nettsiden er opprettet for å samle og dele kunnskap om
          hjertekurver, en tradisjon som kombinerer håndverk og kreativitet.
          Håndlagde hjertekurver kan være både dekorative og funksjonelle, og de
          representerer en personlig måte å skape og dele noe spesielt på.
        </Paragraph>
        <Paragraph
          maxWidth={paragraphMaxWidth}
          style={paragraphStyle}
          theme={lightTheme}
        >
          På hjertekurver.no finner du inspirasjon, detaljerte veiledninger og
          et omfattende galleri av ulike kurver. Målet vårt er å gjøre det
          enkelt for alle, uansett erfaring, å lære og utforske denne formen for
          papirhåndverk, samt tilby den største samlingen av hjertekurver.
        </Paragraph>
        <Paragraph
          maxWidth={paragraphMaxWidth}
          style={paragraphStyle}
          theme={lightTheme}
        >
          Hvis du har spørsmål, forslag eller ønsker å komme i kontakt, finner
          du oss på vår{" "}
          <Link style={{ color: "inherit" }} href="/no/kontakt-oss">
            kontakt oss
          </Link>
          -side. Vi setter pris på alle som tar del i arbeidet med å videreføre
          og utvikle tradisjonen med hjertekurver.
        </Paragraph>
        <Button theme={lightTheme} label="Les mer om oss" href="/no/om-siden" />
      </div>
    </div>
  );
}
