import Image from "next/image";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import { lightTheme } from "@/constants/displayTheme";

import "./aboutKurverSection.css";
import Heading from "@/components/shared/ui/heading/heading";
import Button from "@/components/shared/ui/button/button";

export default function AboutKurverSection() {
  const paragraphMaxWidth = 533;
  const paragraphStyle = {
    fontFamily: "Alegreya Sans Light",
    fontSize: "18px",
    maxWidth: paragraphMaxWidth,
  };
  return (
    <div className="about-kurver-container">
      <Image
        alt="logo av flettet hjertekurv"
        height={280}
        width={350}
        src={"/images/pages/frontpage/frontpage_hjertekurv.svg"}
      />
      <div className="text-container">
        <Heading theme={lightTheme} headingLevel="h2">
          Lidenskap til kurver
        </Heading>
        <Paragraph
          maxWidth={paragraphMaxWidth}
          style={paragraphStyle}
          theme={lightTheme}
        >
          Vår lidenskap for fletting av hjerter har ført til opprettelsen av
          dette nettstedet, et sted hvor kjærlighet møter kreativitet. Vi tror
          på kraften av håndlagde hjerte-flettede kreasjoner for å uttrykke
          følelser og skape unike øyeblikk.
        </Paragraph>
        <Paragraph
          maxWidth={paragraphMaxWidth}
          style={paragraphStyle}
          theme={lightTheme}
        >
          På hjertekurver.no finner du inspirasjon, veiledninger og en gallery
          med ulike hjerte-flettede mesterverk. Vi er dedikert til å dele gleden
          ved å skape disse vakre kunstverkene og ønsker å bygge et fellesskap
          av hjerte-fletteentusiaster.
        </Paragraph>
        <Paragraph
          maxWidth={paragraphMaxWidth}
          style={paragraphStyle}
          theme={lightTheme}
        >
          Takk for at du er en del av vår reise. Utforsk, lær, og del dine egne
          hjerte-flettede opplevelser med oss. Sammen skaper vi et fellesskap
          som feirer kjærlighet og kreativitet gjennom kunsten av
          hjerte-fletting.
        </Paragraph>
        <Paragraph
          maxWidth={paragraphMaxWidth}
          style={paragraphStyle}
          theme={lightTheme}
        >
          Har du spørsmål, forslag eller bare ønsker å si hei? Besøk vår Kontakt
          Oss side for å komme i kontakt.
        </Paragraph>
        <Button theme={lightTheme} label="Les mer om oss" href="/no/om-siden" />
      </div>
    </div>
  );
}
