// import type { AppRoutes } from ".next/dev/types/routes";

// /**
//  * Utility to generate a concrete route from an AppRoutes template by replacing dynamic segments.
//  * @param route - The AppRoutes template (e.g. "/[lang]/[page]")
//  * @param params - An object with keys for each dynamic segment (e.g. { lang: "no", page: "foo" })
//  * @returns The concrete route string (e.g. "/no/foo")
//  */
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
// import type { AppRoutes } from ".next/dev/types/routes";
// import type { Locale } from "@/config/i18n";

// /**
//  * Removes dynamic [page] and [hjertekurv] routes from AppRoutes,
//  * leaving only static routes with [lang] as a placeholder.
//  */
// type FilteredAppRoutes = Exclude<
//   AppRoutes,
//   "/[lang]/[page]" | "/[lang]/hjertekurver/[hjertekurv]"
// >;

// /**
//  * Replaces the [lang] placeholder in a route string with all possible Locale values,
//  * producing a union of all valid static route strings for each locale.
//  *
//  * @template T - The route string template (with [lang] placeholder)
//  * @template L - The locale type (defaults to Locale)
//  */
// type ReplaceLang<
//   T extends string,
//   L extends string = Locale
// > = T extends `${infer _Start}[lang]${infer End}`
//   ? L extends any
//     ? `/${L}${End}`
//     : never
//   : never;

// /**
//  * Union type of all static, locale-specific routes in the app.
//  * Example: "/no/hjertekurver", "/en/search", etc.
//  */
// export type StaticRoute = ReplaceLang<FilteredAppRoutes>;
