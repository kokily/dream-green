'use client';

import { ReadQuestion } from '@/components/question/read/ReadQuestion';
import { useValidQuestion } from '@/helpers/hooks/useValidQuestion';

export default async function ReadQuestionPage({
  params,
}: {
  params: { id: string };
}) {
  useValidQuestion({ id: params.id });

  return <ReadQuestion id={params.id} />;
}
