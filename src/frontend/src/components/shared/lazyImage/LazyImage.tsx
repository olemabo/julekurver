"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import "./lazyImage.scss";

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

    const currentRef = imgRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  if (!src) {
    return null;
  }

  return (
    <div
      ref={imgRef}
      className={`lazy-image-container ${isVisible ? "visible" : ""} `}
    >
      {isVisible && (
        <Image
          height={imageHeight}
          width={imageWidth}
          className={className || ""}
          src={src}
          alt={alt}
        />
      )}
    </div>
  );
}
