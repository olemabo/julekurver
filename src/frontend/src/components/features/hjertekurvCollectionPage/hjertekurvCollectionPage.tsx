"use server";

import Breadcrumb from "@/components/shared/ui/breadcrumb/breadcrumb";
import Heading, { HeadingLevel } from "@/components/shared/ui/heading/heading";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import PageWrapper from "@/components/shared/pageWrapper/pageWrapper";
import SearchAndFilterSection from "./searchAndFilter/searchAndFilterSection";
import DifficultyPopover from "./difficulltyPopover";
import { Locale } from "@/providers";
import { Hjertekurv } from "@/types/hjertekurv";
import { getTranslations } from "@/localization/dictionaries";

export type HjertekurvCollectionPageProps = {
  hjertekurver: Hjertekurv[];
} & Locale;

async function HjertekurvCollectionPage({
  hjertekurver,
  lang,
}: HjertekurvCollectionPageProps) {
  const translations = await getTranslations(lang, {
    breadcrumbHome: ["breadcrumb", "frontpage"],
    breadcrumbHeartBaskets: ["breadcrumb", "hjertekurver"],
    headingMain: ["pages", "hjertekurverKartotekPage", "heading"],
    paragraphIntro: ["pages", "hjertekurverKartotekPage", "paragraph", "intro"],
    paragraphOutro: ["pages", "hjertekurverKartotekPage", "paragraph", "outro"],
  });

  const linkItems = [
    { linkText: translations.breadcrumbHome, href: `/${lang}` },
    {
      linkText: translations.breadcrumbHeartBaskets,
      href: `${lang}/hjertekurver`,
    },
  ];

  if (hjertekurver?.length === 0) {
    return null;
  }

  return (
    <PageWrapper>
      <Breadcrumb linkItems={linkItems} />
      <Heading headingLevel={HeadingLevel.H1}>
        {translations.headingMain}
      </Heading>
      <Paragraph maxWidth={450}>
        {translations.paragraphIntro}
        <DifficultyPopover />
        {translations.paragraphOutro}
      </Paragraph>
      <SearchAndFilterSection lang={lang} hjertekurver={hjertekurver} />
    </PageWrapper>
  );
}

export { HjertekurvCollectionPage };
