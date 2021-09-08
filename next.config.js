const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    gfm: true,
    // rehypePlugins: [require('rehype-autolink-headings')],
    // remarkPlugins: [require('remark-prism')],
  },
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
});
