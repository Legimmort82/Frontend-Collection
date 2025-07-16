// middleware.ts
import { NextResponse, NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

// Secret key (must match your backend's secret key)
const JWT_SECRET = process.env.JWT_SECRET || 'yoursecret';

const PUBLIC_ROUTES = ['/login', '/register', '/'];
const ADMIN_ROUTES = ['/admin'];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get('token')?.value || '';

  try {
    if (!token) {
      // No token: allow access to public pages, block protected ones
      if (PUBLIC_ROUTES.includes(pathname)) {
        return NextResponse.next();
      } else {
        const loginUrl = new URL('/login', req.url);
        return NextResponse.redirect(loginUrl);
      }
    }

    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET) as { role: string; exp: number };

    // Token valid
    // Role-based protection example:
    if (ADMIN_ROUTES.some(route => pathname.startsWith(route)) && decoded.role !== 'admin') {
      const unauthorizedUrl = new URL('/unauthorized', req.url);
      return NextResponse.redirect(unauthorizedUrl);
    }

    return NextResponse.next();
  } catch (err) {
    console.error('Token verification failed:', err);

    // Invalid token: redirect to login
    const loginUrl = new URL('/login', req.url);
    return NextResponse.redirect(loginUrl);
  }
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)', // Apply to all routes except static files
  ],
};
