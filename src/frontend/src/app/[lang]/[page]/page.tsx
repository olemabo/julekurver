"use server";

import { BASE_URL } from "@/constants/urls";
import { LangParams } from "@/providers";
import { getStandardPage } from "@/components/features/standardPage/api";
import StandardPage from "@/components/features/standardPage/page";

type PageParams = Promise<{ page: string }> & LangParams

export async function generateMetadata({ params }: { params: PageParams }) {
  const { page, lang } = await params
  const pageContent = await getStandardPage(page, lang)

  if (!pageContent) {
    return {
      title: "Page Not Found",
      description: "The requested page could not be found.",
    }
  }

  return {
    title: pageContent.title,
    description: pageContent.content?.replace(/<[^>]*>/g, "").substring(0, 160) || pageContent.title,
    openGraph: {
      title: pageContent.title,
      description: pageContent.content?.replace(/<[^>]*>/g, "").substring(0, 160),
      url: `${BASE_URL}/${lang}/${page}`,
      type: "website",
    },
    twitter: {
      card: "summary",
      title: pageContent.title,
      description: pageContent.content?.replace(/<[^>]*>/g, "").substring(0, 160),
    },
  }
}

export default async function Page({ params }: { params: PageParams }) {
  const { page, lang } = await params;

  const content = await getStandardPage(page, lang);

  return <StandardPage lang={lang} pageContent={content} />
}
