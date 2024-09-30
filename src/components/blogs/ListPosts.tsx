import type { Post } from '@prisma/client';
import type { ChangeEvent, SyntheticEvent } from 'react';
import { BlogTitle } from './BlogTitle';
import { PostCard } from './PostCard';
import { SearchBox } from './SearchBox';

interface Props {
  posts: Array<Post>;
  search: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: SyntheticEvent) => void;
  onReadPost: (id: string) => void;
  setTarget: TargetType;
}

export function ListPosts(props: Props) {
  return (
    <>
      <BlogTitle />
      <section className="pt-4">
        <div className="container">
          <div className="row justify-content-center">
            <SearchBox
              search={props.search}
              onChange={props.onChange}
              onSearch={props.onSearch}
            />
          </div>
        </div>
      </section>

      {props.posts && props.posts.length > 0 ? (
        <section className='pt-0'>
          <div className="container">
            <div className="row">
              {props.posts.map((post) => (
                <PostCard
                  key={post.id}
                  post={post}
                  onReadPost={props.onReadPost}
                />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <div ref={props.setTarget} />
    </>
  );
}
