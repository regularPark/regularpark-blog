import PostItem from './Post/PostItem';

export type PostItemType = {
  title: string;
  categories: string;
  date: string;
  thumbnail: string;
  summary: string;
  url: string;
};

interface PostListProps {
  posts: PostItemType[];
}

const PostList = ({ posts }: PostListProps) => {
  posts.sort((a, b) => (a.date < b.date ? -1 : 1));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full mx-auto py-12 px-4 sm:px-6 lg:max-w-5xl lg:px-8 lg:py-24">
      {posts.map(post => (
        <PostItem post={post} />
      ))}
    </div>
  );
};

export default PostList;
