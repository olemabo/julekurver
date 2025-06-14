"use server";

import PageWrapper from "@/components/shared/pageWrapper/pageWrapper";
import Breadcrumb from "@/components/shared/ui/breadcrumb/breadcrumb";
import Heading, { HeadingLevel } from "@/components/shared/ui/heading/heading";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import HowToMalTilMatpapirSection from "./howMalTilMatpapir";
import { Locale } from "@/providers";
import { URLs } from "@/constants/urls";
import { getDictionary } from "@/localization/dictionaries";

export default async function HowToMalToPaper({ lang }: Locale) {
  const dictionary = await getDictionary(lang);
  const title = dictionary.pages.howToMalToPaper.title;
  const ingress = dictionary.pages.howToMalToPaper.ingress;
  const breadcrumb = dictionary.breadcrumb;

  const breadCrumbs = [
    { linkText: breadcrumb.frontpage, href: "/" },
    {
      linkText: breadcrumb.howToCreateHjertekurvPage,
      href: `/${lang}/${URLs.hvordanLageKurver}`,
    },
    {
      linkText: breadcrumb.howToMalToPaper,
      href: `/${lang}/${URLs.hvordanLageKurver}/${URLs.malTilPapir}`,
    },
  ];

  return (
    <PageWrapper isStandardPage>
      <Breadcrumb linkItems={breadCrumbs} />
      <Heading headingLevel={HeadingLevel.H1}>{title}</Heading>
      <Paragraph>{ingress}</Paragraph>
      <HowToMalTilMatpapirSection lang={lang} />
    </PageWrapper>
  );
}
