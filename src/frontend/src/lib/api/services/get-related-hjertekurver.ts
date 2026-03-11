import { djangoFetch } from "@/lib/api/django-fetch";
import { cache } from "react";
import { Hjertekurv } from "./get-hjertekurver";

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
