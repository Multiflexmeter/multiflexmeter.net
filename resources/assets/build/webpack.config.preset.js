'use strict'; // eslint-disable-line
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = require('./config');

/** Default PostCSS plugins */
let postcssPlugins = [
  require('tailwindcss')(
    path.join(config.paths.assets, 'styles/tailwind.config.js')
  ),
  require('autoprefixer')(),
];

const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  content: [`${config.paths.root}/**/*.php`],

  // This is the function used to extract class names from your templates
  defaultExtractor: (content) => {
    // Capture as liberally as possible, including things like `h-(screen-1.5)`
    const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];

    // Capture classes within other delimiters like .block(class="w-1/2") in Pug
    const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];

    return broadMatches.concat(innerMatches);
  },
});

/** Add purgecss when optimizing */
config.enabled.optimize ? postcssPlugins.push(purgecss) : false;

/** Add cssnano when optimizing */
config.enabled.optimize
  ? postcssPlugins.push(
      require('cssnano')({
        preset: ['default', { discardComments: { removeAll: true } }],
      })
    )
  : false;

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        include: config.paths.assets,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { fallback: 'style' },
          },
          { loader: 'cache' },
          { loader: 'css', options: { sourceMap: false } },
          {
            loader: 'postcss',
            options: {
              parser: config.enabled.optimize
                ? 'postcss-safe-parser'
                : undefined,
              plugins: postcssPlugins,
              sourceMap: false,
            },
          },
          {
            loader: 'resolve-url',
            options: { silent: true, sourceMap: false },
          },
          {
            loader: 'sass',
            options: {
              sourceMap: false,
              sassOptions: { sourceComments: true },
            },
          },
        ],
      },
    ],
  },
};
