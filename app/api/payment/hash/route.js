import crypto from 'crypto';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { txnid, amount, productinfo, firstname, email } = await req.json();

    // Replace these with your actual PayU credentials
    const key = process.env.PAYU_KEY;
    const salt = process.env.PAYU_SALT;

    // Ensure all required fields are present
    if (!txnid || !amount || !productinfo || !firstname || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Create the string to hash
    const hashString = `${key}|${txnid}|${amount}|${productinfo}|${firstname}|${email}|||||||||||${salt}`;

    // Generate the hash
    const hash = crypto.createHash('sha512').update(hashString).digest('hex');

    return NextResponse.json({ hash }, { status: 200 });
  } catch (error) {
    console.error('Error generating hash:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
