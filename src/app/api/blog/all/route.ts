import { NextRequest, NextResponse } from 'next/server';
import db from '@/helpers/server/database';

export async function GET(_: NextRequest) {
  try {
    const posts = await db.post.findMany();

    return NextResponse.json(posts);
  } catch (err: any) {
    throw new Error(err.message);
  }
}
