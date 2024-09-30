import { getServerSession } from 'next-auth';
import { authOptions } from '../client/auth/tokens';
import db from './database';
import { NextRequest } from 'next/server';

export async function checkAdmin() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user || !session.user.id) {
    throw new Error('관리자 로그인 후 사용하세요');
  }

  const user = await db.user.findFirst();

  if (!user) {
    throw new Error('관리자 생성 후 사용하세요');
  }

  return true;
}

export function getQuery({
  req,
  queryName,
}: {
  req: NextRequest;
  queryName: string;
}) {
  const url = new URL(req.nextUrl);
  return url.searchParams.get(queryName) ?? '';
}
