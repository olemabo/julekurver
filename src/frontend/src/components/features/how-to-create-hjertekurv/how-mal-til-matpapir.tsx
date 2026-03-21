import Link from "@/components/shared/ui/link/link";
import ListWithIllustraion, {
  OrderedListWithIllustrationWrapper,
} from "./list-with-illustration/list-with-illustration";
import Heading from "@/components/shared/ui/heading/heading";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import { LocaleProps } from "@/config/i18n";
import { getDictionary } from "@/localization/get-dictionary";

export default async function HowToMalTilMatpapirSection({
  lang,
}: LocaleProps) {
  const { title, ingress, steps, step5LinkText } = (await getDictionary(lang))
    .pages.howToMalToPaper.howToMalTilMatpapirSection;

  return (
    <>
      <Heading level="h2">{title}</Heading>
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
          <Link
            href={{ route: "/[lang]/hvordan-lage-kurver", params: { lang } }}
            hash="after-mal-on-paper"
          >
            {step5LinkText}
          </Link>
          .
        </ListWithIllustraion>
      </OrderedListWithIllustrationWrapper>
    </>
  );
}
