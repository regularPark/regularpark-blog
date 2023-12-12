'use client';
import PostList from '@/components/PostList';
import Template from '@/components/common/Template';
import { Post, allPosts } from '@/.contentlayer/generated';
import CategoryList from '@/components/CategoryList';
import { useEffect, useMemo, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const category = searchParams.get('category');
  const [filteredPost, setFilteredPost] = useState<Post[]>([]);
  allPosts.sort((a, b) => (a.date < b.date ? -1 : 1));

  const categoryList = useMemo(
    () =>
      allPosts.reduce<{ [key: string]: number }>(
        (acc, cur) => {
          cur.categories.split(',').forEach(category => {
            acc[category] = acc[category] ? acc[category] + 1 : 1;
          });
          acc['All']++;

          return acc;
        },
        { All: 0 },
      ),
    [],
  );

  useEffect(() => {
    category && category !== 'All'
      ? setFilteredPost(
          allPosts.filter(post => post.categories.includes(category as string)),
        )
      : setFilteredPost(allPosts);
  }, [category]);

  const handleCategorySelect = (selectedCategory: string) => {
    selectedCategory === 'All'
      ? router.push(pathname)
      : router.push(`${pathname}?category=${selectedCategory}`);
  };

  return (
    <Template>
      <CategoryList
        categoryList={categoryList}
        onSelect={handleCategorySelect}
        selectedCategory={category}
      />
      <PostList posts={filteredPost} />
    </Template>
  );
}
