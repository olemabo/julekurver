import { fetchWith404Check } from "@/lib/api/fetchWrapper";
import { createBackendUrl } from "@/lib/api/backendApiUrl";
import { Hjertekurv } from "@/types/hjertekurv";

export async function getHjertekurverData(
  name: string,
  lang: string,
): Promise<Hjertekurv[]> {
  const url = createBackendUrl("api/hjertekurver-page-api/", {
    hjertekurvName: name,
    lang: lang,
  });
  return fetchWith404Check<Hjertekurv[]>(url, { revalidate: 3600 });
}
