import React from 'react';
import CodeSlide from 'spectacle-code-slide';

export default function(extendProps, key) {
  if ( !extendProps.code ) {
    extendProps = {
      code: extendProps
    };
  }

  const props = Object.assign({
    code: {},
    lang: 'js',
    ranges: [],
    transition: ['slide'],
  }, extendProps, { key });

  return (
    <CodeSlide { ...props } />
  );
}
