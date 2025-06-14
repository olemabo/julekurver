import { fetchWith404Check } from "@/lib/api/fetchWrapper";
import { createBackendUrl } from "@/lib/api/backendApiUrl";
import { PageContent } from "./type";
import { cache } from "react";

export const getStandardPage = cache(
  async (page: string, lang: string): Promise<PageContent | null> => {
    return fetchWith404Check<PageContent>(
      createBackendUrl("/api/standard-page-api/", {
        pageUrl: page,
        lang,
      }),
      { next: { revalidate: 3600 } },
    );
  },
);
