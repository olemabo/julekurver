"use server";

import Breadcrumb from "@/components/shared/ui/breadcrumb/breadcrumb";
import Heading from "@/components/shared/ui/heading/heading";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import PageWrapper from "@/components/shared/pageWrapper/pageWrapper";
import Link from "next/link";
import SearchAndResult from "./SearchAndResults";
import "./SearchPage.scss";
import { getDictionary } from "@/localization/dictionaries";
import { Locale } from "@/providers";

export default async function SearchPage({ lang }: Locale) {
  const dictionary = await getDictionary(lang);
  const heading = dictionary.pages.searchPage.heading;
  const paragraph = dictionary.pages.searchPage.paragraph;
  const linkText = dictionary.pages.searchPage.linkText;
  const searchPageBreadcrumb = dictionary.breadcrumb.searchPage;
  const frontpageBreadcrumb = dictionary.breadcrumb.frontpage;

  return (
    <PageWrapper>
      <Breadcrumb
        linkItems={[
          { linkText: frontpageBreadcrumb, href: "/" },
          { linkText: searchPageBreadcrumb, href: "no/search" },
        ]}
      />
      <Heading headingLevel="h1">{heading}</Heading>
      <Paragraph maxWidth={500}>
        {paragraph} <Link href="/no/hjertekurver">{linkText}</Link>.
      </Paragraph>
      <SearchAndResult />
    </PageWrapper>
  );
}
