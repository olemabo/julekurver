import ListWithIllustraion, {
  OrderedListWithIllustrationWrapper,
} from "./listWithIllustration";
import Heading from "@/components/shared/ui/heading/heading";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import Link from "next/link";
import { useHowToMalTilMatpapirSection } from "./useTexts";
import { Locale } from "@/providers";
import { URLs } from "@/constants/urls";

export default function HowToMalTilMatpapirSection({ lang }: Locale) {
  const { title, ingress, steps, step5LinkText } =
    useHowToMalTilMatpapirSection();

  return (
    <>
      <Heading headingLevel="h2">{title}</Heading>
      <Paragraph>{ingress}</Paragraph>
      <OrderedListWithIllustrationWrapper>
        {steps.slice(0, 5).map((step, index) => (
          <ListWithIllustraion
            key={`mal-to-paper-${index}`}
            number={index + 1}
            useLazyImage
            illustrationSrc={`/images/pages/createHjertekurvPage/malToPaper/${index + 1}.svg`}
            altText={step.altText}
            imageSize={{ width: 351, height: 200 }}
          >
            {step.description}
          </ListWithIllustraion>
        ))}

        <ListWithIllustraion
          number={6}
          useLazyImage
          illustrationSrc="/images/pages/createHjertekurvPage/malToPaper/6.svg"
          altText={steps[5].altText}
          imageSize={{ width: 351, height: 200 }}
        >
          {steps[5].description}
          <Link href={`/${lang}/${URLs.hvordanLageKurver}/#after-mal-on-paper`}>
            {step5LinkText}
          </Link>
          .
        </ListWithIllustraion>
      </OrderedListWithIllustrationWrapper>
    </>
  );
}
