import ListWithIllustraion, {
  OrderedListWithIllustrationWrapper,
} from "./listWithIllustration";
import Heading from "@/components/shared/ui/heading/heading";
import { HeadingIdProps } from "./howToCreateHjertekurv";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import Link from "next/link";
import SymmetriskMotivPopover from "@/components/shared/content/popover/SymmetriskMotivPopover";

export default function ClipHjertekurvSection({ headingId }: HeadingIdProps) {
  return (
    <>
      <Heading id={headingId} headingLevel="h2">
        Klipp ut kurven
      </Heading>
      <Paragraph>
        Det er på tide å klippe ut delene til hjertekurven din basert på malen
        du har valgt. Du trenger to kurvedeler og en hank som senere skal festes
        til den ferdige kurven. Følg disse stegene for et best mulig resultat:
      </Paragraph>
      <OrderedListWithIllustrationWrapper>
        <ListWithIllustraion
          number={1}
          useLazyImage
          illustrationSrc="/images/pages/createHjertekurvPage/clipKurv/to_papir_med_markert_brettekant.svg"
          altText="To brettede papir med brettekant"
          imageSize={{ width: 351, height: 200 }}
        >
          Velg to forskjellige farger på papiret til kurven din. Klipp ut to
          rektangler på cirka 10 x 26 cm i hver av fargene. Hvis du ønsker å
          lage en hank, kan du tilpasse størrelsen ved å gjøre det ene
          rektanglet litt bredere, for eksempel 12 x 26 cm.
        </ListWithIllustraion>

        <ListWithIllustraion
          number={2}
          useLazyImage
          illustrationSrc="/images/pages/createHjertekurvPage/clipKurv/to_brettet_papir.svg"
          altText="To brettede papir med brettekant"
          imageSize={{ width: 351, height: 200 }}
        >
          Lag en brett over midten av kortsiden på begge rektanglene, som
          indikert med en stiplet linje på malen i punkt 1. Sørg for at den
          fargede siden vender utover når du bretter.
        </ListWithIllustraion>

        <ListWithIllustraion
          number={3}
          useLazyImage
          illustrationSrc="/images/pages/createHjertekurvPage/clipKurv/to_papir_med_opptegnet_mal.svg"
          altText="To brettede papir med brettekant"
          imageSize={{ width: 351, height: 200 }}
          asParagraph={false}
        >
          <Paragraph>
            <span id="after-mal-on-paper"></span>
            Tegn av mønsteret fra valgt mal på kurven din. Dette kan gjøres på
            flere ulike måter:
          </Paragraph>
          <ul className="custom-ul">
            <li>Blåpapir</li>
            <li>
              <Link href="/no/hvordan-lage-kurver/mal-til-papir">Matpapir</Link>
            </li>
            <li>Papir og blyant</li>
          </ul>
          <Paragraph>
            Husk å tegne på hanken til kurven. Den kan være like høy som kurven
            er. Husk også at bunnen av malen skal være langs den lukkede siden
            av papiret.
          </Paragraph>
        </ListWithIllustraion>
        <ListWithIllustraion
          number={4}
          useLazyImage
          illustrationSrc="/images/pages/createHjertekurvPage/clipKurv/to_papir_med_saks_som_klipper.svg"
          altText="To brettede papir med brettekant"
          imageSize={{ width: 351, height: 200 }}
        >
          Klipp ut begge delene etter de påtegnede linjene. For å spare tid og
          sikre at begge kurvedelene blir helt like, kan du legge papirene inni
          hverandre og klippe begge samtidig. Dette kan bare gjøres dersom
          kurven har <SymmetriskMotivPopover />.
        </ListWithIllustraion>
        <ListWithIllustraion
          number={5}
          useLazyImage
          illustrationSrc="/images/pages/createHjertekurvPage/clipKurv/to_oppklippede_ferdige_kurver_med_hank.svg"
          altText="To brettede papir med brettekant"
          imageSize={{ width: 351, height: 200 }}
        >
          Når du er ferdig, skal du ha to kurvedeler i forskjellige farger,
          begge med en lukket bunn, samt en hank i ønsket farge. Nå er du klar
          for flettingen!
        </ListWithIllustraion>
      </OrderedListWithIllustrationWrapper>
    </>
  );
}
