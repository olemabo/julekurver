"use client";

import Image from "next/image";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import { lightTheme } from "@/constants/displayTheme";
import Heading from "@/components/shared/ui/heading/heading";
import Button from "@/components/shared/ui/button/button";
import "./aboutKurverSection.scss";
import { useAboutKurverSection } from "../useTexts";
import { Locale } from "@/providers";
import { URLs } from "@/constants/urls";

export default function AboutKurverSection({ lang }: Locale) {
  const paragraphMaxWidth = 480;
  const paragraphStyle = {
    fontFamily: "var(--font-alegreya-sans-light)",
    fontSize: "18px",
    maxWidth: paragraphMaxWidth,
  };

  const {
    title,
    paragraph1,
    paragraph2,
    learnMoreAboutUsButtonLabel,
    imageAltText,
  } = useAboutKurverSection();

  return (
    <div className="about-kurver-container">
      <Image
        alt={imageAltText}
        height={350}
        width={335}
        priority
        src={"/images/pages/frontpage/frontpage_hjertekurv-cropped.svg"}
      />
      <div className="text-container">
        <Heading theme={lightTheme} headingLevel="h2">
          {title}
        </Heading>
        <Paragraph
          maxWidth={paragraphMaxWidth}
          style={paragraphStyle}
          theme={lightTheme}
        >
          {paragraph1}
        </Paragraph>
        <Paragraph
          maxWidth={paragraphMaxWidth}
          style={paragraphStyle}
          theme={lightTheme}
        >
          {paragraph2}
        </Paragraph>
        <Button
          theme={lightTheme}
          label={learnMoreAboutUsButtonLabel}
          href={`/${lang}/${URLs.aboutSite}`}
        />
      </div>
    </div>
  );
}
