import React, { Component } from 'react';
import { Deck, Spectacle } from 'spectacle';

import createTheme from 'spectacle/lib/themes/default';

import 'normalize.css';
import 'spectacle/lib/themes/default/index.css';

import slidify from './util/slidify';
import slidifyCode from './util/slidify-code';
import { makeSlides } from './util/make-slides';

import * as IntroSlides from './intro/';

const theme = createTheme({
  primary: '#000000',
  secondary: '#62A8FF',
  tertiary: '#EEEEEE',
  quartenary: '#FFFFFF'
});

export class SlideDeck extends Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck progress="bar" transition={["slide", "zoom"]} transitionDuration={350}>
          {
            makeSlides(
              IntroSlides
            )
              .map((slide, index) => slide && slide.code ? slidifyCode(slide, index) : slidify(slide, index))
          }
        </Deck>
      </Spectacle>
    );
  }
}
