import ListWithIllustraion, {
  OrderedListWithIllustrationWrapper,
} from "./listWithIllustration";
import Heading from "@/components/shared/ui/heading/heading";
import { HeadingIdProps } from "./howToCreateHjertekurv";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import Link from "next/link";
import SymmetriskMotivPopover from "@/components/shared/content/popover/SymmetriskMotivPopover";
import { useClipHjertekurvSection } from "./useTexts";
import { Locale } from "@/providers";
import { URLs } from "@/constants/urls";

export default function ClipHjertekurvSection({
  headingId,
  lang,
}: HeadingIdProps & Locale) {
  const { title, ingress, steps, step3ListIntro, step3ListSteps } =
    useClipHjertekurvSection();

  return (
    <>
      <Heading id={headingId} headingLevel="h2">
        {title}
      </Heading>
      <Paragraph>{ingress}</Paragraph>
      <OrderedListWithIllustrationWrapper>
        <ListWithIllustraion
          number={1}
          useLazyImage
          illustrationSrc={steps[0].illustrationSrc}
          altText={steps[0].altText}
          imageSize={{ width: 351, height: 200 }}
        >
          {steps[0].description}
        </ListWithIllustraion>

        <ListWithIllustraion
          number={2}
          useLazyImage
          illustrationSrc={steps[1].illustrationSrc}
          altText={steps[1].altText}
          imageSize={{ width: 351, height: 200 }}
        >
          {steps[1].description}
        </ListWithIllustraion>

        <ListWithIllustraion
          number={3}
          useLazyImage
          illustrationSrc={steps[2].illustrationSrc}
          altText={steps[2].altText}
          imageSize={{ width: 351, height: 200 }}
          asParagraph={false}
        >
          <Paragraph>
            <span id="after-mal-on-paper"></span>
            {step3ListIntro}
          </Paragraph>
          <ul className="custom-ul">
            <li>{step3ListSteps[0]}</li>
            <li>
              <Link
                href={`/${lang}/${URLs.hvordanLageKurver}/${URLs.malTilPapir}`}
              >
                {step3ListSteps[1]}
              </Link>
            </li>
            <li>{step3ListSteps[2]}</li>
          </ul>
          <Paragraph>{steps[2].description}</Paragraph>
        </ListWithIllustraion>
        <ListWithIllustraion
          number={4}
          useLazyImage
          illustrationSrc={steps[3].illustrationSrc}
          altText={steps[3].altText}
          imageSize={{ width: 351, height: 200 }}
        >
          {steps[3].description}
          <SymmetriskMotivPopover />.
        </ListWithIllustraion>
        <ListWithIllustraion
          number={5}
          useLazyImage
          illustrationSrc={steps[4].illustrationSrc}
          altText={steps[4].altText}
          imageSize={{ width: 351, height: 200 }}
        >
          {steps[4].description}
        </ListWithIllustraion>
      </OrderedListWithIllustrationWrapper>
    </>
  );
}
