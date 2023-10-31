export { default } from 'next-auth/middleware'

export const config = {matcher: ['/dashboard']}


/*

import {NextResponse} from 'next/server'
import type {NextRequest } from 'next/server'

export function middleware(request: NextRequest){
    const url = request.url
    console.log('middleware1 => ', {url})

    return NextResponse.next()
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}

*/