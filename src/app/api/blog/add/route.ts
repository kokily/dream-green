import { NextRequest, NextResponse } from 'next/server';
import db from '@/helpers/server/database';
import { checkAdmin } from '@/helpers/server/utils';

export async function POST(req: NextRequest) {
  const payload = (await req.json()) as AddPostPayload;

  try {
    await checkAdmin();

    const post = await db.post.create({
      data: {
        ...payload,
      },
    });

    return NextResponse.json(post);
  } catch (err: any) {
    throw new Error(err.message);
  }
}
