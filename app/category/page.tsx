'use client';
import { allPosts } from '@/.contentlayer/generated';
import PostList from '@/components/PostList';
import Template from '@/components/common/Template';
import { useSearchParams } from 'next/navigation';

const CategoryPage = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get('c');

  const filteredPosts = allPosts.filter(post =>
    post.categories.split(',').includes(category as string),
  );

  return (
    <Template>
      <h1>{category}</h1>
      <PostList posts={filteredPosts} />
    </Template>
  );
};

export default CategoryPage;
