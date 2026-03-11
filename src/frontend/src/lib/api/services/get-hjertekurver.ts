import "server-only";
import { cache } from "react";
import { djangoFetch } from "../django-fetch";
import { Category } from "@/types/category";
import { Locale } from "@/localization/i18n-config";

export type Hjertekurv = {
  name: string;
  about: string;
  imageHjertekurvUrl: string;
  url: string;
  imageHjertekurvMalUrl?: string;
  imageHjertekurvMal2Url?: string;
  difficultyKlipping: number;
  difficultyFletting: number;
  downloadMal?: string;
  categories?: Category[];
  createdAt: Date;
  popularity: number;
};

export const getHjertekurver = cache(
  async (hjertekurvName: string, language: Locale): Promise<Hjertekurv[]> => {
    return djangoFetch<Hjertekurv[]>(
      "/api/hjertekurver-page-api/",
      { next: { revalidate: 3600 } },
      { hjertekurvName, language },
    );
  },
);
