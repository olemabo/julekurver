import { NextRequest, NextResponse } from "next/server";
import LANGUAGES from "./constants/languages";

const locales = [LANGUAGES.NORWEGIAN, LANGUAGES.ENGLISH];
const defaultLocale = LANGUAGES.NORWEGIAN;

function getLocale(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const pathnameLocale = locales.find(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  if (pathnameLocale) return pathnameLocale;

  // Check Accept-Language header
  const acceptLanguage = request.headers.get('Accept-Language');
  if (acceptLanguage) {
    const preferredLocale = locales.find(locale => 
      acceptLanguage.includes(locale)
    );
    if (preferredLocale) return preferredLocale;
  }

  return defaultLocale;
}

export default function localeMiddleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (/\.(png|jpg|jpeg|gif|svg|html|ico|css|js|json|ttf|txt)$/.test(pathname)) {
    return NextResponse.next();
  }

  const pathnameHasLocale = locales.some(
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
