"use client";

import { createApiMediaUrl } from "@/utils/backendApiUrl";
import Heading from "@/components/shared/ui/heading/heading";
import Button from "@/components/shared/ui/button/button";
import { useState } from "react";
import { useKurvMalTexts } from "../utils";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import Link from "next/link";
import SymmetriskMotivPopover from "@/components/shared/content/popover/SymmetriskMotivPopover";
import "./kurvMal.scss";

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
  const { downloadMalButtonText, malTitle } = useKurvMalTexts();

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
          Malen er grunnlaget for hjertekurven og sikrer at strimlene passer
          sammen riktig, noe som er essensielt for å oppnå et jevnt resultat,
          spesielt på mer avanserte kurver. En vanlig malstørrelse er ca. 8 x 12
          cm, men du kan justere størrelsen etter behov. Det finnes flere
          metoder for å overføre malen til kurven. Du kan følge vår{" "}
          <Link href="/no/hvordan-lage-kurver/mal-til-papir">
            trinnvise oppskrift
          </Link>{" "}
          for å få best mulig resultat med matpapir.
        </Paragraph>
        {useDifferentMal && (
          <Paragraph>
            Denne kurven har ikke <SymmetriskMotivPopover /> og kommer derfor
            med to maler. Hver mal har et lite merke i hjørnet, som viser
            hvordan delene skal plasseres i startposisjonen. De to merkene skal
            ligge oppå hverandre før du begynner å flette for at motivet skal
            bli rett.
          </Paragraph>
        )}
      </div>
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
