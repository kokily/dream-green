import { useQuery } from '@tanstack/react-query';
import { recentImagesAPI } from '../client/recent';

export function useRecentImages() {
  const { data } = useQuery({
    queryKey: ['recentImages'],
    queryFn: () => recentImagesAPI(),
    enabled: true,
  });

  return {
    data,
  };
}
