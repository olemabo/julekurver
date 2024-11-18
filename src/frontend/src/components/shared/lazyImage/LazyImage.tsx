"use client";

import React, { useEffect, useState, useRef } from "react";
import "./lazyImage.css";

type LazyImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageSize?: { height: number; width: number };
};

export default function LazyImage({
  src,
  alt,
  className,
  imageSize = { height: 125, width: 260 },
}: LazyImageProps) {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const { width: imageWidth, height: imageHeight } = imageSize;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.4 },
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={imgRef}
      className={`lazy-image-container ${isVisible ? "visible" : ""} `}
    >
      <img
        height={imageHeight}
        width={imageWidth}
        className={className || ""}
        src={isVisible ? src : ""}
        alt={alt}
      />
    </div>
  );
}
