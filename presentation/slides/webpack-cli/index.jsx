import React, { Component } from 'react';
import {
  CodePane,
  Heading
} from 'spectacle';

import preloader from 'spectacle/lib/utils/preloader';

const images = {};

preloader(images);

export const Title = {
  slide() {
    return (
      <div>
        <Heading size={1} caps fit>webpack cli</Heading>
      </div>
    );
  }
};

export const CodeExample = {
  slide() {
    return (
      <div>
        <CodePane lang="bash" textSize={24}>{ require('!!raw!assets/cli-example.txt') }</CodePane>
      </div>
    );
  }
};

export const WebpackDevServer = {
  slide() {
    return (
      <div>
        <Heading size={4} textColor="secondary" caps>webpack dev server</Heading>
      </div>
    );
  }
};
