import { fetchWith404Check } from "@/lib/api/fetchWrapper";
import { createBackendUrl } from "@/lib/api/backendApiUrl";
import { Hjertekurv } from "@/types/hjertekurv";
import { cache } from "react";

export const getHjertekurvData = cache(async (name: string, lang: string): Promise<Hjertekurv> => {
  const url = createBackendUrl("api/hjertekurv-page-api/", {
    hjertekurvName: name,
    lang: lang,
  })

  return fetchWith404Check<Hjertekurv>(url, {
    next: { revalidate: 3600 },
  })
})

export async function getRelatedHjertekurvData(
  name: string,
  lang: string
): Promise<Response> {
    const url = createBackendUrl('api/related-hjertekurver-api/', {
        hjertekurvName: name,
        lang: lang
    })

    return await fetch(url,
        {
            next: {
                revalidate: 3600,
            },
        },
    );
}