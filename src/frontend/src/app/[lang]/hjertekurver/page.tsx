import { HjertekurvCollectionPage } from "@/components/features/hjertekurvCollectionPage/hjertekurvCollectionPage";
import { Hjertekurv } from "./[hjertekurv]/page";
import { createBackendUrl } from "@/utils/backendApiUrl";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Utforsk hjertekurvsamlingen | Maler, bilder og inspirasjon",
  description:
    "Se vår komplette samling av hjertekurver med maler og bilder. Bruk søk og filtrering for å finne den perfekte kurven for ditt neste prosjekt.",
};

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

  console.log(parsedContent);

  return <HjertekurvCollectionPage hjertekurver={parsedContent} />;
}
