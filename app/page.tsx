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

  const filteredPosts = useMemo(() => {
    return allPosts.filter(post => {
      return (
        (category ? post.categories.includes(category) : true) &&
        (searchTerm
          ? post.title.toLowerCase().includes(searchTerm.toLowerCase())
          : true)
      );
    });
  }, [category, searchTerm, allPosts]);

  return (
    <Template>
      <CategoryList
        categoryList={categoryList}
        onSelect={handleCategorySelect}
        selectedCategory={category}
      />
      <div className="lg:w-2/3">
        <SearchBar setSearchTerm={setSearchTerm} />
        {filteredPosts.length > 0 ? (
          <PostList posts={filteredPosts} />
        ) : (
          <div className="w-full">
            <h1 className="text-lg lg:text-2xl mt-10 text-center">
              "{searchTerm}"에 대한 검색 결과가 없습니다.
            </h1>
          </div>
        )}
      </div>
    </Template>
  );
}
