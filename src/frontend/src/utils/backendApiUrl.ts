import { defaultKurvImage } from "@/constants/constants";

export const createApiMediaUrl = (path?: string): string => {
  if (!path) {
    return defaultKurvImage;
  }

  const apiBaseUrl = createBackendUrl();
  const mediaPath = process.env.NEXT_PUBLIC_BACKEND_MEDIA_PATH;

  return `${apiBaseUrl}/${mediaPath}/${path}`;
};

export const createBackendUrl = (
  path: string = "",
  queryParams: Record<string, string> = {},
): string => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_BACKEND_API_BASE_URL;
  if (!apiBaseUrl) {
    throw new Error("Backend API base URL is not defined.");
  }

  const queryString = new URLSearchParams(queryParams).toString();
  const fullUrl = path.startsWith("/")
    ? `${apiBaseUrl}${path}`
    : `${apiBaseUrl}/${path}`;

  return queryString ? `${fullUrl}?${queryString}` : fullUrl;
};
