import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'es'],
  
  // Used when no locale matches
  defaultLocale: 'en',
  
  // Disable automatic locale detection based on browser headers
  localeDetection: false
});

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Handle asset requests - rewrite locale-prefixed asset URLs to non-prefixed ones
  if (pathname.match(/^\/(en|es)\/assets\//)) {
    const assetPath = pathname.replace(/^\/(en|es)/, '');
    return NextResponse.rewrite(new URL(assetPath, request.url));
  }
  
  // For all other requests, use the internationalization middleware
  return intlMiddleware(request);
}

export const config = {
  // Match all paths except Next.js internals
  matcher: ['/((?!_next|api|favicon.ico).*)',]
};