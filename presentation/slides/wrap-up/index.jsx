import React, { Component } from 'react';
import {
  Appear,
  CodePane,
  Heading,
  Image,
  Link,
  List,
  ListItem
} from 'spectacle';

import preloader from 'spectacle/lib/utils/preloader';

const images = {
  github: 'http://www.gspd.mobi/img/github-logo.svg'
};

preloader(images);

export const Title = {
  slide() {
    return (
      <div>
        <Heading size={1} caps fit>Questions</Heading>
      </div>
    );
  }
};

export const Links = {
  slide() {
    return (
      <List>
        <ListItem><Link textColor="secondary" href="https://www.youtube.com/watch?v=VkTCL6Nqm6Y">How Instagram uses Webpack</Link></ListItem>
        <ListItem><Link textColor="secondary" href="https://github.com/petehunt/webpack-howto">webpack-how-to</Link></ListItem>
        <ListItem><Link textColor="secondary" href="https://gist.github.com/sokra/27b24881210b56bbaff7">New in Webpack 2</Link></ListItem>
        <ListItem><Link textColor="secondary" href="https://github.com/webpack/docs/wiki/list-of-plugins">List of Plugins</Link></ListItem>
      </List>
    );
  }
};

export const Thanks = {
  slide() {
    return (
      <div>
        <Heading size={4} textColor="secondary" fit>Thanks!</Heading>
        <Heading size={5} textColor="white" margin={30}>Check me out on <Link textColor="secondary" href="http://github.com/dschau"><Image color="white" src={images.github} style={{ position: 'relative', top: 10, left: -4, height: 32, width: 32 }}/>github</Link></Heading>
      </div>
    );
  }
};
