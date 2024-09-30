'use client';

import { Write } from '@/components/write/Write';

export default function UpdatePage({
  params: { id },
}: {
  params: { id: string };
}) {
  return <Write id={id} />;
}
