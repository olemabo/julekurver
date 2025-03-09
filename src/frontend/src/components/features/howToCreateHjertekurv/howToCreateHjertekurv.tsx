"use client";

import PageWrapper from "@/components/shared/pageWrapper/pageWrapper";
import Breadcrumb from "@/components/shared/ui/breadcrumb/breadcrumb";
import Heading from "@/components/shared/ui/heading/heading";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";

import ClipHjertekurvSection from "./clipHjertekurvSection";
import FletteHjertekurvSection from "./fletteHjertekurvSection";
import WhatYouNeedSection from "./whatYouNeedSection";
import NavigateToH2 from "@/components/shared/ui/navigateToId/navigateToH2";
import { HjertekurvMalSection } from "./hjertekurvMalSection";
import { useHowToCreateHjertekurvIntro } from "./useTexts";
import { Locale } from "@/providers";
import { URLs } from "@/constants/urls";

export const whatYouNeedHeadingId = "what-you-need-heading-id";
export const hjertekurvMalHeadingId = "hjertekurv-mal-heading-id";
export const clipHjertekurvHeadingId = "clip-hjertekurv-heading-id";
export const fletteHjertekurvHeadingId = "flette-hjertekurv-heading-id";

export type HeadingIdProps = {
  headingId: string;
};

export default function HowToCreateHjertekurv({ lang }: Locale) {
  const { title, ingress, breadcrumbs } = useHowToCreateHjertekurvIntro();

  const breadCrumbs = [
    { linkText: breadcrumbs.frontpage, href: `/${lang}` },
    {
      linkText: breadcrumbs.howToCreateHjertekurvPage,
      href: `/${URLs.hvordanLageKurver}`,
    },
  ];

  return (
    <PageWrapper isStandardPage>
      <Breadcrumb linkItems={breadCrumbs} />
      <Heading headingLevel="h1">{title}</Heading>
      <Paragraph>{ingress}</Paragraph>
      <NavigateToH2 />
      <WhatYouNeedSection headingId={whatYouNeedHeadingId} />
      <HjertekurvMalSection lang={lang} headingId={hjertekurvMalHeadingId} />
      <ClipHjertekurvSection lang={lang} headingId={clipHjertekurvHeadingId} />
      <FletteHjertekurvSection headingId={fletteHjertekurvHeadingId} />
    </PageWrapper>
  );
}
