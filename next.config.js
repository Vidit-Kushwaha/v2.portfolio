/** @type {import('next').NextConfig } */
 {}
const nextConfig = {
  reactStrictMode: true,
}


const withMDX = require('@zeit/next-mdx')();

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'pdf'],
  webpack(config, options) {
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/files',
            outputPath: 'static/files',
            name: '[name].[ext]',
          },
        },
      ],
    });

    return config;
  },
});

// next.config.js
module.exports = {
  // other config options
  assetPrefix: 'https://cdn.example.com',
};



module.exports = nextConfig
