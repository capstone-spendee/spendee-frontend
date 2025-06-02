import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value

  // Jika user sudah login, jangan boleh akses /sign-in atau /sign-up
  if (
    token &&
    (req.nextUrl.pathname.startsWith("/sign-in") ||
      req.nextUrl.pathname.startsWith("/sign-up"))
  ) {
    return NextResponse.redirect(new URL("/dashboard", req.url))
  }

  // Jika user belum login, jangan boleh akses /dashboard atau /sign-out
  if (
    !token &&
    ( req.nextUrl.pathname.startsWith("/dashboard") ||
      req.nextUrl.pathname.startsWith("/sign-out"))
  ) {
    return NextResponse.redirect(new URL("/sign-in", req.url))
  }

  // Default: lanjutkan request
  return NextResponse.next()
}

export const config = {
  matcher: [
    "/sign-in",
    "/sign-up",
    "/dashboard/:path*",
    "/sign-out",
  ],
}