import { fetchWith404Check } from "@/api/fetchWrapper";
import { Category } from "@/components/features/hjertekurvCollectionPage/useCategories";
import HjertekurvPage from "@/components/features/hjertekurvPage/hjertekurvPage";
import { createApiMediaUrl, createBackendUrl } from "@/utils/backendApiUrl";

export async function generateMetadata({
  params,
}: {
  params: { hjertekurv: string };
}) {
  const hjertekurvName = params.hjertekurv;
  const apiBaseUrl = createBackendUrl();

  const pageContent = await fetchWith404Check<Hjertekurv>(
    `${apiBaseUrl}/api/hjertekurv-page-api/?hjertekurvName=${hjertekurvName}`,
    {
      next: {
        revalidate: 1,
      },
    },
  );

  return {
    title: pageContent?.name,
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

export default async function Page({
  params,
}: {
  params: { hjertekurv: string };
}) {
  const hjertekurvName = params.hjertekurv;
  const apiBaseUrl = createBackendUrl();

  const pageContent = await fetchWith404Check<Hjertekurv>(
    `${apiBaseUrl}/api/hjertekurv-page-api/?hjertekurvName=${hjertekurvName}`,
    {
      next: {
        revalidate: 1,
      },
    },
  );

  return <HjertekurvPage hjertekurv={pageContent} />;
}
