import PostItem from './Post/PostItem';
import { Post } from '@/.contentlayer/generated';

export interface PostListProps {
  posts: Post[];
}

const PostList = ({ posts }: PostListProps) => {
  return (
    <div className="flex flex-col gap-8 w-full ml-3 mr-auto py-12 px-4 sm:px-6 md:max-w-3xl lg:max-w-4xl lg:px-8 lg:py-24">
      {posts.map(post => (
        <PostItem key={post._id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
