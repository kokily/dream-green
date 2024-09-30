'use client';

import type { Post } from '@prisma/client';
import Image from 'next/image';
import { formatDate } from '@/helpers/client/utils';
import { useRecentPosts } from '@/helpers/hooks/useRecentPosts';

// 최근 블로그 글

export function ThirdTop() {
  const { posts } = useRecentPosts();

  const Card = ({ post }: { post: Post }) => (
    <li>
      <div className="post_footer">
        <div className="post_img">
          <a href={`/blog/read/${post.id}`}>
            <Image
              width={60}
              height={60}
              src={post.thumbnail}
              alt="letest_post1"
              className="shadow p-1"
              style={{
                border: '1px solid white',
                borderRadius: '4px',
              }}
            />
          </a>
        </div>
        <div className="post_content">
          <h6>
            <a href={`/blog/read/${post.id}`}>{post.title}</a>
          </h6>
          <p className="small m-0">
            {formatDate(post.createdAt.toString())} 작성
          </p>
        </div>
      </div>
    </li>
  );

  return (
    <div
      className="col-lg-3 col-md-6 mb-4 mb-lg-0 animation"
      data-animation="fadeInUp"
      data-animation-delay="0.4s"
    >
      <h6 className="widget_title">최근 블로그 글</h6>
      <ul className="recent_post border_bottom_dash list_none">
        {posts && posts.length > 0
          ? posts.map((post) => <Card key={post.id} post={post} />)
          : null}
      </ul>
    </div>
  );
}
