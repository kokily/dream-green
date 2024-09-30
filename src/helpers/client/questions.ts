import type { Question } from '@prisma/client';
import qs from 'qs';
import { client } from './client';

export async function listQuestionsAPI(queries: ListQuestionsQueries) {
  const queryString = qs.stringify(queries);
  const response = await client.get<Array<Question>>(
    `/question?${queryString}`,
  );
  return response.data;
}

export async function readQuestionAPI(id: string) {
  const response = await client.get<Question>(`/question/read/${id}`);
  return response.data;
}

export async function removeQuestionAPI(id: string) {
  const response = await client.delete(`/question/remove/${id}`);
  return response.data;
}

export async function validQuestionAPI({ id, password }: ValidQuestionPayload) {
  const response = await client.patch<Question>(`/question/valid/${id}`, {
    password,
  });
  return response.data;
}

export async function addQuestionAPI(payload: AddQuestionPayload) {
  const response = await client.post<Question>('/question/add', payload);
  return response.data;
}

export async function addReplyAPI({ id, body }: AddReplyPayload) {
  const response = await client.patch<Question>(`/question/reply/${id}`, {
    body,
  });
  return response.data;
}
