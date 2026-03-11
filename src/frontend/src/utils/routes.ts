import type { AppRoutes } from "../../.next/dev/types/routes";

export type ExtraRoutes =
  | "https://hjertekurver.no"
  | "https://www.instagram.com/hjertekurver/"
  | (string & {});

export type AllRoutes = AppRoutes | ExtraRoutes;

/**
 * Type for object variant of buildAppRoute arguments, for use in Link and elsewhere.
 */
export type BuildAppRouteObject<T extends AllRoutes = AllRoutes> =
  ExtractParams<T> extends never
    ? { route: T }
    : { route: T; params: { [K in ExtractParams<T>]: string } };

type ExtractParams<T extends string> =
  T extends `${string}[${infer Param}]${infer Rest}`
    ? Param | ExtractParams<Rest>
    : never;

/**
 * Utility to generate a concrete route from an AppRoutes template by replacing dynamic segments.
 * @param route - The AppRoutes template (e.g. "/[lang]/[page]")
 * @param params - An object with keys for each dynamic segment (e.g. { lang: "no", page: "foo" })
 * @returns The concrete route string (e.g. "/no/foo")
 */
// export function buildRoute<T extends AppRoutes>(
//   route: T,
//   params: Record<string, string>
// ): string {
//   let result = route as string;
//   for (const [key, value] of Object.entries(params)) {
//     result = result.replace(`[${key}]`, value);
//   }
//   return result;
// }
export function buildAppRoute<T extends AllRoutes>(
  obj: BuildAppRouteObject<T>,
): string {
  let result = obj.route as string;
  if ("params" in obj && obj.params) {
    for (const [k, v] of Object.entries(obj.params)) {
      result = result.replace(`[${k}]`, String(v));
    }
  }
  return result;
}
