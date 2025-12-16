import { cache } from "react";
import { Dictionary } from "./type";
import { LANGUAGES, Locale } from "@/config/i18n";

const dictionaries = {
  [LANGUAGES.EN]: () =>
    import("./locales/en/common.json").then(
      (module) => module.default as Dictionary,
    ),
  [LANGUAGES.NO]: () =>
    import("./locales/no/common.json").then(
      (module) => module.default as Dictionary,
    ),
};

export const getDictionary = cache(
  async (locale: Locale): Promise<Dictionary> => {
    if (!dictionaries[locale]) {
      console.warn(
        `Locale ${locale} is not supported. Falling back to default locale.`,
      );
      locale = LANGUAGES.NO;
    }
    return dictionaries[locale]();
  },
);

export const getTranslation = cache(
  async (
    locale: Locale,
    keys: string[],
    defaultValue = "",
  ): Promise<string> => {
    const dictionary = await getDictionary(locale);
    return getValuesByKeys(dictionary, keys, defaultValue);
  },
);

export const getTranslations = cache(
  async (
    locale: Locale,
    translationMap: Record<string, string[]>,
  ): Promise<Record<string, string>> => {
    const dictionary = await getDictionary(locale);
    const result: Record<string, string> = {};

    for (const [key, path] of Object.entries(translationMap)) {
      result[key] = getValuesByKeys(dictionary, path, key);
    }

    return result;
  },
);

type JSONValue = string | number | boolean | null | JSONObject | JSONArray;
interface JSONObject {
  [key: string]: JSONValue;
}
type JSONArray = JSONValue[];

function isJSONObject(value: JSONValue): value is JSONObject {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function isString(value: JSONValue): value is string {
  return typeof value === "string";
}

export function getValuesByKeys<T = string>(
  obj: Dictionary | JSONObject | undefined,
  keys: string[],
  defaultValue: T = "" as T,
): T {
  if (!obj) {
    return defaultValue;
  }

  let result: JSONValue = obj as JSONValue;

  for (const key of keys) {
    if (isJSONObject(result) && key in result) {
      result = result[key];
    } else {
      return defaultValue;
    }
  }

  if (Array.isArray(result)) {
    return result as T;
  }

  if (isString(result)) {
    return result as T;
  }

  return defaultValue;
}
