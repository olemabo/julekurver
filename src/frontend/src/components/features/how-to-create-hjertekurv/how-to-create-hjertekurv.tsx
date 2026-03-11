import PageWrapper from "@/components/shared/page-wrapper/page-wrapper";
import Breadcrumb from "@/components/shared/ui/breadcrumb/breadcrumb";
import Heading from "@/components/shared/ui/heading/heading";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";

import ClipHjertekurvSection from "./sections/clip-hjertekurv";
import FletteHjertekurvSection from "./sections/flette-hjertekurv";
import WhatYouNeedSection from "./sections/what-you-need";
import { HjertekurvMalSection } from "./sections/hjertekurv-mal";
import {
  clipHjertekurvHeadingId,
  fletteHjertekurvHeadingId,
  hjertekurvMalHeadingId,
  whatYouNeedHeadingId,
} from "./constants";
import { LocaleProps } from "@/config/i18n";
import { getDictionary } from "@/localization/get-dictionary";
import { buildAppRoute } from "@/utils/routes";
import NavigateToH2 from "@/components/shared/ui/navigate-to-id/navigate-to-h2";

export default async function HowToCreateHjertekurv({ lang }: LocaleProps) {
  const dictionary = await getDictionary(lang);
  const title = dictionary.pages.howToCreateHjertekurvPage.title;
  const ingress = dictionary.pages.howToCreateHjertekurvPage.ingress;
  const breadcrumbs = dictionary.breadcrumb;

  const breadCrumbs = [
    {
      linkText: breadcrumbs.frontpage,
      href: buildAppRoute({ route: "/[lang]", params: { lang } }),
    },
    {
      linkText: breadcrumbs.howToCreateHjertekurvPage,
      href: buildAppRoute({
        route: "/[lang]/hvordan-lage-kurver",
        params: { lang },
      }),
    },
  ];

  return (
    <PageWrapper isStandardPage>
      <Breadcrumb linkItems={breadCrumbs} />
      <Heading level="h1">{title}</Heading>
      <Paragraph>{ingress}</Paragraph>
      <NavigateToH2 />
      <WhatYouNeedSection lang={lang} headingId={whatYouNeedHeadingId} />
      <HjertekurvMalSection lang={lang} headingId={hjertekurvMalHeadingId} />
      <ClipHjertekurvSection lang={lang} headingId={clipHjertekurvHeadingId} />
      <FletteHjertekurvSection
        lang={lang}
        headingId={fletteHjertekurvHeadingId}
      />
    </PageWrapper>
  );
}
