import NextAuth from 'next-auth/next';
import { authOptions } from '@/helpers/client/auth/tokens';

const handler = NextAuth(authOptions);

export { handler as POST, handler as GET };
