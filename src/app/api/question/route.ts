import { NextRequest, NextResponse } from 'next/server';
import db from '@/helpers/server/database';
import { getQuery } from '@/helpers/server/utils';

export async function GET(req: NextRequest) {
  const username = getQuery({ req, queryName: 'username' });
  const cursor = getQuery({ req, queryName: 'cursor' });

  const cursorObj = cursor === '' ? undefined : { id: cursor };
  const limit = 20;

  try {
    const questions = await db.question.findMany({
      where: {
        username: {
          contains: username,
        },
      },
      cursor: cursorObj,
      skip: cursor !== '' ? 1 : 0,
      take: limit,
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(questions);
  } catch (err: any) {
    throw new Error(err.message);
  }
}
