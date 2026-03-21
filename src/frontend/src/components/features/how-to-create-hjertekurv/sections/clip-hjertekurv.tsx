import ListWithIllustraion, {
  OrderedListWithIllustrationWrapper,
} from "../list-with-illustration/list-with-illustration";
import Heading from "@/components/shared/ui/heading/heading";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import Link from "next/link";
import SymmetriskMotivPopover from "@/components/shared/content/popover/symmetrisk-motiv-popover";
import { HeadingIdProps } from "../constants";
import { LocaleProps } from "@/config/i18n";
import { buildAppRoute } from "@/utils/routes";
import { getDictionary } from "@/localization/get-dictionary";

export default async function ClipHjertekurvSection({
  headingId,
  lang,
}: HeadingIdProps & LocaleProps) {
  const { title, ingress, steps, step3ListIntro, step3ListSteps } = (
    await getDictionary(lang)
  ).pages.howToCreateHjertekurvPage.ClipHjertekurvSection;

  const popoverDictinary = (await getDictionary(lang)).popover.symmetriskMotiv;

  return (
    <>
      <Heading id={headingId} level="h2">
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
                href={buildAppRoute({
                  route: "/[lang]/hvordan-lage-kurver/mal-til-papir",
                  params: { lang },
                })}
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
          <SymmetriskMotivPopover dictionary={popoverDictinary} />.
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
