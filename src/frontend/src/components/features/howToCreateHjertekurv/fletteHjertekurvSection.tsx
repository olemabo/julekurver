import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import ListWithIllustraion, {
  OrderedListWithIllustrationWrapper,
} from "./listWithIllustration";
import Heading from "@/components/shared/ui/heading/heading";
import { HeadingIdProps } from "./howToCreateHjertekurv";

export default function FletteHjertekurvSection({ headingId }: HeadingIdProps) {
  return (
    <>
      <Heading id={headingId} headingLevel="h2">
        Flett kurvern
      </Heading>
      <Paragraph>
        Denne seksjonen vil forklare hvordan du kan flette kurver når du har
        klippet ut og har de klare.
      </Paragraph>
      <OrderedListWithIllustrationWrapper>
        <ListWithIllustraion
          number={1}
          useLazyImage
          illustrationSrc="/images/pages/createHjertekurvPage/createKurv/1.svg"
          altText="To brettede papir med brettekant"
          imageSize={{ width: 351, height: 200 }}
        >
          Finn fram de to utklippede delen til kurven. For videre instruksjoner
          har vi gitt de ulike strimlene på hjertekurven kategoriene A, B og C
          på hvit kurv, og 1, 2 og 3 på rød kurv.
        </ListWithIllustraion>

        <ListWithIllustraion
          number={2}
          useLazyImage
          illustrationSrc="/images/pages/createHjertekurvPage/createKurv/2.svg"
          altText="To brettede papir med brettekant"
          imageSize={{ width: 351, height: 200 }}
        >
          Start med å plassere den rød kurven oppå den hvite, slik at den hvite
          halvsirklen er nærmest deg.
        </ListWithIllustraion>

        <ListWithIllustraion
          number={3}
          useLazyImage
          illustrationSrc="/images/pages/createHjertekurvPage/createKurv/3.svg"
          altText="To brettede papir med brettekant"
          imageSize={{ width: 351, height: 200 }}
        >
          Den første strimmelen vi skal se på er C-strimmleen. Dra opp den hvite
          C-strimmelen og legg den oppå den røde kurven i en start posisjon.
        </ListWithIllustraion>

        <ListWithIllustraion
          number={4}
          useLazyImage
          illustrationSrc="/images/pages/createHjertekurvPage/createKurv/4.svg"
          altText="To brettede papir med brettekant"
          imageSize={{ width: 351, height: 200 }}
        >
          Start med å plassere den rød kurven oppå den hvite, slik at den hvite
          halvsirklen er nærmest deg.
        </ListWithIllustraion>

        <ListWithIllustraion
          number={5}
          useLazyImage
          illustrationSrc="/images/pages/createHjertekurvPage/createKurv/5.svg"
          altText="To brettede papir med brettekant"
          imageSize={{ width: 351, height: 200 }}
        >
          Finn fram de to utklippede delen til kurven. For videre instruksjoner
          har vi gitt de ulike strimlene på hjertekurven kategoriene A, B og C
          på hvit kurv, og 1, 2 og 3 på rød kurv.
        </ListWithIllustraion>

        <ListWithIllustraion
          number={6}
          useLazyImage
          illustrationSrc="/images/pages/createHjertekurvPage/createKurv/6.svg"
          altText="To brettede papir med brettekant"
          imageSize={{ width: 351, height: 200 }}
        >
          Finn fram de to utklippede delen til kurven. For videre instruksjoner
          har vi gitt de ulike strimlene på hjertekurven kategoriene A, B og C
          på hvit kurv, og 1, 2 og 3 på rød kurv.
        </ListWithIllustraion>

        <ListWithIllustraion
          number={7}
          useLazyImage
          illustrationSrc="/images/pages/createHjertekurvPage/createKurv/7.svg"
          altText="To brettede papir med brettekant"
          imageSize={{ width: 351, height: 200 }}
        >
          Finn fram de to utklippede delen til kurven. For videre instruksjoner
          har vi gitt de ulike strimlene på hjertekurven kategoriene A, B og C
          på hvit kurv, og 1, 2 og 3 på rød kurv.
        </ListWithIllustraion>

        <ListWithIllustraion
          number={8}
          useLazyImage
          illustrationSrc="/images/pages/createHjertekurvPage/createKurv/8.svg"
          altText="To brettede papir med brettekant"
          imageSize={{ width: 351, height: 200 }}
        >
          Finn fram de to utklippede delen til kurven. For videre instruksjoner
          har vi gitt de ulike strimlene på hjertekurven kategoriene A, B og C
          på hvit kurv, og 1, 2 og 3 på rød kurv.
        </ListWithIllustraion>

        <ListWithIllustraion
          number={9}
          useLazyImage
          illustrationSrc="/images/pages/createHjertekurvPage/createKurv/9.svg"
          altText="To brettede papir med brettekant"
          imageSize={{ width: 351, height: 200 }}
        >
          Finn fram de to utklippede delen til kurven. For videre instruksjoner
          har vi gitt de ulike strimlene på hjertekurven kategoriene A, B og C
          på hvit kurv, og 1, 2 og 3 på rød kurv.
        </ListWithIllustraion>

        <ListWithIllustraion
          number={10}
          useLazyImage
          illustrationSrc="/images/pages/createHjertekurvPage/createKurv/10.svg"
          altText="To brettede papir med brettekant"
          imageSize={{ width: 351, height: 200 }}
        >
          Lim på litt lim nederst på hanken (på den åpne siden) og legg hanken
          inni hjertekurven.
        </ListWithIllustraion>

        <ListWithIllustraion
          number={11}
          useLazyImage
          illustrationSrc="/images/pages/createHjertekurvPage/createKurv/11.svg"
          altText="To brettede papir med brettekant"
          imageSize={{ width: 351, height: 300 }}
        >
          Sørg for at limet har tørket og forsøk å åpne kurven litt fra innsiden
          for å se at hankene ikke sitter sammen. Gratulerer, du har lagd en
          hjertekurv!
        </ListWithIllustraion>
      </OrderedListWithIllustrationWrapper>
    </>
  );
}
