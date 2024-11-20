"use client";

import Image from "next/image";

type NumberWithColorProps = {
  number: number;
};

export default function NumberWithColor({ number }: NumberWithColorProps) {
  return (
    <div className="number-with-color-container">
      <span style={{ color: "white" }}>{number.toString()}</span>
      <Image
        src="/images/pages/number_background.svg"
        alt="Number color background"
        width={40}
        height={40}
      />
    </div>
  );
}
