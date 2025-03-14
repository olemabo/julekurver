import { NextRequest, NextResponse } from "next/server";
import LANGUAGES from "./constants/languages";

const locales = [LANGUAGES.NORWEGIAN, LANGUAGES.ENGLISH];
const defaultLocale = LANGUAGES.NORWEGIAN;

function getLocale() {
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

  const locale = getLocale();
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);

  return NextResponse.next();
}

export const localeConfig = {
  matcher: ["/((?!_next).*)"],
};
