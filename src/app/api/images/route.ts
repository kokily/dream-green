import { NextRequest, NextResponse } from 'next/server';
import { JSDOM } from 'jsdom';
import db from '@/helpers/server/database';

export async function GET(_: NextRequest) {
  try {
    /**
      시나리오
      -> 블로그 글을 최신순 정렬로 다 불러옴
      -> 블로그 body에서 img 태그를 다 뽑아옴
      -> insta_counter에 해당 게시글 제목을 10글자 이내로 커트
      -> 변수 result에 담음
     */
    const posts = await db.post.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    const prevResults = posts.map((post) => {
      const dom = new JSDOM(`<html><body></body></html>`);
      const docu = dom.window.document;
      const div = docu.createElement('div');

      div.innerHTML = post.body;

      const imgElements = div.getElementsByTagName('img');
      const imgSrcArray = Array.from(imgElements).map((img) => img.src);

      return {
        id: post.id,
        title: post.title.substring(0, 10),
        images: imgSrcArray,
      };
    });

    const result: Array<Picture> = [];
    let imageCount = 0;

    for (const prevResult of prevResults) {
      const { id, title, images } = prevResult;

      for (const image of images) {
        if (imageCount >= 9) break;

        result.push({ id, title, image });
        imageCount++;
      }

      if (imageCount >= 9) break;
    }

    return NextResponse.json(result);
  } catch (err: any) {
    throw new Error(err.message);
  }
}
