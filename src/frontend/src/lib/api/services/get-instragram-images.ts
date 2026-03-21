import "server-only";
import { cache } from "react";
import { djangoFetch } from "../django-fetch";

export type InstagramImage = {
  mediaUrl: string;
};

export const getInstagramImages = cache(async (): Promise<InstagramImage[]> => {
  const images = await djangoFetch<InstagramImage[]>(
    "/api/instagram-images-api/",
  );
  return images;
});
