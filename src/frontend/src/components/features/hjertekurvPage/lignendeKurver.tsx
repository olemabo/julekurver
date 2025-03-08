"use client";

import useLignendeHjertekurver from "./useLignendeKurver";
import HjertekurvCollectionCard from "../hjertekurvCollectionPage/searchAndFilter/collectionCard/hjertekurvCollectionCard";
import Heading from "@/components/shared/ui/heading/heading";
import HjertekurvLoader from "@/components/shared/loaders/hjertekurvLoader";
import { Locale } from "@/providers";
import { useLignendeKurverTexts } from "./useTexts";

type LignendeKurverProps = {
  url: string;
} & Locale;

export default function LignendeKurver({ url, lang }: LignendeKurverProps) {
  const { data, error, loading } = useLignendeHjertekurver(url, lang);
  const { lignendeKurverTitle } = useLignendeKurverTexts();

  if (loading) {
    return <HjertekurvLoader />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <>
      <Heading headingLevel="h2">{lignendeKurverTitle}</Heading>
      <div
        style={{ marginTop: "36px" }}
        className="hjertekurv-kartotek-section small"
      >
        {data.slice(0, 6).map((hjertekurv, index) => (
          <HjertekurvCollectionCard
            key={`hjertekurv-collection-${hjertekurv?.name}-${index}`}
            size="sm"
            showDifficultyLevels={false}
            hjertekurv={hjertekurv}
            lang={lang}
          />
        ))}
      </div>
    </>
  );
}
