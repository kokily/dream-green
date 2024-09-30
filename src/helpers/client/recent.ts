import type { Post } from '@prisma/client';
import { client } from './client';

export async function recentPostsAPI() {
  const response = await client.get<Array<Post>>('/recent');
  return response.data;
}

export async function recentImagesAPI() {
  const response = await client.get<Array<Picture>>('/images');
  return response.data;
}
