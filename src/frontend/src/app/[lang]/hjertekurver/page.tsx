import { HjertekurvCollectionPage } from "@/components/features/hjertekurvCollectionPage/hjertekurvCollectionPage";
import { Hjertekurv } from "./[hjertekurv]/page";
import { createBackendUrl } from "@/utils/backendApiUrl";

export default async function Page({
  params,
}: {
  params: { julekurv: string };
}) {
  const julekurvName = params.julekurv;
  const apiBaseUrl = createBackendUrl();

  const data = await fetch(
    `${apiBaseUrl}/api/hjertekurver-page-api/?hjertekurvName=${julekurvName}`,
    {
      next: {
        revalidate: 1,
      },
    },
  );

  const pageContent: Hjertekurv[] = await data.json();

  const parsedContent =
    typeof pageContent === "string" ? JSON.parse(pageContent) : pageContent;

  if (!parsedContent || parsedContent.length < 1) {
    return null;
  }

  return <HjertekurvCollectionPage hjertekurver={parsedContent} />;
}
