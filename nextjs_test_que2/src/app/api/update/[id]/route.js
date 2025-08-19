
import { NextResponse } from 'next/server';

export async function PUT(request, { params }) {
  const { id } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: id,
      title: 'Updated Title',
      body: 'This is an updated post.',
      userId: 1,
    }),
  });
  const data = await res.json();
  return NextResponse.json(data);
}
