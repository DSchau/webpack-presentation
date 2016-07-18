import React, { Component } from 'react';
import { BlockQuote, Cite, Heading, Quote } from 'spectacle';

export const Title = {
  slide() {
    return (
      <div>
        <Heading size={1} textColor="white" fit>
          Webpack
        </Heading>
        <Heading size={2} textColor="white">
          the good parts*
        </Heading>
        <Heading size={6} textColor="white">
          ... and some other stuff too
        </Heading>
      </div>
    );
  }
}

export const LarkinQuote = {
  bgColor: 'black',
  slide() {
    return (
      <div>
        <BlockQuote>
          <Quote>&hellip; I mean, what doesn't it do?</Quote>
          <Cite>Sean Larkin</Cite>
        </BlockQuote>
      </div>
    );
  }
}
