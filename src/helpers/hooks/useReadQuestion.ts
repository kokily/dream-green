import type { ChangeEvent, SyntheticEvent } from 'react';
import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { addReplyAPI, readQuestionAPI } from '../client/questions';
import { useSession } from 'next-auth/react';

interface Props {
  id: string;
}

export function useReadQuestion({ id }: Props) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { status } = useSession();

  // State
  const [body, setBody] = useState('');

  // Query
  const { data, refetch } = useQuery({
    queryKey: ['question'],
    queryFn: () => readQuestionAPI(id),
    enabled: !!id,
  });

  // Mutation
  const addReplyMutate = useMutation({ mutationFn: addReplyAPI });

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  const onAddReply = async (e: SyntheticEvent) => {
    e.preventDefault();

    await addReplyMutate.mutateAsync(
      { id, body },
      {
        onSuccess: (data) => {
          toast.success('댓글 작성 완료');
          queryClient.invalidateQueries({
            queryKey: ['questions', 'question', id],
          });
          refetch();
        },
        onError: (err: any) => {
          toast.error(err.error);
        },
      },
    );
  };

  return {
    question: data,
    body,
    onChange,
    onAddReply,
    isAdmin: status === 'authenticated',
  };
}
