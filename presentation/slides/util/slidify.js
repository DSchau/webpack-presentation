import React from 'react';
import { Slide } from 'spectacle';

export default function(aSlide, key) {
  const { slide, ...other } = aSlide;
  const props = Object.assign({
    align: 'center center',
    transition: ['slide']
  }, other, { key });
    
  return (
    <Slide { ... props }>
      <aSlide.slide />
    </Slide>
  );
}
