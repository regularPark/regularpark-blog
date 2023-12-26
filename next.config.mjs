import createMDX from '@next/mdx';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import { withContentlayer } from 'next-contentlayer';

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkToc, { tight: true, maxDepth: 5 }],
    rehypePlugins: [rehypeSlug],
  },
});

const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // Optionally, add any other Next.js config below
  reactStrictMode: true,
  swcMinify: false, // 이동된 swcMinify 설정
};

// Merge MDX config with Next.js config
export default withContentlayer(withMDX(nextConfig));
