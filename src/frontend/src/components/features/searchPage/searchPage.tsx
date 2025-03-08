"use client";

import Breadcrumb from "@/components/shared/ui/breadcrumb/breadcrumb";
import Heading from "@/components/shared/ui/heading/heading";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import PageWrapper from "@/components/shared/pageWrapper/pageWrapper";
import Link from "next/link";
import SearchAndResult from "./SearchAndResults";
import { useSearchPageContentTexts } from "./useTexts";
import "./SearchPage.scss";

export enum PageType {
  StandardPage = "standardPage",
  Hjertekurv = "hjertekurvPage",
}

export interface SearchHits {
  url: string;
  title: string;
  description: string;
  type: PageType;
  imageUrl?: string;
}

export type SearchPageProps = {
  defautlQuery?: string;
};

export const defaultPaginationOptions = [
  { label: "10", value: 10 },
  { label: "25", value: 25 },
  { label: "100", value: 100 },
];

export default function SearchPage({ defautlQuery }: SearchPageProps) {
  const {
    heading,
    paragraph,
    linkText,
    searchPageBreadcrumb,
    frontpageBreadcrumb,
  } = useSearchPageContentTexts();

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
