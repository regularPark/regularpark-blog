import Image from 'next/image';
import Link from 'next/link';
import { Post } from '@/.contentlayer/generated';

interface PostItemProps {
  post: Post;
}

const PostItem = ({ post }: PostItemProps) => {
  return (
    <Link
      href={post.url}
      className="flex flex-col rounded-lg shadow-md transition-all hover:shadow-[0_0_20px_4px_rgba(0,0,0,0.2)] hover:scale-105 cursor-pointer"
    >
      <div className="flex flex-col">
        {post.thumbnail && (
          <Image
            className="w-full h-40 md:h-60 lg:h-80 object-cover rounded-t-lg"
            src={post.thumbnail}
            width={180}
            height={180}
            alt="profile image"
          />
        )}
        <div className="flex flex-col flex-grow justify-center p-4">
          <h2 className="mb-1 overflow-hidden text-2xl font-bold leading-tight">
            {post.title}
          </h2>
          <p className="w-full text-base text-opacity-80 text-gray-400 overflow-hidden whitespace-nowrap text-ellipsis">
            {post.body.raw.slice(0, 100)}
          </p>
          <div className="flex flex-wrap mt-2 -m-1 gap-2">
            {post.categories.split(',').map(item => (
              <div
                key={item}
                className="tag px-4 w-fit h-fit rounded-2xl text-gray-500 bg-gray-200"
              >
                #{item}
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm font-light text-opacity-70">
            {post.date.slice(0, 10).replaceAll('-', '.')}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PostItem;
