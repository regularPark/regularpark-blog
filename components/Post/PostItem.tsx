import { PostItemType } from '../PostList';

interface PostItemProps {
  post: PostItemType;
}

const PostItem = ({ post }: PostItemProps) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
    </div>
  );
};

export default PostItem;
