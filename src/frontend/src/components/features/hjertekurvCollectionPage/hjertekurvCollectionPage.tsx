"use client";

import Breadcrumb from "@/components/shared/ui/breadcrumb/breadcrumb";
import { Hjertekurv } from "@/app/[lang]/hjertekurver/[hjertekurv]/page";
import Heading from "@/components/shared/ui/heading/heading";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import PageWrapper from "@/components/shared/pageWrapper/pageWrapper";
import SearchAndFilterSection from "./searchAndFilter/searchAndFilterSection";
import { useHjertekurvTexts } from "./useTexts";
import DifficultyPopover from "./difficulltyPopover";

export type HjertekurvCollectionPageProps = {
  hjertekurver: Hjertekurv[];
};

export function HjertekurvCollectionPage({
  hjertekurver,
}: HjertekurvCollectionPageProps) {
  const {
    breadcrumbHome,
    breadcrumbHeartBaskets,
    headingMain,
    paragraphIntro,
    paragraphOutro,
  } = useHjertekurvTexts();

  const linkItems = [
    { linkText: breadcrumbHome, href: "/" },
    { linkText: breadcrumbHeartBaskets, href: "/hjertekurver" },
  ];

  return (
    <PageWrapper>
      <Breadcrumb linkItems={linkItems} />
      <Heading headingLevel="h1">{headingMain}</Heading>
      <Paragraph maxWidth={450}>
        {paragraphIntro}
        <DifficultyPopover />
        {paragraphOutro}
      </Paragraph>
      <SearchAndFilterSection hjertekurver={hjertekurver} />
    </PageWrapper>
  );
}

export default HjertekurvCollectionPage;
