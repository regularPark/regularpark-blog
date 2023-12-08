import PostItem from './Post/PostItem';

export type PostItemType = {
  title: string;
  // categories: string[];
  date: string;
  // description: string;
};

interface PostListProps {
  posts: PostItemType[];
}

const PostList = ({ posts }: PostListProps) => {
  posts.sort((a, b) => (a.date < b.date ? -1 : 1));
  return (
    <div className="grid grid-cols-2 gap-4 mx-auto py-24">
      {posts.map(post => (
        <PostItem post={post} />
      ))}
    </div>
  );
};

export default PostList;
