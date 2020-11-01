const { resolve } = require('path');
const { merge } = require('webpack-merge');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const dev = !!process.env.DEV;

const stats = {
  cached: false,
  cachedAssets: false,
  chunks: false,
  chunkModules: false,
  children: false,
  colors: true,
  hash: false,
  modules: false,
  reasons: false,
  timings: true,
  version: false,
};

const getPlugins = () => {
  const plugins = [
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: resolve('tsconfig.json'),
      },
    }),
  ];

  return plugins;
};

const config = {
  mode: dev ? 'development' : 'production',

  devtool: dev ? 'eval-source-map' : false,

  output: {
    filename: `[name].js`,
    path: resolve('build'),
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
    ],
  },

  node: {
    __dirname: false,
    __filename: false,
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },

  stats,

  plugins: getPlugins(),
};

const getConfig = (...cfg) => {
  return merge(config, ...cfg);
};

module.exports = { getConfig, dev };
