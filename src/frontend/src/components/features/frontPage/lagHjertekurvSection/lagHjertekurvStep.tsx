// import HowToSection from "@/components/shared/howTo/howTo";
import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import { lightTheme } from "@/constants/displayTheme";
import Image from "next/image";
import React from "react";

type HjertekurvStepProps = {
  imageUrl: string;
  description: string;
  number: number;
  height?: number;
  svgSize?: number;
};

export default function HjertekurvStep({
  imageUrl,
  description,
  // number,
  height = 280,
  // svgSize = 50,
}: HjertekurvStepProps) {
  return (
    <div className="hjertekurv-step">
      <Image height={height} width={250} src={imageUrl} alt={description} />
      {/* <HowToSection svgSize={svgSize} theme={lightTheme} number={number}>
      {description}
      </HowToSection> */}
      <Paragraph theme={lightTheme}>{description}</Paragraph>
    </div>
  );
}
