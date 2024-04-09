import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest): NextResponse | undefined {
	if (request.url.includes('productos') && !request.url.includes('category')) {
		return NextResponse.redirect(
			new URL('/productos?category=all', request.url),
		);
	}

	// return NextResponse.redirect(new URL('/home', request.url));
	return undefined;
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: '/productos/:path*',
};
