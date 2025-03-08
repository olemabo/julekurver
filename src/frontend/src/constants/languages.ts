const LANGUAGES = {
  NORWEGIAN: "no",
  ENGLISH: "en",
} as const;

Object.freeze(LANGUAGES);

export default LANGUAGES;

export type LanguageCode = (typeof LANGUAGES)[keyof typeof LANGUAGES];
