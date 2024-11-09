"use client";

import NumberWithColor from "./numberWithColor";
import Paragraph from "../ui/paragraph/paragraph";

type HowToSectionProps = {
  number: number;
  description: string;
};

export default function HowToSection({
  number,
  description,
}: HowToSectionProps) {
  return (
    <div style={{ display: "flex", columnGap: "24px", marginBottom: "24px" }}>
      <NumberWithColor number={number} />
      <Paragraph style={{ marginTop: "12px" }}>{description}</Paragraph>
    </div>
  );
}
