"use client";

import useLignendeHjertekurver from "./useLignendeKurver";
import HjertekurvCollectionCard from "../hjertekurvCollectionPage/hjertekurvCollectionCard";
import Heading from "@/components/shared/ui/heading/heading";

type LignendeKurverProps = {
  url: string;
};

export default function LignendeKurver({ url }: LignendeKurverProps) {
  const { data, error, loading } = useLignendeHjertekurver(url);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <div>
      <Heading headingLevel="h2">Lignende kurver</Heading>
      <div className="hjertekurv-kartotek-section">
        {data.map((hjertekurv) => (
          <HjertekurvCollectionCard
            key={`hjertekurv-collection-${hjertekurv?.name}`}
            size="sm"
            hjertekurv={hjertekurv}
          />
        ))}
      </div>
    </div>
  );
}
