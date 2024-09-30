import type { Post } from '@prisma/client';
import { formatDate } from '@/helpers/client/utils';

interface Props {
  post: Post;
  onReadPost: (id: string) => void;
}

export function PostCard({ post, onReadPost }: Props) {
  return (
    <div className="col-lg-4 col-md-6 mb-md-4 mb-2 pb-2">
      <div className="blog_post blog_style1">
        <div className="blog_img" onClick={() => onReadPost(post.id)}>
          <a className="link-primary">
            <img
              src={post.thumbnail}
              alt="썸네일"
              style={{
                cursor: 'pointer',
              }}
            />
          </a>
        </div>

        <div className="blog_content bg-white">
          <div className="blog_text">
            <h6
              className="blog_title text-default"
              style={{ cursor: 'pointer' }}
              onClick={() => onReadPost(post.id)}
            >
              <a className="link-primary">{post.title}</a>
            </h6>
            <ul className="list_none blog_meta">
              {post.tags.map((tag) => (
                <li key={tag}>
                  <a className="text-default"># {tag}</a>
                </li>
              ))}
            </ul>
            <p>{post.body.replace(/(<([^>]+)>)/gi, '').substring(0, 27)}...</p>
            <a>
              <i className="ion-calendar"></i>{' '}
              {formatDate(post.createdAt.toString())} 작성
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
