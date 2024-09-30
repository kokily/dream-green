import { NextRequest, NextResponse } from 'next/server';
import db from '@/helpers/server/database';
import { checkAdmin } from '@/helpers/server/utils';

export async function DELETE(_: NextRequest, { params: { id } }: any) {
  try {
    await checkAdmin();

    await db.question.delete({ where: { id } });

    return NextResponse.json({ message: '문의글 삭제' });
  } catch (err: any) {
    throw new Error(err.message);
  }
}
