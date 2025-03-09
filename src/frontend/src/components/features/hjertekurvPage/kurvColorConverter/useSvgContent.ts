import { useState, useEffect } from "react";

const useSvgContent = (imageUrl?: string, fillColor1: string = "#9B776B") => {
  const [svgContent, setSvgContent] = useState<string | null>(null);

  useEffect(() => {
    const applyDefaultColors = (svg: string): string => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(svg, "image/svg+xml");
      const elements = doc.querySelectorAll("path, rect");

      elements.forEach((element) => {
        const currentFill = element.getAttribute("fill");
        if (currentFill === "#BC9284") {
          element.setAttribute("fill", fillColor1);
        }
      });

      return new XMLSerializer().serializeToString(doc);
    };

    const fetchSvgContent = async (url: string) => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const svgText = await response.text();
          setSvgContent(applyDefaultColors(svgText));
        } else {
          console.error(`Failed to fetch SVG: ${response.statusText}`);
        }
      } catch (error) {
        console.error("Error fetching SVG:", error);
      }
    };

    if (imageUrl) {
      fetchSvgContent(imageUrl);
    }
  }, [imageUrl, fillColor1]);

  return svgContent;
};

export default useSvgContent;
