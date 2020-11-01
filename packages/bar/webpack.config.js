const { getConfig } = require('../../webpack.config.base');

module.exports = getConfig({
  name: 'bar',

  target: 'node',

  entry: './src/index.ts',

  devServer: {
    writeToDisk: true,
    port: 9090,
  },
});
