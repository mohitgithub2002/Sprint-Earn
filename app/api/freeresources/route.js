import { NextResponse } from 'next/server';
import { connectDB } from '@/utils/mongodb';
import FreeUsers from '@/models/freeuserModel';

export async function POST(req) {
  try {
    const { name, mobile } = await req.json();

    // Connect to the database
    await connectDB();

    // Save the user details to the database
    const newUser = await FreeUsers.create({ name, mobile });

    return NextResponse.json({ message: 'User details saved successfully', user: newUser }, { status: 201 });
  } catch (error) {
    console.error('Error saving user details:', error);
    return NextResponse.json({ error: 'Failed to save user details' }, { status: 500 });
  }
}
