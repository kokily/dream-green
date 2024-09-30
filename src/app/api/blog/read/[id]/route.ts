import { NextRequest, NextResponse } from 'next/server';
import db from '@/helpers/server/database';

export async function GET(req: NextRequest, { params: { id } }: any) {
  try {
    const post = await db.post.findUnique({ where: { id } });

    if (!post) {
      throw new Error('존재하지 않는 게시글입니다.');
    }

    return NextResponse.json(post);
  } catch (err: any) {
    throw new Error(err.message);
  }
}
