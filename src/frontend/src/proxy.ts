import { NextRequest, NextResponse } from "next/server";
import { DEFAULT_LOCALE, LOCALES } from "@config/i18n";

function getLocale(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const pathnameLocale = LOCALES.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );
  if (pathnameLocale) return pathnameLocale;

  // Check Accept-Language header
  const acceptLanguage = request.headers.get("Accept-Language");
  if (acceptLanguage) {
    const preferredLocale = LOCALES.find((locale) =>
      acceptLanguage.includes(locale),
    );
    if (preferredLocale) return preferredLocale;
  }

  return DEFAULT_LOCALE;
}

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (/\.(png|jpg|jpeg|gif|svg|html|ico|css|js|json|ttf|txt)$/.test(pathname)) {
    return NextResponse.next();
  }

  const pathnameHasLocale = LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const localeConfig = {
  matcher: ["/((?!_next).*)"],
};
