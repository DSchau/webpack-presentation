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
    const link = (href, text) => <Heading size={5}><Link href={href} textColor="secondary">{text}</Link></Heading>
    return (
      <Layout>
        <Fill>
          { link("https://github.com/DSchau/angular-webpack-simple", "angular-webpack-simple") }
        </Fill>
        <Fill>
          { link("https://github.com/DSchau/angular2-webpack-simple", "angular2-webpack-simple") }
        </Fill>
      </Layout>
    );
  }
};
