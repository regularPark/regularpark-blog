
import { allPosts } from '@/.contentlayer/generated';
import { MetadataRoute } from 'next';

const URL = 'https://reglog-regularpark.vercel.app/';

const getPostTitleList = () => {
  return allPosts.map(post => post.title);
};

const getDateByTitle = (title: string) => {
  return allPosts.find(post => post.title === title)?.date;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const postList = getPostTitleList().map(title => ({
    title: title,
    date: getDateByTitle(title),
  }));

  const postsRoute = postList.map(({ title, date }) => {
    return {
      url: `${URL}/posts/${title}`,
      lastModified: date,
    };
  });

  const routes = [''].map(route => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...postsRoute];
}
