'use client';
import PostList from '@/components/PostList';
import Template from '@/components/common/Template';
import { allPosts } from '@/.contentlayer/generated';
import CategoryList from '@/components/CategoryList';
import { useMemo, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import SearchBar from '@/components/common/SearchBar';

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const category = searchParams.get('category');
  const [searchTerm, setSearchTerm] = useState('');

  allPosts.sort((a, b) => (a.date < b.date ? 1 : -1));

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
      <div className="lg:w-2/3">
        <SearchBar setSearchTerm={setSearchTerm} />
        <PostList
          posts={allPosts.filter(post => {
            return (
              (category ? post.categories.includes(category) : true) &&
              (searchTerm
                ? post.title.toLowerCase().includes(searchTerm.toLowerCase())
                : true)
            );
          })}
        />
      </div>
    </Template>
  );
}
