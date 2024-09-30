'use client';

import dynamic from 'next/dynamic';

const WriteQuestion = dynamic(
  () =>
    import('../../../../components/question/write/WriteQuestion').then(
      (module) => module.WirteQuestion,
    ),
  {
    ssr: false,
  },
);

export default function WriteQuestionPage() {
  return <WriteQuestion />;
}
