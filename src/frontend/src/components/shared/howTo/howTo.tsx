"use client";

import NumberWithColor from "./numberWithColor";
import Paragraph from "../ui/paragraph/paragraph";

import "./howTo.css";

export const positionTop = "top";
export const positionCenter = "center";

export type PositionType = typeof positionTop | typeof positionCenter;

type HowToSectionProps = {
  number: number;
  children: React.ReactNode;
  position?: PositionType;
};

export default function HowToSection({
  number,
  children,
  position = positionCenter,
}: HowToSectionProps) {
  return (
    <div className={`how-to-container ${position}`}>
      <NumberWithColor number={number} />
      <Paragraph>{children}</Paragraph>
    </div>
  );
}
