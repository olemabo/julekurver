"use server";

import Image from "next/image";
import Link from "@/components/shared/ui/link/link";
import { InstagramIcon } from "@/components/shared/ui/icons/icons";
import { createBackendUrl } from "@/utils/backendApiUrl";
import "./inspirationSection.scss";
import { Suspense } from "react";
import { InspirationTitle } from "../useTexts";

interface InstagramImage {
  mediaUrl: string;
}

async function fetchInstagramImages(): Promise<InstagramImage[]> {
  const apiUrl = createBackendUrl("/api/instagram-images-api/");
  const res = await fetch(apiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 3600,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch Instagram images");
  }

  return await res.json();
}

async function InstagramImages() {
  const images = await fetchInstagramImages();

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
            className="instagram-image"
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
      </div>
    </>
  );
}

async function InstagramImagesLoader() {
  return (
    <div className="inspiration-section-container">
      {[...Array(3)].map((_, index) => (
        <div key={index} className="instagram-image-placeholder" />
      ))}
    </div>
  );
}

export default async function InspirationSection() {
  return (
    <>
      <InspirationTitle />
      <Suspense fallback={<InstagramImagesLoader />}>
        {/* <InstagramImages /> */}
        <InstagramImagesLoader />
      </Suspense>
    </>
  );
}
