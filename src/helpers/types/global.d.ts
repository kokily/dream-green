import NextAuth from 'next-auth/next';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      token: string;
    };
  }
}

declare global {
  interface SignOptions {
    expiresIn?: string | number;
  }

  interface AuthPayload {
    password: string;
  }

  interface MenuType {
    url: string;
    title: string;
  }

  interface SendMailPayload {
    email: string;
    body: string;
  }
}
