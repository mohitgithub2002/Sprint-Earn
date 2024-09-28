import { NextResponse } from 'next/server';
export async function POST(req) {
  try {
    // Redirect to the payment page
    return NextResponse.redirect(new URL('/payment', process.env.NEXT_PUBLIC_BASE_URL));
    
  } catch (error) {
    console.error('Error processing payment failure:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
