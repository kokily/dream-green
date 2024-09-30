import { NextRequest, NextResponse } from 'next/server';
import db from '@/helpers/server/database';
import { getQuery } from '@/helpers/server/utils';

export async function GET(req: NextRequest) {
  const title = getQuery({ req, queryName: 'title' });
  const cursor = getQuery({ req, queryName: 'cursor' });

  const cursorObj = cursor === '' ? undefined : { id: cursor };
  const limit = 12;

  try {
    const posts = await db.post.findMany({
      where: {
        title: {
          contains: title,
        },
      },
      cursor: cursorObj,
      skip: cursor !== '' ? 1 : 0,
      take: limit,
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(posts);
  } catch (err: any) {
    throw new Error(err.message);
  }
}
