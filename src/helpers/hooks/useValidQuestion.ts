import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { validQuestionAPI } from '../client/questions';
import { useSession } from 'next-auth/react';

interface Props {
  id: string;
}

export function useValidQuestion({ id }: Props) {
  const router = useRouter();
  const { status } = useSession();

  // Mutation
  const validQuestionMutate = useMutation({ mutationFn: validQuestionAPI });

  useEffect(() => {
    async function confirmValid() {
      const target = window.prompt('작성 시 비밀번호를 입력하세요');

      if (target === '') {
        toast.error('비밀번호가 입력되지 않았습니다.');
        router.back();
      } else {
        await validQuestionMutate.mutateAsync(
          { id, password: target },
          {
            onSuccess: () => {},
            onError: () => {
              toast.error('비밀번호가 올바르지 않습니다.');
              router.back();
            },
          },
        );
      }
    }

    if (status === 'authenticated') {
    } else {
      confirmValid();
    }
  }, [status]);
}
