import { useQuery } from '@tanstack/react-query';
import { recentPostsAPI } from '../client/recent';

export function useRecentPosts() {
  // Query
  const { data } = useQuery({
    queryKey: ['recents'],
    queryFn: () => recentPostsAPI(),
    enabled: true,
  });

  return {
    posts: data,
  };
}
