import { NextRequest, NextResponse } from 'next/server';
import db from '@/helpers/server/database';

export async function GET(_: NextRequest) {
  try {
    const recents = await db.post.findMany({
      take: 3,
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(recents);
  } catch (err: any) {
    throw new Error(err.message);
  }
}
