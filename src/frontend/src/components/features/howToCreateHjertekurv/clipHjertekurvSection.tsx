import ListWithIllustraion, {
  OrderedListWithIllustrationWrapper,
} from "./listWithIllustration";
import Heading from "@/components/shared/ui/heading/heading";
import { HeadingIdProps } from "./howToCreateHjertekurv";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";

export default function ClipHjertekurvSection({ headingId }: HeadingIdProps) {
  return (
    <>
      <Heading id={headingId} headingLevel="h2">
        Klipp ut kurver
      </Heading>
      <Paragraph>
        Følg oss også gjerne på Instagram @julekurver for de siste
        oppdateringene, inspirasjon, og for å være en del av vårt voksende
        fellesskap. Del gjerne dine egne bilder med oss ved å bruke hashtaggen
        #BraidedHearts.
      </Paragraph>
      <OrderedListWithIllustrationWrapper>
        <ListWithIllustraion
          number={1}
          useLazyImage
          illustrationSrc="/images/pages/createHjertekurvPage/clipKurv/to_papir_med_markert_brettekant.svg"
          altText="To brettede papir med brettekant"
          imageSize={{ width: 351, height: 200 }}
        >
          Først må du velge deg ut to farger du vil bruke på kurvene. Klipp
          deretter ut to rektangler av de ønskede fargene. Klipp ut den fargen
          du ønsker hank av litt bredere enn den andre.
        </ListWithIllustraion>

        <ListWithIllustraion
          number={2}
          useLazyImage
          illustrationSrc="/images/pages/createHjertekurvPage/clipKurv/to_brettet_papir.svg"
          altText="To brettede papir med brettekant"
          imageSize={{ width: 351, height: 200 }}
        >
          Lag så en brett over midten av kortsiden av papirene (den stiplede
          linjen). Sørg for at fargen på arket er vendt utover.
        </ListWithIllustraion>

        <ListWithIllustraion
          number={3}
          useLazyImage
          illustrationSrc="/images/pages/createHjertekurvPage/clipKurv/to_papir_med_opptegnet_mal.svg"
          altText="To brettede papir med brettekant"
          imageSize={{ width: 351, height: 200 }}
        >
          Tegn på ønsket mal på kurven. Dette kan gjøres på flere ulike måter:
          {/* <ul className="custom-ul">
                        <li>Blåpapir</li>
                        <li>Matpapir</li>
                        <li>Papir og blyant</li>
                    </ul> */}
          Husk å tegne på hanken til kurven. Den kan være like høy som kurven
          er. Husk også at bunnen av malen skal være langs den lukkede siden av
          papiret.
        </ListWithIllustraion>
        <ListWithIllustraion
          number={4}
          useLazyImage
          illustrationSrc="/images/pages/createHjertekurvPage/clipKurv/to_papir_med_saks_som_klipper.svg"
          altText="To brettede papir med brettekant"
          imageSize={{ width: 351, height: 200 }}
        >
          Klipp så ut kurvene etter de påtegnede linjene. Hvis du vil spare tid
          og sørge for at begge kurvene blir like, kan du legge den ene kurven
          inni den andre. Da trenger du også potensielt bare å tegne på malen på
          det ene arket (dersom kurven har symetrisk motiv).
        </ListWithIllustraion>
        <ListWithIllustraion
          number={5}
          useLazyImage
          illustrationSrc="/images/pages/createHjertekurvPage/clipKurv/to_oppklippede_ferdige_kurver_med_hank.svg"
          altText="To brettede papir med brettekant"
          imageSize={{ width: 351, height: 200 }}
        >
          Nå bør du sitte igjen med to kurver i forskjellige farger hvor bunnen
          er lukket, samt en hank i ønsket farge. Da er du klar for selve
          flettingen!
        </ListWithIllustraion>
      </OrderedListWithIllustrationWrapper>
    </>
  );
}
