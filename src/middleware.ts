import { withAuth, NextRequestWithAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    if (req.nextUrl.pathname.startsWith('/dashboard') && req.nextauth.token?.role !== 'Instructor') {
      return new NextResponse('You are not an instructor!');
    }
    if (req.nextUrl.pathname.startsWith('/course/enroll/') && req.nextauth.token?.role !== 'Learner') {
      return new NextResponse('You are not a student!');
    }
  },
  {
    callbacks: {
      authorized: params => {
        let { token } = params;
        return !!token;
      }
    }
  }
);

export const config = {
  matcher: ['/dashboard', '/course/enroll/:path*', '/user-profile']
};
