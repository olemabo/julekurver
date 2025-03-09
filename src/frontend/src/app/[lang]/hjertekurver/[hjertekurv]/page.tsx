"use server";

import { fetchWith404Check } from "@/api/fetchWrapper";
import { Category } from "@/components/features/hjertekurvCollectionPage/useCategories";
import HjertekurvPage from "@/components/features/hjertekurvPage/hjertekurvPage";
import { createApiMediaUrl, createBackendUrl } from "@/utils/backendApiUrl";
import { HjertekurvParams } from "../page";
import { BASE_URL } from "@/constants/urls";

export async function generateMetadata({
  params,
}: {
  params: HjertekurvParams;
}) {
  const { hjertekurv, lang } = await params;
  const apiBaseUrl = createBackendUrl();

  const pageContent = await fetchWith404Check<Hjertekurv>(
    `${apiBaseUrl}/api/hjertekurv-page-api/?hjertekurvName=${hjertekurv}`,
    {
      next: {
        revalidate: 3600,
      },
    },
  );

  return {
    title: pageContent?.name + " hjertekurv/julekurv med mal",
    description: pageContent?.about,
    openGraph: {
      title: pageContent?.name,
      url: `${BASE_URL}/${lang}/${pageContent?.url}`,
      image: createApiMediaUrl(pageContent?.imageHjertekurvUrl),
    },
    twitter: {
      card: "summary_large_image",
      title: pageContent?.name,
      description: pageContent?.about,
      image: createApiMediaUrl(pageContent?.imageHjertekurvUrl),
    },
  };
}

export type Hjertekurv = {
  name: string;
  about: string;
  imageHjertekurvUrl: string;
  url: string;
  imageHjertekurvMalUrl?: string;
  imageHjertekurvMal2Url?: string;
  difficultyKlipping: number;
  difficultyFletting: number;
  downloadMal?: string;
  categories?: Category[];
  createdAt: Date;
  popularity: number;
};

export default async function Page({ params }: { params: HjertekurvParams }) {
  const { hjertekurv, lang } = await params;

  const apiBaseUrl = createBackendUrl();

  const pageContent = await fetchWith404Check<Hjertekurv>(
    `${apiBaseUrl}/api/hjertekurv-page-api/?hjertekurvName=${hjertekurv}&lang=${lang}`,
    {
      next: {
        revalidate: 3600,
      },
    },
  );

  return <HjertekurvPage lang={lang} hjertekurv={pageContent} />;
}
