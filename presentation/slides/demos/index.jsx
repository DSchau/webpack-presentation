import React, { Component } from 'react';
import {
  Appear,
  CodePane,
  Heading,
  Link,
  Layout,
  Fill
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
