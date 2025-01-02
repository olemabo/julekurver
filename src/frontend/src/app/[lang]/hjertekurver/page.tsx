"use server";

import { HjertekurvCollectionPage } from "@/components/features/hjertekurvCollectionPage/hjertekurvCollectionPage";
import { Hjertekurv } from "./[hjertekurv]/page";
import { createBackendUrl } from "@/utils/backendApiUrl";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Utforsk hjertekurvsamlingen | Maler, bilder og inspirasjon",
    description:
      "Se vår komplette samling av hjertekurver/julekurver med maler og bilder. Bruk søk og filtrering for å finne den perfekte kurven for ditt neste prosjekt.",
  };
}

export type HjertekurvParams = Promise<{ hjertekurv: string }>;

export default async function Page({ params }: { params: HjertekurvParams }) {
  const { hjertekurv } = await params;

  const apiBaseUrl = createBackendUrl();

  const data = await fetch(
    `${apiBaseUrl}/api/hjertekurver-page-api/?hjertekurvName=${hjertekurv}`,
    {
      next: {
        revalidate: 3600,
      },
    },
  );

  const pageContent: Hjertekurv[] = await data.json();

  const parsedContent =
    typeof pageContent === "string" ? JSON.parse(pageContent) : pageContent;

  if (parsedContent?.length < 1) {
    return null;
  }

  return <HjertekurvCollectionPage hjertekurver={parsedContent} />;
}
