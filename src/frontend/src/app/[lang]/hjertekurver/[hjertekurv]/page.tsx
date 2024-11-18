import { fetchWith404Check } from "@/api/fetchWrapper";
import { Category } from "@/components/features/hjertekurvCollectionPage/useCategories";
import HjertekurvPage from "@/components/features/hjertekurvPage/hjertekurvPage";
import { createBackendUrl } from "@/utils/backendApiUrl";

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
