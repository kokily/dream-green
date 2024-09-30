import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import moment from 'moment';

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();
    const file: File | null = data.get('file') as unknown as File;

    if (!file) {
      throw new Error('파일을 업로드 해주세요');
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const prevFilename = file.name.replaceAll('_', '');
    const fileName = `${moment().format('YYYYMMDDHHmmdd')}${prevFilename.trim()}`;
    const path = `${process.cwd()}/uploads/${fileName}`;

    await writeFile(path, buffer);

    console.log(`Open ${fileName} to see the uploaded file`);

    return NextResponse.json(
      JSON.stringify({
        url: `uploads/${fileName}`,
      }),
    );
  } catch (err: any) {
    throw new Error('업로드 에러');
  }
}
