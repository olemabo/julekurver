// import { NextRequest, NextResponse } from "next/server";

// const locales = ["no", "en"];
// const defaultLocale = "no";

// function getLocale() {
//   return defaultLocale;
// }

// export function middleware(request: NextRequest) {
//   // Check if there is any supported locale in the pathname
//   const { pathname } = request.nextUrl;

//   if (/\.(png|jpg|jpeg|gif|svg|ico|css|js|json|ttf)$/.test(pathname)) {
//     return NextResponse.next();
//   }

//   const pathnameHasLocale = locales.some(
//     (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
//   );

//   if (pathnameHasLocale) return;

//   // Redirect if there is no locale
//   const locale = getLocale();
//   request.nextUrl.pathname = `/${locale}${pathname}`;
//   return NextResponse.redirect(request.nextUrl);
// }

// export const config = {
//   matcher: ["/((?!_next).*)"],
// };

import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Redirect all routes to the default page
  return NextResponse.rewrite(new URL("/default", request.url));
}

export const config = {
  // Apply to all routes
  matcher: "/:path*",
};
