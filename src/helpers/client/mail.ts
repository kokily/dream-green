import { client } from './client';

export async function sendMailAPI(payload: SendMailPayload) {
  const response = await client.post('/mail', payload);
  return response.data;
}
