export const EN_LOCALE = "en";
export const NO_LOCALE = "no";

export type Locale = typeof EN_LOCALE | typeof NO_LOCALE;

const dictionaries = {
  [EN_LOCALE]: () =>
    import("../../../public/locales/en/common.json").then(
      (module) => module.default,
    ),
  [NO_LOCALE]: () =>
    import("../../../public/locales/no/common.json").then(
      (module) => module.default,
    ),
};

export type Dictionary = {
  [key: string]: string | Dictionary;
};

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  if (!dictionaries[locale]) {
    throw new Error(`Locale ${locale} is not supported`);
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

export function getValuesByKeys(
  obj: Dictionary | undefined,
  keys: string[],
  defaultValue: string = "",
): string {
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

  if (isString(result)) {
    return result;
  }

  return defaultValue;
}
