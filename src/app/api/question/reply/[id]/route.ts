import { NextRequest, NextResponse } from 'next/server';
import db from '@/helpers/server/database';
import { checkAdmin } from '@/helpers/server/utils';

export async function PATCH(req: NextRequest, { params: { id } }: any) {
  const { body } = (await req.json()) as { body: string };

  try {
    await checkAdmin();

    const question = await db.question.update({
      where: { id },
      data: {
        reply: body,
      },
    });

    return NextResponse.json(question);
  } catch (err: any) {
    throw new Error(err.message);
  }
}
