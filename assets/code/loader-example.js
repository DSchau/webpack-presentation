const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.css$/,
        include: path.join(__dirname, 'src'),
        exclude: [/node_modules/],
        loaders: ['style', 'css']
      }
    ]
  }
};