import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import db from '@/helpers/server/database';

export async function POST(req: NextRequest) {
  const payload = (await req.json()) as AddQuestionPayload;
  const { password, ...payloadWithoutPassword } = payload;

  try {
    const question = await db.question.create({
      data: {
        ...payloadWithoutPassword,
        password: await bcrypt.hash(password, 10),
        reply: '',
      },
    });

    return NextResponse.json(question);
  } catch (err: any) {
    throw new Error(err.message);
  }
}
