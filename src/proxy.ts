import { NextResponse, type NextRequest } from "next/server";
import { ADMIN_SESSION_COOKIE } from "@/lib/adminSession";
import { DEFAULT_LOCALE, isValidLocale } from "@/lib/i18n/localization";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Admin Authentication Check
  if (
    pathname.startsWith("/admin") &&
    !pathname.startsWith("/admin/login") &&
    !request.cookies.has(ADMIN_SESSION_COOKIE)
  ) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  // Bypass API, _next static files, admin, static media assets
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/admin") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // 2. Locale Resolution from URL Segment
  const pathSegments = pathname.split("/").filter(Boolean);
  const firstSegment = pathSegments[0];

  let locale: string = DEFAULT_LOCALE;
  let targetPath = pathname;

  if (firstSegment && isValidLocale(firstSegment)) {
    locale = firstSegment;
    targetPath = "/" + pathSegments.slice(1).join("/");
    if (targetPath === "") targetPath = "/";
  } else {
    // If no locale in URL, check stored cookie preference
    const cookieLocale = request.cookies.get("gu-locale")?.value;
    if (cookieLocale && isValidLocale(cookieLocale) && cookieLocale !== DEFAULT_LOCALE) {
      // Redirect to localized URL so browser URL and active locale never disagree
      const redirectUrl = new URL(`/${cookieLocale}${pathname === "/" ? "" : pathname}` + request.nextUrl.search, request.url);
      const redirectResponse = NextResponse.redirect(redirectUrl);
      redirectResponse.cookies.set("gu-locale", cookieLocale, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
        sameSite: "lax",
      });
      return redirectResponse;
    }
  }

  const responseHeaders = new Headers(request.headers);
  responseHeaders.set("x-locale", locale);

  let response: NextResponse;

  if (firstSegment && isValidLocale(firstSegment)) {
    // Rewrite internal URL to canonical route while preserving URL in browser
    const rewriteUrl = new URL(targetPath + request.nextUrl.search, request.url);
    response = NextResponse.rewrite(rewriteUrl, {
      request: {
        headers: responseHeaders,
      },
    });
  } else {
    response = NextResponse.next({
      request: {
        headers: responseHeaders,
      },
    });
  }

  // Set gu-locale cookie to match the active route locale
  response.cookies.set("gu-locale", locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365, // 1 year
    sameSite: "lax",
  });

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|webm)$).*)",
  ],
};
