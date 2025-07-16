import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  
  console.log("Middleware running for:", req.nextUrl.pathname);
  console.log("Token found:", !!token);

  if (req.nextUrl.pathname.startsWith("/dashboard")) {

    if (!token) {
      console.log("No token, redirecting to sign-in");
      return NextResponse.redirect(new URL("/sign-in", req.url));
    }
    
    if (token.trim() === "" || token === "undefined" || token === "null") {
      console.log("Invalid token, redirecting to sign-in");
      return NextResponse.redirect(new URL("/sign-in", req.url));
    }
  }

  if (token && req.nextUrl.pathname === "/sign-in") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/sign-in"
  ],
};
