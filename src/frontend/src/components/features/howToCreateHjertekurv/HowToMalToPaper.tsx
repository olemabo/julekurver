"use client";

import PageWrapper from "@/components/shared/pageWrapper/pageWrapper";
import Breadcrumb from "@/components/shared/ui/breadcrumb/breadcrumb";
import Heading from "@/components/shared/ui/heading/heading";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import HowToMalTilMatpapirSection from "./howMalTilMatpapir";
import { useHowToMalToPaper } from "./useTexts";
import { Locale } from "@/providers";
import { URLs } from "@/constants/urls";

export default function HowToMalToPaper({ lang }: Locale) {
  const { title, ingress, breadcrumb } = useHowToMalToPaper();

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
      <Heading headingLevel="h1">{title}</Heading>
      <Paragraph>{ingress}</Paragraph>
      <HowToMalTilMatpapirSection lang={lang} />
    </PageWrapper>
  );
}
