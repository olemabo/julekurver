"use client";

import PageWrapper from "@/components/shared/pageWrapper/pageWrapper";
import Breadcrumb from "@/components/shared/ui/breadcrumb/breadcrumb";
import Heading from "@/components/shared/ui/heading/heading";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import HowToMalTilMatpapirSection from "./howMalTilMatpapir";
import { useHowToMalToPaper } from "./useTexts";
import { Locale } from "@/providers";

export default function HowToMalToPaper({ lang }: Locale) {
  const { title, ingress, breadcrumb } = useHowToMalToPaper();

  const breadCrumbs = [
    { linkText: breadcrumb.frontpage, href: "/" },
    {
      linkText: breadcrumb.howToCreateHjertekurvPage,
      href: `/${lang}/hvordan-lage-kurver`,
    },
    {
      linkText: breadcrumb.howToMalToPaper,
      href: `/${lang}/hvordan-lage-kurver/mal-til-papir`,
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
