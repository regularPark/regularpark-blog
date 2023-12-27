import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import GithubSlugger from 'github-slugger';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: true,
    },
    thumbnail: {
      type: 'string',
      required: false,
    },
    categories: {
      type: 'string',
      required: true,
    },
    summary: {
      type: 'string',
      required: false,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: post => `/posts/${post._raw.flattenedPath}`,
    },
    headings: {
      type: 'json',
      resolve: async (doc: any) => {
        const regXHeader =
          /(?<!```\n)(?<flag>#{2,6})\s+(?<content>.+)(?!\n```)/g;
        const slugger = new GithubSlugger();
        const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(
          ({ groups }: any) => {
            const flag = groups?.flag;
            const content = groups?.content;
            return {
              level:
                flag?.length == 1 ? 'one' : flag?.length == 2 ? 'two' : 'three',
              text: content,
              slug: content ? slugger.slug(content) : undefined,
            };
          },
        );
        return headings;
      },
    },
  },
}));

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [[remarkToc]],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'one-dark-pro',
        },
      ],
    ],
  },
});
