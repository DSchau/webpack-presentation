import React, { Component } from 'react';
import {
  Heading
} from 'spectacle';

import preloader from 'spectacle/lib/utils/preloader';

const images = {};

preloader(images);

export const Title = {
  slide() {
    return (
      <div>
        <Heading size={1} caps fit>webpack.config.js</Heading>
      </div>
    );
  }
};

export const Snippet = {
  code: require('!!raw!assets/code/webpack.config.js'),
  ranges: [
    { loc: [0, 65], title: 'webpack.config.js' },
    { loc: [5, 10], title: 'The entry of a bundle' },
    { loc: [10, 15], title: `A bundle's output` },
    { loc: [15, 19], title: 'plugins' },
    { loc: [20, 63], title: 'loaders' }
  ]
};
