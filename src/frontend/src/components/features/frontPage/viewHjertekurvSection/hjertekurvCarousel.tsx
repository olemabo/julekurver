"use client";

import { useState, useEffect } from "react";
import { Hjertekurv } from "@/app/[lang]/hjertekurver/[hjertekurv]/page";
import { createApiMediaUrl } from "@/utils/backendApiUrl";
import DisplayHjertekurvSvgWithColors from "@/components/shared/images/displayHjertekurvSvgWithColors";
import "./hjertekurvCarousel.scss";
import Link from "next/link";

type HjertekurvProps = {
  kurver: Hjertekurv[];
  displayTime: number;
  useFirst: boolean;
};

export default function HjertekurvCarousel({
  kurver,
  displayTime,
  useFirst,
}: HjertekurvProps) {
  // Disable react-hooks/rules-of-hooks for the following code block
  /* eslint-disable react-hooks/rules-of-hooks */

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeState, setFadeState] = useState<"fade-in" | "fade-out">("fade-in");

  useEffect(() => {
    if (kurver.length === 0) return;

    const interval = setInterval(() => {
      setFadeState("fade-out");

      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % kurver.length);
        setFadeState("fade-in");
      }, 750);
    }, displayTime);

    return () => clearInterval(interval);
  }, [kurver, displayTime]);

  /* eslint-enable react-hooks/rules-of-hooks */

  const images = kurver.map((x) => createApiMediaUrl(x.imageHjertekurvUrl));

  const totalImages = images.length;
  const keyframes = [];

  for (let i = 0; i < totalImages; i++) {
    const percentage = ((i / totalImages) * 100) / 4;
    keyframes.push(`${percentage}% { background-image: url(${images[i]}); }`);
  }

  const keyframeStyle = `@keyframes BgAnimation { ${keyframes.join(" ")} }`;

  const hexColors = ["#7d4d3d", "#616357"];

  const fillColor1 = hexColors[Math.floor(Math.random() * hexColors.length)];
  const fillColor2 = "white";

  const renderCarouselContent = () => {
    if (useFirst) {
      return (
        <Link
          href={`no/hjertekurver/${kurver[currentImageIndex].url}`}
          className={`image-container ${fadeState}`}
          aria-label={`Lenke til hjertekurven ${kurver[currentImageIndex].name}`}
          style={{
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
          }}
        >
          <DisplayHjertekurvSvgWithColors
            imageUrl={createApiMediaUrl(
              kurver[currentImageIndex].imageHjertekurvUrl,
            )}
            fillColor1={fillColor1}
            fillColor2={fillColor2}
            imageSize={{ height: "100%", width: "350px" }}
          />
        </Link>
      );
    } else {
      return (
        <div>
          <style>
            {`
              .bg-slider {
                width: 350px;
                height: 350px;
                background-size: cover;
                background-position: center;
                animation: BgAnimation 200s linear infinite;
              }
    
              ${keyframeStyle}
            `}
          </style>

          <div className="bg-slider"></div>
        </div>
      );
    }
  };

  return <>{renderCarouselContent()}</>;
}
