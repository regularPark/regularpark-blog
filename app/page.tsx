import PostList from '@/components/PostList';
import Template from '@/components/common/Template';
import { allPosts } from '@/.contentlayer/generated';

export default function Home() {
  console.log(allPosts);
  return (
    <Template>
      <PostList posts={allPosts} />
    </Template>
  );
}
