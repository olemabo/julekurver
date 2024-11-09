import Paragraph from "@/components/shared/ui/paragraph/paragraph";
import { lightTheme } from "@/constants/displayTheme";
import Image from "next/image";
import React from "react";

type HjertekurvStepProps = {
  imageUrl: string;
  description: string;
  height?: number;
};

export default function HjertekurvStep({
  imageUrl,
  description,
  height = 280,
}: HjertekurvStepProps) {
  return (
    <div className="hjertekurv-step">
      <Image height={height} width={250} src={imageUrl} alt={description} />
      <Paragraph theme={lightTheme}>{description}</Paragraph>
    </div>
  );
}
