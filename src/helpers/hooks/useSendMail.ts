import type { ChangeEvent, SyntheticEvent } from 'react';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { sendMailAPI } from '../client/mail';

export function useSendMail() {
  const initialState = {
    email: '',
    body: '',
  };
  const [inputs, setInputs] = useState(initialState);
  const { email, body } = inputs;

  // Mutations
  const sendMailMutate = useMutation({ mutationFn: sendMailAPI });

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onSendMail = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (!email.includes('@')) {
      toast.warning('올바른 이메일 주소를 입력해주세요');
      return;
    }

    await sendMailMutate.mutateAsync(
      { ...inputs },
      {
        onSuccess: () => {
          toast.success('메일이 전송되었습니다');
          setInputs(initialState);
        },
        onError: (err: any) => {
          toast.error(err.error);
        },
      },
    );
  };

  return {
    email,
    body,
    onChange,
    onSendMail,
  };
}
