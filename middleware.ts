import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale, type Locale } from "@/app/lib/i18n/config";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) =>
      pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Detect locale from Accept-Language header
  const acceptLanguage = request.headers.get("Accept-Language") || "";
  let detectedLocale: Locale = defaultLocale;

  for (const locale of locales) {
    if (acceptLanguage.toLowerCase().includes(locale)) {
      detectedLocale = locale;
      break;
    }
  }

  request.nextUrl.pathname = `/${detectedLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|icon.svg|.*\\..*).*)",
  ],
};
