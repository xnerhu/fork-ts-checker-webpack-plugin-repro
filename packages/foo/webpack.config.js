const { getConfig } = require('../../webpack.config.base');

module.exports = getConfig({
  name: 'foo',

  target: 'node',

  entry: './src/index.ts',

  output: {
    libraryTarget: 'commonjs2',
  },

  devServer: {
    writeToDisk: true,
    port: 9091,
  },
});
