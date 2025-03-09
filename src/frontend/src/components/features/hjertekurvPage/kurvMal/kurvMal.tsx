"use client";

import { createApiMediaUrl } from "@/utils/backendApiUrl";
import Heading from "@/components/shared/ui/heading/heading";
import Button from "@/components/shared/ui/button/button";
import { useState } from "react";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import Link from "next/link";
import SymmetriskMotivPopover from "@/components/shared/content/popover/SymmetriskMotivPopover";
import "./kurvMal.scss";
import { useKurvMalTexts } from "../useTexts";
import { ReplacePlaceholder } from "@/components/shared/content/replacePlaceholder";
import Image from "next/image";
import { URLs } from "@/constants/urls";

type KurvMalProps = {
  mal1Url?: string;
  mal2Url?: string;
  downloadMal?: string;
  lang: string;
};

export default function KurvMal({
  mal1Url,
  mal2Url,
  downloadMal,
  lang,
}: KurvMalProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { downloadMalButtonText, malTitle, twoMalsDescription, description } =
    useKurvMalTexts();

  if (!mal1Url) {
    return null;
  }

  const useDifferentMal = !!mal2Url;
  const mal1SvgUrl = createApiMediaUrl(mal1Url);
  const mal2SvgUrl = useDifferentMal ? createApiMediaUrl(mal2Url) : mal1SvgUrl;
  const downloadMalUrl = createApiMediaUrl(downloadMal);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className="kurv-mal-container">
      <div>
        <Heading headingLevel="h2">{malTitle}</Heading>
        <Paragraph style={{ marginBottom: "24px" }}>
          {description.intro}{" "}
          <ReplacePlaceholder
            text={description.methods}
            placeholder="{link}"
            component={
              <Link
                href={`/${lang}/${URLs.hvordanLageKurver}/${URLs.malTilPapir}`}
              >
                {description.linkText}
              </Link>
            }
          />
        </Paragraph>
        {useDifferentMal && (
          <Paragraph>
            <ReplacePlaceholder
              text={twoMalsDescription}
              placeholder="{popover}"
              component={<SymmetriskMotivPopover />}
            />
          </Paragraph>
        )}
      </div>
      <div
        className={`heart-container2 ${useDifferentMal ? "" : "same-mal"} ${
          isHovered ? "hovered" : ""
        }`}
      >
        <Image
          alt="imageUrl"
          className="image-left"
          height={0}
          width={180}
          src={mal1SvgUrl}
        />
        {mal2SvgUrl && (
          <Image
            className={`image-right ${useDifferentMal ? "two-mals" : "flipped"}`}
            alt="imageUrl"
            height={0}
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
