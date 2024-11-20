"use client";

import NumberWithColor from "./numberWithColor";
import Paragraph from "../ui/paragraph/paragraph";

import "./howTo.css";

export const POSITION_TOP = "top";
export const POSITION_CENTER = "center";

export type PositionType = typeof POSITION_TOP | typeof POSITION_CENTER;

type HowToSectionProps = {
  number: number;
  children: React.ReactNode;
  position?: PositionType;
};

export default function HowToSection({
  number,
  children,
  position = POSITION_TOP,
}: HowToSectionProps) {
  return (
    <div className={`how-to-container ${position}`}>
      <NumberWithColor number={number} />
      <Paragraph>{children}</Paragraph>
    </div>
  );
}
