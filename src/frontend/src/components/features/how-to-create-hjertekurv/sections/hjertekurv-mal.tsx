import Heading from "@/components/shared/ui/heading/heading";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import FlettetilleggPopover from "@/components/shared/content/popover/flette-tillegg-popover";
import { ReplacePlaceholder } from "@/components/shared/content/rePlaceholder";
import { fletteHjertekurvHeadingId, HeadingIdProps } from "../constants";
import Link from "@/components/shared/ui/link/link";
import { getDictionary } from "@/localization/get-dictionary";

export async function HjertekurvMalSection({
  headingId,
  lang,
}: HeadingIdProps) {
  const {
    title,
    ingress1,
    ingress1LinkText,
    ingress2,
    ingress2LinkText,
    ingress3,
    ingress3LinkText,
    paragraph2,
    paragraph3,
    paragraph3_2,
  } = (await getDictionary(lang)).pages.howToCreateHjertekurvPage
    .HjertekurvMalSection;

  const popoverDictionary = (await getDictionary(lang)).popover.flettetillegg;

  return (
    <>
      <Heading id={headingId} level="h2">
        {title}
      </Heading>
      <Paragraph>
        <ReplacePlaceholder
          text={ingress1}
          placeholder="{link}"
          component={
            <Link
              href={{
                route: "/[lang]/hjertekurver",
                params: { lang },
              }}
            >
              {ingress1LinkText}
            </Link>
          }
        />
        <ReplacePlaceholder
          text={ingress2}
          placeholder="{link}"
          component={
            <Link
              href={{
                route: "/[lang]/hjertekurver/[hjertekurv]",
                params: { lang, hjertekurv: "standard-kurv-3x3" },
              }}
            >
              {ingress2LinkText}
            </Link>
          }
        />
        <ReplacePlaceholder
          text={ingress3}
          placeholder="{link}"
          component={
            <Link href={`#${fletteHjertekurvHeadingId}`}>
              {ingress3LinkText}
            </Link>
          }
        />
      </Paragraph>
      <Paragraph>{paragraph2}</Paragraph>
      <Paragraph>
        <span dangerouslySetInnerHTML={{ __html: paragraph3 }} />
        <ReplacePlaceholder
          text={paragraph3_2}
          placeholder={"{flettetilleggPopover}"}
          component={<FlettetilleggPopover dictionary={popoverDictionary} />}
        />
      </Paragraph>
    </>
  );
}
