"use client";

import useLignendeHjertekurver from "./useLignendeKurver";
import HjertekurvCollectionCard from "../hjertekurvCollectionPage/searchAndFilter/collectionCard/hjertekurvCollectionCard";
import Heading from "@/components/shared/ui/heading/heading";
import HjertekurvLoader from "@/components/shared/loaders/hjertekurvLoader";

type LignendeKurverProps = {
  url: string;
};

export default function LignendeKurver({ url }: LignendeKurverProps) {
  const { data, error, loading } = useLignendeHjertekurver(url);

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
      <Heading headingLevel="h2">Lignende kurver</Heading>
      <div
        style={{ marginTop: "36px" }}
        className="hjertekurv-kartotek-section small"
      >
        {data.slice(0, 6).map((hjertekurv) => (
          <HjertekurvCollectionCard
            key={`hjertekurv-collection-${hjertekurv?.name}`}
            size="sm"
            showDifficultyLevels={false}
            hjertekurv={hjertekurv}
          />
        ))}
      </div>
    </>
  );
}
