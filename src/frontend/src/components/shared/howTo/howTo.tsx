"use client";

import NumberWithColor from "./numberWithColor";
import Paragraph from "../ui/paragraph/paragraph";

import "./howTo.css";
import { darkTheme, DisplayTheme } from "@/constants/displayTheme";

export const POSITION_TOP = "top";
export const POSITION_CENTER = "center";

export type PositionType = typeof POSITION_TOP | typeof POSITION_CENTER;

type HowToSectionProps = {
  number: number;
  children: React.ReactNode;
  position?: PositionType;
  theme?: DisplayTheme;
  svgSize?: number;
  isDarkRed?: boolean;
};

export default function HowToSection({
  number,
  children,
  position = POSITION_TOP,
  theme = darkTheme,
  svgSize = 40,
  isDarkRed = false,
}: HowToSectionProps) {
  return (
    <div className={`how-to-container ${position}`}>
      <NumberWithColor
        isDarkRed={isDarkRed}
        svgSize={svgSize}
        theme={theme}
        number={number}
      />
      <Paragraph theme={theme}>{children}</Paragraph>
    </div>
  );
}
