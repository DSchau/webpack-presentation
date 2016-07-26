require('bootstrap.css');
require('normalize.css');

require('./scss/app.scss');

var img = document.createElement('img');
img.src = require('./some-image.png');

var utils = require('./utils.ts');

utils.doSomething();