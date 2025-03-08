import Image from "next/image";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import { lightTheme } from "@/constants/displayTheme";
import Heading from "@/components/shared/ui/heading/heading";
import Button from "@/components/shared/ui/button/button";
import "./aboutKurverSection.scss";

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
        <Button theme={lightTheme} label="Les mer om oss" href="/no/om-siden" />
      </div>
    </div>
  );
}
