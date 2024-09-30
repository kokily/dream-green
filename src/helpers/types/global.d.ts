import type {
  ChangeEvent,
  SyntheticEvent,
  Dispatch,
  SetStateAction,
} from 'react';
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

  interface AddPostPayload {
    title: string;
    body: string;
    tags: Array<string>;
    thumbnail: string;
  }

  interface ListPostsQueries {
    cursor?: string;
    title?: string;
  }

  // Intersection Observer Interface
  interface ObserverProps {
    onIntersect: IntersectionObserverCallback;
    root?: null;
    rootMargin?: string;
    threshold?: number;
  }

  type TargetType = Dispatch<SetStateAction<HTMLElement>>;

  interface Picture {
    id: string;
    title: string;
    image: string;
  }

  interface ValidPayload {
    password: string;
  }

  interface ListQuestionsQueries {
    username?: string;
    cursor?: string;
  }

  interface ValidQuestionPayload {
    id: string;
    password: string;
  }

  interface AddQuestionPayload {
    username: string;
    password: string;
    title: string;
    body: string;
  }

  interface AddReplyPayload {
    id: string;
    body: string;
  }
}
