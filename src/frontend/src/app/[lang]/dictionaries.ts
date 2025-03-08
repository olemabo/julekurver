import LANGUAGES, { LanguageCode } from "@/constants/languages";

const dictionaries = {
  [LANGUAGES.ENGLISH]: () =>
    import("../../../public/locales/en/common.json").then(
      (module) => module.default,
    ),
  [LANGUAGES.NORWEGIAN]: () =>
    import("../../../public/locales/no/common.json").then(
      (module) => module.default,
    ),
};

export type Dictionary = Record<string, any>;

export const getDictionary = async (
  locale: LanguageCode,
): Promise<Dictionary> => {
  if (!dictionaries[locale]) {
    console.warn(
      `Locale ${locale} is not supported. Falling back to default locale.`,
    );
    locale = LANGUAGES.NORWEGIAN;
  }
  return dictionaries[locale]();
};

function isJSONObject(value: JSONValue): value is Record<string, JSONValue> {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

type JSONValue = string | number | boolean | null | JSONObject | JSONArray;
interface JSONObject {
  [key: string]: JSONValue;
}
type JSONArray = JSONValue[];

function isString(value: JSONValue): value is string {
  return typeof value === "string";
}

export function getValuesByKeys<T = string>(
  obj: Dictionary | undefined,
  keys: string[],
  defaultValue: T = "" as T,
): T {
  if (!obj) {
    return defaultValue;
  }

  let result: JSONValue = obj;

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
