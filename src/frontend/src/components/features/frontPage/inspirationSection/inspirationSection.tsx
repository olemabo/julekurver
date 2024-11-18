"use client";

import { useEffect, useState } from "react";
import { createBackendUrl } from "@/utils/backendApiUrl";
import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import Link from "@/components/shared/ui/link/link";

import "./inspirationSection.css";

interface InstagramImage {
  mediaUrl: string;
}
export default function InspirationSection() {
  const [images, setImages] = useState<InstagramImage[]>([]);
  const apiBaseUrl = createBackendUrl();
  const url = `${apiBaseUrl}/api/instagram-images-api/`;

  useEffect(() => {
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
      });
  }, []);

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
      <div className="contact-section-container">
        <Link
          icon={<InstagramIcon />}
          linkTitle="Instagram"
          target="_blank"
          href="https://www.instagram.com/hjertekurver/"
        />
        <Link
          icon={<PinterestIcon />}
          linkTitle="Pinterest"
          target="_blank"
          href="#"
        />
      </div>
    </>
  );
}
