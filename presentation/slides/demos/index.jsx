import React, { Component } from 'react';
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Heading,
  Link,
  Layout,
  Fill,
  Quote
} from 'spectacle';

import preloader from 'spectacle/lib/utils/preloader';

const images = {};

preloader(images);

export const Title = {
  slide() {
    return (
      <div>
        <Heading size={1} caps fit>Demos!!111</Heading>
      </div>
    );
  }
};

export const Links = {
  slide() {
    return (
      <Layout>
        <Fill>
          <Heading size={5}>
            <Link href="https://github.com/DSchau/angular-webpack-simple" textColor="secondary">angular-webpack-simple</Link>
          </Heading>
        </Fill>
        <Fill>
          <Heading size={5}>
            <Link href="https://github.com/DSchau/angular2-webpack-simple" textColor="secondary">angular2-webpack-simple</Link>
          </Heading>
        </Fill>
      </Layout>
    );
  }
};

export const BoilerplateQuote = {
  bgColor: 'secondary',
  slide() {
    return (
      <div>
        <BlockQuote>
          <Quote textSize={42}>{ require('!!raw!assets/quotes/gaeron.txt') }</Quote>
          <Cite>gaeron (react-makes-you-sad)</Cite>
        </BlockQuote>
      </div>
    );
  }
};
