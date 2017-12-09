const path = require('path');
const universal = require('./webpack.universal.js');

module.exports = {
  // Tell webpack the root file of our server application.
  entry: './src/client',

  // Tell webpack where to put the output file that is generated.
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },

  // Universal webpack configuration
  ...universal,
};
