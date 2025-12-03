/*****************************************************************************
 * @Author                : adolnb<loro.lorenzonunez@gmail.com>              *
 * @CreatedDate           : 2025-11-10 10:10:22                              *
 * @LastEditors           : adolnb<loro.lorenzonunez@gmail.com>              *
 * @LastEditDate          : 2025-11-23 22:35:24                              *
 * @FilePath              : proxy.ts                                         *
 * @CopyRight             : © 2025 Adonai LN - B0MB0                         *
 ****************************************************************************/

import { NextResponse, type NextRequest } from "next/server";


export function proxy(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  // const role = req.cookies.get("role")?.value;
  const pathname = req.nextUrl.pathname;

  const isAuthRoute = pathname === "/";
  const isProtectedRoute = pathname.startsWith("/principal");
  // const isAdminRoute = pathname.startsWith("/principal/empleados");

  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (token && isAuthRoute) {
    return NextResponse.redirect(new URL("/principal/inicio", req.url));
  }

  // if (isAdminRoute && role !== "administrador general") {
  //   return NextResponse.redirect(new URL("/principal/inicio", req.url));
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ["/principal/:path*", "/"],
};
