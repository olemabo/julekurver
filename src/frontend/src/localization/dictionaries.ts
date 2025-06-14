import { cache } from "react"
import LANGUAGES, { type LanguageCode } from "@/constants/languages"
import { Dictionary } from "./type"

const dictionaries = {
  [LANGUAGES.ENGLISH]: () =>
    import("./locales/en/common.json").then((module) => module.default as Dictionary),
  [LANGUAGES.NORWEGIAN]: () =>
    import("./locales/no/common.json").then((module) => module.default as Dictionary),
}

export const getDictionary = cache(async (locale: LanguageCode): Promise<Dictionary> => {
  if (!dictionaries[locale]) {
    console.warn(`Locale ${locale} is not supported. Falling back to default locale.`)
    locale = LANGUAGES.NORWEGIAN
  }
  return dictionaries[locale]()
})

export const getTranslation = cache(
  async (locale: LanguageCode, keys: string[], defaultValue = ""): Promise<string> => {
    const dictionary = await getDictionary(locale)
    return getValuesByKeys(dictionary, keys, defaultValue)
  },
)

export const getTranslations = cache(
  async (locale: LanguageCode, translationMap: Record<string, string[]>): Promise<Record<string, string>> => {
    const dictionary = await getDictionary(locale)
    const result: Record<string, string> = {}

    for (const [key, path] of Object.entries(translationMap)) {
      result[key] = getValuesByKeys(dictionary, path, key)
    }

    return result
  },
)

type JSONValue = string | number | boolean | null | JSONObject | JSONArray
interface JSONObject {
  [key: string]: JSONValue
}
type JSONArray = JSONValue[]

function isJSONObject(value: JSONValue): value is JSONObject {
  return value !== null && typeof value === "object" && !Array.isArray(value)
}

function isString(value: JSONValue): value is string {
  return typeof value === "string"
}

export function getValuesByKeys<T = string>(
  obj: Dictionary | JSONObject | undefined,
  keys: string[],
  defaultValue: T = "" as T,
): T {
  if (!obj) {
    return defaultValue
  }

  let result: JSONValue = obj as JSONValue

  for (const key of keys) {
    if (isJSONObject(result) && key in result) {
      result = result[key]
    } else {
      return defaultValue
    }
  }

  if (Array.isArray(result)) {
    return result as T
  }

  if (isString(result)) {
    return result as T
  }

  return defaultValue
}

type PathKeys<T, K extends keyof T = keyof T> = K extends string
  ? T[K] extends Record<string, any>
    ? `${K}` | `${K}.${PathKeys<T[K]>}`
    : `${K}`
  : never

type PathValue<T, P extends string> = P extends `${infer K}.${infer Rest}`
  ? K extends keyof T
    ? PathValue<T[K], Rest>
    : never
  : P extends keyof T
    ? T[P]
    : never

export function getTypedValue<P extends PathKeys<Dictionary>>(
  dictionary: Dictionary,
  path: P,
): PathValue<Dictionary, P> | undefined {
  const keys = path.split(".") as string[]
  let result: any = dictionary

  for (const key of keys) {
    if (result && typeof result === "object" && key in result) {
      result = result[key]
    } else {
      return undefined
    }
  }

  return result
}

export function getSafeTypedValue<P extends PathKeys<Dictionary>, T>(
  dictionary: Dictionary,
  path: P,
  fallback: T,
): PathValue<Dictionary, P> | T {
  const value = getTypedValue(dictionary, path)
  return value !== undefined ? value : fallback
}
