"use client";

import PageWrapper from "@/components/shared/pageWrapper/pageWrapper";
import Breadcrumb from "@/components/shared/ui/breadcrumb/breadcrumb";
import Heading from "@/components/shared/ui/heading/heading";
import ContactSection from "./contactSection";
import { use } from "react";
import { LanguageContext, Locale } from "@/providers";
import { getValuesByKeys } from "@/app/[lang]/dictionaries";
import STANDARD_PAGE_TYPES from "@/constants/standardPageTypes";

export type PageContent = {
  title: string;
  content: string;
  pageType: string;
};

export type StandardPageProps = {
  pageContent: PageContent;
} & Locale;

export default function StandardPage({ pageContent, lang }: StandardPageProps) {
  const { dictionary } = use(LanguageContext);
  const frontpage = getValuesByKeys(dictionary, ["breadcrumb", "frontpage"]);

  if (!pageContent || !pageContent?.content) {
    return null;
  }

  const standardPageBreadcrumbs = [
    { linkText: frontpage, href: `/${lang}` },
    { linkText: pageContent.title, href: pageContent.title },
  ];

  const isContactPage =
    pageContent.pageType === STANDARD_PAGE_TYPES.CONTACT_PAGE;

  return (
    <PageWrapper isStandardPage>
      <Breadcrumb linkItems={standardPageBreadcrumbs} />
      <Heading headingLevel="h1">{pageContent.title}</Heading>
      {pageContent?.content && (
        <div dangerouslySetInnerHTML={{ __html: pageContent?.content }} />
      )}
      {isContactPage && <ContactSection />}
    </PageWrapper>
  );
}
