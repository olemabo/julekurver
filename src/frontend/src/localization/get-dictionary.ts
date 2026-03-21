import "server-only";
import type { Locale } from "./i18n-config";

const dictionaries = {
  en: () => import("./locales/en/common.json").then((module) => module.default),
  no: () => import("./locales/no/common.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.no();
