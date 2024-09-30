import { NextRequest, NextResponse } from 'next/server';
import db from '@/helpers/server/database';
import { checkAdmin } from '@/helpers/server/utils';

export async function DELETE(_: NextRequest, { params: { id } }: any) {
  try {
    await checkAdmin();
    await db.post.delete({ where: { id } });

    return NextResponse.json({ message: '삭제 완료' });
  } catch (err: any) {
    throw new Error(err.message);
  }
}
