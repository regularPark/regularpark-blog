import { allPosts } from '@/.contentlayer/generated';
import { MetadataRoute } from 'next';

const URL = 'https://reglog.vercel.app';

const getPostTitleList = () => {
  return allPosts.map(post => post.title);
};

const getDateByTitle = (title: string) => {
  return allPosts.find(post => post.title === title)?.date;
};

const getPostUrlByTitle = (title: string) => {
  return allPosts.filter(post => post.title === title)[0].url;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const postList = getPostTitleList().map(title => ({
    title: title,
    date: getDateByTitle(title),
  }));

  const postsRoute = postList.map(({ title, date }) => {
    return {
      url: `${URL}${getPostUrlByTitle(title)}`,
      lastModified: date,
    };
  });

  const routes = [''].map(route => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...postsRoute];
}
