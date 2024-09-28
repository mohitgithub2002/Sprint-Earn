import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { connectDB } from "@/utils/mongodb";
import Users from "@/models/userModel";
import { getServerSession } from "next-auth/next";
import { authOption } from "@/app/api/auth/[...nextauth]/route";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const txnid = formData.get('txnid');
    const amount = formData.get('amount');
    const productinfo = formData.get('productinfo');
    const firstname = formData.get('firstname');
    const email = formData.get('email');
    const status = formData.get('status');
    const key = formData.get('key');
    const hash = formData.get('hash');
    const phone = formData.get('phone');
    const bank_ref_num = formData.get('bank_ref_num');

    console.log("formData", Object.fromEntries(formData));

    // Verify the hash
    const salt = process.env.PAYU_SALT;
    const hashString = `${salt}|${status}|||||||||||${email}|${firstname}|${productinfo}|${amount}|${txnid}|${key}`;
    console.log("hashString", hashString);
    const calculatedHash = crypto.createHash('sha512').update(hashString).digest('hex');
    console.log("calculatedHash", calculatedHash);
    if (hash !== calculatedHash) {
      return NextResponse.json({ error: 'Hash mismatch' }, { status: 400 });
    }

    if (status === 'success') {
      await connectDB();
      const user = await Users.findOne({ email });
      console.log("user", user);
      if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }
      console.log("user.isPremium", user.isPremium);
      user.isPremium = true;
      user.orderId = txnid;
      user.paymentId = bank_ref_num;
      user.mobile = phone;
      await user.save();
      console.log("user.isPremium after save", user.isPremium);

      // Update the session
      const session = await getServerSession(authOption);
      if (session) {
        session.user.isPremium = true;
        await session.save();
      }

      // Redirect to home page after successful verification
      return NextResponse.redirect(new URL('/home', process.env.NEXT_PUBLIC_BASE_URL));
    } else {
      return NextResponse.json({ message: 'Payment failed' }, { status: 400 });
    }
  } catch (error) {
    console.error('Error processing payment success:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
