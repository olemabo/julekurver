"use client";

import Button from "@/components/shared/ui/button/button";
import JulekurvStep from "./lagHjertekurvStep";
import { lightTheme } from "@/constants/displayTheme";
import "./lagHjertekurvSection.scss";
import ContentHeader from "../contentHeader/contentHeader";
import { useLagHjertekurvSection } from "../useTexts";
import { Locale } from "@/providers";
import { URLs } from "@/constants/urls";

export default function LagHjertekurvSection({ lang }: Locale) {
  const { title, step1, step2, step3, buttonLabel } = useLagHjertekurvSection();

  const julekurvSteps = [
    {
      imageSrc: "/images/pages/frontpage/dus_hvit/lage_julekurv_materialer.svg",
      description: step1,
      height: 225,
      number: 1,
    },
    {
      imageSrc: "/images/pages/frontpage/dus_hvit/lage_julekurv_mal.svg",
      description: step2,
      height: 210,
      number: 2,
    },
    {
      imageSrc: "/images/pages/frontpage/dus_hvit/lage_julekurv_kurv.svg",
      description: step3,
      height: 210,
      number: 3,
    },
  ];

  return (
    <>
      <ContentHeader title={title} theme={lightTheme} />
      <div className="lag-hjertekurv-section-container">
        {julekurvSteps.map((step, index) => (
          <JulekurvStep
            key={index}
            number={step.number}
            imageUrl={step.imageSrc}
            svgSize={60}
            description={step.description}
            height={step.height}
          />
        ))}
      </div>
      <div className="button-container">
        <Button
          theme={lightTheme}
          label={buttonLabel}
          href={`/${lang}/${URLs.hvordanLageKurver}`}
        />
      </div>
    </>
  );
}
