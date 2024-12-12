"use client";

import { useEffect, useState } from "react";
import { createBackendUrl } from "@/utils/backendApiUrl";
import Image from "next/image";
import Link from "@/components/shared/ui/link/link";
import HjertekurvLoader from "@/components/shared/loaders/hjertekurvLoader";
import "./inspirationSection.scss";
import { InstagramIcon } from "@/components/shared/ui/icons/icons";

interface InstagramImage {
  mediaUrl: string;
}
export default function InspirationSection() {
  const [images, setImages] = useState<InstagramImage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const apiBaseUrl = createBackendUrl();
  const url = `${apiBaseUrl}/api/instagram-images-api/`;

  useEffect(() => {
    setIsLoading(true);
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 3600,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setImages(data);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div style={{ height: "500px" }}>
        <HjertekurvLoader />
      </div>
    );
  }

  return (
    <>
      <div className="inspiration-section-container">
        {images.map((image, index) => (
          <Image
            key={`insp-section-${index}`}
            src={image.mediaUrl}
            alt={`Instagram media ${index + 1}`}
            width={300}
            height={300}
          />
        ))}
      </div>
      <div className="social-media-links-container">
        <Link
          icon={<InstagramIcon />}
          linkTitle="Instagram"
          target="_blank"
          href="https://www.instagram.com/hjertekurver/"
        />
        {/* <Link
          icon={<PinterestIcon />}
          linkTitle="Pinterest"
          target="_blank"
          href="#"
        /> */}
      </div>
    </>
  );
}
