import { NextRequest, NextResponse } from 'next/server';
import nodemailer, { SendMailOptions } from 'nodemailer';

export async function POST(req: NextRequest) {
  const { email, body } = (await req.json()) as SendMailPayload;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    const options: SendMailOptions = {
      from: email,
      to: 'dream_green7@naver.com',
      subject: '(주)꿈에그린환경 홈페이지 문의 글',
      html: `
        <h3>작성자: ${email} 님</h3>
        <p>${body}</p>
      `,
    };

    await transporter.sendMail(options);

    return NextResponse.json({ message: `${email} 메일 발송!` });
  } catch (err: any) {
    throw new Error(err.message);
  }
}
