'use client';

import type { Post } from '@prisma/client';
import type { SyntheticEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { removePostAPI } from '@/helpers/client/post';
import { useModal } from '@/helpers/hooks/useModal';
import { PostTitle } from './PostTitle';
import { formatDate } from '@/helpers/client/utils';
import { Markdown } from '../common/Markdown';
import { AdminButtons } from './AdminButtons';

interface Props {
  id: string;
  post: Post;
}

export function ReadPost({ id, post }: Props) {
  const { status } = useSession();
  const router = useRouter();

  // Mutations
  const removePostMutate = useMutation({ mutationFn: removePostAPI });

  const onUpdatePost = () => {
    router.push(`/write/update/${id}`);
  };

  const onRemovePost = async (e: SyntheticEvent) => {
    e.preventDefault();

    await removePostMutate.mutateAsync(id, {
      onSuccess: () => {
        toast.success('삭제 완료!');
        router.replace('/blog');
      },
      onError: (err: any) => {
        toast.error(err.error);
      },
    });
  };

  const removeModal = useModal({ onRemove: onRemovePost });

  /*
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 1.215rem;
  img {
    width: 100%;
    max-width: 650px;
    height: auto;
    filter: sepia(40%);
    border: 1px solid white;
    border-radius: 4px;
    padding: 5px;
    ${shadow(2)};
    ${media.medium} {
      width: 100% !important;
    }
  }
  */

  return (
    <>
      <PostTitle
        title={post.title}
        thumbnail={post.thumbnail}
        tags={post.tags}
      />

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="single_post">
                <div className="blog_img">
                  <img
                    src={post.thumbnail}
                    alt="썸네일"
                    className="p-2 shadow mb-4"
                    style={{
                      filter: 'sepia(40%)',
                      border: '1px solid white',
                      borderRadius: '4px',
                    }}
                  />
                </div>

                <div className="blog_content bg-white">
                  <div className="blog_text">
                    <h2>{post.title}</h2>
                  </div>

                  <ul className="list_none blog_meta">
                    <li>
                      <i className="ion-calendar"></i>{' '}
                      {formatDate(post.createdAt.toString())} 작성
                    </li>
                  </ul>

                  <hr />

                  <Markdown markdown={post.body} />

                  {status === 'authenticated' && (
                    <AdminButtons
                      modal={removeModal.modal}
                      onRemoveClick={removeModal.onModalClick}
                      onConfirm={removeModal.onConfirm}
                      onCancel={removeModal.onCancel}
                      onUpdate={onUpdatePost}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
