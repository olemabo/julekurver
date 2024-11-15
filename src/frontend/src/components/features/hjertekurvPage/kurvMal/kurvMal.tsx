"use client";

import { createApiMediaUrl } from "@/utils/backendApiUrl";
import Heading from "@/components/shared/ui/heading/heading";
import Button from "@/components/shared/ui/button/button";

import "./kurvMal.css";

type KurvMalProps = {
  mal1Url?: string;
  mal2Url?: string;
  downloadMal?: string;
};

export default function KurvMal({
  mal1Url,
  mal2Url,
  downloadMal,
}: KurvMalProps) {
  if (!mal1Url) {
    return null;
  }

  const useDifferentMal = !!mal2Url;
  const mal1SvgUrl = createApiMediaUrl(mal1Url);
  const mal2SvgUrl = useDifferentMal ? createApiMediaUrl(mal2Url) : mal1SvgUrl;
  const downloadMalUrl = createApiMediaUrl(downloadMal);

  return (
    <div className="kurv-mal-container">
      <Heading headingLevel="h2">Mal</Heading>
      <div className={`heart-container2 ${useDifferentMal ? "" : "same-mal"}`}>
        <img
          alt="imageUrl"
          className="image-left"
          height={undefined}
          width={180}
          src={mal1SvgUrl}
        />
        {mal2SvgUrl && (
          <img
            className={`image-right ${useDifferentMal ? "" : "flipped"}`}
            alt="imageUrl"
            height={undefined}
            width={180}
            src={mal2SvgUrl}
          />
        )}
      </div>
      {downloadMalUrl && (
        <Button target={"_blank"} label="Last ned mal" href={downloadMalUrl} />
      )}
    </div>
  );
}
