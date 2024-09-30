'use client';

import type { Post } from '@prisma/client';
import type { ChangeEvent, SyntheticEvent } from 'react';
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useInfiniteQuery } from '@tanstack/react-query';
import useLocalStorage from 'use-local-storage';
import { listPostsAPI } from '@/helpers/client/post';
import { useObserver } from '@/helpers/hooks/useObserver';
import { ListPosts } from '@/components/blogs/ListPosts';

export default function BlogPage() {
  const router = useRouter();
  const [scrollY, setScrollY] = useLocalStorage('listPostScroll', 0);

  // State
  const [search, setSearch] = useState('');

  // Data Fetching
  const { data, fetchNextPage, refetch } = useInfiniteQuery({
    initialPageParam: '',
    queryKey: ['posts'],
    queryFn: ({ pageParam }) =>
      listPostsAPI({ cursor: pageParam, title: search }),
    getNextPageParam: (data) =>
      data && data.length === 12 ? data[data.length - 1].id : undefined,
    enabled: true,
  });

  const posts = useMemo(() => {
    if (!data) return;

    return ([] as Array<Post>).concat(...data.pages);
  }, [data]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSearch = async (e: SyntheticEvent) => {
    e.preventDefault();
    await refetch();
  };

  const onReadPost = (id: string) => {
    setScrollY(window.scrollY);
    router.push(`/blog/read/${id}`);
  };

  const onIntersect: IntersectionObserverCallback = ([entry]) => {
    entry.isIntersecting && fetchNextPage();
  };

  const { setTarget } = useObserver({ onIntersect });

  useEffect(() => {
    if (scrollY !== 0) window.scrollTo(0, Number(scrollY));
  }, []);

  return (
    <ListPosts
      posts={posts}
      search={search}
      onChange={onChange}
      onSearch={onSearch}
      onReadPost={onReadPost}
      setTarget={setTarget}
    />
  );
}
