import { getValuesByKeys } from "@/app/[lang]/dictionaries";
import { LanguageContext } from "@/providers";
import { use } from "react";

export function useFrontPageTitles() {
  const { dictionary } = use(LanguageContext);

  const createHjertekurvTitle = getValuesByKeys(dictionary, [
    "pages",
    "frontpage",
    "createHjertekurvTitle",
  ]);

  const getInspiredTitle = getValuesByKeys(dictionary, [
    "pages",
    "frontpage",
    "getInspiredTitle",
  ]);

  const seeOurKurver = getValuesByKeys(dictionary, [
    "pages",
    "frontpage",
    "seeOurKurver",
  ]);

  return { getInspiredTitle, createHjertekurvTitle, seeOurKurver };
}
