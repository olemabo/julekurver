import { defaultKurvImage } from "@/constants/constants";

export const createApiMediaUrl = (path?: string): string => {
  if (!path) {
    return defaultKurvImage;
  }

  const apiBaseUrl = createBackendUrl();
  const mediaPath = process.env.NEXT_PUBLIC_BACKEND_MEDIA_PATH;

  return `${apiBaseUrl}/${mediaPath}/${path}`;
};

export const createBackendUrl = () => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_BACKEND_API_BASE_URL;
  return apiBaseUrl;
};
