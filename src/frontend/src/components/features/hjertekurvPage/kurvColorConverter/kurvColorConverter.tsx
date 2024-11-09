"use client";

import { useEffect, useRef, useState } from "react";

import "./kurvColorConverter.css";

type KurvConverterProps = {
  imageUrl?: string;
};

export default function KurvConverter({ imageUrl }: KurvConverterProps) {
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const svgContainerRef = useRef<HTMLDivElement | null>(null);

  const [fillColor1, setFillColor1] = useState<string>("#BC9284");
  const [fillColor2, setFillColor2] = useState<string>("#FFFFFF");

  const fetchSvgContent = async (url: string) => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return await response.text();
      } else {
        console.error(`Failed to fetch SVG: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error fetching SVG:", error);
    }
    return null;
  };

  useEffect(() => {
    if (imageUrl) {
      fetchSvgContent(imageUrl).then(setSvgContent);
    }
  }, [imageUrl]);

  const updateSvgFillColors = () => {
    if (svgContainerRef.current) {
      const elements = svgContainerRef.current.querySelectorAll("path, rect");
      elements.forEach((element) => {
        const currentFill = element.getAttribute("fill");
        if (currentFill === "#BC9284") {
          element.setAttribute("fill", fillColor1);
        } else if (currentFill === "white" || currentFill === "#FFFFFF") {
          element.setAttribute("fill", fillColor2);
        }
      });
    }
  };

  useEffect(() => {
    updateSvgFillColors();
  }, [fillColor1, fillColor2]);

  if (!imageUrl) {
    return null;
  }

  return (
    <div className="kurv-color-converter-container">
      <div
        ref={svgContainerRef}
        dangerouslySetInnerHTML={{ __html: svgContent || "" }}
        className="kurv-container"
      />
      <div className="color-picker-container">
        <div className="color-container">
          <label htmlFor="color-picker-left">
            Endre farge på venstre hjertekurv
          </label>
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
          <label htmlFor="color-picker-right">
            Endre farge på høyre hjertekurv
          </label>
        </div>
      </div>
    </div>
  );
}
