import ListWithIllustraion, {
  OrderedListWithIllustrationWrapper,
} from "./listWithIllustration";
import Heading from "@/components/shared/ui/heading/heading";
import { HeadingIdProps } from "./howToCreateHjertekurv";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import Popover from "@/components/shared/ui/popover/popover";
import Link from "next/link";

export default function ClipHjertekurvSection({ headingId }: HeadingIdProps) {
  return (
    <>
      <Heading id={headingId} headingLevel="h2">
        Klipp ut kurver
      </Heading>
      <Paragraph>
        Nå skal du klippe ut delene til hjertekurven din basert på malen du har
        valgt. Du trenger to kurvedeler og en hank som skal limes fast til den
        ferdige kurven. Følg disse trinnene:
      </Paragraph>
      <OrderedListWithIllustrationWrapper>
        <ListWithIllustraion
          number={1}
          useLazyImage
          illustrationSrc="/images/pages/createHjertekurvPage/clipKurv/to_papir_med_markert_brettekant.svg"
          altText="To brettede papir med brettekant"
          imageSize={{ width: 351, height: 200 }}
        >
          Start med å velge to farger du vil bruke til kurven. Klipp ut to
          rektangler i de valgte fargene. Hvis du også vil lage en hank, klipp
          den i en av fargene - litt bredere enn de andre rektanglene.
        </ListWithIllustraion>

        <ListWithIllustraion
          number={2}
          useLazyImage
          illustrationSrc="/images/pages/createHjertekurvPage/clipKurv/to_brettet_papir.svg"
          altText="To brettede papir med brettekant"
          imageSize={{ width: 351, height: 200 }}
        >
          Lag en brett over midten av kortsiden på begge rektanglene, som
          indikert med en stiplet linje på malen. Sørg for at den fargede siden
          vender utover når du bretter.
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
            Tegn av mønsteret fra valgt mal på kurven din. Dette kan gjøres på
            flere ulike måter:
          </Paragraph>
          <ul className="custom-ul">
            <li>Blåpapir</li>
            <li>Matpapir</li>
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
          sikre at begge kurvedelene blir helt like, kan du legge papirene oppå
          hverandre og klippe begge samtidig. Dette kan bare gjøres dersom
          kurven har
          <Popover
            title="Symetrik motiv"
            content={
              <>
                Symmetrisk motiv betyr at du klipper ut to identiske maler som
                skal flettes sammen, slik som i{" "}
                <Link href="/no/hjertekurver/standard-kurv-3x3">
                  9-felts-kurv
                </Link>{" "}
                brukt i dette eksempelet. Et eksempel på en kurv uten symmetrisk
                motiv er{" "}
                <Link href="/no/hjertekurver/isbjoern">isbjørn-kurven</Link>,
                hvor du må klippe ut to forskjellige maler for å få riktig
                design.
              </>
            }
          >
            symetrisk motiv
          </Popover>
          .
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
