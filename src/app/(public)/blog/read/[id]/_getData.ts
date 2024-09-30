import type { Post } from '@prisma/client';
import { client } from '@/helpers/client/client';

export async function getData(id: string) {
  const response = await client.get<Post>(`/blog/read/${id}`);

  if (!response.data) {
    throw new Error('Failed to Fetch');
  }

  return response.data;
}
