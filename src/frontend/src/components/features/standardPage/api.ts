import { fetchWith404Check } from "@/lib/api/fetchWrapper";
import { createBackendUrl } from "@/lib/api/backendApiUrl";
import { PageContent } from "./type";
import { cache } from "react";

/**
 * Henter standard sideinnhold fra backend
 * @param page - slug / navn på siden
 * @param lang - språk
 * @param revalidate - hvor lenge cachen skal vare (sekunder)
 */
export const getStandardPage = cache(
  async (
    page: string,
    lang: string,
    revalidate: number = 30, // default 30 sek
  ): Promise<PageContent | null> => {
    return fetchWith404Check<PageContent>(
      createBackendUrl("/api/standard-page-api/", { pageUrl: page, lang }),
      { next: { revalidate } },
    );
  },
);
