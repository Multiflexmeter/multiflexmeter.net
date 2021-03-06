const url = require('url');
const path = require('path');
const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const config = require('./config');

const target = process.env.DEVURL || config.devUrl;
const [, host, port] = /(?:https?:\/\/)?([a-z0-9\-_.]+)(?::(\d+))?/gi.exec(
  config.proxyUrl
);

/**
 * We do this to enable injection over SSL.
 */
if (url.parse(target).protocol === 'https:') {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

  config.proxyUrl = config.proxyUrl.replace('http:', 'https:');
}

module.exports = {
  output: {
    pathinfo: true,
    publicPath: config.proxyUrl + config.publicPath,
  },
  devtool: '#cheap-module-source-map',
  stats: false,
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new BrowserSyncPlugin({
      host,
      port,
      proxy: target,
      open: config.open,
      reloadDelay: 500,
      files: config.watch.map((p) => path.join(config.paths.root, p)),
      watch: true,
      watchOptions: {
        cwd: config.paths.root,
      },
    }),
  ],
};
