"use server";

import { fetchWith404Check } from "@/api/fetchWrapper";
import { Category } from "@/components/features/hjertekurvCollectionPage/useCategories";
import HjertekurvPage from "@/components/features/hjertekurvPage/hjertekurvPage";
import { createApiMediaUrl, createBackendUrl } from "@/utils/backendApiUrl";
import { HjertekurvParams } from "../page";

export async function generateMetadata({
  params,
}: {
  params: HjertekurvParams;
}) {
  const { hjertekurv } = await params;
  const apiBaseUrl = createBackendUrl();

  const pageContent = await fetchWith404Check<Hjertekurv>(
    `${apiBaseUrl}/api/hjertekurv-page-api/?hjertekurvName=${hjertekurv}`,
    {
      next: {
        revalidate: 1,
      },
    },
  );

  return {
    title: pageContent?.name + " hjertekurv/julekurv",
    description: pageContent?.about,
    openGraph: {
      title: pageContent?.name,
      url: `https://hjertekurver.no/no/${pageContent?.url}`,
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
  const { hjertekurv } = await params;

  const apiBaseUrl = createBackendUrl();

  const pageContent = await fetchWith404Check<Hjertekurv>(
    `${apiBaseUrl}/api/hjertekurv-page-api/?hjertekurvName=${hjertekurv}`,
    {
      next: {
        revalidate: 1,
      },
    },
  );

  return <HjertekurvPage hjertekurv={pageContent} />;
}
