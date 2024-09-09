import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";

// Add custom logic to check for premium users
async function checkPremium(req) {
  // Use next-auth's token handling to get the user's session token
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // If no token, proceed with the default next-auth behavior (unauthenticated)
  if (!token) {
    return NextResponse.next(); // This will invoke the default next-auth middleware to handle redirection to the login page
  }

  // If token exists, proceed with premium check logic
  

  // If user is not premium and not already on the payment page, redirect to the payment page
  if (!token.isPremium && !req.nextUrl.pathname.startsWith('/payment')) {
    return NextResponse.redirect(new URL('/payment', req.url));
  }

  // Allow the request to proceed if the user is premium or already on the payment page
  return NextResponse.next();
}

// Export next-auth middleware with custom logic
export default withAuth(checkPremium);

// Add the matcher config to apply the middleware to specific routes
export const config = {
  matcher: [
    "/home",
    "/program",
    "/program/(.*)",
    "/resources",
    "/sprintearnai",
    "/calender",
    "/community",
    "/settings",
    "/payment",
  ],
};
