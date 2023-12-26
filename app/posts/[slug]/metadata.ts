import { allPosts } from '@/.contentlayer/generated';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = allPosts.find(post => post._raw.flattenedPath === params.slug);
  return {
    title: post?.title,
  };
}
