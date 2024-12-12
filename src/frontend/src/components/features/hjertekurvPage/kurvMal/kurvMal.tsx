"use client";

import { createApiMediaUrl } from "@/utils/backendApiUrl";
import Heading from "@/components/shared/ui/heading/heading";
import Button from "@/components/shared/ui/button/button";
import { use, useState } from "react";
import "./kurvMal.scss";
import { getValuesByKeys } from "@/app/[lang]/dictionaries";
import { LanguageContext } from "@/providers";

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
  const [isHovered, setIsHovered] = useState(false);

  if (!mal1Url) {
    return null;
  }

  const useDifferentMal = !!mal2Url;
  const mal1SvgUrl = createApiMediaUrl(mal1Url);
  const mal2SvgUrl = useDifferentMal ? createApiMediaUrl(mal2Url) : mal1SvgUrl;
  const downloadMalUrl = createApiMediaUrl(downloadMal);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const { dictionary } = use(LanguageContext);

  const downloadMalButtonText = getValuesByKeys(dictionary, [
    "pages",
    "hjertekurvPage",
    "downloadMalButton",
  ]);

  const malTitle = getValuesByKeys(dictionary, [
    "pages",
    "hjertekurvPage",
    "malTitle",
  ]);

  return (
    <div className="kurv-mal-container">
      <Heading headingLevel="h2">{malTitle}</Heading>
      <div
        className={`heart-container2 ${useDifferentMal ? "" : "same-mal"} ${
          isHovered ? "hovered" : ""
        }`}
      >
        <img
          alt="imageUrl"
          className="image-left"
          height={undefined}
          width={180}
          src={mal1SvgUrl}
        />
        {mal2SvgUrl && (
          <img
            className={`image-right ${useDifferentMal ? "two-mals" : "flipped"}`}
            alt="imageUrl"
            height={undefined}
            width={180}
            src={mal2SvgUrl}
          />
        )}
      </div>
      {downloadMalUrl && (
        <Button
          target={"_blank"}
          label={downloadMalButtonText}
          style={{ zIndex: 10 }}
          href={downloadMalUrl}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      )}
    </div>
  );
}
