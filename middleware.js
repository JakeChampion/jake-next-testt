import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  let response = NextResponse.next()
  response.cookies.set('show-banner', 'false')
  return response
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/*',
}
