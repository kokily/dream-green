import type { ChangeEvent, SyntheticEvent } from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { addPostAPI, readPostAPI, updatePostAPI } from '../client/post';
import { client } from '../client/client';

interface Props {
  id?: string;
}

export function useAddPost({ id }: Props) {
  const router = useRouter();
  const queryClient = useQueryClient();

  // States
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [tags, setTags] = useState<Array<string>>([]);

  // Mutations
  const addPostMutate = useMutation({ mutationFn: addPostAPI });
  const updatePostMutate = useMutation({ mutationFn: updatePostAPI });

  // Update Date Fetching
  const { data } = useQuery({
    queryKey: ['updatePost'],
    queryFn: () => readPostAPI(id),
    enabled: !!id,
  });

  const onBack = () => {
    router.back();
  };

  const onChangeTitle = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  };

  const onChangeBody = (text: string) => {
    setBody(text);
  };

  const onChangeTags = (nextTags: Array<string>) => {
    setTags(nextTags);
  };

  const onUploadThumbnail = () => {
    const upload = document.createElement('input');

    upload.setAttribute('type', 'file');
    upload.setAttribute('accept', 'image/*');
    upload.click();

    upload.addEventListener('change', async () => {
      const file = upload.files[0];
      const formData = new FormData();

      formData.append('file', file);

      try {
        const response = await client.post<{ url: string }>('/image', formData);

        if (!response.data) {
          alert('Upload Failed');
        }

        const { url } = response.data;

        setThumbnail(`https://dreamgreen.co.kr/${url}`);
      } catch (err: any) {
        console.log(err);
      }
    });
  };

  const onAddPost = async (e: SyntheticEvent) => {
    e.preventDefault();

    if ([title, body, thumbnail].includes('')) {
      toast.error('빈 칸 없이 입력하세요');
      return;
    }

    if (tags.length < 1) {
      toast.error('태그는 최소 1개 이상입니다.');
      return;
    }

    if (!id) {
      await addPostMutate.mutateAsync(
        {
          title,
          body,
          thumbnail,
          tags,
        },
        {
          onSuccess: (data) => {
            toast.success('포스트 저장!');
            queryClient.invalidateQueries({ queryKey: ['posts', 'post'] });
            router.replace(`/blog/read/${data.id}`);
          },
          onError: (err: any) => {
            toast.error(err.error);
          },
        },
      );
    } else {
      await updatePostMutate.mutateAsync(
        {
          id,
          payload: {
            title,
            body,
            thumbnail,
            tags,
          },
        },
        {
          onSuccess: (data) => {
            toast.success('포스트 수정!');
            queryClient.invalidateQueries({ queryKey: ['posts', 'post', id] });
            router.replace(`/blog/read/${data.id}`);
          },
          onError: (err: any) => {
            toast.error(err.error);
          },
        },
      );
    }
  };

  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setBody(data.body);
      setThumbnail(data.thumbnail);
      setTags(data.tags);
    }
  }, [data]);

  return {
    title,
    body,
    thumbnail,
    tags,
    onBack,
    onChangeTitle,
    onChangeBody,
    onChangeTags,
    onUploadThumbnail,
    onAddPost,
  };
}
