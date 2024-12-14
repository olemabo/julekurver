import ListWithIllustraion, {
  OrderedListWithIllustrationWrapper,
} from "./listWithIllustration";
import Heading from "@/components/shared/ui/heading/heading";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import Link from "next/link";

export default function HowToMalTilMatpapirSection() {
  return (
    <>
      <Heading headingLevel="h2">Overføre malen med matpapir</Heading>
      <Paragraph>
        Matpapirmetoden er en enkel måte å overføre malen på papiret ditt uten å
        måtte bruke spesialutstyr. Ved å bruke matpapir som et mellomlag, kan du
        lett overføre designet med presisjon, slik at du får en nøyaktig mal å
        klippe etter. Her er stegene du kan følge for å bruke denne metoden.
      </Paragraph>
      <OrderedListWithIllustrationWrapper>
        <ListWithIllustraion
          number={1}
          useLazyImage
          illustrationSrc="/images/pages/createHjertekurvPage/malToPaper/1.svg"
          altText="To brettede papir med brettekant"
          imageSize={{ width: 351, height: 200 }}
        >
          Print ut malen i ønsket størrelse på papir. Sørg for at malen er
          tilpasset den størrelsen du ønsker på kurven, enten den skal være stor
          eller liten.
        </ListWithIllustraion>

        <ListWithIllustraion
          number={2}
          useLazyImage
          illustrationSrc="/images/pages/createHjertekurvPage/malToPaper/2.svg"
          altText="To brettede papir med brettekant"
          imageSize={{ width: 351, height: 200 }}
        >
          Finn fram matpapir som har passende størrelse til malen. Matpapiret
          bør være stort nok til å dekke malen, slik at du kan overføre designet
          nøyaktig. Klipp eventuelt matpapiret til ønsket størrelse.
        </ListWithIllustraion>

        <ListWithIllustraion
          number={3}
          useLazyImage
          illustrationSrc="/images/pages/createHjertekurvPage/malToPaper/3.svg"
          altText="To brettede papir med brettekant"
          imageSize={{ width: 351, height: 200 }}
          asParagraph={false}
        >
          <Paragraph>
            Legg matpapiret oppå malen på det utskrevne arket. Sørg for at det
            ligger jevnt og uten folder, slik at overføringen blir så presis som
            mulig. Det er viktig at matpapiret ikke forskyver seg under
            prosessen.
          </Paragraph>
        </ListWithIllustraion>
        <ListWithIllustraion
          number={4}
          useLazyImage
          illustrationSrc="/images/pages/createHjertekurvPage/malToPaper/4.svg"
          altText="To brettede papir med brettekant"
          imageSize={{ width: 351, height: 200 }}
        >
          Nå skal du ha malen på matpapiret. For å kunne overføre designet, må
          man sørge for at strekene du har tegnet på matpapiret ligger vendt ned
          mot glanspapiret (i neste steg).
        </ListWithIllustraion>
        <ListWithIllustraion
          number={5}
          useLazyImage
          illustrationSrc="/images/pages/createHjertekurvPage/malToPaper/5.svg"
          altText="To brettede papir med brettekant"
          imageSize={{ width: 351, height: 200 }}
        >
          Legg matpapiret med motivet oppå ønsket glanspapir. Bruk en blyant til
          å tegne over designet, slik at det blyet på undersiden smitter over
          til glanspapiret. Dette gjør at du får en nøyaktig kopi av malen som
          du kan bruke til å klippe ut kurven.
        </ListWithIllustraion>
        <ListWithIllustraion
          number={6}
          useLazyImage
          illustrationSrc="/images/pages/createHjertekurvPage/malToPaper/6.svg"
          altText="To brettede papir med brettekant"
          imageSize={{ width: 351, height: 200 }}
        >
          Når du har tegnet over hele designet, kan du forsiktig fjerne
          matpapiret. Nå har du en nøyaktig overføring av malen på glanspapiret,
          klar til å klippe ut og bruke til å lage kurven. For resten av
          oppskriften, kan du klikke{" "}
          <Link href={"/no/hvordan-lage-kurver/#after-mal-on-paper"}>her</Link>.
        </ListWithIllustraion>
      </OrderedListWithIllustrationWrapper>
    </>
  );
}
