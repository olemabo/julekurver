"use client";

import { createApiMediaUrl } from "@/lib/api/backend-api-url";
import Heading from "@/components/shared/ui/heading/heading";
import Button from "@/components/shared/ui/button/button";
import { useState } from "react";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import Link from "next/link";
import SymmetriskMotivPopover from "@/components/shared/content/popover/symmetrisk-motiv-popover";
import styles from "./kurv-mal.module.css";
import { ReplacePlaceholder } from "@/components/shared/content/rePlaceholder";
import Image from "next/image";
import { buildAppRoute } from "@/utils/routes";
import { getDictionary } from "@/localization/get-dictionary";

type KurvMalProps = {
  mal1Url?: string;
  mal2Url?: string;
  downloadMal?: string;
  lang: string;
  dictionary: Awaited<
    ReturnType<typeof getDictionary>
  >["pages"]["hjertekurvPage"]["kurvMal"];
  popoverDictionary: Awaited<
    ReturnType<typeof getDictionary>
  >["popover"]["symmetriskMotiv"];
};

export default function KurvMal({
  mal1Url,
  mal2Url,
  downloadMal,
  lang,
  dictionary,
  popoverDictionary,
}: KurvMalProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { downloadMalButton, malTitle, twoMalsDescription, description } =
    dictionary;

  if (!mal1Url) return null;

  const useDifferentMal = !!mal2Url;
  const mal1SvgUrl = createApiMediaUrl(mal1Url);
  const mal2SvgUrl = useDifferentMal ? createApiMediaUrl(mal2Url) : mal1SvgUrl;
  const downloadMalUrl = createApiMediaUrl(downloadMal);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className={styles.kurvMalContainer}>
      <div>
        <Heading level="h2">{malTitle}</Heading>
        <Paragraph style={{ marginBottom: "24px" }}>
          {description.intro}{" "}
          <ReplacePlaceholder
            text={description.methods}
            placeholder="{link}"
            component={
              <Link
                href={buildAppRoute({
                  route: "/[lang]/hvordan-lage-kurver/mal-til-papir",
                  params: { lang },
                })}
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
              component={
                <SymmetriskMotivPopover dictionary={popoverDictionary} />
              }
            />
          </Paragraph>
        )}
      </div>
      <div
        className={`${styles.heartContainer2} ${!useDifferentMal ? styles.sameMal : ""} ${isHovered ? styles.hovered : ""}`}
      >
        <Image
          alt="imageUrl"
          className={styles.imageLeft}
          height={0}
          width={180}
          src={mal1SvgUrl}
        />
        {mal2SvgUrl && (
          <Image
            className={`${styles.imageRight} ${useDifferentMal ? styles.twoMals : styles.flipped}`}
            alt="imageUrl"
            height={0}
            width={180}
            src={mal2SvgUrl}
          />
        )}
      </div>
      {downloadMalUrl && (
        <Button
          target="_blank"
          label={downloadMalButton}
          style={{ zIndex: 10 }}
          href={downloadMalUrl}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      )}
    </div>
  );
}
