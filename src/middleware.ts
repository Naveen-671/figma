import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Only protect /dashboard and its subroutes
  const isProtectedRoute = pathname.startsWith("/dashboard");

  if (isProtectedRoute) {
    const token = await getToken({ req, secret: process.env.AUTH_SECRET });

    if (!token) {
      const signInUrl = new URL("/signin", req.nextUrl.origin);
      return NextResponse.redirect(signInUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\..*).*)"],
};
