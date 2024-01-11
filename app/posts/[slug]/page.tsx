import { allPosts } from '@/.contentlayer/generated';
import { notFound } from 'next/navigation';
import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import { useMDXComponent } from 'next-contentlayer/hooks';
import BackButton from '@/components/common/BackButton';
import TOC from '@/components/common/TOC';

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

const mdxComponents: MDXComponents = {
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
};

export default function Page({ params }: { params: { slug: string } }) {
  const post = allPosts.find(post => post._raw.flattenedPath === params.slug);
  if (!post) notFound();

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <>
      <BackButton />
      <section className="flex flex-row h-fit relative justify-center mx-auto">
        <article className="prose w-4/5 mt-8 prose-sm p-1 prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg rounded-xl md:prose lg:prose-lg xl:prose-xl">
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
        <TOC headings={post.headings} params={params} />
      </section>
    </>
  );
}
