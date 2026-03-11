"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import styles from "./lazy-image.module.css";

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

  if (!src) return null;

  return (
    <div
      ref={imgRef}
      className={`${styles.lazyImageContainer} ${isVisible ? styles.visible : ""}`}
      style={{ width: imageWidth, height: imageHeight, position: "relative" }}
    >
      {!isVisible && (
        <div
          className={styles.lazyImageSkeleton}
          style={{ width: imageWidth, height: imageHeight }}
        />
      )}
      {isVisible && (
        <Image
          height={imageHeight}
          width={imageWidth}
          className={className || ""}
          src={src}
          alt={alt}
          style={{ top: 0, left: 0 }}
        />
      )}
    </div>
  );
}
