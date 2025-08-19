
import { NextResponse } from 'next/server';

export async function DELETE(request, { params }) {
  const { id } = params;
  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'DELETE',
  });
  return NextResponse.json({ message: `Post ${id} deleted successfully` });
}
