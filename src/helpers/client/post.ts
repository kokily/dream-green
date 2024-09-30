import type { Post } from '@prisma/client';
import qs from 'qs';
import { client } from './client';

export async function addPostAPI(payload: AddPostPayload) {
  const response = await client.post<Post>('/blog/add', payload);
  return response.data;
}

export async function listPostsAPI(queries: ListPostsQueries) {
  const queryString = qs.stringify(queries);
  const response = await client.get<Array<Post>>(`/blog?${queryString}`);
  return response.data;
}

export async function readPostAPI(id: string) {
  const response = await client.get<Post>(`/blog/read/${id}`);
  return response.data;
}

export async function removePostAPI(id: string) {
  const response = await client.delete(`/blog/remove/${id}`);
}

export async function updatePostAPI({
  id,
  payload,
}: {
  id: string;
  payload: AddPostPayload;
}) {
  const response = await client.patch<Post>(`/blog/update/${id}`, payload);
  return response.data;
}
