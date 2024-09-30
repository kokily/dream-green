import { ReadPost } from '@/components/blog/ReadPost';
import { getData } from './_getData';

// Metadata
export async function generateMetadata({ params }: { params: { id: any } }) {
  const post = await getData(params.id);

  return {
    title: `${post.title} - (주)꿈에그린환경`,
    description: post.body.substring(0, 120),
  };
}

export default async function ReadPostPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const post = await getData(id);

  return <ReadPost id={id} post={post} />;
}
