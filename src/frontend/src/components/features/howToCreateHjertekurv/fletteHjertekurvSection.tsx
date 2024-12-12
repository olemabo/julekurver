import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import ListWithIllustraion, {
  OrderedListWithIllustrationWrapper,
} from "./listWithIllustration";
import Heading from "@/components/shared/ui/heading/heading";
import { HeadingIdProps } from "./howToCreateHjertekurv";
import Popover from "@/components/shared/ui/popover/popover";
import Image from "next/image";

export default function FletteHjertekurvSection({ headingId }: HeadingIdProps) {
  return (
    <>
      <Heading id={headingId} headingLevel="h2">
        Flett kurver
      </Heading>
      <Paragraph>
        Denne seksjonen viser hvordan du kan flette kurven etter at du har
        klippet ut delene og gjort dem klare. Det finnes flere måter å sette
        sammen en hjertekurv på, men her presenteres en enkel og effektiv
        fremgangsmåte du kan følge
      </Paragraph>
      <OrderedListWithIllustrationWrapper>
        <ListWithIllustraion
          number={1}
          useLazyImage
          illustrationSrc="/images/pages/createHjertekurvPage/createKurv/1.svg"
          altText="To brettede papir med brettekant"
          imageSize={{ width: 351, height: 200 }}
        >
          Finn fram de to utklippede delene av kurven. For å gjøre
          instruksjonene tydelige, har vi gitt
          <Popover
            title="Strimmel"
            content={
              <>
                En strimmel er en av de utklippede delene av en hjertekurv som
                brukes til å flette kurven sammen. I eksempelet her har vært del
                (rød og hvit) 3 strimler hver (Markert med A, B og C for hvit
                kurv og 1, 2 og 3 for rød kurv.)
              </>
            }
          >
            strimlene
          </Popover>
          på den hvite kurven bokstavene A, B og C, og på den røde kurven
          tallene 1, 2 og 3.
        </ListWithIllustraion>

        <ListWithIllustraion
          number={2}
          useLazyImage
          illustrationSrc="/images/pages/createHjertekurvPage/createKurv/2.svg"
          altText="To brettede papir med brettekant"
          imageSize={{ width: 351, height: 200 }}
        >
          Legg den røde kurven oppå den hvite, slik at halvsirkelen på den hvite
          kurven er nærmest deg. Dette gir en god utgangsposisjon for
          flettingen.
        </ListWithIllustraion>

        <ListWithIllustraion
          number={3}
          useLazyImage
          illustrationSrc="/images/pages/createHjertekurvPage/createKurv/3.svg"
          altText="To brettede papir med brettekant"
          imageSize={{ width: 351, height: 200 }}
        >
          Begynn med den hvite C-strimmelen. Åpne opp rød strimmel 3 og dra den
          hvite C-strimmelen gjennom den.
        </ListWithIllustraion>

        <ListWithIllustraion
          number={4}
          useLazyImage
          illustrationSrc="/images/pages/createHjertekurvPage/createKurv/4.svg"
          altText="To brettede papir med brettekant"
          imageSize={{ width: 351, height: 200 }}
        >
          Fortsett ved å åpne den hvite C-strimmelen og dra den røde strimmelen
          2 gjennom.
        </ListWithIllustraion>

        <ListWithIllustraion
          number={5}
          useLazyImage
          illustrationSrc="/images/pages/createHjertekurvPage/createKurv/5.svg"
          altText="To brettede papir med brettekant"
          imageSize={{ width: 351, height: 200 }}
        >
          Den siste delen for den hvite C-strimmelen er å trekke den gjennom den
          røde strimmelen 1.
        </ListWithIllustraion>

        <ListWithIllustraion
          number={6}
          useLazyImage
          illustrationSrc="/images/pages/createHjertekurvPage/createKurv/6.svg"
          altText="To brettede papir med brettekant"
          imageSize={{ width: 351, height: 200 }}
        >
          Nå går du videre til den hvite B-strimmelen. Legg den oppå de røde
          strimlene i en utgangsposisjon, slik du gjorde med den hvite
          C-strimmelen tidligere. I de neste stegene skal vi gjenta prosessen
          fra punkt 3-5, men i motsatt rekkefølge.
        </ListWithIllustraion>

        <ListWithIllustraion
          number={7}
          useLazyImage
          illustrationSrc="/images/pages/createHjertekurvPage/createKurv/7.svg"
          altText="To brettede papir med brettekant"
          imageSize={{ width: 351, height: 200 }}
        >
          Begynn med den hvite B-strimmelen. Åpne den hvite C-strimmelen og dra
          den røde strimmelen 3 gjennom.
        </ListWithIllustraion>

        <ListWithIllustraion
          number={8}
          useLazyImage
          illustrationSrc="/images/pages/createHjertekurvPage/createKurv/8.svg"
          altText="To brettede papir med brettekant"
          imageSize={{ width: 351, height: 200 }}
        >
          Fortsett ved å dra den hvite B-strimmelen gjennom den røde strimmelen
          2, og til slutt dra den røde strimmelen 1 gjennom den hvite
          B-strimmelen. Når du er ferdig med den hvite B-strimmelen, bør du ha
          to farger i henhold til mønsteret vist på bildet.
        </ListWithIllustraion>

        <ListWithIllustraion
          number={9}
          useLazyImage
          illustrationSrc="/images/pages/createHjertekurvPage/createKurv/9.svg"
          altText="To brettede papir med brettekant"
          imageSize={{ width: 351, height: 200 }}
        >
          Fullfør flettingen med den hvite A-strimmelen. Før du begynner, kan
          det være lurt å stramme kurven litt ved å dra den hvite B- og
          C-strimmelen så langt mot den røde halvsirkelen som mulig. Dette gir
          mer plass når du skal flette inn den hvite A-strimmelen. Hvis det er
          vanskelig å flette C-strimmelen på grunn av trang plass, kan det tyde
          på at kurven er klippet litt feil eller at
          <Popover
            title="Flettetillegg"
            content={
              <>
                Flettetillegget er den lille ekstra lengden du klipper opp
                strimelene i, for å ta høyde for at flettingen vil ta litt
                ekstra av strimelene. Alle maler som er laget er laget basert på
                et kvadrat. Det vil si at du får nøyaktig lik bredde og høyde på
                fletteområdet. Hvis man klipper det slik vil man fort støte på
                et problem mot slutten av flettingen, da selve flettingene også
                vil kreve litt ekstra papir når strimlene går opp og ned. Dette
                flettetillegg må du legge til selv når du klipper. For en kurv
                med få strimlere kan du legge til lite, 1-4 mm, men for en kurv
                med mange strimler må du legge til mer.
                <Image
                  src={"/images/pages/frontpage/flettetillegg.svg"}
                  alt={`Illustrasjon av flettetillegg`}
                  width={300}
                  height={60}
                />
              </>
            }
          >
            flettetillegget
          </Popover>{" "}
          er for lite.
        </ListWithIllustraion>

        <ListWithIllustraion
          number={10}
          useLazyImage
          illustrationSrc="/images/pages/createHjertekurvPage/createKurv/10.svg"
          altText="To brettede papir med brettekant"
          imageSize={{ width: 351, height: 200 }}
        >
          Lim en liten mengde lim nederst på hanken (på den åpne siden) og legg
          hanken inni hjertekurven.
        </ListWithIllustraion>

        <ListWithIllustraion
          number={11}
          useLazyImage
          illustrationSrc="/images/pages/createHjertekurvPage/createKurv/11.svg"
          altText="To brettede papir med brettekant"
          imageSize={{ width: 351, height: 300 }}
        >
          La limet tørke helt og åpne kurven forsiktig fra innsiden for å
          kontrollere at hankene ikke sitter sammen. Vær også forsiktig med at
          det ikke kommer lim utenfor hanken slik at du limer kurven sammen og
          ikke får åpnet den. Gratulerer, du har laget en hjertekurv!
        </ListWithIllustraion>
      </OrderedListWithIllustrationWrapper>
    </>
  );
}
