import Image from 'next/image';
import { PostItemType } from '../PostList';
import Link from 'next/link';

interface PostItemProps {
  post: PostItemType;
}

const PostItem = ({ post }: PostItemProps) => {
  return (
    <Link
      href={post.url}
      className="flex flex-col rounded-lg shadow-md transition-all hover:shadow-[0_0_20px_4px_rgba(0,0,0,0.2)] cursor-pointer"
    >
      {post.thumbnail && (
        <Image
          className="w-full h-48 rounded-t-lg"
          src={post.thumbnail}
          width={120}
          height={80}
          alt="hi"
        />
      )}
      <div className="flex flex-col flex-grow p-4">
        <p className="text-sm font-light text-opacity-70">
          {post.date.slice(0, 10).replaceAll('-', '.')}
        </p>
        <h2 className="mb-1 overflow-hidden text-lg font-bold leading-tight">
          {post.title}
        </h2>
        <div className="flex flex-wrap mt-2 -m-1">
          {post.categories.split(',').map(item => (
            <div
              key={item}
              className="m-1 px-2 py-1 rounded text-sm font-bold text-white bg-black"
            >
              {item}
            </div>
          ))}
        </div>
        <p className="mt-auto overflow-hidden text-base text-opacity-80">
          {post.summary}
        </p>
      </div>
    </Link>
  );
};

export default PostItem;
