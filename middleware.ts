import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Match routes like /chat-page and /forum (and any child routes)
const isProtectedRoute = createRouteMatcher(['/chat-page(.*)'])

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    // Clerk will automatically protect the route and redirect unauthenticated users to sign-in
    await auth.protect()
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
