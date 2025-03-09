"use server";

import { fetchWith404Check } from "@/api/fetchWrapper";
import StandardPage, {
  PageContent,
} from "@/components/features/standardPage/standardPage";
import { BASE_URL } from "@/constants/urls";
import { LangParams } from "@/providers";
import { createBackendUrl } from "@/utils/backendApiUrl";

type PageParams = Promise<{ page: string }> & LangParams;

export async function generateMetadata({ params }: { params: PageParams }) {
  const { page, lang } = await params;

  const apiBaseUrl = createBackendUrl();

  const pageContent = await fetchWith404Check<PageContent>(
    `${apiBaseUrl}/api/standard-page-api/?pageUrl=${page}`,
    {
      next: {
        revalidate: 3600,
      },
    },
  );

  return {
    title: pageContent?.title,
    description: pageContent?.content,
    openGraph: {
      title: pageContent?.title,
      url: `${BASE_URL}/${lang}/${page}`,
    },
    twitter: {
      title: pageContent?.title,
      description: pageContent?.content,
    },
  };
}

export default async function Page({ params }: { params: PageParams }) {
  const { page, lang } = await params;

  const apiBaseUrl = createBackendUrl();

  const pageContent = await fetchWith404Check<PageContent>(
    `${apiBaseUrl}/api/standard-page-api/?pageUrl=${page}&lang=${lang}`,
    {
      next: {
        revalidate: 3600,
      },
    },
  );

  return <StandardPage lang={lang} pageContent={pageContent} />;
}
