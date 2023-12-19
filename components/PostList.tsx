'use client';

import { useEffect, useRef } from 'react';
import PostItem from './Post/PostItem';
import { Post } from '@/.contentlayer/generated';

export interface PostListProps {
  posts: Post[];
}

const PostList = ({ posts }: PostListProps) => {
  const postRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fadeIn');
          }
        });
      },
      { threshold: 0.1 }, // 10%가 보일 때 애니메이션 실행
    );

    postRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      postRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [posts]);
  return (
    <div className="flex flex-col gap-8 w-full mr-auto ml-auto py-8 px-4 sm:px-6 lg:ml-3 md:max-w-3xl lg:max-w-4xl lg:px-8 lg:py-24">
      {posts.map((post, index) => (
        <div ref={el => (postRefs.current[index] = el)} key={post._id}>
          <PostItem key={post._id} post={post} />
        </div>
      ))}
    </div>
  );
};

export default PostList;
