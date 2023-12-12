import { allPosts } from '@/.contentlayer/generated';
import { notFound } from 'next/navigation';
import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import { useMDXComponent } from 'next-contentlayer/hooks';
import BackButton from '@/components/common/BackButton';

const mdxComponents: MDXComponents = {
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
};

export const generatedStaticParams = async () => {
  allPosts.map(post => ({ slug: post._raw.flattenedPath }));
};

export const generatedMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find(post => post._raw.flattenedPath === params.slug);
  if (!post) notFound();
};

export default function Page({ params }: { params: { slug: string } }) {
  const post = allPosts.find(post => post._raw.flattenedPath === params.slug);
  if (!post) notFound();

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <>
      <BackButton />
      <img
        src={post.thumbnail}
        className="w-screen h-80 object-cover opacity-70 bg-gray-300"
        alt="hi"
      />
      <article className="mx-auto prose">
        <div className="my-8 text-center">
          <time
            dateTime={post.date}
            className="mt-3 mb-1 text-xs text-gray-600"
          >
            {new Intl.DateTimeFormat('ko-KR').format(new Date(post.date))}
          </time>
          <h1 className="text-3xl font-bold">{post.title}</h1>
        </div>
        <MDXContent components={mdxComponents} />
      </article>
    </>
  );
}
