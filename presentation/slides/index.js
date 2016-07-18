import React, { Component } from 'react';
import { Deck, Spectacle } from 'spectacle';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';
import createTheme from 'spectacle/lib/themes/default';

import 'normalize.css';
import 'spectacle/lib/themes/default/index.css';

import slidify from './util/slidify';
import slidifyCode from './util/slidify-code';

import * as Intro from './intro';
import * as Code from './code';

const images = {
};

preloader(images);

const theme = createTheme({
  primary: '#6f96dc'
}, {
  primary: 'Helvetica'
});

export class SlideDeck extends Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck progress="bar" transition={["slide"]} transitionDuration={350}>
          {
            [
              Intro.Title,
              Intro.LarkinQuote,
              Code.WebpackConfig
            ]
              .map((slide, index) => slide && slide.code ? slidifyCode(slide, index) : slidify(slide, index))
          }
        </Deck>
      </Spectacle>
    );
  }
}
