
import { NextResponse } from 'next/server';

export async function POST(request) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: 'Hello',
      body: 'Next.js API test',
      userId: 1,
    }),
  });
  const data = await res.json();
  return NextResponse.json(data);
}
