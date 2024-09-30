import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import db from '@/helpers/server/database';

export async function PATCH(req: NextRequest, { params: { id } }: any) {
  const { password } = (await req.json()) as ValidPayload;

  try {
    const question = await db.question.findUnique({ where: { id } });

    if (!question) {
      throw new Error('해당 문의글이 없습니다.');
    }

    const valid = await bcrypt.compare(password, question.password);

    if (!valid) {
      throw new Error('비밀번호가 일치하지 않습니다');
    }

    return NextResponse.json(question);
  } catch (err: any) {
    throw new Error(err.message);
  }
}
