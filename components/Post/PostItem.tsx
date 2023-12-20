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
      className="post-item flex flex-col rounded-lg shadow-md transition-all cursor-pointer"
    >
      <div className="flex flex-col-reverse md:flex-row">
        <div className="w-full md:w-4/5 flex flex-col flex-grow p-4">
          <h2 className="mb-1 overflow-hidden whitespace-nowrap text-ellipsis text-2xl font-bold leading-tight">
            {post.title}
          </h2>
          <p className="w-full h-8 text-base text-opacity-80 text-gray-400 overflow-hidden whitespace-nowrap text-ellipsis">
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
        {post.thumbnail && (
          <Image
            className="w-full md:w-1/5 object-cover p-2"
            src={post.thumbnail}
            width={180}
            height={180}
            alt={post.title}
          />
        )}
      </div>
    </Link>
  );
};

export default PostItem;
