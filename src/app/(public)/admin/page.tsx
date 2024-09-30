'use client';

import { MouseEvent, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import { Login } from '@/components/admin/Login';

export default function AdminPage() {
  const router = useRouter();
  const { data: session } = useSession();

  const passwordRef = useRef(null);

  const onLogin = async (e: MouseEvent) => {
    e.preventDefault();

    const response = await signIn('credentials', {
      password: passwordRef.current,
      redirect: true,
      callbackUrl: '/',
    });

    if (response?.error) {
      alert(response.error);
    }
  };

  if (session && session.user) {
    router.replace('/');
  }

  return <Login passwordRef={passwordRef} onLogin={onLogin} />;
}
