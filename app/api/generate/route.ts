import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { link } = await req.json();

  if (!link) {
    return NextResponse.json({ message: 'No link provided' }, { status: 400 });
  }

  // your logic here (e.g., call a Python backend, ffmpeg, or OpenAI)

  return NextResponse.json({ message: `Clips generated from ${link}` });
}
