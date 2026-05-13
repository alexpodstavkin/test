import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const data = await req.json().catch(() => ({}));
  console.log('[lead]', data);
  return NextResponse.json({ ok: true });
}
