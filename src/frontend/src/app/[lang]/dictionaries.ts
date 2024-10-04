import "server-only";

export type Locale = "en" | "no";

const dictionaries = {
  en: () =>
    import("../../../public/locales/en/common.json").then(
      (module) => module.default,
    ),
  no: () =>
    import("../../../public/locales/no/common.json").then(
      (module) => module.default,
    ),
};

export const getDictionary = async (locale: Locale) => {
  if (!dictionaries[locale]) {
    throw new Error(`Locale ${locale} is not supported`);
  }
  return dictionaries[locale]();
};
