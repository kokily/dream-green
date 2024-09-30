import type { ChangeEvent, SyntheticEvent } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { addQuestionAPI } from '../client/questions';

export function useAddQuestion() {
  const router = useRouter();
  const queryClient = useQueryClient();

  // States
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  // Mutations
  const addQuestionMutate = useMutation({ mutationFn: addQuestionAPI });

  const onBack = () => {
    router.back();
  };

  const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onChangeTitle = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  };

  const onChangeBody = (text: string) => {
    setBody(text);
  };

  const onAddQuestion = async (e: SyntheticEvent) => {
    e.preventDefault();

    if ([title, body].includes('')) {
      toast.error('빈 칸 없이 입력해주세요');
      return;
    }

    await addQuestionMutate.mutateAsync(
      {
        username,
        password,
        title,
        body,
      },
      {
        onSuccess: (data) => {
          toast.success('견적문의 작성 완료');
          queryClient.invalidateQueries({
            queryKey: ['questions', 'question'],
          });
          router.replace(`/question/read/${data.id}`);
        },
        onError: (err: any) => {
          toast.error(err.error);
        },
      },
    );
  };

  return {
    username,
    password,
    title,
    body,
    onBack,
    onChangeUsername,
    onChangePassword,
    onChangeTitle,
    onChangeBody,
    onAddQuestion,
  };
}
