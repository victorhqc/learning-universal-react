const path = require('path');
const merge = require('webpack-merge');
const universalConfig = require('./webpack.universal.js');

const config = {
  // Inform webpack that we're bundling a bundle
  // for NodeJS, rather than for the browser.
  target: 'node',

  // Tell webpack the root file of our server application.
  entry: './src/index.js',

  // Tell webpack where to put the output file that is generated.
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

module.exports = merge(universalConfig, config);
