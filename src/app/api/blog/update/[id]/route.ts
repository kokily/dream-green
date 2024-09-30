import { NextRequest, NextResponse } from 'next/server';
import db from '@/helpers/server/database';
import { checkAdmin } from '@/helpers/server/utils';

export async function PATCH(req: NextRequest, { params: { id } }: any) {
  const payload = (await req.json()) as AddPostPayload;

  try {
    await checkAdmin();

    const post = await db.post.update({
      where: { id },
      data: {
        ...payload,
        updatedAt: new Date(),
      },
    });

    return NextResponse.json(post);
  } catch (err: any) {
    throw new Error(err.message);
  }
}
