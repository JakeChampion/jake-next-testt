import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  console.log('in the next middleware', request.headers.get('x-nf-request-id'));
  let response = NextResponse.next()
  response.cookies.set('show-banner', 'false')
  console.log('leaving the next middleware', request.headers.get('x-nf-request-id'))
  return response
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/:path',
}
