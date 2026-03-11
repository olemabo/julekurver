import { djangoFetch } from "@/lib/api/django-fetch";
import { cache } from "react";

export type PageContent = {
  title: string;
  content: string;
  pageType: string;
};

/**
 * Henter standard sideinnhold fra backend
 * @param page - slug / navn på siden
 * @param lang - språk
 */
export const getStandardPage = cache(
  async (page: string, lang: string): Promise<PageContent | null> => {
    return djangoFetch<PageContent>(
      "/api/standard-page-api/",
      { next: { revalidate: 3600 } },
      { pageUrl: page, lang },
    );
  },
);
