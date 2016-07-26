const path = require('path');

module.exports = {
  resolve: {
    alias: {
      'some-module': path.resolve('./node_modules/some-module/dist/some-module.js')
    }
  }
};