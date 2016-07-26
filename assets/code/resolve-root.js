const path = require('path');

module.exports = {
  resolve: {
    root: [
      'src',
      'assets'
    ].map((root) => path.resolve(root))
  }
};
