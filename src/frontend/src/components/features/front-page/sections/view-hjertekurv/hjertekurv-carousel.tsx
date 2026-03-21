"use client";

import { useState, useEffect } from "react";
import { createApiMediaUrl } from "@/lib/api/backend-api-url";
import DisplayHjertekurvSvgWithColors from "@/components/shared/images/display-hjertekurv-svg-with-colors";
import styles from "./hjertekurv-carousel.module.css";
import { Hjertekurv } from "@/types/hjertekurv";
import Link from "@/components/shared/ui/link/link";
import Image from "next/image";

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

  const images = kurver.map((x) => createApiMediaUrl(x.imageHjertekurvUrl));

  const totalImages = images.length;
  const keyframes = [];

  for (let i = 0; i < totalImages; i++) {
    const percentage = ((i / totalImages) * 100) / 4;
    keyframes.push(`${percentage}% { background-image: url(${images[i]}); }`);
  }

  const hexColors = ["#7d4d3d", "#616357"];

  const fillColor1 = hexColors[Math.floor(Math.random() * hexColors.length)];
  const fillColor2 = "white";

  if (useFirst) {
    return (
      <Link
        href={{
          route: "/[lang]/hjertekurver/[kurv]",
          params: { lang: "no", kurv: kurver[currentImageIndex].url },
        }}
        className={fadeState === "fade-in" ? styles.fadeIn : styles.fadeOut}
        aria-label={`Lenke til hjertekurven ${kurver[currentImageIndex].name}`}
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
  }

  return (
    <div className={styles.imageSlider}>
      <div className={styles.imageSliderImages}>
        {images.map((img, idx) => (
          <Image
            key={idx}
            src={img}
            alt={`Hjertekurv ${idx + 1}`}
            width={350}
            height={350}
            style={{ objectFit: "cover" }}
            priority={idx === 0}
          />
        ))}
      </div>
    </div>
  );
}
