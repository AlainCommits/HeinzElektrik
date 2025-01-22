//Users/alonondanse/elektriker-notdienst/app/api/verify-recaptcha/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { token } = await request.json();

  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify`;
  const response = await fetch(verifyUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
  });

  const data = await response.json();

  if (data.success) {
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ success: false, errors: data['error-codes'] });
  }
}