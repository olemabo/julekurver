import "server-only";
import { cache } from "react";
import { djangoFetch } from "../django-fetch";
import { Locale } from "@/localization/i18n-config";
import { Hjertekurv } from "./get-hjertekurver";

export const getHjertekurv = cache(
  async (hjertekurvName: string, language: Locale): Promise<Hjertekurv> => {
    return djangoFetch<Hjertekurv>(
      "/api/hjertekurv-page-api/",
      { next: { revalidate: 3600 } },
      { hjertekurvName, language },
    );
  },
);
