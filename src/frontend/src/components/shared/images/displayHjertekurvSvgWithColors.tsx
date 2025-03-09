"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import "./displayHjertekurvSvgWithColors.scss";

type DisplayHjertekurvSvgWithColorsProps = {
  imageUrl?: string;
  fillColor1: string;
  fillColor2: string;
  imageSize?: { height: string; width: string };
};

const svgCache = new Map<string, string>();

export default function DisplayHjertekurvSvgWithColors({
  imageUrl,
  fillColor1,
  fillColor2,
  imageSize = { height: "200px", width: "200px" },
}: DisplayHjertekurvSvgWithColorsProps) {
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const svgContainerRef = useRef<HTMLDivElement | null>(null);

  const fetchSvgContent = async (url: string) => {
    if (svgCache.has(url)) {
      return svgCache.get(url)!;
    }

    try {
      const response = await fetch(url);
      if (response.ok) {
        const svgText = await response.text();
        svgCache.set(url, svgText);
        return svgText;
      } else {
        console.error(`Failed to fetch SVG: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error fetching SVG:", error);
    }
    return null;
  };

  const updateSvgFillColors = useCallback(
    (svg: string): string => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(svg, "image/svg+xml");
      const elements = doc.querySelectorAll("path, rect");

      elements.forEach((element) => {
        const currentFill = element.getAttribute("fill");
        if (currentFill?.toLowerCase() === "#bc9284") {
          element.setAttribute("fill", fillColor1);
        } else if (
          currentFill?.toLowerCase() === "#ffffff" ||
          currentFill === "white"
        ) {
          element.setAttribute("fill", fillColor2);
        }

        const currentStroke = element.getAttribute("stroke");
        if (currentStroke?.toLowerCase() === "#bc9284") {
          element.setAttribute("stroke", fillColor1);
        } else if (
          currentStroke?.toLowerCase() === "#ffffff" ||
          currentStroke === "white"
        ) {
          element.setAttribute("stroke", fillColor2);
        }
      });

      return new XMLSerializer().serializeToString(doc);
    },
    [fillColor1, fillColor2],
  );

  useEffect(() => {
    if (imageUrl) {
      fetchSvgContent(imageUrl).then((svg) => {
        if (svg) {
          const updatedSvg = updateSvgFillColors(svg);
          setSvgContent(updatedSvg);
        }
      });
    }
  }, [imageUrl, fillColor1, fillColor2, updateSvgFillColors]);

  if (!imageUrl) {
    return null;
  }

  return (
    <div
      className="change-svg-color-container"
      style={{
        width: imageSize.width,
        height: imageSize.height,
      }}
    >
      <span aria-hidden={true} style={{ display: "none" }}>
        Bilde av hjertekurv
      </span>
      <div
        ref={svgContainerRef}
        dangerouslySetInnerHTML={{ __html: svgContent || "" }}
        className="kurv-container"
      />
    </div>
  );
}
