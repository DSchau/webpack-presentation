import React, { Component } from 'react';
import {
  Appear,
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
        <Heading size={1} caps fit>webpack 2</Heading>
      </div>
    );
  }
};

export const Blocker = {
  slide() {
    return (
      <div>
        <Heading size={4} textColor="secondary" caps>only blocker is documentation</Heading>
      </div>
    );
  }
};

export const TreeShaking = {
  slide() {
    return (
      <div>
        <Heading size={4} textColor="secondary" caps>Tree shaking</Heading>
      </div>
    );
  }
};

export const TreeShakingExplanation = {
  slide() {
    return (
      <div>
        <CodePane lang="javascript" textSize="20" margin={20}>{ require('!!raw!assets/code/tree-shaking-export.js') }</CodePane>
        <Appear>
          <CodePane lang="javascript" textSize="20" margin={20}>{ require('!!raw!assets/code/tree-shaking-import.js') }</CodePane>
        </Appear>
      </div>
    );
  }
};

export const CodeSplittingSystemJSExample = {
  code: require('!!raw!assets/code/code-splitting-system.js'),
  note: 'This requires a Promise polyfill',
  ranges: [
    { loc: [0, 13], title: 'Code splitting with System.js' },
    { loc: [6, 9], note: 'This requires a Promise polyfill' }
  ]
};

export const WebpackCli = {
  slide() {
    return (
      <div>
        <Heading size={2} caps>webpack-cli</Heading>
      </div>
    );
  }
};

export const WebpackCliCodeExample = {
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

export const CallToAction = {
  slide() {
    return (
      <div>
        <Heading size={2} caps>use webpack 2</Heading>
      </div>
    );
  }
};
