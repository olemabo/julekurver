"use server";

import PageWrapper from "@/components/shared/pageWrapper/pageWrapper";
import Breadcrumb from "@/components/shared/ui/breadcrumb/breadcrumb";
import Heading from "@/components/shared/ui/heading/heading";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";

import ClipHjertekurvSection from "./clipHjertekurvSection";
import FletteHjertekurvSection from "./fletteHjertekurvSection";
import WhatYouNeedSection from "./whatYouNeedSection";
import NavigateToH2 from "@/components/shared/ui/navigateToId/navigateToH2";
import { HjertekurvMalSection } from "./hjertekurvMalSection";
import { Locale } from "@/providers";
import { URLs } from "@/constants/urls";
import { getDictionary } from "@/localization/dictionaries";
import {
  clipHjertekurvHeadingId,
  fletteHjertekurvHeadingId,
  hjertekurvMalHeadingId,
  whatYouNeedHeadingId,
} from "./constants";

export default async function HowToCreateHjertekurv({ lang }: Locale) {
  const dictionary = await getDictionary(lang);
  const title = dictionary.pages.howToCreateHjertekurvPage.title;
  const ingress = dictionary.pages.howToCreateHjertekurvPage.ingress;
  const breadcrumbs = dictionary.breadcrumb;

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
