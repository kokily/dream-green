'use client';

import { useSession } from 'next-auth/react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

const Write = dynamic(
  () => import('@/components/write/Write').then((module) => module.Write),
  {
    ssr: false,
  },
);

export default function WritePage() {
  const { status } = useSession();
  const router = useRouter();

  if (status === 'unauthenticated') {
    router.replace('/');
  }

  return <Write />;
}
