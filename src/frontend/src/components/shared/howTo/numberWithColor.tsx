"use client";

import { darkTheme, DisplayTheme } from "@/constants/displayTheme";
import Image from "next/image";

type NumberWithColorProps = {
  number: number;
  theme?: DisplayTheme;
  svgSize?: number;
  isDarkRed?: boolean;
};

export default function NumberWithColor({
  number,
  theme,
  svgSize = 40,
  isDarkRed = false,
}: NumberWithColorProps) {
  if (!number) {
    return null;
  }

  const backgroundSvg =
    theme === darkTheme
      ? isDarkRed
        ? "/images/pages/number_background_darkred.svg"
        : "/images/pages/number_background.svg"
      : "/images/pages/number_background_hvit.svg";

  return (
    <div className={`number-with-color-container ${theme}`}>
      <span>{number?.toString()}</span>
      <Image
        src={backgroundSvg}
        alt="Number color background"
        width={svgSize}
        height={svgSize}
      />
    </div>
  );
}
