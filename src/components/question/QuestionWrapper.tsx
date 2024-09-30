import type { Question } from '@prisma/client';
import type { ChangeEvent, SyntheticEvent } from 'react';
import { QuestionTitle } from './QuestionTitle';
import { Contact } from './Contact';
import { KakaoMap } from './KakaoMap';
import { ListQuestions } from './ListQuestions';

interface Props {
  email: string;
  body: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSendMail: (e: SyntheticEvent) => void;
  questions: Array<Question>;
  search: string;
  onChangeSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: SyntheticEvent) => void;
  onReadQuestion: (id: string) => void;
  setTarget: TargetType;
}

export function QuestionWrapper({
  email,
  body,
  onChange,
  onSendMail,
  questions,
  search,
  onChangeSearch,
  onSearch,
  onReadQuestion,
  setTarget,
}: Props) {
  return (
    <>
      <QuestionTitle />

      <ListQuestions
        questions={questions}
        search={search}
        onChangeSearch={onChangeSearch}
        onSearch={onSearch}
        onReadQuestion={onReadQuestion}
        setTarget={setTarget}
      />

      <KakaoMap />
    </>
  );
}
