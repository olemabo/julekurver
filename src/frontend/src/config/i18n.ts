export const LANGUAGES = {
  NO: "no",
  EN: "en",
} as const;

export const LOCALES = Object.values(LANGUAGES);
export const DEFAULT_LOCALE = LANGUAGES.NO;

export type Locale = (typeof LOCALES)[number];
export type LocaleProps = { lang: Locale };
