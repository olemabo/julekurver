"use client";

import { useEffect, useRef, useState } from "react";

import "./kurv-color-converter.css";
import useSvgContent from "./useSvgContent";
import { getDictionary } from "@/localization/get-dictionary";

type Dictionary = Awaited<
  ReturnType<typeof getDictionary>
>["pages"]["hjertekurvPage"];

type KurvConverterProps = {
  imageUrl?: string;
  defaultFillColor1?: string;
  dictionary: Dictionary;
};

export default function KurvConverter({
  imageUrl,
  defaultFillColor1 = "#9B776B",
  dictionary,
}: KurvConverterProps) {
  const svgContainerRef = useRef<HTMLDivElement | null>(null);

  const [fillColor1, setFillColor1] = useState<string>(defaultFillColor1);
  const [fillColor2, setFillColor2] = useState<string>("#FFFFFF");

  const svgContent = useSvgContent(imageUrl, fillColor1);

  useEffect(() => {
    if (svgContainerRef.current) {
      const elements = svgContainerRef.current.querySelectorAll("path, rect");
      elements.forEach((element) => {
        const currentFill = element.getAttribute("fill");
        if (currentFill === defaultFillColor1) {
          element.setAttribute("fill", fillColor1);
        } else if (currentFill === "white" || currentFill === "#FFFFFF") {
          element.setAttribute("fill", fillColor2);
        }
      });
    }
  }, [fillColor1, fillColor2, defaultFillColor1]);

  if (!imageUrl) {
    return null;
  }

  const { changeColorLeft, changeColorRight } = dictionary;

  return (
    <div className="kurv-color-converter-container">
      <div
        ref={svgContainerRef}
        dangerouslySetInnerHTML={{ __html: svgContent || "" }}
        className="kurv-container"
      />
      <div className="color-picker-container">
        <div className="color-container">
          <label htmlFor="color-picker-left">{changeColorLeft}</label>
          <input
            className="left-kurv"
            type="color"
            id="color-picker-left"
            value={fillColor1}
            onChange={(e) => setFillColor1(e.target.value)}
          />
        </div>
        <div className="color-container">
          <input
            className="right-kurv"
            type="color"
            id="color-picker-right"
            value={fillColor2}
            onChange={(e) => setFillColor2(e.target.value)}
          />
          <label htmlFor="color-picker-right">{changeColorRight}</label>
        </div>
      </div>
    </div>
  );
}
