import React, { Component } from 'react';
import { Appear, BlockQuote, Cite, Heading, Fill, Image, Layout, List, ListItem, Quote } from 'spectacle';

import preloader from 'spectacle/lib/utils/preloader';

const images = {
  competitors: {
    grunt: require('assets/images/grunt-logo.svg'),
    gulp: require('assets/images/gulp.svg'),
    broccoli: require('assets/images/brocolli.png'),
    brunch: require('assets/images/brunch.svg'),
    browserify: require('assets/images/browserify.svg')
  },
  gifs: {
    homer: 'https://thumbs.gfycat.com/SophisticatedBasicKudu-size_restricted.gif',
  }
};

preloader(images);

export const Title = {
  slide() {
    return (
      <div>
        <Heading size={1} fit caps>
          Webpack
        </Heading>
        <Heading size={2} fit caps>
          the good parts*
        </Heading>
        <Heading size={6} textColor="#CCC">
          ... and some other stuff too
        </Heading>
      </div>
    );
  }
};

export const LarkinQuote = {
  bgColor: 'secondary',
  notes: "Sean Larkin is in the hizzy",
  transition: ['zoom'],
  slide() {
    return (
      <div>
        <BlockQuote>
          <Quote>&hellip; I mean, what doesn&#39;t it do?</Quote>
          <Cite>Sean Larkin</Cite>
        </BlockQuote>
      </div>
    );
  }
};

export const Why = {
  slide() {
    return (
      <div>
        <Heading size={1}>Why?</Heading>
      </div>
    );
  }
};

export const DirectoryStructure = {
  code: require('!!raw!assets/directory-structure.txt'),
  ranges: [
    { loc: [0, 31], title: 'Directory structure' },
    { loc: [0, 4], title: 'main/index files' },
    { loc: [4, 19], title: 'application files' },
    { loc: [8, 9], title: 'JS files' },
    { loc: [10, 19] },
    { loc: [7, 8], title: '... and CSS' },
    { loc: [9, 10], title: '... and images' },
    { loc: [19, 22], title: '... and videos' },
    { loc: [22, 26], title: '... and fonts' },
    { loc: [0, 31], title: 'and so on and so forth' }
  ]
};

export const Competitors = {
  bgColor: 'tertiary',
  slide() {
    return (
      <div>
        <Layout>
          {
            Object.keys(images.competitors)
              .map((key, index) => {
                return (
                  <Fill key={index}>
                    <Appear>
                      <Image src={images.competitors[key]} height="200px" />
                    </Appear>
                  </Fill>
                );
              })
          }
        </Layout>
      </div>
    );
  }
};

export const What = {
  slide() {
    return (
      <div>
        <Heading size={1}>What is it?</Heading>
      </div>
    );
  }
};

export const Snippet = {
  code: require('!!raw!assets/code/webpack.config.js'),
  ranges: [
    { loc: [0, 65], title: 'webpack.config.js' },
    { loc: [5, 10], title: 'The entry of a bundle' },
    { loc: [10, 15], title: `A bundle's output` }
  ]
};

export const Homer = {
  bgImage: images.gifs.homer
};
