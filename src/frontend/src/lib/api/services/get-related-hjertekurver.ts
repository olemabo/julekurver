import { djangoFetch } from "@/lib/api/django-fetch";
import { Hjertekurv } from "@/types/hjertekurv";
import { cache } from "react";

/**
 * Henter relaterte hjertekurver fra backend
 * @param name - navn på hjertekurven
 * @param lang - språk
 */
export const getRelatedHjertekurver = cache(
  async (name: string, lang: string): Promise<Hjertekurv[] | null> => {
    const relatedHjertekurver = await djangoFetch<Hjertekurv[]>(
      "/api/related-hjertekurver-api/",
      { next: { revalidate: 3600 } },
      { hjertekurvName: name, lang },
    );

    return relatedHjertekurver;
  },
);
