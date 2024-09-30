'use client';

import type { Question } from '@prisma/client';
import type { ChangeEvent, SyntheticEvent } from 'react';
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useInfiniteQuery } from '@tanstack/react-query';
import useLocalStorage from 'use-local-storage';
import { listQuestionsAPI } from '@/helpers/client/questions';
import { useSendMail } from '@/helpers/hooks/useSendMail';
import { useObserver } from '@/helpers/hooks/useObserver';
import { QuestionWrapper } from '@/components/question/QuestionWrapper';

export default function QuestionPage() {
  const { email, body, onChange, onSendMail } = useSendMail();
  const router = useRouter();
  const [scrollY, setScrollY] = useLocalStorage('listQuestions', 0);

  const [search, setSearch] = useState('');

  const { data, fetchNextPage, refetch } = useInfiniteQuery({
    initialPageParam: '',
    queryKey: ['questions'],
    queryFn: ({ pageParam }) =>
      listQuestionsAPI({ cursor: pageParam, username: search }),
    getNextPageParam: (data) =>
      data && data.length === 20 ? data[data.length - 1].id : undefined,
    enabled: true,
  });

  const questions = useMemo(() => {
    if (!data) return [];

    return ([] as Array<Question>).concat(...data.pages);
  }, [data]);

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSearch = async (e: SyntheticEvent) => {
    e.preventDefault();
    await refetch();
  };

  const onReadQuestion = (id: string) => {
    setScrollY(window.scrollY);
    router.push(`/question/read/${id}`);
  };

  const onIntersect: IntersectionObserverCallback = ([entry]) => {
    entry.isIntersecting && fetchNextPage();
  };

  const { setTarget } = useObserver({ onIntersect });

  useEffect(() => {
    if (scrollY !== 0) window.scrollTo(0, Number(scrollY));
  }, []);

  return (
    <>
      <QuestionWrapper
        email={email}
        body={body}
        onChange={onChange}
        onSendMail={onSendMail}
        questions={questions}
        search={search}
        onChangeSearch={onChangeSearch}
        onSearch={onSearch}
        onReadQuestion={onReadQuestion}
        setTarget={setTarget}
      />
    </>
  );
}
