import { NextRequest, NextResponse } from 'next/server';
import db from '@/helpers/server/database';

export async function GET(_: NextRequest, { params: { id } }: any) {
  try {
    const question = await db.question.findUnique({ where: { id } });

    if (!question) {
      throw new Error('해당 문의글이 없습니다.');
    }

    return NextResponse.json(question);
  } catch (err: any) {
    throw new Error(err.message);
  }
}
