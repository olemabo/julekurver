import "server-only";
import { cache } from "react";
import { djangoFetch } from "../django-fetch";
import { Locale } from "@/localization/i18n-config";
import { Hjertekurv } from "@/types/hjertekurv";

export const getHjertekurver = cache(
  async (hjertekurvName: string, language: Locale): Promise<Hjertekurv[]> => {
    return djangoFetch<Hjertekurv[]>(
      "/api/hjertekurver-page-api/",
      { next: { revalidate: 3600 } },
      { hjertekurvName, language },
    );
  },
);
