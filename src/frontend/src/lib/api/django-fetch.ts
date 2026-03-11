import "server-only";
import { createBackendUrl } from "@/lib/api/backend-api-url";
import { notFound } from "next/dist/client/components/navigation";

type DjangoApiEndpoint =
  | "/api/instagram-images-api/"
  | "/api/standard-page-api/"
  | "/api/hjertekurver-page-api/"
  | "/api/hjertekurv-page-api/"
  | "/api/related-hjertekurver-api/"
  | "/api/feedback/";

export async function djangoFetch<T>(
  endpoint: DjangoApiEndpoint,
  options?: RequestInit,
  queryParams: Record<string, string> = {},
): Promise<T> {
  let url = createBackendUrl(endpoint);

  if (queryParams && Object.keys(queryParams).length > 0) {
    const query = new URLSearchParams(queryParams).toString();
    url += (url.includes("?") ? "&" : "?") + query;
  }

  const response = await fetch(url, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  if (response.status === 404) notFound();

  if (!response.ok) {
    throw new Error(
      `Fetch failed with status: ${response.status} — ${response.statusText} for endpoint: ${endpoint}`,
    );
  }

  return await response.json();
}
