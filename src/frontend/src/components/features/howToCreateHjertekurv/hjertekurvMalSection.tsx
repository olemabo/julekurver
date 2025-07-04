"use client";

import Heading from "@/components/shared/ui/heading/heading";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import Link from "next/link";
import FlettetilleggPopover from "@/components/shared/content/popover/FlettetilleggPopover";
import { useHjertekurvMalSection } from "./useTexts";
import { ReplacePlaceholder } from "@/components/shared/content/replacePlaceholder";
import { Locale } from "@/providers";
import { URLs } from "@/constants/urls";
import { fletteHjertekurvHeadingId, HeadingIdProps } from "./constants";

export function HjertekurvMalSection({
  headingId,
  lang,
}: HeadingIdProps & Locale) {
  const {
    title,
    ingress1,
    ingress2,
    ingress3,
    paragraph2,
    paragraph3,
    paragraph3_2,
  } = useHjertekurvMalSection();

  return (
    <>
      <Heading id={headingId} headingLevel="h2">
        {title}
      </Heading>
      <Paragraph>
        <ReplacePlaceholder
          text={ingress1.text}
          placeholder="{link}"
          component={
            <Link href={`/${lang}/${URLs.hjertekurver}`}>
              {ingress1.linkText}
            </Link>
          }
        />
        <ReplacePlaceholder
          text={ingress2.text}
          placeholder="{link}"
          component={
            <Link href={`/${lang}/${URLs.hjertekurver}/standard-kurv-3x3`}>
              {ingress2.linkText}
            </Link>
          }
        />
        <ReplacePlaceholder
          text={ingress3.text}
          placeholder="{link}"
          component={
            <Link href={`#${fletteHjertekurvHeadingId}`}>
              {ingress3.linkText}
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
          component={<FlettetilleggPopover />}
        />
      </Paragraph>
    </>
  );
}
